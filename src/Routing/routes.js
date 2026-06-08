import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Login from "../pages/login";
import { AllPath } from "./allPath";


const AllRoute = [
    {
        path:AllPath.login,
        element: Login
    },
    {
        path:AllPath.home,
        element: Home
    },
    {
        path:AllPath.about,
        element: About
    },
    {
        path:AllPath.contact,
        element: Contact
    },

]

export default AllRoute