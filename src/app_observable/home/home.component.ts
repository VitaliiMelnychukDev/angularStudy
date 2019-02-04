import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Observer, Subscription,interval} from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObservable: Subscription;
  customObservable: Subscription;
  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000)
      .pipe( map((data: number) => {
        return data * 3;
      }));
    this.numbersObservable = myNumbers.subscribe(
      (number: number) => {
        console.log(number);

      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('First Package');
      }, 2000);
      setTimeout(() => {
        observer.next('Second Package');
      }, 4000);
      setTimeout(() => {
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('End Error');
      }, 6000);
      setTimeout(() => {
        observer.error('End Error');
      }, 4500);
    });

    this.customObservable = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log("Completed");
      }
    );
  }

  ngOnDestroy(): void {
    this.numbersObservable.unsubscribe();
    this.customObservable.unsubscribe();
  }
}
