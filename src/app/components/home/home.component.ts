import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private httpClient: HttpClient, private movieService:MoviesService) {

  }

  isActive = true;

  fanFavoriteMovies: any[] = [];

  topMovies: any[] = [];

  ngOnInit(): void {
    this.getFanFavorites();
    this.getTopMovies();
  }

  getFanFavorites() {
    //this.httpClient.get<any[]>('assets/data/fanFavoriteMovies.json')
    this.movieService.getFanFavorites()
      .subscribe(
        {
          next: (data) => {
            this.fanFavoriteMovies = data;
          },
          error: (error) => {
            console.log("Error loading fan favorites data: ", error);
          },
          complete: () => {
            console.log("Request completed successfully.");
          }
        }
      );
  }

  getTopMovies() {
    //this.httpClient.get<any[]>('assets/data/topMovies.json')
    this.movieService.getTopMovies()
      .pipe(
        catchError((error) => {
          console.log("Error loading top movies data: ", error);

          return of(null);
        })
      )
      .subscribe((data) => {
        if(data){
          this.topMovies = data;
        }
        else{
          this.topMovies=[];
        }
      });
      // .subscribe(
      //   {
      //     next: (data) => { 
      //       this.topMovies = data 
      //     },
      //     error: (error) => {
      //       console.log("Error loading top movies data: ", error);
      //     },
      //     complete: () => {
      //       console.log("Request completed successfuly.");
      //     }
      //   }
      // );
  }
}

