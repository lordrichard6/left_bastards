import boss_01 from "../../public/images/boss_03.jpg";
import goncalo_01 from "../../public/images/goncalo_01.jpg";
import pedro_01 from "../../public/images/pedro_01.jpg";
import unknown from "../../public/images/unknown.jpg";
import logo_gold from "../../public/logo_gold.png";
import header01 from '../../public/images/home_04.jpg'

export const header = {
  title: 'team',
  image: '/images/home_03.jpg',
  logo: logo_gold
}

export const page = {
  title: "juntossomosfortes.",
  quote: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
    sed duis tristique mattis mauris, vitae non adipiscing. Faucibus sem
    rhoncus amet aliquet feugiat. Et tincidunt molestie turpis ac sed.`,
    group_01: 'fundadores',
    quote_01: 'Tudo tem um inicio',
    group_02: 'membros',
    quote_02: 'Mais que um grupo, uma familia',
};

export const founders = [
  {
    name: "Paulo Reizinho",
    imgSrc: boss_01,
    imgAlt: "paulo reizinho",
    carImg: '/images/home_04.jpg',
    link: "/team/member",
  },
  {
    name: "Gonçalo Pinto",
    imgSrc: goncalo_01,
    imgAlt: "gonçalo pinto",
    carImg: header01,
    link: "/team/member",
  },
  {
    name: "Pedro Ribeiro",
    imgSrc: pedro_01,
    imgAlt: "pedro ribeiro",
    carImg: header01,
    link: "/team/member",
  },
];

export const members = [
  {
    name: "Desconhecido",
    imgSrc: unknown,
    imgAlt: "",
    link: "/team/member",
  },
  {
    name: "Desconhecido",
    imgSrc: unknown,
    imgAlt: "",
    link: "/team/member",
  },
  {
    name: "Desconhecido",
    imgSrc: unknown,
    imgAlt: "",
    link: "/team/member",
  },
  {
    name: "Desconhecido",
    imgSrc: unknown,
    imgAlt: "",
    link: "/team/member",
  },
  {
    name: "Desconhecido",
    imgSrc: unknown,
    imgAlt: "",
    link: "/team/member",
  },
  {
    name: "Desconhecido",
    imgSrc: unknown,
    imgAlt: "",
    link: "/team/member",
  },
  {
    name: "John Doe",
    imgSrc: unknown,
    imgAlt: "",
    link: "/team/member",
  },
  {
    name: "Desconhecido",
    imgSrc: unknown,
    imgAlt: "",
    link: "/team/member",
  },
  {
    name: "Desconhecido",
    imgSrc: unknown,
    imgAlt: "",
    link: "/team/member",
  },
];
