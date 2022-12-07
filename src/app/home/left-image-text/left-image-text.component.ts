import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-image-text',
  templateUrl: './left-image-text.component.html',
  styleUrls: ['./left-image-text.component.css']
})
export class LeftImageTextComponent implements OnInit {
  public homedata: string = 'is established in June 2010 and managed by Charotar Education Society. The Institute is affiliated to the Sardar Patel University and strives to emulate an academic culture that is on a par with the best institutions in the Charotar region. This institute was established in the loving memories of our late Chairman Shri Alpeshbhai N. Patel. It started with only Department of Chemistry for postgraduate studies in 2005 to impart postgraduate education and research in emerging area of basic and applied sciences.At present, the Institute offers eight postgraduate programs and three Ph.Dprograms.'
  public aboutdata: string = 'is established in June 2010 and managed by Charotar Education Society. The Institute is affiliated to the Sardar Patel University and strives to emulate an academic culture that is on a par with the best institutions in the Charotar region. This institute was established in the loving memories of our late Chairman Shri Alpeshbhai N. Patel. It started with only Department of Chemistry for postgraduate studies in 2005 to impart postgraduate education and research in emerging area of basic and applied sciences.At present, the Institute offers eight postgraduate programs and three Ph.Dprograms. Within a short span of time, the institution has emerged out with flying colors and has set its marking the educational arena. Inventions and innovations are the two key driving forces for the vision of this Institute. The same concept and spirit has been taken further in the conduct of the academic activities. The institute has around 1500 students who are trained by 55 highly qualified teachers. The institute has about 85 staff members.' ;
  public trustdata: string = 'was established on 16th April 1916 by the Gem of Charotar Shri Motibhai Amin Saheb with a view to developing higher education in the Charotar Pradesh located in the heartland of Gujarat also known as The “Milk City of India”. In commemoration of 100 years of glorious existence, Charotar Education society celebrated its Golden Jubilee during April-2015 to April-2016. \nIn the beginning the Society was managed well by the brothers, Shri Ishwarbhai J. Patel and Late Shri Vitthalbhai J. Patel. Shri Ishwarbhai J. Patel had been the Vice Chancellor of many universities. Charotar Education Society is spread over 41 acres of land and has 4 big campuses in which K.G. to P.G. education is provided to the needful students under dynamic leadership of Mr. Niravkumar N. Patel, Chairman and Mr. Ketanbhai P. Patel, Secretary, Charotar Education Society.' ;
  public textdata: string = '';
  public abouttitle: string = 'History';
  public trusttitle: string = 'The Trust';
  public title: string = '';
  public subtitle: string = '';
  public asubtitle: string = 'Shri Alpesh N. Patel PG Institute of Science & Research';
  public tsubtitle: string = 'Charotar Education Society';
  public dimg: string = 'assets/images/anpatel/about/11.jpg';
  himg: string = 'assets/images/anpatel/about/44.jpg';
  timg: string = 'assets/images/anpatel/about/33.jpg';
  daimg: string = '';
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.router.url == "/anpatel/basic/about") {
      this.textdata = this.aboutdata;
      this.daimg = this.dimg;
      this.title = this.abouttitle;
      this.subtitle = this.asubtitle;
    }
   else if (this.router.url == "/anpatel/basic/trust") {
    this.textdata = this.trustdata;
    this.daimg = this.timg;
    this.title = this.trusttitle;
    this.subtitle = this.tsubtitle;
   }
    else {
      // this.title = this.abouttitle;
      this.subtitle = this.asubtitle;
      this.textdata = this.aboutdata; 
      this.daimg = this.himg;

    }
  }

}
