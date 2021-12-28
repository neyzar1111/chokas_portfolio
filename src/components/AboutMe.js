
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
                    <a href="mailto:choka95@hotmail.com" target="_blank"  rel="noopener noreferrer">
                        <button className="intro-button">
                            send me email
                            <img className= "mailMe_icon" src="/assets/send_blue.png" alt="mail me icon"/>
                        </button>
                    </a>

                </div>

            <section className="skills_section">
                <h2>My Tech Stack</h2>

                <div className="icon-skills_wrap code_skills">
                    <div className="icon-wrap">
                        <img  className="icon-skills" src="/assets/javascript.svg" alt="javascript"/>
                    </div>

                    <div className="icon-wrap">
                        <img className="icon-skills" src="/assets/laravel.png" alt="laravel"/>
                    </div>

                    <div className="icon-wrap">
                        <img className="icon-skills" src="/assets/react.png" alt="react"/>
                    </div>

                    <div className="icon-wrap">
                        <img  className="icon-skills" src="/assets/php.svg"  alt="php" />

                    </div>
                    <div className= "icon-wrap">
                        <img className="icon-skills" src="/assets/typescript.svg" alt="typescript"/>
                    </div>

                    <div className="icon-wrap">
                        <img  className="icon-skills" src="/assets/html-5.svg" alt="html 5"/>
                    </div>
                    <div className="icon-wrap">
                        <img  className="icon-skills" src="/assets/bootstrap.svg" alt="bootstrap"/>
                    </div>
                    <div className="icon-wrap">
                        <img  className="icon-skills" src="/assets/sass.svg" alt="sass"/>
                    </div>

                    <div className="icon-wrap">
                        <img className="icon-skills" src="/assets/git.svg" alt="git"/>
                    </div>
                    <div className="icon-wrap">
                        <img className="icon-skills github-icon" src="/assets/github.svg" alt="github"/>
                    </div>
                    <div className="icon-wrap">
                        <img className="icon-skills" src="/assets/nodejs.svg" alt="node js"/>
                    </div>
                    <div className="icon-wrap">
                        <img className="icon-skills" src="/assets/bash.svg" alt="bash"/>
                    </div>

                </div>

            </section>

        </div>
    );
}

export default AboutMe;
