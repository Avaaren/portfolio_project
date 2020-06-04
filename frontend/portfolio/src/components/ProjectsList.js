import React, { Component } from 'react';
import PortfolioService from '../services/PortfolioService'
import '../styles/projects.css'


const projectsService = new PortfolioService();
const BASE_SERVER_URL = 'http://127.0.0.1:8000'
class ProjectsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
        }
    }

    componentDidMount() {
        var self = this;
        projectsService.getProjects().then(function (result) {
            self.setState({ projects: result })
        });
    }

    render() {
        const projectsList = this.state.projects.map(project => <ProjectComponent
            key={project.id}
            project={project} />);
        return (
            <div className="container-fluid">
                <div className="container">
                    {projectsList}
                </div>
            </div>
        );
    }
}
class ProjectComponent extends Component {

    render() {
        const {project} = this.props;

        return(
            <div className="row project">
                <div className="col-12">
                    <ProjectHeader name={project.name}/>
                    <CarouselWrapper project={project}/>
                    <ProjectDescription description={project.description}/>
                </div>
            </div>
        );
    }
}
// Main project components
class ProjectHeader extends Component {
    render() {
        return (
        <h2 className="my-4">{this.props.name}</h2>
        );
    }
}

class CarouselWrapper extends Component {
    render() {

        return (
            <div className="carousel-wrapper">
                <Carousel project={this.props.project}/>
            </div>
        );
    }
}

class ProjectDescription extends Component {
    render() {

        return(
            <div className="description">
                <p>{this.props.description}</p>
            </div>
        );
    }
}

// Carousel components

class Carousel extends Component {
    render (){
        const {project} = this.props;
        return (
            <div className="carousel slide" id={project.id} data-ride="carousel">
                    <CarouselIndicators dataTarget={project.id} images={project.images}/>
                <CarouselInner project={project}/>
            </div>
            
        );
    }
}

class CarouselIndicators extends Component {
    render() {
        const listItems = this.props.images.map( (image, index) => 
        <li key={index} data-target={'#'+this.props.dataTarget} data-slide-to={index} className=''></li>);
        return (
            <ol className='carousel-indicators'>
                {listItems}
            </ol>
        );
    }
}

class CarouselInner extends Component {
    render (){
        const {project} = this.props;
        const carouselItemsList = project.images.map( (image, index) => 
            <CarouselItem key={index} id={index} projectLink={project.link} projectImage={image} projectDescription={project.description}/>
        );
        return(
            <div className="carousel-inner">
                {carouselItemsList}
                <CarouselNav direction="prev" projectId={project.id}/>
                <CarouselNav direction="next" projectId={project.id}/>
            </div>
        );
    }
}

class CarouselItem extends Component {
    render () {
        const { projectLink, projectImage, id } = this.props;

        return (
            <div className={`carousel-item ${id===1 ? "active" : ""}`}>
                <CarouselLink link={projectLink} image={projectImage}/>
                <CarouselCaption description={projectImage.image_description}/>
            </div>
        );
    }
}

class CarouselLink extends Component {
    render() {
        const {link, image} = this.props;

        return (
            <a href={link} className="carousel-link">
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
            <a href={`#${projectId}`} className={`carousel-control-${direction} lool`} role="button"
            data-slide={direction}>
                                    <span className={`carousel-control-${direction}-icon`} aria-hidden="true"></span>
                                    <span className="sr-only">{direction}</span>
            </a>
        );
    }
}


export default ProjectsList;

