import React, { useState, useEffect } from 'react'
import axios from '../utils/axios'
import './Row.css'


export default function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([])
    const image_baseurl = 'https://image.tmdb.org/t/p/original'
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            console.log("response", request)
            return request;
        }
        fetchData()
    }, [])

    console.log("movies", movies)
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map(
                    (movie) =>
                    ((isLargeRow && movie.poster_path) ||
                        (!isLargeRow && movie.backdrop_path) ? (
                        <img
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            key={movie.id}
                            src={`${image_baseurl}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                }`}
                            alt={movie.name} />
                    ) : (null))
                )}

            </div>
        </div>
    )
}