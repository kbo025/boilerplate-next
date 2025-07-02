import React from "react";

export default function LoggedOutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <nav>
          {/* Menú para usuarios no logados */}
          <p>Logged Out Navigation</p>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}