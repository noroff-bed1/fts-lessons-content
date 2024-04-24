'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MainNav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <Link
        href="/register"
        passHref
        className={`hover:text-background px-2 transition duration-300 ${
          pathname === '/register' ? 'underline text-background-dark' : ''
        }`}
      >
        Register
      </Link>
      <Link
        href="/login"
        passHref
        className={`hover:text-background px-2 transition duration-300 ${
          pathname === '/login' ? 'underline text-background-dark' : ''
        }`}
      >
        Login
      </Link>
      <Link
        href="/posts"
        passHref
        className={`hover:text-background px-2 transition duration-300 ${
          pathname === '/posts' ? 'underline text-background-dark' : ''
        }`}
      >
        Posts
      </Link>
    </nav>
  );
};

export default MainNav;
