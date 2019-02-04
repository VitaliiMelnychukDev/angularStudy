import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultQustion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: ''
  };
  submitted = false;

  suggestUserName(form: NgForm) {
    form.controls['userData']
      .controls['username']
      .setValue('Superman');
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.user.username = form.value.userData.username;

    form.reset();
  }
}
