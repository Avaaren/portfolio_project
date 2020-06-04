import React, { Component } from 'react';

const BASE_SERVER_URL = 'http://127.0.0.1:8000'

export default class Carousel extends Component {
    render (){
        const {projects, html_id} = this.props;
        return (
            <div className="carousel-wrapper">
                <div className="carousel slide" id={html_id} data-ride="carousel">
                <CarouselIndicators dataTarget={html_id} projectsLength={projects.length}/>
                <CarouselInner projects={projects} html_id={html_id}/>
            </div>
            </div>
            
        );
    }
}

class CarouselIndicators extends Component {
    render() {
        const listItems = [];
        
        for (let i = 0; i<this.props.projectsLength; i++) {
            let el = <li key={i} data-target={'#'+this.props.dataTarget} data-slide-to={i} className=''></li>;
            listItems.push(el);
        }
        return (
            <ol className='carousel-indicators'>
                {listItems}
            </ol>
        );
    }
}

class CarouselInner extends Component {
    render (){
        const {projects, html_id} = this.props;
        const carouselItemsList = projects.map( (project, index) => 
            <CarouselItem key={index} id={index} projectImage={project.images[0]} projectName={project.name} />
        );
        return(
            <div className="carousel-inner">
                {carouselItemsList}
                <CarouselNav direction="prev" projectId={html_id}/>
                <CarouselNav direction="next" projectId={html_id}/>
            </div>
        );
    }
}

class CarouselItem extends Component {
    render () {
        const { projectName, projectImage, id } = this.props;

        return (
            <div className={`carousel-item ${id===1 ? "active" : ""}`}>
                <CarouselLink image={projectImage}/>
                <CarouselCaption description={projectName}/>
            </div>
        );
    }
}

class CarouselLink extends Component {
    render() {
        const {image} = this.props;

        return (
            <a href='#' className="carousel-link">
                <img src={BASE_SERVER_URL+image.image} alt="project-screenshot" className="d-block w-100 carousel-image"/>
            </a>
        );
    }
}

class CarouselCaption extends Component {
    render() {
        
        return (
            <div className="carousel-caption d-none d-md-block">
                <p className="project-description">
                    {this.props.description}
                </p>
            </div>
        );
    }
}
 
class CarouselNav extends Component{

    render() {
        const {direction, projectId} = this.props;

        return (
            <a href={`#${projectId}`} className={`carousel-control-${direction}`} role="button"
            data-slide={direction}>
                                    <span className={`carousel-control-${direction}-icon`} aria-hidden="true"></span>
                                    <span className="sr-only">{direction}</span>
            </a>
        );
    }
}