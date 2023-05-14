import React from 'react'
import Head from "next/head"
import Link from "next/link"

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
                        <br></br>
                        <br></br>
                        Never mind I found out how to do it. The code that has been written so far is as follows: 
                    </p>
                    <br></br>
                    <br></br>
                    </div>
                    <pre className='px-10'><code className='text-white'>
                    #include &lt;SDL2/SDL.h&gt;<br />
                    #include &lt;iostream&gt;<br />
                    #include &lt;string&gt;<br />
                    #include &lt;cmath&gt;<br />
                    <br />
                    enum State &#123; idle, up, down, left, right &#125;;<br />
                    <br />
                    class Snake &#123;<br />
                    public:<br />
                        int posx;<br />
                        int posy;<br />
                        State state;<br />
                        const int speed = 1;<br />
                    &#125;;<br />
                    <br />
                    class Food &#123;<br />
                    public:<br />
                    int posx;<br />
                    int posy; <br />
                    &#125;;<br />
                    <br />
                    <br />
                    <br />
                    void DrawSnake(int x, int y, SDL_Renderer *renderer)<br />
                    &#123;<br />
                        SDL_Rect drawSnake;<br />
                        drawSnake.x = x;<br />
                        drawSnake.y = y;<br />
                        drawSnake.w = 20;<br />
                        drawSnake.h = 20;<br />
                       <br />
                        SDL_SetRenderDrawColor(renderer, 0, 255, 0, 255);<br />
                        SDL_RenderFillRect(renderer, &amp;drawSnake);<br />
                    &#125;<br />
                    <br />
                    void DrawFood(int x, int y, SDL_Renderer *renderer)<br />
                    &#123;<br />
                        SDL_Rect drawFood;<br />
                        drawFood.x = x;<br />
                        drawFood.y = y;<br />
                        drawFood.w = 10;<br />
                        drawFood.h = 10;<br />
                        SDL_SetRenderDrawColor(renderer, 255, 0, 0, 255);<br />
                        SDL_RenderFillRect(renderer, &amp;drawFood);<br />
                    &#125;<br />
<br />
                    int main(int argc, char** argv)<br />
                    &#123;<br />
                        SDL_Init(SDL_INIT_EVERYTHING);<br />
<br />
                        SDL_Window *window = SDL_CreateWindow(&quot;game&quot;, SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, 1280, 720, SDL_WINDOW_SHOWN);<br />
                        SDL_Renderer *renderer = SDL_CreateRenderer(window, -1, SDL_RENDERER_PRESENTVSYNC | SDL_RENDERER_ACCELERATED);<br />
                    <br />
                        Snake snake;<br />
                        snake.posx = 640;<br />
                        snake.posy = 360;<br />
                        snake.state = idle;<br />
<br />
                        Food food;<br />
                        food.posx = 400;<br />
                        food.posy = 200;<br />
                        <br />
                        bool isRunning = true;<br />
                        SDL_Event event;<br />
<br />
                        while ((isRunning))<br />
                        &#123;<br />
<br />
                            SDL_RenderClear(renderer);<br />
<br />
                            while (SDL_PollEvent(&amp;event))<br />
                            &#123;<br />
                                switch (event.type)<br />
                                &#123;<br />
                                case SDL_KEYDOWN:<br />
                                    switch (event.key.keysym.sym)<br />
                                    &#123;<br />
                                    case SDLK_ESCAPE:<br />
                                        isRunning = false;<br />
                                        break;<br />
                                    case SDL_QUIT:<br />
                                        isRunning = false;<br />
                                        break;<br />
                                    case SDLK_DOWN:<br />
                                        snake.state = down;<br />
                                        break;<br />
                                    case SDLK_UP:<br />
                                        snake.state = up;<br />
                                        break;<br />
                                    case SDLK_LEFT:<br />
                                        snake.state = left;<br />
                                        break;<br />
                                    case SDLK_RIGHT:<br />
                                        snake.state = right;<br />
                                        break;<br />
                                    default:<br />
                                        break;<br />
                                    &#125;<br />
                                    break;<br />
                                &#125;<br />
                            &#125;<br />
<br />
                            switch (snake.state)<br />
                            &#123;<br />
                                case up:<br />
                                snake.posy -= snake.speed;<br />
                                break;<br />
<br />
                                case down:<br />
                                snake.posy += snake.speed;<br />
                                break;<br />
<br />
                                case left:<br />
                                snake.posx -= snake.speed;<br />
                                break;<br />
<br />
                                case right:<br />
                                snake.posx += snake.speed;<br />
                                break;<br />
<br />
                                case idle:<br />
                                break;<br />
                            &#125;<br />
<br />
                            DrawSnake(snake.posx, snake.posy, renderer);<br />
<br />
                            DrawFood(food.posx, food.posy, renderer);<br />
<br />
                            SDL_SetRenderDrawColor(renderer, 0, 0, 0, 0);<br />
                            SDL_RenderPresent(renderer);<br />
<br />
                        &#125;<br />
<br />
                        SDL_DestroyRenderer(renderer);<br />
                        SDL_DestroyWindow(window);<br />
                        SDL_Quit();<br />
<br />
                        return 0;<br />
                    &#125;<br />
                    </code></pre>
                    <br></br>
                    <br></br>
                    <div className='text-center'>
                    <p className='text-white px-10'>
                        As you can see the code so far is pretty simple, mainly sorting out a gameloop, creating a window and 
                        a renderer as well as defining the classes for the snake and the food that will be spawned in using the relative positional properties stored in the classes.
                        There is also a simple list of controls using the arrow keys that allow the player to move the snake around. 
                        <br></br>
                        <br></br>
                        All in all the code is setup to be completed relatively soon. As all that is needed right now is setting up the different game states, i.e. start screen, end screen.
                        adding in a simple scoring system, collision checking, a way so that the snake grows in length based off of the amount of food eaten, a way to randomly determine the palcement
                        of the food, sound effects and music, as well as a simple high score tracker.
                        <br></br>
                        <br></br>
                        I am pretty confident that the code will be fully functional within the next week.

                    </p>
                    </div>
                    <br></br>
                    <br></br>
                <footer>
                    <ul className='list-none m-0 p-0 overflow-hidden bg-slate-800'>
                    <button className='float-left px-20 py-10 block text-green-400 text-3xl hover:bg-slate-400 bg-slate-800'><Link href='/blog'>Previous page</Link></button>
                        <button className='float-right px-20 py-10 block text-green-400 text-3xl hover:bg-slate-400 bg-slate-800'><Link href='/blog/blog2'>Next page</Link></button>
                    </ul>
                </footer>
        </>
    )
}