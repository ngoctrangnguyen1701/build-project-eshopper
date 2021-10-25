import { Link } from 'react-router-dom';
import baseLink from '../../BaseLink/baseLink';

function Page404(props) {
    return (
        <div className="container text-center">
            <div className="content-404">
                <h1><b>OPPS!</b> We Couldn’t Find this Page</h1>
                <p>Uh... So it looks like you brock something. The page you are looking for has up and Vanished.</p>
                <h2><Link to={baseLink}>Bring me back Home</Link></h2>
                <div style={{marginTop: "100px"}}>
                    <img src="images/404/404.png" className="img-responsive" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Page404;