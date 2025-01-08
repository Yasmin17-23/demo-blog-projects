import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import BlogDetails from "../pages/BlogDetails/BlogDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog/:id',
                element: <BlogDetails></BlogDetails>,
                loader: () => fetch('/public/blogs.json')
            }
        ]
    }
])