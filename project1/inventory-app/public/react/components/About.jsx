import React from "react";
import Navbar from "./NavBar";
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <>
            <Navbar />
            <div>
                <div className="container" id="about">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>About Us</h1>
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veniam maiores saepe suscipit minus et, placeat, veritatis optio repudiandae repellat ab laudantium in nesciunt iure unde ipsa id doloremque alias distinctio voluptatum quo natus. Ratione veritatis voluptates excepturi doloribus aperiam ad a temporibus in tempora deleniti fugit perspiciatis sunt, explicabo, quas dolorem aliquid alias dolore consequuntur dolor delectus at? Rem reprehenderit temporibus illo esse vero qui, optio blanditiis est perspiciatis necessitatibus nemo quasi totam, facilis doloremque? Atque reiciendis totam expedita minus assumenda et soluta suscipit voluptas dolore doloremque exercitationem, tempore quae quod officiis beatae facere omnis sequi consequatur deserunt iure.
                            </p>
                            <NavLink to="/contact" className="btn btn-outline-primary">Contact Us</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About