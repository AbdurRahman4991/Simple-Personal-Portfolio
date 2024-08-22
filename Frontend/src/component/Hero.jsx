import { imageUrl } from "../../redux/api/baseApi";
import UserImage from "../assets/Image/man.jpg";

function Hero({data}) {
    console.log(data);
    return (
        <section id="hero" className="hero section dark-background">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 md-6 sm-12">
                    <div className="hero-text">
                        <h2 className="text-white"> {data?.data?.name}</h2>
                        <p className="hero-description">
                       {data?.data?.description}
                         </p>
                         <button className="hero-btn"> Let's get start </button>
                    </div> 
                    </div>
                    <div className="col-md-6 lg-6 sm-12">
                    <img src={ imageUrl+ data?.data?.image[0]} className="hero-image" alt="image"  />
                    </div>  
                                     
                </div>
            </div>

        </section>
    );
}

export default Hero;
