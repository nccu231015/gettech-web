"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import CarouselBanner from "./components/Banner/banner";
import MachineCard from "./components/MachineCard/MachineCard";
import MachineCardLoop from "./components/MachineCard/MachineCardLoop";
import NavBar from "./components/NavBar/NavBar";
import Arrow from "./components/Arrow/Arrow"
import CNCIndustry from "./components/CNCIndustry/CNCIndustry";
import MediumTitle from "./components/MediumTitle/MediumTitle";
import EquipmentCard from "./components/EquipmentCard/EquipmentCard";
import AboutGETTECH from "./components/AboutGETTECH/AboutGETTECH";
import Footer from "./components/Footer/Footer";
import HeroTitle from "./components/HeroTitle/HeroTitle";
import Breadcrumb_millingMachine from "./components/Breadcrumb_millingMachine/breadcrumb_millingMachine";
import Breadcrumb_aerospace from "./components/Breadcrumb_aerospace/breadcrumb_aerospace";
import Breadcrumb_carMillingCompoundProcessing from "./components/Breadcrumb_carMillingCompoundProcessing/breadcrumb_carMillingCompoundProcessing";
import Breadcrumb_military from "./components/Breadcrumb_military/breadcrumb_military";
import Breadcrumb_electronic from "./components/Breadcrumb_electronic/breadcrumb_electronic";
import Breadcrumb_customize from "./components/Breadcrumb_customize/breadcrumb_customize";
import Breadcrumb_manufacture from "./components/Breadcrumb_manufacture/breadcrumb_manufacture";
import Breadcrumb_equipment from "./components/Breadcrumb_equipment/breadcrumb_equipment";
import Breadcrumb_about_get_tech from "./components/Breadcrumb_about_get_tech/Breadcrumb_about_get_tech";
import Breadcrumb_service from "./components/Breadcrumb_service/breadcrumb_service";
import Breadcrumb_agent from "./components/Breadcrumb_agent/breadcrumb_agent";
import ImageCard from "./components/ImageCard/ImageCard";
import InfoCard from "./components/InfoCard/InfoCard";
import TitleBox from "./components/TitleBox/TitleBox";
import TextBox from "./components/TextBox/TextBox";
import ArticleTitle from "./components/ArticleTitle/ArticleTitle";
<<<<<<< Updated upstream
=======
import ContactUs from "./components/ContactUs/ContactUs";
import EquipmentInfo from "./components/EquipmentInfo/EquipmentInfo";
import NewMachineCard from "./components/NewMachineCard/NewMachineCard";
import EquipmentTitle from "./components/EquipmentTitle/EquipmentTitle";
>>>>>>> Stashed changes


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(CarouselBanner,{
  name: 'CarouselBanner',
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

<<<<<<< Updated upstream
=======
Builder.registerComponent(EquipmentInfo,{
  name: 'EquipmentInfo',
  inputs:[
    {
      name: 'cardList',
      type: 'list',
      defaultValue: [
            {MainTitle: "123",
            brand: "123",
            ModelNumber: "123",
            Quantity: "123"},
          ],
      subFields: [
        {
          name: 'MainTitle',
          type:'string',
          defaultValue: 'VERTICAL FOUR-AXIS MILLING MACHINE',
        },
        {
          name: 'brand',
          type:'string',
          defaultValue: 'Brother',
        },
        {
          name: 'ModelNumber',
          type:'string',
          defaultValue: 'SPEEDOP S700X2(HIGH-Torque)',
        },
        {
          name: 'Quantity',
          type:'string',
          defaultValue: '4',
        },
      ],
>>>>>>> Stashed changes
    }
  ]
  
})

Builder.registerComponent(NewMachineCard,{
  name: 'NewMachineCard',
  inputs:[
    {
      name: 'machineCardList',
      type: 'list',
      defaultValue: [
            {title: "MachineTitle",
            image: "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d",
            description: "Machine Description Here",
            },
          ],
      subFields: [
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
      ],
    }
  ]
})

Builder.registerBlock(NavBar,{
  name: 'NavBar',
  inputs:[]
})

Builder.registerBlock(Arrow,{
  name: 'Arrow',
  inputs:[]
})

Builder.registerBlock(CNCIndustry,{
  name: 'CNCIndustry',
  inputs:[]
})

<<<<<<< Updated upstream
=======
Builder.registerBlock(ContactUs,{
  name: 'ContactUs',
  inputs:[]
})

Builder.registerBlock(EquipmentTitle,{
  name: 'EquipmentTitle',
  inputs:[]
})

>>>>>>> Stashed changes
Builder.registerBlock(MediumTitle,{
  name: 'MediumTitle',
  inputs:[
    {
      name: 'text',
      type:'string',
      defaultValue: 'Title Here',
    },
  ]
})

Builder.registerComponent(EquipmentCard,{
  name: 'EquipmentCard',
  inputs:[
    {
<<<<<<< Updated upstream
      name: 'titleText',
      type:'string',
      defaultValue: 'Title Here',
    },
    {
      name:'image',
      type:'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      required: true,
      defaultValue:  '/assets/four-axis1.png',
    },
=======
      name: 'equipmentCardList',
      type: 'list',
      defaultValue: [
            {titleText: "Title Here",
            image: "/assets/four-axis1.png",
            brand: "Brand Here",
            model_number: "Model Number Here",
            quantity:"Quantity Here"},
          ],
      subFields: [
        {
          name: 'titleText',
          type:'string',
          defaultValue: 'Title Here',
        },
        {
          name:'image',
          type:'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
          required: true,
          defaultValue:  '/assets/four-axis1.png',
        },
        {
          name: 'brand',
          type:'string',
          defaultValue: 'Brand Here',
        },
        {
          name: 'model_number',
          type:'string',
          defaultValue: 'Model Number Here',
        },
        {
          name: 'quantity',
          type:'string',
          defaultValue: 'Quantity Here',
        },
      ],
    }
>>>>>>> Stashed changes
  ]
})

Builder.registerComponent(AboutGETTECH,{
  name: 'AboutGETTECH',
  inputs:[
    {
      name:'image',
      type:'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      required: true,
      defaultValue:  '/assets/AboutGETTECH_img.png',
    },
    {
      name: 'ArticleTitle',
      type:'string',
      defaultValue: 'GET-TECH : Innovating the Future of Manufacturing',
    },
    {
      name: 'ArticlePreview',
      type:'string',
      defaultValue: 'Lorem ipsum dolor sit amet consectetur. Viverra erat odio proin consectetur. Purus et facilisi enim orci. Cras nisi nunc vestibulum nisl volutpat in a enim. Proin convallis et maecenas volutpat quam amet amet adipiscing....',
    },
  ]
})

Builder.registerBlock(Footer,{
  name: 'Footer',
  inputs:[]
})

Builder.registerBlock(HeroTitle,{
  name: 'HeroTitle',
  inputs:[
    {
      name: 'MainTitle',
      type:'string',
      defaultValue: 'MainTitle Here',
    },
    {
      name: 'SubTitle',
      type:'string',
      defaultValue: 'SubTitle Here',
    },
  ]
})

Builder.registerBlock(Breadcrumb_millingMachine,{
  name: 'Breadcrumb_millingMachine',
  inputs:[]
})

Builder.registerBlock(Breadcrumb_aerospace,{
  name: 'Breadcrumb_aerospace',
  inputs:[]
})

Builder.registerBlock(Breadcrumb_carMillingCompoundProcessing,{
  name: 'Breadcrumb_carMillingCompoundProcessing',
  inputs:[]
})

Builder.registerBlock(Breadcrumb_military,{
  name: 'Breadcrumb_military',
  inputs:[]
})

Builder.registerBlock(Breadcrumb_electronic,{
  name: 'Breadcrumb_electronic',
  inputs:[]
})

Builder.registerBlock(Breadcrumb_customize,{
  name: 'Breadcrumb_customize',
  inputs:[]
})

Builder.registerBlock(Breadcrumb_manufacture,{
  name: 'Breadcrumb_manufacture',
  inputs:[]
})

Builder.registerBlock(Breadcrumb_equipment,{
  name: 'Breadcrumb_equipment',
  inputs:[]
})

Builder.registerBlock(Breadcrumb_about_get_tech,{
  name: 'Breadcrumb_about_get_tech',
  inputs:[]
})

Builder.registerBlock(Breadcrumb_agent,{
  name: 'Breadcrumb_agent',
  inputs:[]
})

Builder.registerBlock(Breadcrumb_service,{
  name: 'Breadcrumb_service',
  inputs:[]
})

Builder.registerComponent(ImageCard,{
  name: 'ImageCard',
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
  ]
})

