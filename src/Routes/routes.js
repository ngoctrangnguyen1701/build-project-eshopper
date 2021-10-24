import baseLink from '../BaseLink/baseLink';
import Home from '../Pages/Home/Home';
import ProductDetails from '../Pages/ProductDetails/ProductDetails';
import ProductsByCategory from '../Pages/ProductsByCategory/ProductsByCategory';
import Cart from '../Pages/Cart/Cart';
import Page404 from '../Pages/Page404/Page404';
import BlogList from '../Pages/Blog/BlogList';
import BlogSingle from '../Pages/Blog/BlogSingle';
import Contact from '../Pages/Contact/Contact';
import Auth from '../Pages/Auth/Auth';

const routes = [
    {
        path: `${baseLink}`,
        exact: true,
        component: Home
    },
    {
        path: `${baseLink}/products/:id`,
        exact: true,
        component: ProductDetails
    },
    {
        path: `${baseLink}/category/:categoryName`,
        exact: true,
        component: ProductsByCategory
    },
    {
        path: `${baseLink}/cart`,
        exact: true,
        component: Cart
    },
    {
        path: `${baseLink}/blog-list`,
        exact: true,
        component: BlogList
    },
    {
        path: `${baseLink}/blog-single`,
        exact: true,
        component: BlogSingle
    },
    {
        path: `${baseLink}/contact`,
        exact: true,
        component: Contact
    },
    {
        path: `${baseLink}/auth`,
        exact: true,
        component: Auth
    },
    {
        path: '*',
        component: Page404
    },
];

export default routes;