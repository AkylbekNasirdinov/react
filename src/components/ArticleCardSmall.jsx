import {Link} from "react-router-dom";



export default function ArticleCardSmall(article){
    return (<div className="col">
                <div className="bg-light">
                    <div className="card" style={{width: '18rem'}}>
                        <img src={article.img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">{article.text}</p>
                                <Link to="#" className="btn btn-primary">Подробнее</Link>
                            </div>
                    </div>
                </div>
            </div>)
}