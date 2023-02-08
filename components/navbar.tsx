import Link from 'next/link';

export const Navbar = () => {
  return (
    <>
      <nav className='flex items-center flex-wrap bg-green-400 p-3 '>
        <Link href='/index'>Home</Link>
      </nav>
    </>
  );
};