import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.css']
})
export class CommitteeComponent implements OnInit {
  commiData: any = [];
  multiImage: any = [];
  mainData: any = [];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getCommeteeDataById();

  }
  getCommeteeDataById() {
    this.homeService.getCommeteeDetails(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.commiData = res;
      this.commiData.forEach((element: any) => {
        if (element.id) {
          this.homeService.getCommiteeMultiImageById(element.id).subscribe((res: any) => {
              this.multiImage = res;
              this.mainData.push(
                {
                  id: element.id,
                  institute_id: element.institute_id,
                  commTitle: element.commTitle,
                  commDetails: element.commDetails,
                  commImage: element.commImage,
                  createddate: element.createddate,
                  updateddate: element.updateddate,
                  multiImage: this.multiImage,
                  cols:false
                });
                if(this.commiData.length == this.mainData.length){
                  this.open(0);   
                }
              this.multiImage.push(
                {
                  image: element.commImage
                }
              )
          });
        }
      });
      for (let i = 0; i < this.mainData.length; i++) {
        this.mainData[i].index = i + 1;
      }
       
    })
  }
  open(i: any) {
    this.mainData[i].cols = true;
    debugger
    this.mainData.forEach((element: any, index: any) => {
      if (index == i) {
        element.cols = true;
      } else {
        element.cols = false;
      }
    });
  }
}
