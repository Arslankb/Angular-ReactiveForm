
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ReactiveForms';
  reactiveForm:FormGroup;


  ngOnInit(){
    this.reactiveForm = new FormGroup({

      personalDetails: new FormGroup({
        firstname: new FormControl(null, Validators.required),
        lastname: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl(null),
      country: new FormControl('pakistan'),
      hobbies: new FormControl(null),
      // Using From Array
      skills: new FormArray([
        new FormControl(null, Validators.required),
        new FormControl(null, Validators.required),
        new FormControl(null, Validators.required),
      ]),
    });
    }

    onSubmit(){
      console.log(this.reactiveForm);
      
    }

    addSkill(){
      (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required))
    }
  }

