import React, { Component } from 'react';
import SliderDownComponent from '../SliderDownComponent'
import LandingCarousel2 from '../LandingCarousel2'

const image_path = [
    require("../../img/technologies/django.jpg"),
    require("../../img/technologies/python.jpg"),
    require("../../img/technologies/react.png"),
    require("../../img/technologies/js.png"),
    require("../../img/technologies/html.jpg"),
    require("../../img/technologies/drf.png"),

]
export default class MyResumeSection extends Component {
 render(){
     return(
        <div className="container" id="my-resume-link">
        <div className="row">
            <div className="col-12">
                <section className="my-stack">
                    <h2 className="my-4">Мои технологии</h2>
                    <h3>В данном разделе представлены технологии, которыми я владею</h3>


                    <LandingCarousel2 image_path={image_path} html_id='stack-carousel'/>
                    <SliderDownComponent />

                </section>
            </div>
        </div>
    </div>
     );
 }
}
