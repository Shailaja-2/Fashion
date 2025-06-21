import { Link } from "react-router-dom"
import bannerImg from "../../../../assets/images/header.png"

const Banner = () => {
    return (
        <div className="section__container header__container">

            <div className="header__content z-30">

                <h4 className="uppercase">UP TO 20% Discount on</h4>

                <h1 className="">Girl's Fashoin</h1>

                <p>Step into the world of Shailuxe, a curated destination for trendsetting girls who dare to be different. From playful everyday essentials to bold statement pieces, our collection is crafted to inspire confidence, creativity, and individuality. Whether you're chasing street style or soft elegance, we blend modern flair with timeless charm to bring your dream wardrobe to life.</p>

                <button className="btn">
                    <Link to="/shop">Explore Now</Link>
                </button>
            </div>

            <div className="header__image md:w-full hidden md:block">
                <img src={bannerImg} alt="" />
            </div>


        </div>
    )
}

export default Banner