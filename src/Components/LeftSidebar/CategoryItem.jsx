import { Link, useRouteMatch } from 'react-router-dom';


function CategoryItem(props) {
    const { categoryName, onSetDefault, baseLink } = props;
    const match = useRouteMatch(`${baseLink}/category/${categoryName}`);
    //console.log(match);
    
    return (
        <div className="panel panel-default">
            <div
                className="panel-heading"
                style={match && {backgroundColor: "#FE980F"}}
            >
                <div className={match ? 'category-active' : ''}>
                    <h4 className="panel-title">
                        <Link
                            to={`${baseLink}/category/${categoryName}`}
                            onClick={onSetDefault}
                            style={match && {color: "#fff"}}
                        >
                            {categoryName}
                        </Link>
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default CategoryItem;