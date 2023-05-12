import Head from "next/head"
import Link from "next/link";


export default function CatFax() {
	return (
    <>
		<div className='text-center'>

		<Head>
        <title>Cat Facts</title>
      	</Head>

			<main>
			<nav>
				<ul className='list-none m-0 p-0 overflow-hidden bg-slate-800'>
				<li className='float-left'><Link href='/' className='block text-green-400 px-10 py-5 text-3xl hover:bg-slate-400'>Home</Link></li>
				<li className='float-left'><Link href='/catfax' className='block text-green-400 px-10 py-5 text-3xl hover:bg-slate-400'>Cat Facts</Link></li>
				<li className='float-left'><Link href='/elgatoclicker' className='block text-green-400 px-10 py-5 text-3xl hover:bg-slate-400'>Elgato Clicker</Link></li>
				<li className='float-left'><Link href='/blog/blog1' className='block text-green-400 px-10 py-5 text-3xl hover:bg-slate-400'>Blog</Link></li>
				</ul>
			</nav>
			</main>
		</div>
    </>
	);
}