import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-details-actors',
  templateUrl: './details-actors.component.html',
  styleUrl: './details-actors.component.css'
})
export class DetailsActorsComponent implements OnInit {
 

  constructor(private httpClient:HttpClient, private movieService:MoviesService){

  }

  movieActors:any[]=[];
  errorMessage:any[] = [];

  ngOnInit(): void {
    this.getMovieActors();
  }
  getMovieActors() {
    //this.httpClient.get<any[]>('assets/data/movieActors.json')
    this.movieService.getMovieActors()
    .pipe(
      catchError((error) => {
        console.log("Error loading movie summary: ", error);
        this.errorMessage = error;
        return this.errorMessage;
      })
    )
      .subscribe((data:any[]) => this.movieActors = data);
  }
}
