import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

// Define User interface
interface User {
  id: number;
  email: string;
  password: string;
  name: string;
}

// Mock data source - replace this with your actual data source logic
let mockUsers: User[] = [];

export async function POST(req: NextRequest) {
  const { email, password, name } = await req.json();

  if (!email || !password || !name) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  try {
    // Check if user already exists in the mock data source
    const existingUser = mockUsers.find(user => user.email === email);

    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create new user and add to the mock data source
    const user: User = { id: mockUsers.length + 1, email, password: hashedPassword, name };
    mockUsers.push(user);

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}
