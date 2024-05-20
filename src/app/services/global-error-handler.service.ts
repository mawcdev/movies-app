import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {

  constructor() { }

  handleError(error: any): void {
    //throw new Error('Method not implemented.');
    console.log("Error occured", error);
  }
}
