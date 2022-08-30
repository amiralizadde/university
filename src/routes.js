
import Home from "./components/home/Home";
import People from "./components/people/People";
import Research from './components/research/Research'
import Publication from "./components/publications/Publication";
import Teaching from './components/teaching/Teaching'
import Gallery from './components/gallery/Gallery'

const routes = [
    {  path:"/" ,             element:<Home/>} ,
    {  path:"/People" ,       element:<People/>},
    {  path:"/Research" ,     element:<Research/>},
    {  path:"/Publication",   element:<Publication/>},
    {  path:"/Teaching" ,     element:<Teaching/>},
    {  path:"/Gallery" ,      element:<Gallery/>}
]

export default routes;