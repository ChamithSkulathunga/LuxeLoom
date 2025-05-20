// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from 'react-icons/io';

// import images
import Features1Img from './assets/img/features-1.png';
import Features2Img from './assets/img/features-2.png';
import ChairImg from './assets/img/chair.png';
import BedImg from './assets/img/bed.png';
import CupboardImg from './assets/img/cupboard.png';
import LightingImg from './assets/img/lighting.png';
import Product1Img from './assets/img/products/product-1.png';
import Product2Img from './assets/img/products/product-2.png';
import Product3Img from './assets/img/products/product-3.png';
import Product4Img from './assets/img/products/product-4.png';
import Product5Img from './assets/img/products/product-5.png';
import Product6Img from './assets/img/products/product-6.png';
import Product7Img from './assets/img/products/product-7.png';
import Product8Img from './assets/img/products/product-8.png';
import Product9Img from './assets/img/products/product-9.png';
import Product10Img from './assets/img/products/product-10.png';
import TestimonialImg from './assets/img/testimonial.png';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/avatar-3.png';
// import Avatar4Img from './assets/img/avatar-4.png';

export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
   
    name: 'about',
    href: '#features',
  },
  {
    name: 'features',
    href: '#Products',
  },
  {
    name: 'contact',
    href: '#contact',
  },
];

export const hero = {
  title: 'Creative Living with Quality Furniture in Sri Lanka',
  subtitle:
    'Transform your home with stylish, long-lasting furniture made for comfort and elegance. Trusted by thousands across Sri Lanka.',
  buttonText: 'Shop Now',
};

export const stats = [
  { value: '7', text: 'Years Experience' },
  { value: '10', text: 'Showrooms in World' },
  { value: '10k+', text: 'Happy Customers' },
  { value: '260+', text: 'Designs Available' },
];



export const features = {
  image: <Features1Img />,
  title: 'We Make Your Home More Beautiful',
  subtitle:
    'Furniture Power is a service platform for managing furniture businesses in Sri Lanka with ease and efficiency.',
  buttonText: 'Shop Now',
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Valuation Services',
      subtitle:
        'We offer expert furniture valuation for homes and businesses across Sri Lanka.',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Custom Furniture Designs',
      subtitle:
        'We help design and develop furniture models to match your unique style and needs.',
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: 'Your Trusted Furniture Manufacturer in Sri Lanka',
    subtitle:
      'Furniture Power helps manage multiple furniture businesses through one smart system — ideal for entrepreneurs running more than one outlet or service. Discover the future of furniture in Sri Lanka with us.',
  },
};


export const newInStore = {
  title: 'Latest Arrivals in Store',
  subtitle: 'Discover our newest furniture with special introductory offers',
  link: 'Check all',
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: 'chair',
      image: <ChairImg />,
    },
    {
      name: 'bed',
      image: <BedImg />,
    },
    {
      name: 'cupboard',
      image: <CupboardImg />,
    },
    {
      name: 'lighting',
      image: <LightingImg />,
    },
  ],
};


export const products = {
  title: 'All Products',
  subtitle:
    'The products we provide only for you as our service are selected from the best products with number 1 quality in the world',
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Ceiling Light',
          price: 22500,
          oldPrice: 24600,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Wood Chair',
          price: 15000,
          oldPrice: 21000,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 31500,
          oldPrice: 36000,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 22500,
          oldPrice: 24600,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Treos Seroes 911',
          price: 60000,
          oldPrice: 63000,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Multi bilderman slibber',
          price: 13500,
          oldPrice: 15000,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'XORA corner desk',
          price: 96000,
          oldPrice: 97500,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Black Forest Series Wood',
          price: 67500,
          oldPrice: 72000,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 31500,
          oldPrice: 36000,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 22500,
          oldPrice: 24600,
        },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Ceiling Light',
          price: 22500,
          oldPrice: 24600,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Wood Chair',
          price: 15000,
          oldPrice: 21000,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 31500,
          oldPrice: 36000,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 22500,
          oldPrice: 24600,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Treos Seroes 911',
          price: 60000,
          oldPrice: 63000,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Multi bilderman slibber',
          price: 13500,
          oldPrice: 15000,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'XORA corner desk',
          price: 96000,
          oldPrice: 97500,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Black Forest Series Wood',
          price: 67500,
          oldPrice: 72000,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 31500,
          oldPrice: 36000,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 22500,
          oldPrice: 24600,
        },
      ],
    },
  ],
};


export const testimonial = {
  title: 'What people are saying about us',
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: 'Josh Smith',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
    },
    {
      avatar: <Avatar2Img />,
      name: 'Brandi Johns',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
    },
    {
      avatar: <Avatar3Img />,
      name: 'Paula Pfeffer',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
    },
  ],
};

export const newsletter = {
  title: 'Get Exclusive Discounts on Your Orders',
  subtitle: 'Subscribe to our newsletter for the latest deals and updates',
  placeholder: 'Enter your email address',
  buttonText: 'Subscribe Now',
};


export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: '#',
    },
    {
      icon: <IoLogoInstagram />,
      href: '#',
    },
    {
      icon: <IoLogoGithub />,
      href: '#',
    },
    {
      icon: <IoLogoFacebook />,
      href: '#',
    },
  ],
  copyright: 'LuxeLoom 2022 - All Rights Reserved.',
};
