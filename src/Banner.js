import React, { useState, useEffect } from 'react';
import './Banner.css';
import axios from './axios';
import requests from './Requests';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }
    return (
        <header className="banner" style={{
            backgroundImage: `linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(19, 19, 19, 0.7) 30%,
      rgba(0, 0, 0, 0) 100%
    ),url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}>

            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h3 className="banner__description">
                    {truncate(movie?.overview, 150)}

                </h3>
            </div>
            <div className="banner--fadeBottom" />

        </header>
    )
}

export default Banner
