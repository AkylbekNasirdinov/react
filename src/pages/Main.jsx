import Header from "../components/Header";
import Slider from "../components/Slider";
import ArticleCardSmall from "../components/ArticleCardSmall";
import NewsSubscription from "../components/NewsSubscription";
import Footer from "../components/Footer";
import img from "../img/news_imgs_1.jpg";
import img2 from "../img/news_imgs_2.jpg";
import img3 from "../img/news_imgs_3.jpg";


export default function Main() {
    return (
        <div>
            <Header/>
            <Slider/>
            <div className="container px-4" style={{marginTop:'60px'}}>
                <div className="row gx-5">
                    <ArticleCardSmall title="Марафон Run the Silk Road"
                                      img = {img}
                                      text="Международный Иссык-Кульский марафон ШОС и беговой клуб Frostrun объявляет о начале открытых тренировок по бегу!"/>

                    <ArticleCardSmall title ="Призовой фонд марафона!"
                                      text = "Дистанция 10 км в абсолютном первенстве с 1 по 3 место
                                   награждаются ценными призами от спонсоров"
                                      img = {img2}/>

                    <ArticleCardSmall title = "Главное событие этого года!"
                                      text = "Скучали по бегам? Ждёте самый масштабный марафон этого года?
                                    Тогда прямо сейчас зарегистрируйтесь по ссылке в профиле!"
                                      img = {img3}/>
                </div>
            </div>
            <div className="row justify-content-md-center" style={{ width: '100%'}}>

                <div className="col-md-auto" style={{marginTop: '35px'}}>
                    <button type="button" className="btn btn-primary">Все новости</button>
                </div>
            </div>
            <NewsSubscription/>
            <Footer/>
        </div>


    )
}