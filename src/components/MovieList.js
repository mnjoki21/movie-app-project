import React from "react";

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie) => 
                <img src= {movie.poster} alt= "poster"></img>
            )}
        
        </>
    )
}