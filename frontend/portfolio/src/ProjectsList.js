import React, { Component } from 'react';
import PortfolioService from './PortfolioService'

const projectsService = new PortfolioService();

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
        return (
           
        );
    }
}

export default ProjectsList;