import boss_01 from "../../public/images/team/boss_04.jpg";
import goncalo_01 from "../../public/images/team/goncalo_01.jpg";
import pedro_01 from "../../public/images/team/pedro_01.jpg";
import unknown from "../../public/images/unknown.jpg";
import header01 from '../../public/images/home_04.jpg'

export const header = {
  title: 'team',
  image: '/images/team/team_header.jpg',
}

export const page = {
  title: "juntossomosfortes.",
  quote: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
    sed duis tristique mattis mauris, vitae non adipiscing. Faucibus sem
    rhoncus amet aliquet feugiat. Et tincidunt molestie turpis ac sed.`,
    group_01: 'fundadores',
    quote_01: 'Tudo tem um inicio',
    group_02: 'equipa',
    quote_02: 'Mais que um grupo, uma familia',
};


export const members = [
  {
    name: "Paulo Reizinho",
    slug: 'paulo_reizinho',
    imgSrc: boss_01,
    imgAlt: "paulo reizinho",
    carImg: '/images/home_04.jpg',
    origin: 'Alentejo',
    age: '35',
    living: 'Zurich',
    hobbies: 'Ginasio, programaçao, natureza'
  },
  {
    name: "Gonçalo Pinto",
    slug: 'goncalo_pinto',
    imgSrc: goncalo_01,
    imgAlt: "gonçalo pinto",
    carImg: header01,
    origin: 'Alentejo',
    age: '35',
    living: 'Zurich',
    hobbies: 'Ginasio, programaçao, natureza'
  },
  {
    name: "Pedro Ribeiro",
    slug: 'pedro_ribeiro',
    imgSrc: pedro_01,
    imgAlt: "pedro ribeiro",
    carImg: header01,
    origin: 'Alentejo',
    age: '35',
    living: 'Zurich',
    hobbies: 'Ginasio, programaçao, natureza'
  },
];
