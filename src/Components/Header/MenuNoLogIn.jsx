import { Link, useRouteMatch } from 'react-router-dom';

const activeStyle = {color: '#fe980f'};

function MenuNoLogIn({baseLink}) {
    return (
        <>
            <li>
                <Link 
                    to={`${baseLink}/auth`}
                    style={useRouteMatch(`${baseLink}/auth`) && activeStyle}
                ><i className="fa fa-lock"></i> Log in</Link>
            </li>
        </>      
    );
}

export default MenuNoLogIn;