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
        path: 'https://ngoctrangnguyen1701.github.io/build-project-eshopper/',
        exact: true,
        component: Home
    },
    {
        path: 'https://ngoctrangnguyen1701.github.io/build-project-eshopper/products/:id',
        exact: true,
        component: ProductDetails
    },
    {
        path: 'https://ngoctrangnguyen1701.github.io/build-project-eshopper/category/:categoryName',
        exact: true,
        component: ProductsByCategory
    },
    {
        path: 'https://ngoctrangnguyen1701.github.io/build-project-eshopper/cart',
        exact: true,
        component: Cart
    },
    {
        path: 'https://ngoctrangnguyen1701.github.io/build-project-eshopper/blog-list',
        exact: true,
        component: BlogList
    },
    {
        path: 'https://ngoctrangnguyen1701.github.io/build-project-eshopper/blog-single',
        exact: true,
        component: BlogSingle
    },
    {
        path: 'https://ngoctrangnguyen1701.github.io/build-project-eshopper/contact',
        exact: true,
        component: Contact
    },
    {
        path: 'https://ngoctrangnguyen1701.github.io/build-project-eshopper/cart',
        exact: true,
        component: Cart
    },
    {
        path: 'https://ngoctrangnguyen1701.github.io/build-project-eshopper/auth',
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