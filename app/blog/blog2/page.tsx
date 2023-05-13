import React from 'react'
import Head from "next/head"
import Link from "next/link";
import './prism.js'

export default function Blog() {
    return (
        <>
        <div className='text-center'>
                <Head>
                    <title>Blog</title>
                </Head>
                    <br></br>
                    <h1 className='text-white text-3xl underline'>
                        Dev diary 2
                    </h1>
                    <p className="text-white">
                        14/05/2023
                    </p>
                    <br></br>
                    <p className="text-white px-10">
                        I have made tons of progress especially when regarding the check list in the first
                        blog post. Lets go through the list of achievments:
                    </p>
                        <br></br>
                        <br></br>
                        <ul className='list-inside list-decimal text-left px-10 text-white'>
                            <li className='py-3'>Set up the development environment by installing SDL2 and a C++ compiler.</li>
                            <li className='py-3'>Create a new C++ project and include the SDL2 header files.</li>
                            <li className='py-3'>Create a window using the SDL_CreateWindow function.</li>
                            <li className='py-3'>Create a renderer using the SDL_CreateRenderer function.</li>
                            <li className='py-3'>Set the renderer's draw color to black using the SDL_SetRenderDrawColor function.</li>
                            <li className='py-3'>Create a game loop that runs until the player loses or quits the game.</li>
                            <li className='py-3'>Create a Snake class that stores the snake's position and direction.</li>
                            <li className='py-3'>Create a Food class that stores the food's position.</li>
                            <li className='py-3'>Draw the snake and the food using SDL_RenderFillRect.</li>
                            <li className='py-3'>Update the snake's position based on the direction the player is pressing.</li>
                            <li className='py-3'>Handle player input by checking for key events using SDL_PollEvent.</li>
                            <li className='py-3'>Update the screen by calling SDL_RenderPresent.</li>
                            <li className='py-3'>Use SDL_Delay to limit the game's frame rate to a reasonable value.</li>
                        </ul>
                    <br></br>
                    <p className="text-white px-10">
                        I will link in all of the code updates at a later date, however this means that all that is left is to:
                    </p>
                    <br></br>
                    <ul className='list-inside list-decimal text-left px-10 text-white'>
                        <li className='py-3'>Check if the snake collides with the food and update the score.</li>
                        <li className='py-3'>Check if the snake collides with the walls or itself and end the game if so.</li>
                        <li className='py-3'>Add sound effects and music using SDL_mixer if desired.</li>
                    </ul>
                    <br></br>
                    <p className="text-white px-10">
                        Due to this the game should be done fairly soon. Also I think I'll add in a way to view code with proper syntaxing
                        on the website itself for ease of use.
                    </p>
                    <br></br>
                <footer>
                    <ul className='list-none m-0 p-0 overflow-hidden bg-slate-800'>
                    <button className='float-left px-20 py-10 block text-green-400 text-3xl hover:bg-slate-400 bg-slate-800'><Link href='/blog'>Previous page</Link></button>
                        <button className='float-right px-20 py-10 block text-green-400 text-3xl hover:bg-slate-400 bg-slate-800'><Link href='/blog/blog2'>Next page</Link></button>
                    </ul>
                </footer>
            </div>
        </>
    )
}