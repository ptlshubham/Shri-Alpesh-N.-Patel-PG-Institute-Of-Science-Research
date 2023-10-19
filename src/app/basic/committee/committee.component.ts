import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.css']
})
export class CommitteeComponent implements OnInit {
  commiData: any = [];
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getCommeteeDataById();
  }
  getCommeteeDataById() {
    this.homeService.getCommeteeDetails(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.commiData = res;
      debugger
      for (let i = 0; i < this.commiData.length; i++) {
        this.commiData[i].index = i + 1;
      }
      if(this.commiData.length>0){
        this.commiData[0].cols=true;
      }
    })
  }
  open(i: any) {
    this.commiData[i].cols = true;
    this.commiData.forEach((element: any, index: any) => {
      if (index == i) {
        element.cols = true;
      } else {
        element.cols = false;
      }
    });
  }
}
