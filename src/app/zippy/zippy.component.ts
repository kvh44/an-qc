import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent implements OnInit {

  visible: boolean = false;
  @Input() comeInEvent : string;
  @Output() openEvent : EventEmitter<any> = new EventEmitter();
  @Output() closeEvent : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.comeInEvent);
  }

  toggle() {
    this.visible = !this.visible;

    if(this.visible) {
      this.openEvent.emit(null);
    } else {
      this.closeEvent.emit(null);
    }
  }

}
