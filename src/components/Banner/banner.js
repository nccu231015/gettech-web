'use client'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './banner.css';

import { builder } from '@builder.io/sdk';
import { useEffect, useState } from 'react';

import BuilderImage from '../ImageNexthook';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);


const CarouselBanner = ({carasoul}) => {
    return (
        <div className='CarouselParent'>
            <Carousel showThumbs={false} autoPlay infiniteLoop className='carousel'>
                {carasoul.map((link, index) => (
                    <div key={index}>
                        <BuilderImage src={link.image} width={100} height={100}></BuilderImage>
                    </div>
                ))}
            </Carousel>            
        </div>

    );
};

export default CarouselBanner;
