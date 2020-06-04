import React, { Component } from 'react';
import '../../styles/base.css'
import SliderDownComponent from './SliderDown'

export default class AboutProjectSection extends Component {
    render() {
        return (
            <div className="container" id="about-project-link">
                <div className="row">
                    <div className="col-12">
                        <header className="about-project">

                            <h2 className="my-4">О проекте</h2>

                            <p>Данный проект - это сайт-портфолио. Его цель - отточить мастерство создания
                            сайтов, а также продемонстрировать
                            мои навыки в веб-разработке потенциальному работодателю.</p>
                            <p> Он создан на стеке
                            Django/React и включает в себя себя следующие технологии:
                            </p>
                            <ul>
                                <li>
                                    <span className="li-logo">
                                        <img src="img/icons/1024px-Bootstrap_logo.svg.png" alt="" />
                                    </span>
                                    <strong>Bootstrap4</strong> - для придания адаптивности и более простой верстки</li>
                                <li>
                                    <span className="li-logo">
                                        <img src="img/icons/bs4 icon.png" alt="" />
                                    </span>
                                    <strong>Python библиотека Bs4</strong> - для парсинга информации для последующего
                                    размещения на сайте</li>
                                <li>
                                    <span className="li-logo">
                                        <img src="img/icons/celery icon.png" alt="" />
                                    </span>
                                    <strong>Python библиотека Celery</strong> - для создания переодических задач (в
                                    данном случае - парсинга)</li>
                                <li>
                                    <span className="li-logo">
                                        <img src="img/icons/django logo.jpg" alt="" />
                                    </span>
                                    <strong>Django rest framework</strong> - для создания REST API и связи django и
                                    react</li>
                                <li>
                                    <span className="li-logo">
                                        <img src="img/icons/docker logo.png" alt="" />
                                    </span>
                                    <strong>Docker</strong> - для контейнеризации проекта</li>
                            </ul>
                            <p></p>
                            <p>
                                Данный сайт полностью, до последней строчки кода разработан одним человеком. Для связи
                                смотрите раздел "Контакты"
                        </p>
                            <SliderDownComponent />
                        </header>
                    </div>
                </div>
            </div>
        );

    }
}