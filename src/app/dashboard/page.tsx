import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/authOptions'; // Adjust the import path as needed
import { NavBar } from '@/components/Navbar';
import { DashboardUserFeed } from './dashboard-user-feed';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/signin'); // Ensure it redirects to the correct sign-in page
  }

  return (
    <main className="max-w-[1400px] mx-auto space-y-5">
      <NavBar />
      <DashboardUserFeed />
    </main>
  );
}
