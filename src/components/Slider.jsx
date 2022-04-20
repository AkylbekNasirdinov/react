import React, { Component } from 'react';
import firstSliderImage from "../img/firstslider.jpg"
import secondSliderImage from "../img/secondslider.jpg"
import thirdSliderImage from "../img/thirdslider.jpg"

class Slider extends Component{
    render() {
        return ( <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner e">
                <div className="carousel-item active">
                    <img src={firstSliderImage} className="d-block w-100" alt="firstslider"/>
                </div>
                <div className="carousel-item">
                    <img src={secondSliderImage} className="d-block w-100" alt="secondslider"/>
                </div>
                <div className="carousel-item ">
                    <img src={thirdSliderImage} className="d-block w-100" alt="thirdslider"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"/>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        );
    }
}

export default Slider;
