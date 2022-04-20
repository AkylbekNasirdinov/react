import {useNavigate, useParams} from "react-router-dom";
import {deletePost, editPost} from "../store";
import {useDispatch, useSelector} from "react-redux";
import deleteImg from "../img/delete.svg"
import editImg from "../img/edited.svg"
import facebookLogo from "../img/facebook.png";
import vkLogo from "../img/vk.svg";
import twitterLogo from "../img/twitter.png";
import ava from "../img/ava.jpg"
import Header from "./Header";
import Footer from "./Footer";

export default function Article() {
    const {id} = useParams()
    const posts = useSelector((state) => state.news.posts)

    const article = posts.find((post) => {
        return post.id == id
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();


    return (
        <div>
            <Header/>
            <div className="card bg-dark text-white">

                <img src={article.img} className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <h1 className="h1"
                        style={{marginTop: '70px', marginLeft: '70px', color: 'black'}}>{article.title}</h1>
                </div>

                <div className=""
                     style={{display: 'flex', flexDirection: 'row', marginTop: '50px', marginLeft: '55px'}}>
                    <p style={{width: '900px'}}>{article.text}</p>

                    <div className="card"
                         style={{
                             width: '18rem',
                             alignItems: 'center',
                             height: '420px',
                             borderRadius: '25px',
                             marginLeft: '70px'
                         }}>
                        <img alt="Remy Sharp" src={ava}/>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0px'}}>
                            <h5 className="card-title">Тони Старк</h5>
                            <p className="card-text">Так просто железный человек</p>
                            <p className="card-text">3 статей</p>
                        </div>

                        <div className="footer-media" style={{marginTop: '15px'}}>
                            <nav style={{display: 'flex', flexWrap: 'nowrap'}}>
                                <div style={{marginTop: '25px'}}>
                                    <a href="#">
                                        <img src={facebookLogo} alt="" width="30" height="24"/>
                                    </a>
                                </div>
                                <div style={{marginTop: '25px'}}>
                                    <a href="#">
                                        <img src={twitterLogo} alt="" width="30" height="24"/>
                                    </a>
                                </div>
                                <div style={{marginTop: '25px'}}>
                                    <a href="#">
                                        <img src={vkLogo} alt="" width="30" height="24"/>
                                    </a>
                                </div>
                            </nav>
                        </div>
                        <nav className="navbar navbar-light bg-light" style={{marginTop: '30px'}}>
                            <div className="container-fluid">
                                <button className="navbar-brand" style={{fontSize: '18px'}}
                                        onClick={() => {
                                            navigate(`/edit-post/${article.id}`)
                                        }}>
                                    <img src={editImg} alt="" width="25" height="20"
                                         className="d-inline-block align-text-top"/>
                                    Редактировать пост
                                </button>
                            </div>
                            <div className="container-fluid">
                                <button onClick={() => {
                                    dispatch(deletePost({
                                        id: article.id, title: article.title,
                                        text: article.text, img: article.img
                                    }))
                                    navigate("/news")
                                }}
                                        className="navbar-brand" style={{fontSize: '18px'}}
                                >
                                    <img src={deleteImg} alt="" width="25" height="20"
                                         className="d-inline-block align-text-top"/>
                                    Удалить пост
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>


    )
}