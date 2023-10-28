import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.css']
})
export class InfrastructureComponent implements OnInit {
  infraData: any = [];
  multiImage: any = [];
  mainData: any = [];
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getInfraDataById();
  }
  getInfraMultiImages(id: any) {
    this.homeService.getInfraMultiImageById(id).subscribe((res: any) => {
      this.multiImage = res;
    })
  }
  getInfraDataById() {
    this.homeService.getInfraDetails(localStorage.getItem('InstituteId')).subscribe(async (res: any) => {
      this.infraData = res;
      debugger
      for(let i=0;i<this.infraData.length;i++){
        if(this.infraData[i].id){
        await  this.homeService.getInfraMultiImageById(this.infraData[i].id).toPromise().then((res: any) => {
            this.multiImage = res;
            this.mainData.push(
              {
                id: this.infraData[i].id,
                institute_id: this.infraData[i].institute_id,
                infraTitle: this.infraData[i].infraTitle,
                infraDetails: this.infraData[i].infraDetails,
                infraImage: this.infraData[i].infraImage,
                createddate: this.infraData[i].createddate,
                updateddate: this.infraData[i].updateddate,
                multiImage: this.multiImage,
                cols:false
              });
              this.multiImage.push(
                {
                  image:this.infraData[i].infraImage
                }
              );
              // if(this.mainData.length == this.infraData.length){

              // }
          })
        }
       
      }
      // this.infraData.forEach((element: any) => {
      //   if (element.id) {
      //     this.homeService.getInfraMultiImageById(element.id).subscribe((res: any) => {
      //       this.multiImage = res;
      //       this.mainData.push(
      //         {
      //           id: element.id,
      //           institute_id: element.institute_id,
      //           infraTitle: element.infraTitle,
      //           infraDetails: element.infraDetails,
      //           infraImage: element.infraImage,
      //           createddate: element.createddate,
      //           updateddate: element.updateddate,
      //           multiImage: this.multiImage,
      //         });
      //         this.multiImage.push(
      //           {
      //             image:element.infraImage
      //           }
      //         )

      //     })
      //   }
        
      // });
      // this.mainData.forEach((element: any, index: any) => {
      //   element.cols = false;

      // });
    })
  }
  open(i: any) {
    this.mainData[i].cols = true;
    this.mainData.forEach((element: any, index: any) => {
      if (index == i) {
        element.cols = true;
      } else {
        element.cols = false;
      }
    });
  }
  close(i: any) {
    this.mainData[i].cols = true;
    this.mainData.forEach((element: any, index: any) => {
      element.cols = false;
    });
  }

}
