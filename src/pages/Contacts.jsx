import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contacts() {
    return (
        <div>
            <Header/>
            <div className="row" style={{marginTop: '50px',marginRight:'-20px', maxWidth: '100%', display: 'flex', justifyContent: 'space-around'}}>
                <div className="col-sm-6">
                    <div className="card">
                        <h3 className="card-title" style={{marginLeft: '20px'}}>Номер телефона</h3>
                        <div className="card-body" style={{display:' flex', flexDirection: 'column'}}>
                            <p className="card-text">Можете звонить хоть 24/7. Я всегда ваш</p>
                            <a href="tel:+79876543210" style={{textDecoration: 'none', color: 'blue', fontSize: '18px'}}>
                                +7 (987) 654-32-10
                            </a>
                            <a href="tel:+71234567890" style={{textDecoration: 'none', color: 'blue', fontSize: '18px'}}>
                                +7 (123) 456-78-90
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <h3 className="card-title" style={{marginLeft: '20px'}}>Электронная почта</h3>
                        <div className="card-body" style={{display:' flex', flexDirection: 'column'}}>
                            <p className="card-text">Пиши дорогой пиши. Я Всегда рад твоим сообщением</p>
                            <a href="mailto:example@example.com"
                               style={{textDecoration: 'none', color: 'blue', fontSize: '18px'}}>
                                example@example.com
                            </a>
                            <a href="mailto:support@example.com"
                              style={{textDecoration: 'none', color: 'blue', fontSize: '18px'}}>
                                support@example.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}