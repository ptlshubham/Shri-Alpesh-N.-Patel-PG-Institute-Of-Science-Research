import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { config } from 'rxjs';
import { WebNavbar } from 'src/app/core/model/web-navbar.model';
import { HomeService } from 'src/app/core/services/home.services';
import { StaffService } from 'src/app/core/services/staff.services';

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
  public navDetails: WebNavbar[] = [];
  staffDataTable: any = [];
  siteUpdate: any = {};
  public webNavbarModel: WebNavbar = new WebNavbar;
  navContact: any;
  navEmail: any;
  navLogo: any;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
  constructor(
    private router: Router,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private staffService: StaffService,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    // config.backdrop = 'static';
    // config.keyboard = false;
    this.getStaffDetails();
    this.getLastUpdateSite();
  }
  moreOpen() {
    this.readMore = true;
  }
  open(content: any) {
    this.modalService.open(content, { size: 'lg', scrollable: true },);
  }
  searchSchool(id: any) {
    this.router.navigate(['/more/search', id]);

  }
  openLinks(id:any){
    this.router.navigate(['/more/links', id]);
  }
  getStaffDetails() {
    this.staffService.getBirthdayListData().subscribe((res: any) => {
      this.staffDataTable = res;
    })
  }
  getLastUpdateSite() {
    this.homeService.getLastUpdateSiteByIdURL(localStorage.getItem('InstituteId')).subscribe((res: any) => {
      this.siteUpdate = res[0];
    })
  }
}
