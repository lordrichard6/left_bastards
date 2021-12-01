import { TiSocialYoutubeCircular } from "react-icons/ti";
import { RiInstagramFill, RiFacebookBoxLine } from "react-icons/ri";

import gal_01 from "../../public/images/home_01.jpg";
import gal_02 from "../../public/images/home_02.jpg";
import gal_03 from "../../public/images/home_03.jpg";
import gal_04 from "../../public/images/home_04.jpg";
import gal_05 from "../../public/images/home_05.jpg";
import boss_01 from "../../public/images/boss_01.jpg";
import logo_gold from "../../public/logo_gold.png";
import logo_black from "../../public/logo_black.png";
import logo_white from "../../public/logo_white.png";
import logo_blue from "../../public/logo_blue.png";

export const header = {
  title: "LEFT BASTARDS",
    slogan: '"Always on the left"',
    image: '/images/home_header.jpg'
}

export const about = {
  title: "sobrenos.",
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper sed duis tristique mattis mauris, vitae non adipiscing. 
    
    Faucibus sem rhoncus amet aliquet feugiat. Et tincidunt molestie turpis ac sed. Tortor nulla tincidunt ultricies bibendum sit pulvinar eu congue. Aliquet elementum adipiscing dui porttitor varius. 
    Ligula lacus, commodo cursus a, ornare cursus ultricies faucibus. 
    In non laoreet tempor tellus, semper in. Nibh sem blandit ut dolor turpis tempor quam quam felis. 
    
    Gravida tellus, ac nunc accumsan dolor sit ultricies.`,
};

export const social = [
  {
    link: "/",
    icon: <TiSocialYoutubeCircular />,
    alt: "",
  },
  {
    link: "/",
    icon: <RiInstagramFill />,
    alt: "",
  },
  {
    link: "/",
    icon: <RiFacebookBoxLine />,
    alt: "",
  },
];

export const gallery = {
  title: 'galeria.',
  quote: 'Lorme tellus, ac nunc accumsan dolor sit ultricies.'
}

export const galleryPictures = [
{
  imgSrc: gal_01,
  alt: "",
},
{
  imgSrc: gal_02,
  alt: "",
},
{
  imgSrc: gal_03,
  alt: "",
},
{
  imgSrc: gal_04,
  alt: "",
},
{
  imgSrc: gal_05,
  alt: "",
},
];

export const sponsorTitle = {
  title: 'os nossos patrocinios.',
  quote: 'Our friends are precious'
}

export const sponsors = [
  {
    imgSrc: logo_gold,
    alt: "",
    link: "",
  },
  {
    imgSrc: logo_black,
    alt: "",
    link: "",
  },
  {
    imgSrc: logo_white,
    alt: "",
    link: "",
  },
  {
    imgSrc: logo_blue,
    alt: "",
    link: "",
  },
];
