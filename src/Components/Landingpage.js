import React from 'react'
import Header from './Header'
import meteorbg from "../Assets/meteorbg.png"
import { Container, Image } from 'react-bootstrap'
import girlFly from "../Assets/girl-fly.png"
import "../app.css"
import SocialMenu from './SocialMenu'

//stylesheet
const firstFlex={
    opacity: "0.8",
    borderRadius: "5px",
    textAlign: "right",
    color: "white",
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center"
};
const socialStyle={
    position:"absolute",
    zIndex:"20",
    left:"10px",
    bottom:"100px"

}

export default function Landingpage() {
    return (
        <div style={{ backgroundColor: "black" }} >
            <Header />
            <div style={firstFlex}>
                <div style={socialStyle}>
                    <SocialMenu />
                </div>
                <Container style={{
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    zIndex: "10",
                    top: "150px",
                    left: "150px",
                    marginLeft: "10vw",
                    width: "100%",
                    textAlign: "left"
                }}>
                    <h1>Experience Metaverse like<br />never before </h1>
                    <h4>Our revolutionary technology is all set to simplify<br /> your VR experience</h4>

                </Container>
                <li className="girl-fly">
                    <Image src={girlFly} style={{
                        maxHeight: "80vh",
                        marginTop: "0px",
                        position: "absolute",
                        left: "65%",
                        top: "50%",
                        transform: "translate(-50%,-50%)",
                        opacity: "0.9"
                    }} alt="meteor-bg" /></li>
                <Image src={meteorbg} id="meteorbg" style={{
                    marginTop: "0px",
                    overflow: "hidden",
                    height: "100vh",
                    width: "100vw"
                }} alt="meteor-bg" />

            </div>
        </div>
    )
}
