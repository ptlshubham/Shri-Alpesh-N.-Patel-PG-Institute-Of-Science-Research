import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  studentList: any = [];
 
  pa: number = 1;
  constructor(
    private homeService: HomeService,
  ) { }

  ngOnInit(): void {
    this.getStaffDetails();
  }
  getStaffDetails() {
    this.homeService.getStudentList(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.studentList = res;
    })
  }

}
