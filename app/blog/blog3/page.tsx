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
                        Dev diary 3
                    </h1>
                    <p className="text-white">
                        18/05/2023
                    </p>
                    <br></br>
                    <p className="text-white px-10">
                        So all in all I attempted to do the collision detection and taill adding system, this kinda led to absolute
                        garbage spaghetti code from just trying a bunch of different things. I think im gonna have to go back to the previous
                        version of the code and start again to try and get the tail updating functionality working properly. <br /> 
                        This code basically ended up with having a really stiff tail that looked more like a dead snake thats gone through
                        rigermortus rather than having a nice flowing motion. However, through all of this a proper collision system was found so I can check that off
                    </p>
                        <br></br>
                        
                    <br></br>
                    <ul className='list-inside list-decimal text-left px-10 text-white'>
                        <li className='py-3'>Check if the snake collides with the food and update the score.</li>
                        <li className='py-3'>Check if the snake collides with the walls or itself and end the game if so.</li>
                    </ul>
                    <br></br>
                    <p className="text-white px-10">
                        the above list is basically what I've done since last time which is not too shabby.
                    </p>
                    <br></br>
                    <br></br>
                    </div>
                    <pre className='px-10'><code className='text-white'>
                    #include &lt;SDL2/SDL.h&gt;<br />
#include &lt;iostream&gt;<br />
#include &lt;string&gt;<br />
#include &lt;cmath&gt;<br />
#include &lt;deque&gt;<br />
<br />
enum State &#123; idle, up, down, left, right &#125;;;<br />
<br />
const int GAME_WINDOW_HEIGHT = 720;<br />
const int GAME_WINDOW_WIDTH = 1280;<br />
<br />
const int FRAME_RATE = 60; // Desired frame rate (frames per second)<br />
const int FRAME_DELAY = 1000 / FRAME_RATE; // Delay between frames (in milliseconds)<br />
<br />
int points;<br />
<br />
class Snake &#123;<br />
public:<br />
 int posx;<br />
 int posy;<br />
 static const int snake_width = 20;<br />
 static const int snake_height = 20;<br />
 State state;<br />
 int speed;<br />
 int size;<br />
 std::deque&lt;SDL_Rect&gt; tail;<br />
<br />
 Snake() &#123;<br />
 posx = GAME_WINDOW_WIDTH / 2;<br />
 posy = GAME_WINDOW_HEIGHT / 2;<br />
 state = idle;<br />
 size = 1;<br />
 speed = 5;<br />
 &#125;<br />
<br />
 SDL_Rect getRect() const &#123;<br />
 SDL_Rect rect;<br />
 rect.x = posx;<br />
 rect.y = posy;<br />
 rect.w = snake_width;<br />
 rect.h = snake_height;<br />
 return rect;<br />
 &#125;<br />
<br />
 void move()<br />
 &#123;<br />
 int prevX = posx;<br />
 int prevY = posy;<br />
<br />
 switch (state)<br />
 &#123;<br />
 case up:<br />
 posy -= speed;<br />
 break;<br />
 case down:<br />
 posy += speed;<br />
 break;<br />
 case left:<br />
 posx -= speed;<br />
 break;<br />
 case right:<br />
 posx += speed;<br />
 break;<br />
 case idle:<br />
 break;<br />
 &#125;<br />
<br />
 if (!tail.empty())<br />
 &#123;<br />
 int tailSize = tail.size();<br />
 int tailMoveDistance = speed;<br />
<br />
 // Update the position of the first tail segment based on the direction and speed of the head<br />
 if (tailSize &gt;= 1)<br />
 &#123;<br />
 int tailPrevX = prevX;<br />
 int tailPrevY = prevY;<br />
