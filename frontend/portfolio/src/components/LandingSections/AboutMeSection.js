import React, { Component } from 'react';
import SliderDownComponent from '../SliderDownComponent'

export default class AboutMeSection extends Component {
    render() {
        return (
            <div className="container" id="about-me-link">
                <div className="row">
                    <div className="col-12">
                        <section className="about-me">

                            <div className="generic-info">
                                <h2 className="my-4">Обо мне</h2>
                                <h3>Лучиц Денис Валерьевич</h3>
                                <h3>18 лет</h3>
                                <img src={require("../../img/shiba-inu.jpg")} alt="My photo" className="mw-100" id="self-photo" />
                            </div>

                            <div className="distanation">
                                <h3 className="my-3">Местонахождение</h3>
                                <ul className="distanation-ul">
                                    <li>Страна: Беларусь
                                    <span className="li-logo">
                                            <img src={require("../../img/icons/belarus logo.png")} alt="Belarus flag" />
                                        </span>

                                    </li>
                                    <li>Город: Минск
                                    <span className="li-logo">
                                            <img src={require("../../img/icons/minsk logo.png")} alt="Minsk flag" />
                                        </span>

                                    </li>
                                    <li>Языки: Русский
                                    <span className="li-logo">
                                            <img src={require("../../img/icons/russia-logo.jpg")} alt="Russia flag" />
                                        </span>,
                                    Белорусский
                                    <span className="li-logo">
                                            <img src={require("../../img/icons/belarus logo.png")} alt="Belarus flag" />
                                        </span>,
                                    Английский
                                    <span className="li-logo">
                                            <img src={require("../../img/icons/english logo.png")} alt="GB flag" />
                                        </span>

                                    </li>
                                </ul>
                            </div>

                            <div className="in-search-of">
                                <h3 className="my-3">Что ищу?</h3>
                                <p>Углубленно изучаю программирование около года. Занимаюсь
                                backend разработкой на <strong>Python/Django</strong>, стремлюсь к становлению
                                fullstack разработчиком, путем изучения <strong>React и DRF</strong>.</p>

                                <p>Ищу работу в IT по направлениям <strong>Python backend developer</strong> или
                                <strong>fullstack
                                    developer (python/js)</strong>. Для просмотра резюме смотрите раздел "резюме",
                                для связи со мной - раздел "контакты".</p>

                            </div>

                            <SliderDownComponent />
                        </section>
                    </div>
                </div>
            </div>
        );

    }
}