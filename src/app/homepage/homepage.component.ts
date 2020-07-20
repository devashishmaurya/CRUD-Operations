 import { Component, OnInit, TemplateRef  } from '@angular/core';
import { rowData, columnDefs } from './dummy';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  rowData: any;
  columnDefs: any;
  modalRef: BsModalRef;
  remaining:any;
  deposit:any;
  endDate= new Date();
  startDate= new Date();
  Gender:any;
  favouritSport:any;
  regex= /^[a-zA-Z\d\-\()]/;

  dataD=[{
   Gender: 'Male' }
    , {
      Gender: 'Female'
  }]
  indexData: number;
  submitted=false;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    this.columnDefs = columnDefs;

    this.rowData = rowData.filter(item=>
      item.id===null? false:true
    );
    console.log(this.dataD);



  }

  editable(item){
    item.editable=!item.editable
  }
  cancel(item){
    item.editable=!item.editable

  }

  openModal(template: TemplateRef<any>, index) {
    this.modalRef = this.modalService.show(template);
    this.indexData= index;
  }

  deleteItems(){
    this.rowData.splice(this.indexData, 1);
    this.modalRef.hide();
  }
  InsertModal(addData: TemplateRef<any>) {
    this.modalRef = this.modalService.show(addData,  {class: 'modal-lg'});
    // this.indexData= index;
  }

  addDataInsert(){
this.submitted=true;
if(this.submitted && !this.favouritSport){
 return
}
if(this.submitted && !this.deposit){
  return
 }
 if(this.submitted && !this.remaining){
  return
 }


    let newlen={
      FavouriteSport: this.favouritSport ,
      Gender: this.Gender, 
      StartDate: this.startDate,
      enddate: this.endDate, 
      Deposite: this.deposit,
      Remaining: this.remaining
    }
    this.rowData=[].concat(this.rowData, newlen);
    console.log(this.rowData);
    this.modalRef.hide();

  }
}
