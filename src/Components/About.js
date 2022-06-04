import React from 'react'
import { Image } from 'react-bootstrap'
import img1 from "../Assets/img1.svg"
import img2 from "../Assets/img2.svg"
import img3 from "../Assets/img3.svg"
import "../App.css"

const aboutTextStyle = {
    maxWidth: "500px",
    color: "white",
    marginTop: "10vh",
    marginBottom: "10vh",
    marginRight: "10vw",
    marginLeft:"10vw"
}
const rowStyle = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
}
const imageStyle={
    marginLeft:"10vw",
    marginTop:"10vh",
    marginBottom:"10vh",
    width:"30vw"
}
const imageStyleSpec = {
    width:"30vw",
    marginTop:"10vh",
    marginBottom:"10vh",
    marginRight:"10vw"
}

export default function About() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems:"center",
            marginBottom:"50px"
            
        }}>
            <div id="project" style={ rowStyle }>
                <Image src={img1}  style={imageStyle} alt="img1" />
                <div style={aboutTextStyle}>
                    <div className="heading1">Your vital Minions</div>
                    <div className="para1"> At Inovoid we are working on revolutionizing XR with various innovative applications infused with our hand-tracking technology.</div>
                </div>
            </div>
            <div style={ rowStyle }>
                <div style={aboutTextStyle}>
                    <div className="heading1">Our Reality & your Hands</div>
                    <div className="para1">We are letting developers harness our latest tools and technology for launching applications on our platform.</div>
                </div>
                <Image src={img2} style={imageStyleSpec} alt="img2" />
            </div>
            <div style={ rowStyle }>
                <Image src={img3} style={imageStyle} alt="img3" />
                <div style={aboutTextStyle}>
                    <div className="heading1">We build Experience</div>
                    <div className="para1"> We want XR to be easily acessible. Our tech can enable people to experience this seemless immersion at the cost of a meal. </div>
                </div>
            </div>

        </div>
    )
}
