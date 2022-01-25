import port1 from "./assets/images/portImages/colorshades.jpg";
import port2 from "./assets/images/portImages/faq.jpg";
import port3 from "./assets/images/portImages/lorem.jpg";
import port4 from "./assets/images/portImages/menu.jpg";
import port5 from "./assets/images/portImages/slider.jpg";
import port6 from "./assets/images/portImages/tabs.jpg";
import port7 from "./assets/images/portImages/jsfriends.jpg";
import port8 from "./assets/images/portImages/wdbdrinks.jpg";
import port9 from "./assets/images/portImages/puentes.jpg";

const portfolioItems = [
  {
    id: 1,
    category: "apps",
    image: port8,
    link1: "https://github.com/wdbprojects/wdbdrinks",
    link2: "https://wdbdrinks.netlify.app/",
    title: "Drink Recipe Finder",
    btnDisabled: false,
    shortDesc:
      "Cool drinks search engine based on an external API by thecocktaildb.com. Here we test some of the most powerfull react features such as useContext and useReducer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: [
      "javascript",
      "react",
      "react hooks",
      "use context",
      "use reducer",
      "css grid",
    ],
  },
  {
    id: 2,
    category: "apps",
    image: port7,
    link1: "https://github.com/wdbprojects/jsfriends",
    link2: "https://jsfriends.herokuapp.com/",
    title: "JS Friends - Social Media",
    btnDisabled: false,
    shortDesc:
      "Social media app where you can post text and images, share with friends you follow, on the fly real time search functionality and a cool chat feature. All done with vanilla JavaScript.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: [
      "javascript",
      "node.js",
      "express",
      "mongoDB",
      "socket io",
      "markdown",
    ],
  },
  {
    id: 9,
    category: "client projects",
    image: port9,
    link1: "#",
    link2: "https://puentes.info/",
    title: "Puentes",
    btnDisabled: true,
    shortDesc:
      "Client project made with React and Strapi. It features a blog, background videos, and different types of content.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["javascript", "react", "strapi", "material ui", "markdown"],
  },
  {
    id: 3,
    category: "apps",
    image: port1,
    link1: "https://github.com/wdbprojects/colorshades",
    link2: "https://wdbcolorshades.netlify.app/",
    title: "Color Shades",
    btnDisabled: false,
    shortDesc:
      "A color tool that generates 10 darker shades and 10 lighter shades based on any hex or rgb color entered by the user. Any color generated is clickable and the hex code automatically copied to the clipboard. All the functionality done with React hooks.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["javascript", "react", "useState", "useEffect", "css grid"],
  },
  /* {
    id: 4,
    category: "apps",
    image: port2,
    link1: "www.github.com",
    link2: "www.youtube.com",
    title: "Frequent Asked Questions",
    btnDisabled: false,
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["javascript", "react", "css grid", "react hooks"],
  },
  {
    id: 5,
    category: "tutorials",
    image: port3,
    link1: "www.github.com",
    link2: "www.youtube.com",
    title: "Lorem Ipsum Generator",
    btnDisabled: false,
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["javascript", "react", "css grid", "react hooks"],
  },
  {
    id: 6,
    category: "tutorials",
    image: port4,
    link1: "www.github.com",
    link2: "www.youtube.com",
    title: "Menu",
    btnDisabled: false,
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["javascript", "react", "css grid", "react hooks"],
  },
  {
    id: 7,
    category: "client projects",
    image: port5,
    link1: "www.github.com",
    link2: "www.youtube.com",
    title: "Slider",
    btnDisabled: false,
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["javascript", "react", "css grid", "react hooks"],
  },
  {
    id: 8,
    category: "tutorials",
    image: port6,
    link1: "www.github.com",
    link2: "www.youtube.com",
    title: "Tabs",
    btnDisabled: false,
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["javascript", "react", "css grid", "react hooks"],
  }, */
];

export default portfolioItems;
