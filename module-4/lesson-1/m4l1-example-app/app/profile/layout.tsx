// Layout for the Profile route
export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header>Nested header from the app/profile</header>
      {children}
      <footer>Nested footer from the app/profile</footer>
    </div>
  );
}