<br />
 switch (state)<br />
 &#123;<br />
 case up:<br />
 tailPrevY += tailMoveDistance;<br />
 break;<br />
 case down:<br />
 tailPrevY -= tailMoveDistance;<br />
 break;<br />
 case left:<br />
 tailPrevX += tailMoveDistance;<br />
 break;<br />
 case right:<br />
 tailPrevX -= tailMoveDistance;<br />
 break;<br />
 case idle:<br />
 break;<br />
 &#125;<br />
<br />
 tail[0].x = tailPrevX;<br />
 tail[0].y = tailPrevY;<br />
 &#125;<br />
<br />
 // Update the positions of the rest of the tail segments<br />
 for (int i = 1; i &lt; tailSize; ++i)  &#123;<br />
 int tailPrevX = tail[i - 1].x;<br />
 int tailPrevY = tail[i - 1].y;<br />
 int tailCurrX = tail[i].x;<br />
 int tailCurrY = tail[i].y;<br />
<br />
 if (tailCurrX &lt; tailPrevX) &#123;<br />
 tailCurrX = tailPrevX + tailMoveDistance;<br />
 &#125; else if (tailCurrX &gt; tailPrevX) &#123;<br />
 tailCurrX = tailPrevX - tailMoveDistance;<br />
 &#125;<br />
<br />
 if (tailCurrY &lt; tailPrevY) &#123;<br />
 tailCurrY = tailPrevY + tailMoveDistance;<br />
 &#125; else if (tailCurrY &gt; tailPrevY) &#123;<br />
 tailCurrY = tailPrevY - tailMoveDistance;<br />
 &#125;<br />
<br />
 tail[i].x = tailCurrX;<br />
 tail[i].y = tailCurrY;<br />
 &#125;<br />
 &#125;<br />
 &#125;<br />
<br />
 void growTail() &#123;<br />
 SDL_Rect tailSegment;<br />
 tailSegment.w = snake_width;<br />
 tailSegment.h = snake_height;<br />
<br />
 if (tail.empty()) &#123;<br />
 // Position the first tail segment behind the head based on the current direction<br />
 switch (state) &#123;<br />
 case up:<br />
 tailSegment.x = posx;<br />
 tailSegment.y = posy + snake_height;<br />
 break;<br />
 case down:<br />
 tailSegment.x = posx;<br />
 tailSegment.y = posy - snake_height;<br />
 break;<br />
 case left:<br />
 tailSegment.x = posx + snake_width;<br />
 tailSegment.y = posy;<br />
 break;<br />
 case right:<br />
 tailSegment.x = posx - snake_width;<br />
 tailSegment.y = posy;<br />
 break;<br />
 default:<br />
 break;<br />
 &#125;<br />
 &#125; else &#123;<br />
 const SDL_Rect&amp; lastSegment = tail.back();<br />
 tailSegment.x = lastSegment.x;<br />
 tailSegment.y = lastSegment.y;<br />
 &#125;<br />
<br />
 tail.push_back(tailSegment);<br />
 &#125;<br />
 &#125;;<br />
<br />
class Food &#123;<br />
public:<br />
 int posx;<br />
 int posy;<br />
 static const int food_width = 10;<br />
 static const int food_height = 10;<br />
<br />
 Food() &#123;<br />
 posx = (food_width/2) + (rand() % (GAME_WINDOW_WIDTH - food_width*2));<br />
 posy = (food_height/2) + (rand() % (GAME_WINDOW_HEIGHT - food_height*2));<br />
 &#125;<br />
<br />
 SDL_Rect getRect() const &#123;<br />
 SDL_Rect rect;<br />
 rect.x = posx;<br />
 rect.y = posy;<br />
 rect.w = food_width;<br />
 rect.h = food_height;<br />
 return rect;<br />
 &#125;<br />
 &#125;;<br />
<br />
bool isOutOfBounds(const SDL_Rect&amp; rect) &#123;<br />
 return (rect.x &lt; 0 || rect.x + rect.w &gt; GAME_WINDOW_WIDTH ||<br />
 rect.y &lt; 0 || rect.y + rect.h &gt; GAME_WINDOW_HEIGHT);<br />
 &#125;<br />
