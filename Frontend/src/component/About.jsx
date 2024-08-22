import React from 'react';
import UserImage from "../assets/Image/man.jpg";

function About({aboutData}) {
   
    return (
        <div>
            {/*-- About Section */}
            <section id="about" className="about section mt-5">

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row gy-4">
                        <div className="col-md-6">
                            <div className="row justify-content-between gy-4">
                                <div className="col-lg-5">
                                    <img src={UserImage} className="img-fluid" alt="Morgan Freeman" />
                                </div>
                                <div className="col-lg-7 about-info">
                                    <p><strong>Name: </strong> <span>{aboutData?.data?.name}</span></p>
                                    <p><strong>Profile: </strong> <span>{aboutData?.data?.name}</span></p>
                                    <p><strong>Email: </strong> <span>{aboutData?.data?.email}</span></p>
                                    <p><strong>Phone: </strong> <span>{aboutData?.data?.phone}</span></p>
                                </div>
                            </div>

                            <div className="skills-content skills-animation">

                                <h5>Skills</h5>

                                <div className="progress">
                                    <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}></div>
                                    </div>
                                </div>{/* End Skills Item */}

                                <div className="progress">
                                    <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}></div>
                                    </div>
                                </div>{/* End Skills Item */}

                                <div className="progress">
                                    <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}></div>
                                    </div>
                                </div>{/* End Skills Item */}

                                <div className="progress">
                                    <span className="skill"><span>Photoshop</span> <i className="val">55%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{ width: '55%' }}></div>
                                    </div>
                                </div> {/* End Skills Item */}

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="about-me">
                                <h4>About me</h4>
                                <p>
                                {aboutData?.data?.description} Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
                                    imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla
                                    porttitor accumsan tincidunt.
                                </p>
                                <p>
                                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
                                    porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
                                </p>
                                <p>
                                    Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                                    Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>  {/* About Section  */}
        </div>
    );
}

export default About;
