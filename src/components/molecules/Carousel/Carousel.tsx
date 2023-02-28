import React from 'react'

import { CarouselCard } from '@/components/atoms/Carousel/CarouselCard'

export const Carousel = () => {
    return (
        <div className='w-full carousel bg-[#f4f6f8dc]'>
            <div id='item1' className="carousel-item w-full ">
                <CarouselCard 
                image={{src:"https://source.unsplash.com/random/?Chef", alt:'ooouuu'}}
                cardTitle='McCall&#39;s Meat and Fish Co.'
                cardDescription='&#34;We&apos;ve used [LawApp] for quite a few things over the years&#44; and overall it&apos;s gone very smoothly. They&apos;ve been easy to work with and very affordable.&#34;'
                cardAuthor='Karen Yoo&#44; LLC customer'
                />
            </div>
            <div id='item2' className="carousel-item w-full">
            <CarouselCard 
                image={{src:"https://source.unsplash.com/random/?Farmer", alt:'ooouuu'}}
                cardTitle='Bravium'
                cardDescription='&#34;Without LegalZoom&#44; I probably would not have not felt comfortable&#44; from a time and money and effort standpoint&#44; establishing as many brands as I did. And that would have been a bummer because those are the brands that are really keeping the lights on&#44; and helping our business grow.&#34;'
                cardAuthor='Derek Rohiffs&#44; trademark customer'
                />
            </div>
            <div id='item3' className="carousel-item w-full">
            <CarouselCard 
                image={{src:"https://source.unsplash.com/random/?woman", alt:'ooouuu'}}
                cardTitle='Nell C.'
                cardDescription='&#34;I needed to update my will. I&apos;d heard of LawApp. And when I had to update some documents&#44; I looked online at some other companies&#44; but felt comfortable using LawApp. The website was very helpful. And having access to a lawyer to make sure that everything was correct made it really doable&#34;'
                cardAuthor='Nell C.&#44; last will customer'
                />
            </div>

        </div>
    )
}
