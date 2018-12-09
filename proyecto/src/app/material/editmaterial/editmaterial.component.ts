import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/servicios/material.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editmaterial',
  templateUrl: './editmaterial.component.html',
  styleUrls: ['./editmaterial.component.css']
})
export class EditmaterialComponent implements OnInit {

  constructor(private router: Router, private materialService: MaterialService) { }
  submitted: boolean;
showSuccessMessage: boolean;
formControls = this.materialService.form.controls;

  ngOnInit() {
    
    
  }
  saveEdit(){
    this.materialService.updateMaterial(this.materialService.form.value);
    this.router.navigate(['/material']);
    this.materialService.form.setValue({
      $key: null,
      marca: '',
      prenda: '',
      deporte: '',
      talla: '',
      persona:'',
      precio:''
    });
  }

}
