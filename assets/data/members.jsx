import boss_01 from "../../public/images/team/boss_04.jpg";
import goncalo_01 from "../../public/images/team/goncalo_01.jpg";
import pedro_01 from "../../public/images/team/pedro_01.jpg";
import header01 from "../../public/images/home_04.jpg";
import unknown from '../../public/images/unknown.jpg'

export const header = {
  title: "team",
  image: "/images/team/team_header.jpg",
};

export const page = {
  title: "a equipa.",
  quote: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
    sed duis tristique mattis mauris, vitae non adipiscing. Faucibus sem
    rhoncus amet aliquet feugiat. Et tincidunt molestie turpis ac sed.`,
};

export const members = [
  {
    name: "Paulo Reizinho",
    slug: "paulo_reizinho",
    imgSrc: boss_01,
    imgAlt: "paulo reizinho",
    carImg: "/images/home_04.jpg",
    id_origin: "Alentejo",
    id_age: "35",
    id_living: "Zurich",
    id_hobbies: "Ginasio, programaçao, natureza",
    about_imgSrc: boss_01,
    about_imgAlt: "paulo reizinho",
    car_imgSrc: header01,
    car_imgAlt: "car",
  },
  {
    name: "Gonçalo Pinto",
    slug: "goncalo_pinto",
    imgSrc: goncalo_01,
    imgAlt: "gonçalo pinto",
    carImg: header01,
    id_origin: "",
    id_age: "",
    id_living: "",
    id_hobbies: "",
    about_imgSrc: goncalo_01,
    about_imgAlt: "",
    car_imgSrc: header01,
    car_imgAlt: "car",
  },
  {
    name: "Pedro Ribeiro",
    slug: "pedro_ribeiro",
    imgSrc: pedro_01,
    imgAlt: "pedro ribeiro",
    carImg: header01,
    id_origin: "",
    id_age: "",
    id_living: "",
    id_hobbies: "",
    about_imgSrc: pedro_01,
    about_imgAlt: "",
    car_imgSrc: header01,
    car_imgAlt: "",
  },
  {
    name: "alguem",
    slug: "alguem",
    imgSrc: unknown,
    imgAlt: "unknown",
    carImg: header01,
    id_origin: "",
    id_age: "",
    id_living: "",
    id_hobbies: "",
    about_imgSrc: unknown,
    about_imgAlt: "",
    car_imgSrc: header01,
    car_imgAlt: "",
  },
];
