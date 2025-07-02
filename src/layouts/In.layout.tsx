import React from "react";

export default function LoggedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <nav>
          {/* Menú para usuarios logados */}
          <p>Logged In Navigation</p>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}