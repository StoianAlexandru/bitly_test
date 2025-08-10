import {Home} from '../pages/home';
import {About} from "../pages/about";
import {Contact} from "../pages/contact";
import {Route, Routes} from "react-router-dom";
import Post from "../pages/posts/Post.tsx";

export interface RoutePage {
    path: string,
    page: object
}

const AppPages = () => {
    return <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/posts/:id" element={<Post/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
}
export default AppPages;