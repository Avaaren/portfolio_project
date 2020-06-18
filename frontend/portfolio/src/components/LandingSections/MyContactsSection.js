import React, { Component } from 'react';
import LandingCarousel from '../LandingCarousel'

const image_path = [
    "http://127.0.0.1:8000/media/projects/795cba98-b095-47f6-8313-0dec3f1b18cd.jpeg",
    "http://127.0.0.1:8000/media/projects/795cba98-b095-47f6-8313-0dec3f1b18cd.jpeg",
    "http://127.0.0.1:8000/media/projects/795cba98-b095-47f6-8313-0dec3f1b18cd.jpeg",
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
   
   
                       <LandingCarousel image_path={image_path} html_id='contacts-carousel'/>
   
                   </section>
               </div>
           </div>
       </div>
        );
    }
   }
   



