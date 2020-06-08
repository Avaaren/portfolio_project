import React, { Component } from 'react'
import '../styles/base.css'

export default class SliderDown extends Component {

    onClick = (event) => {
        const node = event.currentTarget.closest('.container')
        window.scrollTo({
            top: node.nextSibling.offsetTop,
            behavior: "smooth"
       });
    }
    render() {
        return(
            <div className="slider-down" onClick={this.onClick}>
                <span>
                    <img src="https://img.icons8.com/carbon-copy/100/000000/chevron-down.png" alt="slider-down" />
                </span>
            </div>
        );
    }

}