import { lazy } from 'react'

const Home = lazy(() => import('../Pages/Home'));
const About = lazy(() => import('../Pages/About'));
const Contact = lazy(() => import('../Pages/Contact'));
const Skills = lazy(() => import('../Pages/Skills'));
const Projects = lazy(() => import('../Pages/Projects'));


export const routes = [
  {
    path: '/',
    element: <Home />,
    title: 'Home'
  },
  {
    path: '/about',
    element: <About />,
    title: 'About'
  },
  {
    path: '/contact',
    element: <Contact />,
    title: 'Contact'
  },
  {
    path: '/skills',
    element: <Skills />,
    title: 'Skills'
  },
  {
    path: '/projects',
    element: <Projects />,
    title: 'Projects'
  },
]
