import UserImage from "../assets/Image/man.jpg";

function Hero() {
    return (
        <section id="hero" className="hero section dark-background">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 md-6 sm-12">
                    <div className="hero-text">
                        <h2 className="text-white">Morgan Freeman</h2>
                        <p className="hero-description">
                        Lorem ipsum dolar site text animal hell site text original. Lorem ipsum dolar site text animal hell site text original
                        Lorem ipsum dolar site text animal hell site text original. Lorem ipsum dolar .
                         </p>
                         <button className="hero-btn"> Let's get start </button>
                    </div>
                    </div>
                    <div className="col-md-6 lg-6 sm-12">
                    <img src={UserImage} className="hero-image" alt="image" />
                    </div>  
                                     
                </div>
            </div>

        </section>
    );
}

export default Hero;
