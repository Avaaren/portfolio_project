import React, { Component } from 'react';
import PortfolioService from '../../services/PortfolioService'
import SliderDownComponent from '../SliderDownComponent'
import LandingCarousel from '../LandingCarousel'


const projectsService = new PortfolioService()


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
                            <LandingCarousel projects={this.state.projects} html_id='projects-carousel'/>
                            <SliderDownComponent />
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}


