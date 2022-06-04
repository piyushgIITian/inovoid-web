import React from 'react';
import Header from './Header';
import meteorbg from "../Assets/meteorbg.png";
import { Container, Image } from 'react-bootstrap';
import girlFly from "../Assets/girl-fly.png";
import "../App.css";
import SocialMenu from './SocialMenu';
import starsLine from "../Assets/starsline.png";
import moon from "../Assets/moon.svg";
import landbg from "../Assets/land_spacebg.png";
import meteorShower from "../Assets/meteorShower.png"
import About from './About';
import Info from './Info';
import Footer from './Footer';


//stylesheet
const firstFlex = {
    opacity: "0.8",
    borderRadius: "5px",
    textAlign: "right",
    color: "white",
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    
};
const socialStyle = {
    position: "absolute",
    zIndex: "20",
    left: "10px",
    bottom: "100px"

}
const landText = {
    color: "white",
    display: "flex",
    flexDirection: "column",
    zIndex: "10",
    marginLeft: "10vw",
    paddingBottom: "300px",
    width: "100%",
    textAlign: "left",
    fontFamily: "Sarabun",
    fontStyle: "normal",
    fontWeight: 400
}
const girlStyle = {
    maxHeight: "80vh",
    marginTop: "0px",
    position: "absolute",
    left: "65%",
    top: "50%",
    transform: "translate(-60%,-50%)",
    opacity: "0.9"
}
const meteorStyle = {
    marginTop: "0px",
    overflow: "hidden",
    height: "100vh",
    width: "100vw"
}
const starsStyle = {
    position: "absolute",
    zIndex: "-100",
    left: "10px",
    top: "50px"
}
const moonStyle = {
    position: "absolute",
    zIndex: "-100",
    left: "200px",
    top: "110px"
}
const landStyle = {
    position: "absolute",
    zIndex: "-100",
    left: "200px",
    bottom: "0"
}

const meteorShowerStyle = {
    position: "absolute",
    zIndex: "-100",
    left: "150px",
    top: "350px"
}
export default function Landingpage() {
    return (
        <div className="main-body"  >
            <Header />
            <div className="first-flex" style={firstFlex}>
                <div style={socialStyle}>
                    <SocialMenu />
                </div>
                <div style={starsStyle}>
                    <Image src={starsLine} alt="stars" />
                </div>
                <div style={landStyle}>
                    <Image width="450px" src={landbg} alt="landbg" />
                </div>
                <div style={moonStyle}>
                    <Image width="100px" src={moon} alt="moon" />
                </div>
                <div style={meteorShowerStyle}>
                    <Image width="600px" src={meteorShower} alt="meteor" />
                </div>
                <Container style={landText}>
                    <h1>Experience Metaverse like<br />never before </h1>
                    <h4>Our revolutionary technology is all set to simplify<br /> your VR experience</h4>
                </Container>
                <li className="girl-fly">
                    <Image src={girlFly} style={girlStyle} alt="meteor-bg" /></li>
                <Image src={meteorbg} id="meteorbg" style={meteorStyle} alt="meteor-bg" />

            </div>
            <About/>
            <Info/>
            <Footer/>
        </div>
    )
}
