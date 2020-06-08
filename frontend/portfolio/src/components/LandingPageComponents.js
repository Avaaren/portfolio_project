import React, { Component } from 'react';

import '../styles/base.css'


import AboutProjectSection from './LandingSections/AboutProjectSection'
import AboutMeSection from './LandingSections/AboutMeSection'
import MyProjectsSection from './LandingSections/MyProjectsSection'
import MyResumeSection from './LandingSections/MyResumeSection'
import GithubSection from './LandingSections/GithubSection'
import MyContactsSection from './LandingSections/MyContactsSection'


export default class LandingPage extends Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <Navbar />
                <ToStartButton />
                <AboutProjectSection />
                <AboutMeSection />
                <MyProjectsSection />
                <GithubSection />
                <MyResumeSection />
                <MyContactsSection />
            </div>
        );
    }
}

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* navbar logo */}
                <a href="#" className="navbar-brand">
                    <img src="img/shiba-inu.jpg" alt="logo" width="50" height="50" />
                </a>
                {/* Collapsed navbar button */}
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#collapsedNavbar" aria-expanded="false" aria-label="ToggleNavigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsing navbar */}
                <div className="collapse navbar-collapse" id="collapsedNavbar">
                    <div className="navbar-nav d-flex justify-content-around" id="flexed-navbar-container">

                        <div className="nav-item">
                            <a href="#about-project-link" className="nav-link">О проекте</a>
                        </div>

                        <div className="nav-item">
                            <a href="#about-me-link" className="nav-link">Обо мне</a>
                        </div>

                        <div className="nav-item">
                            <a href="#my-projects-link" className="nav-link">Мои проекты</a>
                        </div>

                        <div className="nav-item">
                            <a href="#my-resume-link" className="nav-link">Резюме</a>
                        </div>

                        <div className="nav-item">
                            <a href="#my-git-link" className="nav-link">Гит</a>
                        </div>

                        <div className="nav-item">
                            <a href="#my-contacts-link" className="nav-link">Контакты</a>
                        </div>

                    </div>
                </div>

            </nav>
        );
    }
}


class ToStartButton extends Component {
    render() {
        return (
            <div className="to-start-button" style={{display:'none'}} >
                <img src="https://img.icons8.com/wired/64/000000/circled-chevron-up.png" />
            </div>
        );
    }
}
