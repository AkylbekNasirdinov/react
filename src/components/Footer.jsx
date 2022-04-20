import {Link} from "react-router-dom";
import facebookLogo from "../img/facebook.png";
import vkLogo from "../img/vk.svg";
import instagramLogo from "../img/instagram.svg";
import twitterLogo from "../img/twitter.png";

export default function  Footer(){
    return (
        <div className="align-items-start" style={{display: 'flex', flexWrap: 'nowrap',
            justifyContent: 'space-around', marginTop:'200px'}}>
            <div className="footer-nav">
                <div className="container-xxl" style={{paddingBottom: '20px'}}>
                    <span className="navbar-brand mb-0 h1">Навигация по сайту</span>
                </div>
                <nav className=" navbar-light ">
                    <div className="container-xxl">
                        <Link className="navbar-brand" style={{fontSize: '16px'}} to="/">Главная</Link>
                    </div>
                    <div className="container-xxl">
                        <Link className="navbar-brand" style={{fontSize: '16px'}} to="about-us">О нас</Link>
                    </div>
                    <div className="container-xxl">
                        <Link className="navbar-brand" style={{fontSize: '16px'}} to="news">Новости</Link>
                    </div>
                    <div className="container-xxl">
                        <Link className="navbar-brand" style={{fontSize: '16px'}} to="contacts">Контакты</Link>
                    </div>
                </nav>
            </div>

            <div className="footer-media">
                <div className="container-xxl" style={{paddingBottom: '20px'}}>
                    <span className="navbar-brand mb-0 h1">Социальные сети</span>
                </div>
                <nav style={{display: 'flex', flexWrap: 'nowrap'}}>
                    <div style={{marginRight: '25px'}}>
                        <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1637278002&extra_1=s%7Cc%7C313958888526%7Ce%7Cfacebook%7C&placement=&creative=313958888526&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D1637278002%26adgroupid%3D62332989517%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1009827%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwu_mSBhAYEiwA5BBmf7yClD4kEhFEbl56vk2bsDkHsTNZh7zsYktAC1V71YK6UoS9yeLcKRoCZU8QAvD_BwE">
                            <img src={facebookLogo} alt="" width="30" height="24"/>
                        </a>
                    </div>
                    <div style={{marginRight: '25px'}}>
                        <a href="#">
                            <img src={twitterLogo} alt="" width="30" height="24"/>
                        </a>
                    </div>
                    <div style={{marginRight: '25px'}}>
                        <a href="">
                            <img src={vkLogo} alt="" width="30" height="24"/>
                        </a>
                    </div>
                    <div style={{marginRight: '25px'}}>
                        <a href="">
                            <img src={instagramLogo} alt="" width="30" height="24"/>
                        </a>
                    </div>
                </nav>
            </div>
            <div className="footer-info">
                <div className="container-fluid" style={{paddingBottom: '20px'}}>
                    <span className="navbar-brand mb-0 h1">Контактная информация</span>
                </div>
                <p className="card-text" style={{width: '300px'}}>Some quick example text to build on the card title and
                    make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}
