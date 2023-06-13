"use client";

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

const links = [
    { href: '/', label: 'Home'},
    { href: '/catfax', label: 'Cat Facts'},
    { href: '/elgatoclicker', label: 'Elgato Clicker'},
    { href: '/blog', label: 'Blog'},
]

export default function NavBar() {
	return (
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
    </>
	);
}