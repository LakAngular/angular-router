import { Component, OnInit, ViewEncapsulation, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer2, private eleRef: ElementRef) { }

  ngOnInit() {
    this.renderer.addClass(this.eleRef.nativeElement, 'renderer');
  }

}
