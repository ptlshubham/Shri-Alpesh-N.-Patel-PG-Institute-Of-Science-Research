import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  researchData: any = [];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getCommeteeDataById();

  }
  getCommeteeDataById() {
    this.homeService.getResearchDetails(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.researchData = res;
      this.researchData[0].cols=true;
    })
  }
  open(i: any) {
    this.researchData[i].cols = true;
    debugger
    this.researchData.forEach((element: any, index: any) => {
      if (index == i) {
        element.cols = true;
      } else {
        element.cols = false;
      }
    });
  }
}