<br />
bool checkCollision(const SDL_Rect&amp; rect1, const SDL_Rect&amp; rect2) &#123;<br />
 return (rect1.x &lt; rect2.x + rect2.w &amp;&amp;<br />
 rect1.x + rect1.w &gt; rect2.x &amp;&amp;<br />
 rect1.y &lt; rect2.y + rect2.h &amp;&amp;<br />
 rect1.y + rect1.h &gt; rect2.y);<br />
 &#125;<br />
<br />
bool checkCollisionWithTail(const SDL_Rect&amp; headRect, const std::deque&lt;SDL_Rect&gt;&amp; tail)<br />
&amp;#123;<br />
 // Exclude the tail segment that is directly behind the head<br />
 for (size_t i = 4; i &lt; tail.size(); ++i)<br />
 &#125;<br />
 if (checkCollision(headRect, tail[i]))<br />
 &#125;<br />
 return true;<br />
 &#125;<br />
 &#125;<br />
 return false;<br />
 &#125;<br />
<br />
void DrawSnake(Snake&amp; snake, SDL_Renderer* renderer) &#123;<br />
 // Draw snake tail<br />
 for (const auto&amp; tailSegment : snake.tail) &#123;<br />
 SDL_SetRenderDrawColor(renderer, 0, 255, 0, 255);<br />
 SDL_RenderFillRect(renderer, &amp;tailSegment);<br />
 &#125;<br />
<br />
 // Draw snake head<br />
 SDL_Rect drawSnake;<br />
 drawSnake.x = snake.posx;<br />
 drawSnake.y = snake.posy;<br />
 drawSnake.w = snake.snake_width;<br />
 drawSnake.h = snake.snake_height;<br />
 SDL_SetRenderDrawColor(renderer, 0, 255, 0, 255);<br />
 SDL_RenderFillRect(renderer, &amp;drawSnake);<br />
<br />
 // Update tail positions<br />
 if (!snake.tail.empty()) &#123;<br />
 // Move the last tail segment to the previous position of the head<br />
 snake.tail.back().x = snake.posx;<br />
 snake.tail.back().y = snake.posy;<br />
<br />
 // Shift the other tail segments forward<br />
 for (int i = static_cast&lt;int&gt;(snake.tail.size()) - 2; i &gt;= 0; --i) &#123;<br />
 snake.tail.at(i).x = snake.tail.at(i + 1).x;<br />
 snake.tail.at(i).y = snake.tail.at(i + 1).y;<br />
 &#125;<br />
 &#125;<br />
 &#125;<br />
<br />
void DrawFood(int x, int y, int w, int h, SDL_Renderer* renderer)<br />
&amp;#123;<br />
 SDL_Rect drawFood;<br />
 drawFood.x = x;<br />
 drawFood.y = y;<br />
 drawFood.w = w;<br />
 drawFood.h = h;<br />
 SDL_SetRenderDrawColor(renderer, 255, 0, 0, 255);<br />
 SDL_RenderFillRect(renderer, &amp;drawFood);<br />
 &#125;<br />
<br />
int main(int argc, char** argv)<br />
&amp;#123;<br />
 srand((unsigned)time(NULL));<br />
<br />
 SDL_Init(SDL_INIT_EVERYTHING);<br />
<br />
 SDL_Window* window = SDL_CreateWindow(&quot;game&quot;, SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, GAME_WINDOW_WIDTH, GAME_WINDOW_HEIGHT, SDL_WINDOW_SHOWN);<br />
 SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, SDL_RENDERER_PRESENTVSYNC | SDL_RENDERER_ACCELERATED);<br />
 points = 0;<br />
<br />
 Snake snake;<br />
 Food food;<br />
<br />
 bool isRunning = true;<br />
 SDL_Event event;<br />
