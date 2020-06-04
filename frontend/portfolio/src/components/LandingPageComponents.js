import React, { Component } from 'react';

import '../styles/base.css'

import {
    AboutProjectSection,
    AboutMeSection,
    MyProjectsSection,
    MyResumeSection,
    GithubSection,
    MyContactsSection,

} from './LandingSections/'


class LandingPage extends Component {

}

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* navbar logo */}
                <a href="#" class="navbar-brand">
                    <img src="img/shiba-inu.jpg" alt="logo" width="50" height="50" />
                </a>
                {/* Collapsed navbar button */}
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#collapsedNavbar" aria-expanded="false" aria-label="ToggleNavigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                {/* Collapsing navbar */}
                <div class="collapse navbar-collapse" id="collapsedNavbar">
                    <div class="navbar-nav d-flex justify-content-around" id="flexed-navbar-container">

                        <div class="nav-item">
                            <a href="#about-project-link" class="nav-link">О проекте</a>
                        </div>

                        <div class="nav-item">
                            <a href="#about-me-link" class="nav-link">Обо мне</a>
                        </div>

                        <div class="nav-item">
                            <a href="#my-projects-link" class="nav-link">Мои проекты</a>
                        </div>

                        <div class="nav-item">
                            <a href="#my-resume-link" class="nav-link">Резюме</a>
                        </div>

                        <div class="nav-item">
                            <a href="#my-git-link" class="nav-link">Гит</a>
                        </div>

                        <div class="nav-item">
                            <a href="#my-contacts-link" class="nav-link">Контакты</a>
                        </div>

                    </div>
                </div>

            </nav>
        );
    }
}

class ContentWrapper extends Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <ToStartButton />
                
            </div>
        );
    }
}

class ToStartButton extends Component {
    render() {
        return (
            <div className="to-start-button" style="display: none;">
                <img src="https://img.icons8.com/wired/64/000000/circled-chevron-up.png" />
            </div>
        );
    }
}
