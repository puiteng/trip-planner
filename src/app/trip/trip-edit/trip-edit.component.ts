import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'tp-trip-edit',
  templateUrl: './trip-edit.component.html',
  styles: []
})
export class TripEditComponent implements OnInit {
  tripForm : FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
  }

  onCancel(){

  }

  private initForm(){
    let title = '';
    let location = '';
    this.tripForm = this.formBuilder.group({
      title : [title, Validators.required],
      location: [location, Validators.required]
    });
  }

}
