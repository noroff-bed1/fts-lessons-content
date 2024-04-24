import React from 'react';
import Link from 'next/link';
import MainNav from './MainNav';

const PageHeader = () => {
  return (
    <header className="container h-full mx-auto flex justify-between items-center p-4">
      <div>
        <Link href="/">Logo</Link>
      </div>
      <MainNav />
    </header>
  );
};

export default PageHeader;
