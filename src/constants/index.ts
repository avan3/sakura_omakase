export type Link = {
  id: string;
  title: string;
  link: string;
};

export const NavLinks: Link[] = [
  {
    id: "home",
    title: "Home",
    link: "/",
  },
  {
    id: "about",
    title: "About",
    link: "/about",
  },
  {
    id: "menu",
    title: "Menu",
    link: "/menu",
  },
  {
    id: "reservations",
    title: "Reservations",
    link: "/reservations",
  },
  {
    id: "contact",
    title: "Contact",
    link: "/contact",
  },
];
