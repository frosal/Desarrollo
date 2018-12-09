import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/servicios/material.service';


@Component({
  selector: 'app-addmaterial',
  templateUrl: './addmaterial.component.html',
  styleUrls: ['./addmaterial.component.css']
})
export class AddmaterialComponent implements OnInit {

  constructor(private materialService: MaterialService) { }
submitted: boolean;
showSuccessMessage: boolean;
formControls = this.materialService.form.controls;

  ngOnInit() {
  }

  onSubmit(){
    this.submitted=true;
    if(this.materialService.form.valid){
      if(this.materialService.form.get('$key').value==null)
      this.materialService.insertMaterial(
        this.materialService.form.value);
       
          this.showSuccessMessage=true;
          setTimeout(() => this.showSuccessMessage = false, 3000);
          this.submitted = false;
          this.materialService.form.reset();
          //this is to be done for proper reset operation
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

}
