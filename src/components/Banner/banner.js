'use client'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './banner.css';

import { builder } from '@builder.io/sdk';
import { useEffect, useState } from 'react';

import BuilderImage from '../ImageNexthook';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);


const CarouselBanner = () => {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        async function fetchContent() {
          const links = await builder.getAll("carasoul-image", {
            // You can use options for queries, sorting, and targeting here
            // https://github.com/BuilderIO/builder/blob/main/packages/core/docs/interfaces/GetContentOptions.md
          });
          setLinks(links);
        }
        fetchContent();
      }, []);

      console.log(links)
       
    return (
        <Carousel showThumbs={false} autoPlay infiniteLoop className='carousel'>
            {links.map((link, index) => (
                <div key={index}>
                    <BuilderImage src={link.data.images} width={0} height={0}></BuilderImage>
                </div>
          ))}
        </Carousel>
    );
};

export default CarouselBanner;
