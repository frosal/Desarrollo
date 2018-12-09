import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private firebase: AngularFireDatabase) { }
  materialList: AngularFireList<any>;

  form = new FormGroup({

    $key: new FormControl(null),
    marca: new FormControl('', Validators.minLength(5)),
    prenda: new FormControl('', Validators.required),
    deporte: new FormControl('', Validators.required),
    talla: new FormControl('',Validators.required),
    persona: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required)


  });

  getMaterial() {
    this.materialList = this.firebase.list('sportshop');
    return this.materialList.snapshotChanges();
  }

  insertMaterial(material) {
    this.materialList.push({
      marca: material.marca,
      prenda: material.prenda,
      deporte: material.deporte,
      talla:material.talla,
      persona: material.persona,
      precio: material.precio

    });

  }
  populateForm(material) {
    this.form.setValue(material);
  }
  updateMaterial(material) {
    this.materialList.update(material.$key,
      {
        marca: material.marca,
        prenda: material.prenda,
        deporte: material.deporte,
        persona: material.persona,
        precio: material.precio
      }
    );
  }
  deteleMaterial($key: string) {
    this.materialList.remove($key);
  }
}
