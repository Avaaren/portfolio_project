import React, { Component } from 'react';
import LandingCarousel2 from '../LandingCarousel2'

const image_path = [
    require("../../img/social-icons/git.svg"),
    require("../../img/social-icons/hh.png"),
    require("../../img/social-icons/linkedin.png"),
    require("../../img/social-icons/tg.png"),
    require("../../img/social-icons/vk.png"),
]

export default class MyResumeSection extends Component {
    render(){
        return(
           <div className="container" id="my-contacts-link">
           <div className="row">
               <div className="col-12">
                   <section className="my-contacts">
                       <h2 className="my-4">Мои контакты</h2>
                       <h3>Если вы долистали досюда и вы заинтересованы, то связаться можете по следующим контактам</h3>
   
   
                       <LandingCarousel2 image_path={image_path} html_id='contacts-carousel'/>
   
                   </section>
               </div>
           </div>
       </div>
        );
    }
   }
   



