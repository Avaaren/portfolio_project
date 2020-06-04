import React, { Component } from 'react';
import '../../styles/base.css'
import PortfolioService from '../../services/PortfolioService'
import SliderDownComponent from '../SliderDownComponent'

const projectsService = new PortfolioService()
const BASE_SERVER_URL = 'http://127.0.0.1:8000'

export default class AboutProjectSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [],
        }
    }

    componentDidMount() {
        // Oh, it’s so obvious now. You’re calling this.setState inside of your callback to Api.get().
        //  You need to cache the reference to this outside of that API call.
        var self = this;
        projectsService.getProjects().then(function (result) {
            self.setState({ projects: result })
        });
    }

    render() {
        return (
            <div className="container" id="my-projects-link">
                <div className="row">
                    <div className="col-12">
                        <section className="my-projects">
                            <h2 className="my-4">Мои проекты</h2>
                            <h3>В данном разделе представлены мои лучшие проекты. Данные берутся
                            из БД, поэтому их можно дополнять и редактировать по усмотрению автора.</h3>
                            <Carousel projects={this.state.projects}/>
                            <SliderDownComponent />
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}


class Carousel extends Component {
    render (){
        const {projects} = this.props;
        return (
            <div className="carousel-wrapper">
                <div className="carousel slide" id="projects-carousel" data-ride="carousel">
                <CarouselIndicators dataTarget="projects-carousel" projectsLength={projects.length}/>
                <CarouselInner projects={projects}/>
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
        const {projects} = this.props;
        const carouselItemsList = projects.map( (project, index) => 
            <CarouselItem key={index} id={index} projectImage={project.images[0]} projectName={project.name} />
        );
        return(
            <div className="carousel-inner">
                {carouselItemsList}
                <CarouselNav direction="prev" projectId='projects-carousel'/>
                <CarouselNav direction="next" projectId='projects-carousel'/>
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
