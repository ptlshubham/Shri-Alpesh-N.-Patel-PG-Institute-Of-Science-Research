import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;
  isSticky: boolean = false;
  public collapsed = true;
  readMore = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  moreOpen() {
    this.readMore = true;
  }
  displayStyle = "none";
  displayStyle1 = "none";
  displayStyle2 = "none";
  displayStyle3 = "none";
  displayStyle4 = "none";
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
    this.displayStyle1 = "none";
    this.displayStyle2 = "none";
    this.displayStyle3 = "none";
    this.displayStyle4 = "none";
  }
  openPopup1() {
    this.displayStyle1 = "block";
  }
  openPopup2() {
    this.displayStyle2 = "block";
  }
  openPopup3() {
    this.displayStyle3 = "block";
  }
  openPopup4() {
    this.displayStyle4 = "block";
  }
  searchSchool(id: any) {
    this.router.navigate(['/more/search', id]);

  }
}
