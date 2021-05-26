import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-work',
  templateUrl: './info-work.component.html',
  styleUrls: ['./info-work.component.css']
})
export class InfoWorkComponent implements OnInit {
  parametroRuta: string;
  constructor(private activateRoute: ActivatedRoute) {
    this.parametroRuta = "";
  }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(params=>{
      this.parametroRuta = params.infoWorkId;
      
    })
  }

}
