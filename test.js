const { Client } = require('pg');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

// Environment variables for database connections
const directDbUrl = process.env.DIRECT_DATABASE_URL;
const shadowDbUrl = process.env.SHADOW_DATABASE_URL;
const accelerateDbUrl = process.env.DATABASE_URL;

// Function to check PostgreSQL database connection and permissions
async function checkPostgresDatabase(url, name) {
  const client = new Client({
    connectionString: url,
  });

  try {
    await client.connect();
    console.log(`Connected to ${name} database successfully.`);

    const res = await client.query('SELECT current_user, current_database(), current_schema();');
    console.log(`${name} database details:`, res.rows[0]);

    const extensionCheck = await client.query(
      "SELECT extname, nspname FROM pg_extension JOIN pg_namespace ON pg_extension.extnamespace = pg_namespace.oid;"
    );
    console.log(`${name} database extensions:`, extensionCheck.rows);

    const permissionCheck = await client.query(
      "SELECT grantee, table_catalog, table_schema, privilege_type FROM information_schema.role_table_grants WHERE grantee = current_user;"
    );
    console.log(`${name} database permissions:`, permissionCheck.rows);
  } catch (err) {
    console.error(`Error connecting to ${name} database:`, err.message);
  } finally {
    await client.end();
  }
}

// Function to check Prisma Accelerate database connection using Prisma Client
async function checkAccelerateDatabase(url) {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: url,
      },
    },
  });

  try {
    await prisma.$connect();
    console.log('Connected to Accelerate database successfully.');

    // Perform a simple query to check the connection
    const user = await prisma.$queryRaw`SELECT current_user, current_database()`;
    console.log('Accelerate database details:', user);
  } catch (err) {
    console.error('Error connecting to Accelerate database:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

// Check connections and permissions for each database
async function checkAllDatabases() {
  console.log('Checking Direct Database...');
  await checkPostgresDatabase(directDbUrl, 'Direct');

  console.log('Checking Shadow Database...');
  await checkPostgresDatabase(shadowDbUrl, 'Shadow');

  console.log('Checking Accelerate Database...');
  await checkAccelerateDatabase(accelerateDbUrl);
}

checkAllDatabases();
