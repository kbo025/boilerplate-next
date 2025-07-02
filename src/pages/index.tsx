import LoggedOutLayout from "@/layouts/Out.layout";

export default function Home() {
  return (
    <LoggedOutLayout>
      <h1>Welcome to NTalks</h1>
      <p>This is the homepage for non-logged-in users.</p>
    </LoggedOutLayout>
  );
}
