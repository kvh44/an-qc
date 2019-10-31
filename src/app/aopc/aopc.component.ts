import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aopc',
  templateUrl: './aopc.component.html',
  styleUrls: ['./aopc.component.scss']
})
export class AopcComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.data$.subscribe({
      next: value => console.log(value),
      error: err => console.error(err),
      complete: () => console.log('DONE!')
  });

  }



  data$ = new Observable(observer => {

    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();

    setInterval(() => observer.next(new Date().toString()), 1000);

    //observer.complete();

  });


}
