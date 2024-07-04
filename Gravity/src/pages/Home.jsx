import React from "react";
import "../assets/css/home.css";
import tabelaCorpoSite2 from "../assets/images/tabelaCorpoSite2.svg";
import homePackImg1 from "../assets/images/homePack-img1.svg";
import homePackImg2 from "../assets/images/homePack-img2.svg";
import homePackImg3 from "../assets/images/homePack-img-3.svg";
import homePackImg4 from "../assets/images/homePack-img-3-2.svg";
import homePackImg3Back from "../assets/images/homePack-img3-back.svg";
import backgroundImgBlur from "../assets/images/backgroundImgBlur.svg";
import backgroundBlurLow from "../assets/images/backgroundBlur-low.svg";
import Carousel from "../components/Carousel";


function Home() {
    return (
        <main>
            <section className="corpoSite">
                <div className="corpoSite-title">
                    <h1>Balancing <br /> Crypto Markets</h1>

                    <p>Our fully automated proprietary quantitative trading software <br />
                       provides 24/7 liquidity to 170+ crypto assets across 25+ <br />
                       centralized spot and derivative crypto exchanges.</p>

                    <div className="button-body">
                        <a href=""><button>Get in Touch</button></a>
                    </div>
                </div>
            </section>

            <section className="corpoSite-2">
                <div>
                    <h1>About Gravity Team</h1>

                    <p>
                    At Gravity Team, we are on the mission to balance the supply <br />
                    and demand across crypto markets worldwide. We are a crypto <br />
                    native market maker founded by traders, developers, and <br />
                    innovators who are strong believers and supporters of the future <br />
                    of decentralization and digital assets.
                    </p>

                    <div className="tabelaGravity">
                        <img src={tabelaCorpoSite2} alt="" />
                    </div>
                </div>
            </section>

            <section className="corpoSite-3">
                <div className="background-blur">
                    <img src={homePackImg3Back} alt="" />
                </div>
                <div>
                    <h1>Crypto Market Making</h1>
                </div>
                <p>
                We are a global crypto liquidity provider and algorithmic market <br />
                maker. We trade digital assets listed on Centralized Exchanges in <br />
                over 15 countries worldwide.
                </p>
                <div className="home-pack-1">
                    <div className="home-pack-1-text">
                        <h1>Market Making for <br /> Crypto Projects</h1>
                        <h2>Accelerate your token’s journey by <br /> boosting its liquidity</h2>
                        <p>We invest in building long-term, <br />
                        sustainable relationships and support our <br />
                        projects in their growth journey with our <br />
                        services, industry expertise and network.
                        </p>
                    </div>
                    <img src={homePackImg1} alt="" />
                </div>
                <div className="home-pack-2">
                    <img src={homePackImg2} alt="" />
                    <div className="home-pack-2-text">
                    <h1>Market Making for <br /> Crypto Exchanges</h1>
                    <h2>Attract more traders and projects with <br /> deep order books & liquidity</h2>
                    <p>
                    Our world-class market making services are <br />
                    proven to help local and emerging exchanges <br />
                    win traders and gain market-leading positions <br />
                    of up to 90% market dominance.
                    </p>
                    </div>
                </div>
                <div className="home-pack-3">
                    <div className="background-blur">
                        <img src={homePackImg3Back} alt="" />
                    </div>
                    <div className="home-pack-3-text">
                        <h1>Our Partners <br /> & Friends</h1>
                        <img src={homePackImg4} alt="" />
                    </div>
                    <img src={homePackImg3} alt="" />
                </div>
            </section>
            <section className="low-body-area">
                <Carousel />
            </section>

            <section className="finish-body">
                <h1>Join Gravity Team</h1>
                <div className="background-blur-2">
                    <img src={backgroundImgBlur} alt="" />
                </div>
                <p>
                   Join our community of innovators, problem solvers and owners who 
                   apply scientific discovery techniques to make crypto markets a better place for everyone.
                   <br /><br />
                   As we emphasize it in our name – Gravity Team, we are a team. 
                   A team of bright, talented people, each masters of their specialty, 
                   curious about the world and eager to solve the new exciting cryptocurrency market problems, 
                   build cool stuff and have fun whilst doing so!
                </p>
            </section>

            <section className="finish-body-2">
                <h1>Contact Us</h1>
                <div className="background-blur-3">
                    <img src={backgroundBlurLow} alt="" />
                </div>
                   <p>
                   We are always open to discuss new value-adding partnerships. Do reach 
                   out if you are an exchange or a project looking for liquidity; an algorithmic 
                   trader or a software developer looking to improve the markets with us or 
                   just have a great idea you can’t wait to share with us!
                   </p>

                   <button>Get in Touch</button>
            </section>
        </main>
    );
}

export default Home;
