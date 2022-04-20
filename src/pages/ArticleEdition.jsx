import img from "../img/imges.jpg"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editPost} from "../store";
import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function ArticleEdition(){

    const {id} = useParams()
    const posts = useSelector((state) => state.news.posts)

    const article = posts.find((post) => {
        return post.id == id
    })

    const [title, setTitle] = useState({title: article.title});
    const [text, setText] = useState({text : article.text});
    const [postImg, setPostImg] = useState({postImg: article.img});
    const [category, setCategory] = useState();
    const [description, setDescription] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(title,text,postImg)
    return (
        <div>
            <Header/>
            <h1 className="h1" style={{marginLeft: '60px', marginBottom: '50px', marginTop: '50px'}}>Добавить новость</h1>

            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginLeft: '50px'}}>
                <div className="1-input">
                    <form>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false" style={{width: '400px', display: 'flex', justifyContent: 'space-between',
                                alignItems: 'center', marginRight: '15px'}}
                            >
                                Выберите категорию
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div className="mb-3" style={{width: '400px'}}>
                            <label htmlFor="formGroupExampleInput" className="form-label">Заголовок новости</label>
                            <input type="text" className="form-control" id="formGroupExampleInput"
                                   placeholder="Заголовок" onChange={(event => {setTitle(event.target.value)})}>
                                {/*{article.title}*/}
                            </input>

                        </div>
                        <div className="form-floating" style={{width: '400px'}}>
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                      style={{height: '100px'}}
                                      onChange={(event => {setDescription(event.target.value)})}/>
                            <label htmlFor="floatingTextarea2">Введите краткое описание</label>
                            {description}
                        </div>

                    </form>

                    <form style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '60px'}}>
                        <img src={img} alt="" style={{width: '70px', height: '70px', marginRight: '45px'}}/>
                        <input type="file" onChange={(event => {setPostImg(event.target.files)})}/>
                        {article.img}
                    </form>
                </div>

                <div className="2-input">
                    <form style={{marginLeft: '120px'}}>
                        <div className="form-floating" style={{width: '400px', height: '400px'}}>
                            <textarea className="form-control" placeholder="Leave a comment here"
                                      style={{height: '250px'}}
                                      onChange={(event => {setText(event.target.value)})}>
                                {article.text}
                            </textarea>
                            <label htmlFor="floatingTextarea2">Введите текст новости</label>
                        </div>
                    </form>
                </div>
            </div>

            <div style={{marginLeft: '800px'}}>
                <button type="submit" className="btn btn-primary" style={{marginTop: '25px'}}
                        onClick={() =>{
                            dispatch(editPost({id: id, title: title, text:text, img:{postImg}}))
                            navigate("/news")
                        }}>Изменить новость</button>
            </div>
            <Footer/>
        </div>
    )
}