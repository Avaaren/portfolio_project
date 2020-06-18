import React, { Component } from 'react';


export default class Carousel extends Component {
    render (){
        const {image_path, html_id, description} = this.props;
        return (
            <div className="carousel-wrapper">
                <div className="carousel slide" id={html_id} data-ride="carousel">
                <CarouselIndicators dataTarget={html_id} length={image_path.length}/>
                <CarouselInner image_path={image_path} html_id={html_id} description={description}/>
            </div>
            </div>

        );
    }
}

class CarouselIndicators extends Component {
    render() {
        const listItems = [];

        for (let i = 0; i<this.props.length; i++) {
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
        const {image_path, html_id, description} = this.props;
        const carouselItemsList = image_path.map( (image, index) => 
            <CarouselItem key={index} id={index} projectImage={image} projectName={description} />
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
        const { projectImage, id, description } = this.props;

        return (
            <div className={`carousel-item ${id===1 ? "active" : ""}`}>
                <CarouselLink image={projectImage}/>
                <CarouselCaption description={description}/>
            </div>
        );
    }
}

class CarouselLink extends Component {
    render() {
        const {image} = this.props;
        return (
            <a href='#' className="carousel-link">
                <img src={image} alt="project-screenshot" className="d-block w-100 carousel-image"/>
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