import {Link, useNavigate, Outlet} from "react-router-dom";


export default function ArticleCard(article) {

    const navigate = useNavigate();

    function openCard(id) {
        navigate("/article/" + id);
        console.log(id)

    };
    return (
        <div className="card mb-3" style={{maxWidth: '1240px', marginBottom: '40px', marginLeft: '40px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={article.img} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{article.title}</h5>
                        <p className="card-text">{article.text}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <Link to={`/article/${article.id}`}>
                            <button type="button" className="btn btn-primary" style={{marginLeft: '600px'}}>
                                Подробнее
                            </button>
                        </Link>
                    </div>
                    <Outlet/>
                </div>
            </div>
        </div>)
}