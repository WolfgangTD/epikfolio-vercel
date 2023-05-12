import React from 'react'
import { useRouter } from 'next/router'
import Head from "next/head"
import Link from "next/link";

export default function Blog() {
    let router = useRouter();
    function nextClick() {
        router.push('/blog/blog2')
    }

    function previousClick() {
        router.push('/blog/blog1')
    }

    return (
        <>
            <div className='text-center'>
                
                <Head><title>Blog</title></Head>
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
                <body>
                    <br></br>
                        <h1 className='text-white text-3xl underline'>
                            Dev diary 2
                        </h1>
                        <p className="text-white">
                            13/05/2002
                        </p>
                    <br></br>
                </body>
                <footer>
                    <ul className='list-none m-0 p-0 overflow-hidden bg-slate-800'>
                        <button className='float-left px-20 py-10 block text-green-400 text-3xl hover:bg-slate-400 bg-slate-800' onClick={previousClick}>Previous page</button>
                        <button className='float-right px-20 py-10 block text-green-400 text-3xl hover:bg-slate-400 bg-slate-800' onClick={nextClick}>Next page</button>
                    </ul>
                </footer>
            </div>
        </>
    )
}