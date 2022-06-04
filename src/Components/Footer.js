import React from 'react'
import { Button, Form, Image } from 'react-bootstrap'
import inovoid from '../Assets/Inovoid.png'
import SocialMenu from './SocialMenu';
import "../App.css"

export default function Footer() {
    return (
        <div>
            <div className='subscribe-bar' id="subscribe-bar">
                <div className='join-us-line'>
                    JOIN US ON OUR <br />JOURNEY OF<br /> ILLUMINATING VOIDS OF<br /> DARKNESS
                </div>
                <div className="sub-form">
                    <div className="sub-line">
                        SUBSCRIBE
                    </div>
                    <Form className="d-flex flex-wrap" >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control className="sub-button" type="email" placeholder="Enter valid email address" />
                        </Form.Group>
                        <Button className="sub-button" style={{ marginBottom: "50px" }} variant="secondary" type="submit" >
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>

            <div className="inovoid-footer">
                <div className="column-0">
                    <Image width="200px" style={{ marginTop: "30px" }} src={inovoid} alt="logo" />
                    <div className="copyright">
                        © 2022 - 2025 INOVOID. All rights reserved.
                    </div>
                </div>
                <div className="coloumn-1">
                    <div className="column-heading">GENERAL</div>
                    <div className="column-content">
                        <a style={{ color: "black" }} href="#project">PROJECT</a>
                        <a style={{ color: "black" }} href="#info">ABOUT US</a>
                        <a style={{ color: "black" }} href="https://rshifts-testweb.vercel.app/contact-us">CONTACT</a>

                    </div>
                </div>
                <div className="column-2">
                    <div className="column-heading" style={{wordWrap:"break-word"}}>FOLLOW US</div>
                    <SocialMenu width="40px" alignItems="flex-start" style={{ margin: "50px" }} />
                </div>
            </div>
        </div>
    )
}
