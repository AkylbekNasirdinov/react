import {Link} from "react-router-dom";
import logo from "../img/logo.png"

const imgStyle = {width: '80px', height: '50px'};
const style = { marginLeft: '150px'};


export default function Header(){
return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-xxl">

                <img src={logo} className="" style = {imgStyle}  alt="logo"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={style}>
                        <nav className="navbar-nav">
                            <li><Link to="/" className="nav-link active" aria-current="page" >Главный</Link></li>
                            <li><Link to="/news" className="nav-link">Новости</Link></li>
                            <li><Link to="/contacts" className="nav-link">Контакты</Link></li>
                            <li><Link to="/about-us" className="nav-link">О нас</Link></li>
                            <li><Link to="/add-post" className="nav-link">Добавить новость</Link></li>
                        </nav>
                    </div>
                    <button type="button" className="btn btn-primary">Войти</button>
            </div>
        </nav>

)
}