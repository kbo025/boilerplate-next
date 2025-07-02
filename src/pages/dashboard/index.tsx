import LoggedInLayout from "@/layouts/In.layout";


export default function Dashboard() {
  return (
    <LoggedInLayout>
      <h1>Dashboard</h1>
      <p>Welcome back, user!</p>
    </LoggedInLayout>
  );
}