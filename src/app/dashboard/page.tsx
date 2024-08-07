import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import { NavBar } from "@/components/Navbar";
import { DashboardUserFeed } from "./dashboard-user-feed";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth");
  }

  return (
    <main className="max-w-[1400px] mx-auto space-y-5">
      <NavBar />
      <DashboardUserFeed />
    </main>
  );
}
