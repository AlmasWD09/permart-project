import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Blogs from "../pages/blogs/Blogs";
import FaqPage from "../pages/faqPage/FaqPage";
import Privacy from "../pages/privacy/Privacy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/blogs",
                element: <Blogs />,
            },
            {
                path: "/faq",
                element: <FaqPage />,
            },
            {
                path: "/privacy",
                element: <Privacy />,
            },
        ],
    },
]);
export default router  