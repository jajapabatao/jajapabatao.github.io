import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = "/";
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;


    // custom animation
    // let config = {
    //   num: [4, 7],
    //   rps: 0.1,
    //   radius: [5, 40],
    //   life: [1.5, 3],
    //   v: [2, 3],
    //   tha: [-40, 40],
    //   alpha: [0.6, 0],
    //   scale: [.1, 0.4],
    //   position: "all",
    //   color: ["random", "#ff0000"],
    //   cross: "dead",
    //   emitter: "follow",
    //   random: 15
    // };

    // if (Math.random() > 0.85) {
    //   config = Object.assign(config, {
    //     onParticleUpdate: (ctx, particle) => {
    //       ctx.beginPath();
    //       ctx.rect(
    //         particle.p.x,
    //         particle.p.y,
    //         particle.radius * 2,
    //         particle.radius * 2
    //       );
    //       ctx.fillStyle = particle.color;
    //       ctx.fill();
    //       ctx.closePath();
    //     }
    //   });
    // }

    const animationStyle = [
      "color",
      // "ball",
      "lines",
      // "thick",
      // "circle",
      "cobweb",
      "polygon",
      "square",
      // "tadpole",
      "fountain",
      // "random",
      // "custom",
    ];

    const random = Math.floor(Math.random() * animationStyle.length);

    return (
      <header id="home">
        <ParticlesBg type={animationStyle[random]} bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>

            {/* <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
              <a href={project} className="button btn project-btn">
                <i className="fa fa-book"></i>Project
              </a>
              <a href={github} className="button btn github-btn">
                <i className="fa fa-github"></i>Github
              </a>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
