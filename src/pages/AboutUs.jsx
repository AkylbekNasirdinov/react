import Header from "../components/Header";
import Footer from "../components/Footer";
import secondSliderImage from "../img/secondslider.jpg";

export default function AboutUs(){
    return (
        <div>
            <Header/>
            <h1 className="h1" style={{marginLeft: '70px', marginBottom: '40px', marginTop: '60px'}}>О нас</h1>

            <div className="card mb-3" style={{maxWidth: '1240px', marginLeft: '70px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={secondSliderImage} className="img-fluid " alt="..." style={{marginTop: '20px'}}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">О нас</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                                This is a wider card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.
                                This is a wider card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.
                                This is a wider card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.
                                This is a wider card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.
                                This is a wider card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}