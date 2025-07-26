import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy{
  styles = [
    { color: '#FE5353', fontFamily: 'Arial' },
    { color: '#83E468', fontFamily: 'Courier New' },
    { color: '#6FB0FF', fontFamily: 'Georgia' },
    { color: '#404040', fontFamily: 'Verdana' }
  ];

  currentStyleIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentStyleIndex = (this.currentStyleIndex + 1) % this.styles.length;
    }, 250);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  get currentStyle() {
    return this.styles[this.currentStyleIndex];
  }
}
