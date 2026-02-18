import { IoHome, IoPersonSharp } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { GoProjectSymlink } from "react-icons/go";
import { RiContactsBook2Fill } from "react-icons/ri";
import Home from "../sections/Home";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

export const navItems = [
    {
        id: "home",
        label: "Home",
        icon: <IoHome />,
        component: <Home />,
    },
    {
        id: "about",
        label: "About",
        icon: <IoPersonSharp />,
        component: <About />,
    },
    {
        id: "skills",
        label: "Skills",
        icon: <AiFillProduct />,
        component: <Skills />,
    },
    {
        id: "projects",
        label: "Projects",
        icon: <GoProjectSymlink />,
        component: <Projects />,
    },
    {
        id: "contact",
        label: "Contact",
        icon: <RiContactsBook2Fill />,
        component: <Contact />,
    },
];
