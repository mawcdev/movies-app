import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrl: './details-reviews.component.css'
})
export class DetailsReviewsComponent implements OnInit {
  movieReviews:any[]=[];
  errorMessage:any[]=[];
  constructor(private movieService:MoviesService){}

  ngOnInit(): void {
    this.getMovieReviews();
  }
  getMovieReviews() {
    //this.httpClient.get<any[]>('assets/data/movieReviews.json')
    this.movieService.getMovieReviews()
    .pipe(
      catchError((error) => {
        console.log("Error loading movie summary: ", error);
        this.errorMessage = error;
        return this.errorMessage;
      })
    )
      .subscribe((data) => this.movieReviews=data);
  }
}
