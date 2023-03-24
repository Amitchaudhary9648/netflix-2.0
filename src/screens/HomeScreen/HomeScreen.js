import React from 'react'
import './HomeScreen.css'
import Banner from '../../components/Banner'
import Row from '../../components/Row'
import requests from '../../utils/Requests'
import Nav from '../../components/Nav'

function HomeScreen() {
    return (
        <div className='homeScreen'>
            <Nav />
            <Banner />
            <Row
                title={"NETFLIX ORIGINAL"}
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow={true}
            />

            <Row
                title={"Trending Now"}
                fetchUrl={requests.fetchTrending}
            />

            <Row
                title={"Top Rated"}
                fetchUrl={requests.fetchTopRated}
            />
            <Row
                title={"Action Movies"}
                fetchUrl={requests.fetchActionMovies}
            />
            <Row
                title={"Comedy Movies"}
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row
                title={"Horror Movies"}
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row
                title={"Romance Movies"}
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row
                title={"Documentaries"}
                fetchUrl={requests.fetchDocumentaries}
            />
        </div>
    )
}

export default HomeScreen