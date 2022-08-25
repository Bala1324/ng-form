import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templete-form';

  @ViewChild('userForm') uf:NgForm;

  setDefaultValue(){
    this.uf.setValue({
      "email": "bala@gmail.com",
      "password": "Bala",
      "address-group": {
        "address": "py",
        "address-2": "py",
        "city": "py",
        "state": "py",
        "zip": "605009"
      },
      "checkout": "true"
    })

  }

  setPatch(){
    this.uf.form.patchValue({
      "email": "anbu@gmail.com",
      "password": "Anbu"
    })
  }

  // onSubmit(){
  //   console.log('bala')
  // }

  onSubmit=(userForm:NgForm)=>{
       console.log(userForm.value);
  }
}
