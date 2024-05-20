import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsActorsComponent } from './components/details-actors/details-actors.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderDirective } from './directives/header.directive';
import { MyIfDirective } from './directives/my-if.directive';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { GlobalErrorHandler } from './services/global-error-handler.service';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    DetailsMoviesComponent,
    DetailsReviewsComponent,
    FooterComponent,
    HomeComponent,
    LoaderComponent,
    ModalComponent,
    NavbarComponent,
    NotAuthorizedComponent,
    SearchComponent,
    DetailsActorsComponent,
    NotFoundComponent,
    FeedbackComponent,


    //Directives
    HeaderDirective,
    MyIfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    AuthModule.forRoot({
      domain:'dev-spx67enctaxbj05s.us.auth0.com',
      clientId:'eGZtHAuwR5B19Qzm1G59fKqgQ4jrwj3U',
      authorizationParams:{
        redirect_uri: 
          window.location.origin
      }
    })
  ],
  providers: [
    provideClientHydration(),
    MoviesService,
    //GlobalErrorHandlerService
    { provide: ErrorHandler, useClass:GlobalErrorHandler},
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
