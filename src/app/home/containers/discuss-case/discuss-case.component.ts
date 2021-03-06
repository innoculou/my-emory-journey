import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discuss-case',
  templateUrl: './discuss-case.component.html',
  styleUrls: ['./discuss-case.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DiscussCaseComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onSwipeLeft(event) {
    this._router.navigate(['home/meet']);
  }

  onSwipeRight(event) {
    this._router.navigate(['home/prescreen']);
  }
}
