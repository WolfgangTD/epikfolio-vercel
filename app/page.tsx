"use client";

import Link from 'next/link'
import Head from 'next/head'


import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

const links = [
    { href: '/', label: 'Home'},
    { href: '/catfax', label: 'Cat Facts'},
    { href: '/elgatoclicker', label: 'Elgato Clicker'},
    { href: '/blog', label: 'Blog'},
]

export default function Home() {

  return(
  <>
  <nav>
  <Menu>
        <Menu.Button className="list-none m-0 p-0 overflow-hidden block text-green-400 px-10 py-5 text-3xl hover:bg-slate-400">Menu</Menu.Button>
        <Transition
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
        >
        <Menu.Items>
        {links.map((link) => (
            /* Use the `active` state to conditionally style the active item. */
            <Menu.Item key={link.href} as={Fragment}>
                {({ active }) => (
                <a
                    href={link.href}
                    className="block text-green-400 px-10 py-5 text-2xl hover:bg-slate-400"
                >
                    {link.label}
                </a>
                )}
            
            </Menu.Item>
            ))}
        
        </Menu.Items>
        </Transition>
      </Menu>
  </nav>
  <div>
    <div>
      <Head>
        <link rel="shortcut icon" href="../cool-favicon64x64.ico" />
        <title>Wolf's Portfolio</title>
      </Head>
      <div className='pt-10'>
      <h1 className="text-center text-3xl underline text-white">
        Welcome to the epik portfolio made by Wolfgang
      </h1>
      </div>
      <br></br>
      <br></br>
      <p className='text-center text-9xl text-green-300' >hush child</p>
      <br></br>
      <br></br>
      <div className='text-white'>
        <p className='text-center text-xl'>
          Things I wanna add to the website
        </p>
          <br></br>
          <ul className='list-disc list-inside'>
            <li className='float-left px-28 pb-5'>I would like to add a working database using prisma where users can login</li>
            <li className='float-left px-28 pb-5'>Learn to call an api that shows randomly generated pictures of cats</li>
            <li className='float-left px-28 pb-5'>Add in a page that will be like a group chat for users</li>
            <li className='float-left px-28 pb-5'>The ability to create a forum post for users</li>
            <li className='float-left px-28 pb-5'>A page where you will be able to talk to chatgpt and ask it for words of encourgement</li>
            <li className='float-left px-28 pb-5'>
              A page that will act like <Link href='/pomofocusredir' target='_blank'><span className='underline font-bold hover:text-green-300'>pomofocus.io</span></Link></li>
          </ul>
      </div>
    </div>
  </div>
  </>
  )
}