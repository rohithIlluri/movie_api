package com.dev.movies.Service;

import com.dev.movies.Entity.Movie;
import com.dev.movies.Repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> findAllMovies(){

        return movieRepository.findAll();
    }

    public Optional<Movie> singleMovie(String imdbId ){
        return movieRepository.findMovieByImdbId(imdbId);

    }


}