<br />
 Uint32 frameStart; // Start time of the current frame<br />
 int frameTime; // Time taken to process the current frame<br />
 Uint32 lastSegmentUpdate = 0;<br />
 int tailUpdateDelay = 100; // Delay between tail segment updates (in milliseconds)<br />
<br />
 while ((isRunning))<br />
 &#123;<br />
<br />
 frameStart = SDL_GetTicks();<br />
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
 if (snake.state != up) // Avoid reversing direction<br />
 snake.state = down;<br />
 break;<br />
 case SDLK_UP:<br />
 if (snake.state != down)<br />
 snake.state = up;<br />
 break;<br />
 case SDLK_LEFT:<br />
 if (snake.state != right)<br />
 snake.state = left;<br />
 break;<br />
 case SDLK_RIGHT:<br />
 if (snake.state != left)<br />
 snake.state = right;<br />
 break;<br />
 default:<br />
 break;<br />
 &#125;<br />
 break;<br />
 &#125;<br />
 &#125;;<br />
<br />
 snake.move();<br />
<br />
 SDL_Rect snakeRect = snake.getRect();<br />
 for (const auto&amp; tailSegment : snake.tail)<br />
 &#123;<br />
 if (checkCollisionWithTail(snakeRect, snake.tail))<br />
 &#123;<br />
 isRunning = false; // Snake collided with its own tail, end the game<br />
 break;<br />
 &#125;<br />
 &#125;<br />
 SDL_Rect foodRect = food.getRect();<br />
<br />
 if (checkCollision(snakeRect, foodRect)) &#123;<br />
 food.posx = (food.food_width/2) + (rand() % (GAME_WINDOW_WIDTH - food.food_width*2));<br />
 food.posy = (food.food_height/2) + (rand() % (GAME_WINDOW_HEIGHT - food.food_height*2));<br />
 points += 1;<br />
 if (points == 5) &#123;<br />
 snake.size += 1;<br />
 snake.speed += 1;<br />
 points = 0;<br />
 &#125;<br />
 snake.growTail();<br />
 &#125;<br />
<br />
 if (isOutOfBounds(snakeRect)) &#123;<br />
 isRunning = false;<br />
 &#125;<br />
<br />
 Uint32 currentTime = SDL_GetTicks();<br />
 if (currentTime - lastSegmentUpdate &gt;= FRAME_DELAY)<br />
 &#123;<br />
 lastSegmentUpdate = currentTime;<br />
<br />
 // Update tail segments<br />
 // ...<br />
 snake.growTail();<br />
<br />
 if (snake.tail.size() &amp;&gt; snake.size) &amp;&123;<br />
 snake.tail.pop_front(); // Remove the oldest tail segment if the size limit is reached<br />
 &#125;<br />
 &#125;<br />
<br />
 DrawSnake(snake, renderer);<br />
<br />
 DrawFood(food.posx, food.posy, food.food_width, food.food_height, renderer);<br />
<br />
 SDL_SetRenderDrawColor(renderer, 0, 0, 0, 0);<br />
 SDL_RenderPresent(renderer);<br />
<br />
 frameTime = SDL_GetTicks() - frameStart; // Calculate the time taken for the frame<br />
<br />
 // Delay to control the frame rate<br />
 if (FRAME_DELAY &gt; frameTime)<br />
 &#123;<br />
 SDL_Delay(FRAME_DELAY - frameTime);<br />
 &#125;<br />
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
                <footer>
                    <ul className='list-none m-0 p-0 overflow-hidden bg-slate-800'>
                    <button className='float-left px-20 py-10 block text-green-400 text-3xl hover:bg-slate-400 bg-slate-800'><Link href='/blog/blog2'>Previous page</Link></button>
                        <button className='float-right px-20 py-10 block text-green-400 text-3xl hover:bg-slate-400 bg-slate-800'><Link href='/blog/blog3'>Next page</Link></button>
                    </ul>
                </footer>
        </>
    )
}