import { Component, OnInit } from '@angular/core';
import { ProductService  } from "../../../services/product.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //สร้างตัวแปนมารับค่าจาก API
  dataProduct:any = [] //any คือชนิดตัวแปรถ้าเราไม่รู้ type ไม่ควรใช้บ่อยๆ เพราะมันกิน Memory

  constructor(public api: ProductService) { }  //public เพราะว่าให้ใครเรียกก็ได้

  ngOnInit(): void {
    this.api.getProducts().subscribe((data:{}) =>{
        console.log(data);
        this.dataProduct = data ;
    })
  }

}
