import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './paginainicial.component.html',
  styleUrls: ['./paginainicial.component.sass']
})
export class PaginainicialComponent {
  title = 'qgtfront';
  @ViewChild("carousel") carousel: NgbCarousel;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  scrollToContent() {
    this.carousel.next();
  }
}
