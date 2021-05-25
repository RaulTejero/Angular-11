import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  id:string;
  constructor(private activateRouter: ActivatedRoute) {
    this.id = "";
   }

  ngOnInit(): void {
    this.activateRouter.parent.params.subscribe(p=>{
        this.id = p.infoWorkId;
    })
  
    
  }

}
