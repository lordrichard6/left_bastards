import { TiSocialYoutubeCircular } from "react-icons/ti";
import { RiInstagramFill, RiFacebookBoxLine } from "react-icons/ri";

import gal_01 from "../../public/images/home/home_gal_01.jpg";
import gal_02 from "../../public/images/home/home_gal_02.jpg";
import gal_03 from "../../public/images/home/home_gal_03.jpg";
import gal_04 from "../../public/images/home/home_gal_04.jpg";
import gal_05 from "../../public/images/home/home_gal_05.jpg";
import gal_06 from "../../public/images/home/home_gal_06.jpg";
import gal_07 from "../../public/images/home/home_gal_07.jpg";

import boss_01 from "../../public/images/boss_01.jpg";

import logo_left from "../../public/images/logo/logo_v2_01.png";
import logo_sardinha from "../../public/images/logo/sardinha_logo.png";


export const header = {
  title: "LEFT BASTARDS",
  slogan: '"Always on the left"',
  image: "/images/home/home_header.jpg",
};

export const about = {
  title: "sobre nos.",
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
  title: "galeria.",
  quote: "Lorme tellus, ac nunc accumsan dolor sit ultricies.",
};

export const galleryPictures = [
  {
    imgSrc: gal_01,
    alt: "left bastards latest",
  },
  {
    imgSrc: gal_02,
    alt: "left bastards latest",
  },
  {
    imgSrc: gal_03,
    alt: "left bastards latest",
  },
  {
    imgSrc: gal_04,
    alt: "left bastards latest",
  },
  {
    imgSrc: gal_05,
    alt: "left bastards latest",
  },
  {
    imgSrc: gal_06,
    alt: "left bastards latest",
  },
  {
    imgSrc: gal_07,
    alt: "left bastards latest",
  },
];

export const sponsorTitle = {
  title: "patrocinios.",
  quote: "Our friends are precious",
};

export const sponsors = [
  {
    imgSrc: logo_left,
    alt: "logo left bastards",
    link: "",
  },
  {
    imgSrc: logo_sardinha,
    alt: "logo sardinha drive",
    link: "",
  },
];
