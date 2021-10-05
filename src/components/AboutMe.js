import React, {useState, useEffect, useRef} from "react";

function AboutMe() {


    return (
        <div id="about_me">
                <div className="main-intro">
                    <h1>Hi, My name is</h1>
                    <h2 className="big-heading">Aichurok Enazarova.</h2>
                    <h3 className="big-heading bh-second">I build things for the web.</h3>
                    <p>
                        I am passionate about building scalable software, creating effective solutions, and learning every day to grow professionally in the IT field.
                    </p>
                    <a href="mailto:choka95@hotmail.com" target="_blank" >
                        <button className="intro-button">
                            send me email
                            <img className= "mailMe_icon" src="/assets/send_blue.png"/>
                        </button>

                    </a>

                </div>

            <section className="skills_section">
                <h2>My Tech Stack</h2>

                <div className="icon-skills_wrap code_skills">
                    <div className="icon-wrap">
                        <img  className="icon-skills" src="/assets/javascript.svg"/>
                    </div>

                    <div className="icon-wrap">
                        <img className="icon-skills" src="https://img.icons8.com/ios/30/ffffff/laravel.png"/>
                    </div>

                    <div className="icon-wrap">
                        <img className="icon-skills" src="/assets/react.png"/>
                    </div>

                    <div className="icon-wrap">
                        <img  className="icon-skills" src="/assets/php.svg"/>

                    </div>
                    <div className= "icon-wrap">
                        <img className="icon-skills" src="/assets/typescript.svg"/>
                    </div>

                    <div className="icon-wrap">
                        <img  className="icon-skills" src="/assets/html-5.svg"/>
                    </div>
                    <div className="icon-wrap">
                        <img  className="icon-skills" src="/assets/bootstrap.svg"/>
                    </div>
                    <div className="icon-wrap">
                        <img  className="icon-skills" src="/assets/sass.svg"/>
                    </div>

                    <div className="icon-wrap">
                        <img className="icon-skills" src="/assets/git.svg"/>
                    </div>
                    <div className="icon-wrap">
                        <img className="icon-skills github-icon" src="/assets/github.svg"/>
                    </div>
                    <div className="icon-wrap">
                        <img className="icon-skills" src="/assets/nodejs.svg"/>
                    </div>
                    <div className="icon-wrap">
                        <img className="icon-skills" src="/assets/bash.svg"/>
                    </div>

                </div>

            </section>

        </div>
    );
}

export default AboutMe;