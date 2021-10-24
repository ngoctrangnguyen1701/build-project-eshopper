import { Link, useRouteMatch } from 'react-router-dom';

const activeStyle = {color: '#fe980f'};

function MenuLogedIn(props) {
    const { onLogOut, baseLink } = props;

    return (
        <>
            <li>
                <Link
                    to={`${baseLink}/account`}
                    style={useRouteMatch(`${baseLink}/account`) && activeStyle}
                ><i className="fa fa-user"></i> Account</Link>
            </li>
            <li>
                <Link 
                    to={`${baseLink}/wishlist`}
                    style={useRouteMatch(`${baseLink}/wishlist`) && activeStyle}
                    ><i className="fa fa-star"></i> Wishlist</Link>
            </li>
            <li>
                <Link
                    to={`${baseLink}/auth`}
                    onClick={onLogOut}
                >
                    <i className="fas fa-lock-open"></i> Log out
                </Link>
            </li>
        </>       
    );
}

export default MenuLogedIn;