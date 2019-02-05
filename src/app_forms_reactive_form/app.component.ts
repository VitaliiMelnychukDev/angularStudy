import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenUsernames = ['Vitalii'];

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this)
        ]),
        'email': new FormControl(null, [
          Validators.required,
          Validators.email
        ], this.forbiddenEmails.bind(this)),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    /*this.signUpForm.valueChanges.subscribe(
      (value) => {
        console.log(value);
      }
    );*/
    this.signUpForm.statusChanges.subscribe(
      (value) => {
        console.log(value);
      }
    );
  }

  onSubmit() {
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }

  onAddHobby() {
    (<FormArray>this.signUpForm.get('hobbies')).push(
      new FormControl(null, Validators.required)
    );
  }

  forbiddenNames(control: FormControl): {[s: string]:boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true};
    }

    return null;
  }

  forbiddenEmails(control: FormControl) : Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@gmail.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      },2000);
    });

    return promise;
  }
}
