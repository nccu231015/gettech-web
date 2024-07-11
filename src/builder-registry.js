"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import CarouselBanner from "./components/Banner/banner";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(Counter, {
  name: "Counter",
});


Builder.registerBlock(CarouselBanner,{
  name: 'images',
  type: 'list',
  defaultValue: [ 
        { reviewText: 'hello' 
  }],
  subFields: [
    {
      name: 'reviewText',
      type: 'string',
      defaultValue: '"You are the best"',
    },
    {
      name: 'image',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      required: true,
      defaultValue:   'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d',
    },
  ],
})