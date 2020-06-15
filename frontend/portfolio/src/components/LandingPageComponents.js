import React, { Component, createRef } from 'react';

import '../styles/base.css'


import AboutProjectSection from './LandingSections/AboutProjectSection'
import AboutMeSection from './LandingSections/AboutMeSection'
import MyProjectsSection from './LandingSections/MyProjectsSection'
import MyResumeSection from './LandingSections/MyResumeSection'
import GithubSection from './LandingSections/GithubSection'
import MyContactsSection from './LandingSections/MyContactsSection'


export default class LandingPage extends Component {

    constructor(props) {
        super(props)
        this.toStartRef = createRef()
        this.state = { isScroll: false };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    // Show to start button when scrolling down
    handleScroll = (event) => {
        if (event.currentTarget.pageYOffset > 300) {
            this.setState({ isScroll: true });
        }
        else {
            this.setState({ isScroll: false });
        }
    }

    // Hadling click on to start button
    onStartClick = (event) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    }

    render() {
        return (
            <div className="container-fluid p-0">
                <Navbar />
                <ToStartButton isScroll={this.state.isScroll} onClick={this.onStartClick}/>
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
                    <img src={require("../img/shiba-inu.jpg")} alt="logo" width="50" height="50" />
                </a>
                {/* Collapsed navbar button */}
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#collapsedNavbar" aria-expanded="false" aria-label="ToggleNavigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsing navbar */}
                <div className="collapse navbar-collapse" id="collapsedNavbar">
                    <div className="navbar-nav d-flex justify-content-around" id="flexed-navbar-container">

                        <NavbarItem id="about-project-link" name='О проекте' />

                        <NavbarItem id="about-me-link" name='Обо мне' />

                        <NavbarItem id="my-projects-link" name='Мои проекты' />
                        <NavbarItem id="my-resume-link" name='Резюме' />

                        <NavbarItem id="my-git-link" name='Гит' />

                        <NavbarItem id="my-contacts-link" name='Контакты' />
                    </div>
                </div>

            </nav>
        );
    }
}

class NavbarItem extends Component {
    // By click getting id of element to scroll from <a> tag
    onClick = (event) => {
        event.preventDefault();
        const id=event.currentTarget.href.split('#')[1];
        window.scrollTo({
            top: document.getElementById(id).offsetTop,
            behavior: "smooth"
       });
    }

    render() {
        const {id, name} = this.props;
        return(
            <div className="nav-item">
                <a href={`#${id}`} className="nav-link" onClick={this.onClick}>{name}</a>
            </div>
        );
    }
}

class ToStartButton extends Component {
    render() {
        return (
            <div className="to-start-button" onClick={this.props.onClick} style={{ display: this.props.isScroll ? 'block' : 'none' }} >
                <img src="https://img.icons8.com/wired/64/000000/circled-chevron-up.png" />
            </div>
        );
    }
}