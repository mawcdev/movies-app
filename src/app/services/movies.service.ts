import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private httpClient = inject(HttpClient);
  constructor() { }

  getFanFavorites(){
    return this.httpClient.get<any[]>('assets/data/fanFavoriteMovies.json');
  }

  getTopMovies(){
    return this.httpClient.get<any[]>('assets/data/topMovies.json');
  }

  getMovieSummary(){
    return this.httpClient.get('assets/data/movieSummary.json');
  }

  getMovieActors(){
    return this.httpClient.get<any[]>('assets/data/movieActors.json');
  }

  getSimilarMovies(){
    return this.httpClient.get<any[]>('assets/data/similarMovies.json');
  }

  getMovieReviews(){
    return this.httpClient.get<any[]>('assets/data/movieReviews.json');
  }

  getMovieSearch(){
    return  this.httpClient.get<any[]>('assets/data/searchMovies.json');
  }
}
