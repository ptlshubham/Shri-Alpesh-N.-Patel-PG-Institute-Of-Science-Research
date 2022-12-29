import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {
  departmentData: any = [];
  yearList: any = [];
  questionPapers: any = [];
  selectedDepartment: any = '';
  selectedYear: any = '';
  selectedSemester: any = '';

  papersList: any = [];
  pa: number = 1;
  semesterdata: any = [
    { name: 'SEM 1' },
    { name: 'SEM 2' },
    { name: 'SEM 3' },
    { name: 'SEM 4' },
    { name: 'SEM 5' },
    { name: 'SEM 6' },
    { name: 'SEM 7' },
    { name: 'SEM 8' },
  ]

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getYearDetails();
    this.getDepartmentDetails();
    this.selectedDepartment = 'Select Department'
    this.selectedYear = 'Select Year'
    this.selectedSemester = 'Select Semester';
  }
  getYearDetails() {
    this.homeService.getYearData(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.yearList = res;
    })
  }
  selectDepartment(val: any) {
    this.selectedDepartment = val;
    this.getPapersDetails();
  }
  selectYear(val: any) {
    this.selectedYear = val;
    this.getPapersDetails();
  }
  selectSemester(val: any) {
    this.selectedSemester = val;
    this.getPapersDetails();
  }
  getDepartmentDetails() {
    this.departmentData = [];
    this.homeService.getDepartmentDataById(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.departmentData = res;
    })
  }
  getPapersDetails() {
    this.homeService.getQuestionData(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.questionPapers = res;
      this.papersList = [];
      this.questionPapers.forEach((element: any) => {
        if (element.department == this.selectedDepartment && element.year == this.selectedYear && element.semester == this.selectedSemester) {
          this.papersList.push(element);
          debugger
        }

      });
    })
  }

}
