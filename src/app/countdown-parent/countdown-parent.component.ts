import { Component } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';
import { AfterViewInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-countdown-parent',
  templateUrl: './countdown-parent.component.html',
  styleUrls: ['./countdown-parent.component.scss']
})
export class CountdownParentComponent implements AfterViewInit {

  constructor() { }
  ngAfterViewInit() {
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  @ViewChild(CountdownTimerComponent)
  private timerComponent!: CountdownTimerComponent;
  seconds() { return 0; }

  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }

}
