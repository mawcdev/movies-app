import { HttpClient } from '@angular/common/http';
import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit //, OnChanges, AfterContentInit, AfterViewInit
{
  movieId ='';

  actors = []; //["Star 1", "Star 2", "Star 3", "Star 4"];
  genres = []; //["Genre 1", "Genre 2", "Genre 3", "Genre 4"];
  directors= []; //["Director 1", "Director 2", "Director 3", "Director 4"];
  errorMessage:any=[];
  private movieService = inject(MoviesService);
  
  constructor(private _activatedRoute: ActivatedRoute, private httpClient:HttpClient){ //, private _route:Route){
    this._activatedRoute.params.subscribe((p) => {
      this.movieId = p["id"];

    });
  }

  ngOnInit(): void {
    this.loadMovieSummary();
  }

  loadMovieSummary() {
    //this.httpClient.get('assets/data/movieSummary.json')
    this.movieService.getMovieSummary()
    // .pipe(
    //   catchError((error) => {
    //     console.log("Error loading movie summary: ", error);
    //     this.errorMessage = error;
    //     //return of(null);
    //     return this.errorMessage;
    //   })
    // )
      .subscribe((data:any) => {
        this.actors = data.actors,
        this.genres = data.genres,
        this.directors = data.directors
      });
  }
}
