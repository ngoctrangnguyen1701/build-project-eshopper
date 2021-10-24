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
        path: '/build-project-eshopper/',
        exact: true,
        component: Home
    },
    {
        path: '/build-project-eshopper/products/:id',
        exact: true,
        component: ProductDetails
    },
    {
        path: '/build-project-eshopper/category/:categoryName',
        exact: true,
        component: ProductsByCategory
    },
    {
        path: '/build-project-eshopper/cart',
        exact: true,
        component: Cart
    },
    {
        path: '/build-project-eshopper/blog-list',
        exact: true,
        component: BlogList
    },
    {
        path: '/build-project-eshopper/blog-single',
        exact: true,
        component: BlogSingle
    },
    {
        path: '/build-project-eshopper/contact',
        exact: true,
        component: Contact
    },

    {
        path: '/build-project-eshopper/auth',
        exact: true,
        component: Auth
    },
    {
        path: '*',
        exact: false,
        component: Page404
    },
];

export default routes;