Builder.registerComponent(InfoCard,{
  name: 'InfoCard',
  inputs:[
    {
      name: 'InfoTitle',
      type:'string',
      defaultValue: '中華塑膠 Chung Hua Plastic',
    },
    {
      name:'Icon',
      type:'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      required: true,
      defaultValue:  '/assets/Taiwan.png',
    },
    {
      name: 'Location',
      type:'string',
      defaultValue: 'Taoyuan-Taiwan',
    },
    {
      name: 'url',
      type:'string',
      defaultValue: 'https://www.chunghua.com.tw/',
    },
  ]
})

Builder.registerBlock(TitleBox,{
  name: 'TitleBox',
  inputs:[
    {
      name: 'title',
      type:'string',
      defaultValue: 'Title Here',
    },
  ]
})

Builder.registerBlock(TextBox,{
  name: 'TextBox',
  inputs:[
    {
      name: 'text',
      type:'string',
      defaultValue: 'Content Here',
    },
  ]
})

Builder.registerBlock(ArticleTitle,{
  name: 'ArticleTitle',
  inputs:[
    {
      name: 'MainTitle',
      type:'string',
      defaultValue: 'MainTitle Here',
    },
    {
      name: 'SubTitle',
      type:'string',
      defaultValue: 'SubTitle Here',
    },
  ]
})
