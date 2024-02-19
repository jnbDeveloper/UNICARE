import "../assets/css/Landing.css";
import "@fontsource/cabin/400.css";
import "@fontsource/cabin/600.css";

import EUSL from "../assets/images/EUSL.jpg";
import Logo from "../assets/images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Developer1 from "../assets/images/Developer1.png";
import Developer2 from "../assets/images/Developer2.png";
import Developer3 from "../assets/images/Developer3.png";
import Developer4 from "../assets/images/Developer4.png";
import Developer5 from "../assets/images/Developer5.png";
import Developer6 from "../assets/images/Developer6.png";
import Developer7 from "../assets/images/Developer7.png";
import Developer8 from "../assets/images/Developer8.png";

import Github from "../assets/images/Github.svg";
import Linkedin from "../assets/images/Linkedin.svg";
import Facebook from "../assets/images/Facebook.svg";

import { useState, useLayoutEffect, useCallback } from "react";

export default function Landing() {
  const getCardCount = useCallback(() => {
    if (window.innerWidth <= 600) {
      return 1;
    } else if (window.innerWidth <= 800) {
      return 2;
    } else if (window.innerWidth <= 1000) {
      return 3;
    } else {
      return 4;
    }
  }, []);
  const [cards, setCards] = useState(getCardCount());

  useLayoutEffect(() => {
    function updateSize() {
      setCards(getCardCount);
    }
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [getCardCount]);

  return (
    <div
      className="container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('${EUSL}')`,
      }}
    >
      <div className="header" style={{ zIndex: 100 }}>
        <div className="brand-navigation-container">
          <div className="brand-container">
            <img className="logo" src={Logo} alt="Logo" />
            <div className="name-container">
              <span className="name">UNICARE</span>
              <span className="slogan">EUSL SRI LANKA</span>
            </div>
          </div>
          <ul>
            <li>
              <a href="/">Home</a>
              <div className="link-line"></div>
            </li>
            <li>
              <a href="/students/login">Students</a>
              <div className="link-line"></div>
            </li>
            <li>
              <a href="/medical-centre/login">Medical Centre</a>
              <div className="link-line"></div>
            </li>
          </ul>
        </div>
        <IconButton className="mobile-menu-button">
          <MenuIcon />
        </IconButton>
      </div>
      <div className="home">
        <div className="main-title-container">
          <div>
            <div className="main-title">UNICARE</div>
            <div className="sub-title">
              Eastern University
              <br />
              Sri Lanka
            </div>
          </div>
          <div class="wrapper">
            <div class="loader">
              <div class="wave top-wave">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div class="wave bottom-wave">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us">
        <div className="title">Developers</div>
        <div className="carousel-container">
          <OwlCarousel
            className="owl-theme"
            margin={10}
            items={cards}
            autoplayTimeout={2000}
            autoplayHoverPause
            loop
            autoplay
          >
            {/* Developer 1 */}
            <div class="item">
              <div className="developer">
                <div className="personal">
                  <img src={Developer1} alt="Developer" />
                  <div className="name-container">
                    <span className="name">Nayanajith Bandara</span>
                    <span className="regno">EU/IS/2019/PHY/76</span>
                    <span className="bio">
                      I am a passionate backend developer with 7 years of
                      experience in designing, implementing, and maintaining
                      robust server-side systems. My expertise lies in crafting
                      efficient algorithms, architecting scalable solutions, and
                      optimizing database performance to ensure seamless
                      functionality for web and mobile application.
                    </span>
                  </div>
                </div>
                <div className="socialmedia-container">
                  <a
                    href="https://www.linkedin.com/in/nayanajith-bandara-b79048280"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                  <a
                    href="https://github.com/jnbDeveloper"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={Github} alt="Github" />
                  </a>
                  <a
                    href="https://web.facebook.com/profile.php?id=100009075075887"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={Facebook} alt="Facebook" />
                  </a>
                </div>
              </div>
            </div>
            {/* Developer 2 */}
            <div class="item">
              <div className="developer">
                <div className="personal">
                  <img src={Developer2} alt="Developer" />
                  <div className="name-container">
                    <span className="name">Kasun Buddhika</span>
                    <span className="regno">EU/IS/2019/PHY/26</span>
                    <span className="bio">
                      Hi there! I'm Kasun Buddhika, a software developer fueled
                      by a passion for innovation and problem-solving. Ever
                      since I wrote my first line of code, I've been captivated
                      by the endless possibilities of technology. With a
                      background in computer science, I thrive in dynamic
                      environments where I can collaborate with like-minded
                      individuals to turn ideas into reality. Whether it's
                      crafting elegant algorithms or architecting scalable
                      systems, I'm committed to pushing the boundaries of what's
                      possible in the world of software development.
                    </span>
                  </div>
                </div>
                <div className="socialmedia-container">
                  <a
                    href="https://www.linkedin.com/in/kasun-buddhika-hettiarachchi-521b5b19a"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                  <a
                    href="https://github.com/kasun-buddhika"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={Github} alt="Github" />
                  </a>
                  <a
                    href="https://www.facebook.com/kasun.buddika.752?mibextid=ZbWKwL"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={Facebook} alt="Facebook" />
                  </a>
                </div>
              </div>
            </div>
            {/* Developer 3 */}
            <div class="item">
              <div className="developer">
                <div className="personal">
                  <img src={Developer3} alt="Developer" />
                  <div className="name-container">
                    <span className="name">Shashika Kumari</span>
                    <span className="regno">EU/IS/2019/PHY/132</span>
                    <span className="bio">
                      Hey, I'm Sashika Kumari, a software developer with a
                      creative twist. For me, coding isn't just about building
                      applications. It's about expressing myself through lines
                      of code. With a degree in software engineering and a
                      passion for design, I love bringing ideas to life in ways
                      that are both functional and beautiful. From designing
                      intuitive user interfaces to crafting elegant algorithms,
                      I thrive on the intersection of art and technology,
                      constantly seeking new ways to innovate and inspire.
                    </span>
                  </div>
                </div>
                <div className="socialmedia-container">
                  <a href="/">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                  <a
                    href="https://github.com/sashi714"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={Github} alt="Github" />
                  </a>
                  <a href="/">
                    <img src={Facebook} alt="Facebook" />
                  </a>
                </div>
              </div>
            </div>
            {/* Developer 4 */}
            <div class="item">
              <div className="developer">
                <div className="personal">
                  <img src={Developer4} alt="Developer" />
                  <div className="name-container">
                    <span className="name">Imashi Perera</span>
                    <span className="regno">EU/IS/2019/PHY/72</span>
                    <span className="bio">
                      Greetings! I'm Imashi Perera, a software developer on a
                      quest for knowledge and understanding. With a background
                      in computer engineering, I'm driven by an insatiable
                      curiosity to unravel complex problems and discover elegant
                      solutions. Whether it's diving into new programming
                      languages or exploring the latest frameworks, I'm always
                      eager to expand my skill set and embrace new challenges
                      head-on. With each line of code I write, I'm not just
                      solving problems—I'm embarking on a journey of discovery
                      and growth.
                    </span>
                  </div>
                </div>
                <div className="socialmedia-container">
                  <a href="/">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                  <a
                    href="https://github.com/imashiperera02"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={Github} alt="Github" />
                  </a>
                  <a href="/">
                    <img src={Facebook} alt="Facebook" />
                  </a>
                </div>
              </div>
            </div>
            {/* Developer 5 */}
            <div class="item">
              <div className="developer">
                <div className="personal">
                  <img src={Developer5} alt="Developer" />
                  <div className="name-container">
                    <span className="name">Vimukthi Piyumal</span>
                    <span className="regno">EU/IS/2019/PHY/10</span>
                    <span className="bio">
                      Hi, I'm Vimukthi Piyumal, a software developer with a
                      passion for sharing the transformative power of technology
                      with the world. With a degree in computer science and a
                      background in software engineering, I believe that
                      technology has the potential to revolutionize industries,
                      empower individuals, and drive positive change on a global
                      scale. Whether it's through mentoring aspiring developers
                      or championing the latest advancements in software
                      development, I'm committed to inspiring others and
                      building a brighter future through technology.
                    </span>
                  </div>
                </div>
                <div className="socialmedia-container">
                  <a href="/">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                  <a href="/">
                    <img src={Github} alt="Github" />
                  </a>
                  <a href="/">
                    <img src={Facebook} alt="Facebook" />
                  </a>
                </div>
              </div>
            </div>
            {/* Developer 5 */}
            <div class="item">
              <div className="developer">
                <div className="personal">
                  <img src={Developer6} alt="Developer" />
                  <div className="name-container">
                    <span className="name">Lakshitha Madhuranga</span>
                    <span className="regno">EU/IS/2019/PHY/127</span>
                    <span className="bio">
                      Hey, I'm Lakshitha Madhuranga, a software developer with a
                      relentless focus on agility and adaptability. With a
                      background in agile methodologies and a passion for
                      continuous improvement, I thrive in fast-paced
                      environments where collaboration and innovation are the
                      norm. Whether it's sprint planning, pair programming, or
                      conducting retrospectives, I believe that embracing agile
                      principles is the key to delivering high-quality software
                      that meets the ever-changing needs of users. With each
                      iteration, I'm committed to delivering value, fostering
                      collaboration, and driving excellence in software
                      development.
                    </span>
                  </div>
                </div>
                <div className="socialmedia-container">
                  <a href="/">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                  <a
                    href="https://github.com/lakey1998"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={Github} alt="Github" />
                  </a>
                  <a href="/">
                    <img src={Facebook} alt="Facebook" />
                  </a>
                </div>
              </div>
            </div>
            {/* Developer 7 */}
            <div class="item">
              <div className="developer">
                <div className="personal">
                  <img src={Developer7} alt="Developer" />
                  <div className="name-container">
                    <span className="name">Jiffry Sansitha</span>
                    <span className="regno">EU/IS/2019/PHY/61</span>
                    <span className="bio">
                      Hi there! I'm Jiffry Sansitha, a software developer with a
                      deep appreciation for the power of community and
                      collaboration. With a degree in computer science and a
                      passion for open-source software, I believe that the
                      strength of our code lies not just in its functionality,
                      but in the connections we forge with others. Whether it's
                      contributing to open-source projects, organizing tech
                      meetups, or mentoring aspiring developers, I'm dedicated
                      to building inclusive communities where knowledge is
                      shared, ideas are celebrated, and everyone has a seat at
                      the table.
                    </span>
                  </div>
                </div>
                <div className="socialmedia-container">
                  <a href="/">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                  <a
                    href="https://github.com/sansi0704"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={Github} alt="Github" />
                  </a>
                  <a href="/">
                    <img src={Facebook} alt="Facebook" />
                  </a>
                </div>
              </div>
            </div>
            {/* Developer 8 */}
            <div class="item">
              <div className="developer">
                <div className="personal">
                  <img src={Developer8} alt="Developer" />
                  <div className="name-container">
                    <span className="name">M. Afran</span>
                    <span className="regno">EU/IS/2019/PHY/56</span>
                    <span className="bio">
                      Hello, I'm Affran, a software developer driven by a
                      relentless focus on the user experience. With a background
                      in human-computer interaction and a passion for
                      user-centered design, I believe that the best software is
                      not just functional—it's intuitive, accessible, and
                      delightful to use. Whether it's conducting user research,
                      designing wireframes, or iterating based on user feedback,
                      I'm committed to putting the needs of users front and
                      center in everything I do. With each line of code I write,
                      I'm not just building software. I'm crafting experiences
                      that empower and inspire.
                    </span>
                  </div>
                </div>
                <div className="socialmedia-container">
                  <a href="/">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                  <a
                    href="https://github.com/Hydra73423"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={Github} alt="Github" />
                  </a>
                  <a href="/">
                    <img src={Facebook} alt="Facebook" />
                  </a>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}
