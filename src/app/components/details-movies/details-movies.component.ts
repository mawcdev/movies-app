import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrl: './details-movies.component.css'
})
export class DetailsMoviesComponent implements OnInit{
  simmilarMovies:any[]=[];
  errorMessage:any[] = [];
  constructor(private httpClient:HttpClient, private movieService:MoviesService){};
  ngOnInit(): void {
    this.getSimilarMovies();
  }
  getSimilarMovies() {
    //this.httpClient.get<any[]>('assets/data/similarMovies.json')
    this.movieService.getSimilarMovies()
    .pipe(
      catchError((error) => {
        console.log("Error loading movie summary: ", error);
        this.errorMessage = error;
        return this.errorMessage;
      })
    )
      .subscribe((data) => this.simmilarMovies = data);
  }
}
