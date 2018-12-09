import { Component, OnInit } from '@angular/core';

import { MaterialService } from 'src/app/servicios/material.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  constructor(private materialService: MaterialService) { }
  materialArray=[];
  showDeletedMessage: boolean;
  searchText: string = "";

  ngOnInit() {
    this.materialService.getMaterial().subscribe(
      list =>{
        this.materialArray=list.map(item =>{
          return{
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onDelete($key){
    if(confirm('Estas seguro de que desea eleminar este articulo')){
      this.materialService.deteleMaterial($key);
      this.showDeletedMessage=true;
      setTimeout(()=>this.showDeletedMessage=false,3000);
    }
  }

  filterCondition(material){
    return material.marca.toLowerCase().indexOf(
      this.searchText.toLocaleLowerCase())!=-1;
    }

}
