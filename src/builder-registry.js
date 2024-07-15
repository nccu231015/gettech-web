"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import CarouselBanner from "./components/Banner/banner";
import MachineCard from "./components/MachineCard/MachineCard";
import MachineCardLoop from "./components/MachineCard/MachineCardLoop";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerBlock(CarouselBanner,{
  name: 'images',
  inputs:[
    {
      name: 'carasoul',
      type: 'list',
      defaultValue: [ 
            { image: 'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d' }
          ],
      subFields: [
        {
          name: 'image',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:   'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
        },
      ],

    }
  ]
  
})

Builder.registerComponent(MachineCard,{
  name: 'MachineCard',
  inputs:[
    {
      name: 'title',
      type:'string',
      defaultValue: 'MachineTitle',
    },
    {
      name:'image',
      type:'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      required: true,
      defaultValue:  'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
    },
    {
      name:'description',
      type:'string',
      defaultValue: 'Machine Description Here',
    },
  ]
})

Builder.registerComponent(MachineCardLoop,{
  name: 'machineLooping',
  inputs:[
    {
      name: 'addProd',
      type:'list',
      defaultValue:[
        { title: 'MachineTitle',
          image:'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
          description: 'Machine Description Here'
        },
      
      ],
      subFields:[
          {
            name: 'title',
            type:'string',
            defaultValue: 'MachineTitle',
          },
          {
            name:'image',
            type:'file',
            allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
            required: true,
            defaultValue:  'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
          },
          {
            name:'description',
            type:'string',
            defaultValue: 'Machine Description Here',
          },
        
      ]
    }
  ]
})