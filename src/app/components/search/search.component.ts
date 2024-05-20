import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  search = "Sample Search";
  movieTitle = "Movie #3";
  searchMovies:any[] = [];
  errorMessage:any[] = [];

  constructor(private _activatedRoute: ActivatedRoute, private movieService:MoviesService){
    this._activatedRoute.params.subscribe((p) => {
      this.movieTitle = p["movieTitle"];
    })
  }

  ngOnInit(): void {
    this.getSearchMovies();
  }
  getSearchMovies() {
   // this.httpClient.get<any[]>('assets/data/searchMovies.json')
   this.movieService.getMovieSearch()
   .pipe(
    catchError((error) => {
      console.log("Error loading movie summary: ", error);
      this.errorMessage = error;
      //return of(null);
      return this.errorMessage;
    })
  )
      .subscribe((data) => this.searchMovies = data);
  }
}
