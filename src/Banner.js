import React from 'react';
import './Banner.css';

function Banner() {
    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }
    return (
        <header className="banner" style={{
            backgroundImage: `url("https://d107a8nc3g2c4h.cloudfront.net/images/blog/wp-content/uploads/Xclussive-US-Netflixbanner-bg.jpg")`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}>

            <div className="banner__contents">
                <h1 className="banner__title">
                    Movie Name
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h3 className="banner__description">
                    {truncate(`This is a test description This is a test descriptionThis is a test description This is a test description This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description This is a test description`, 150)}

                </h3>
            </div>
            <div className="banner--fadeBottom" />

        </header>
    )
}

export default Banner
