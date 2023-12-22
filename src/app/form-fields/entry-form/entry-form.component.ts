import { Component, OnInit } from '@angular/core';
import { LabelAnimateService } from 'src/app/label-animate.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css'],
  providers: [LabelAnimateService]
})
export class EntryFormComponent implements OnInit {

  firstNameAnimate = new LabelAnimateService;
  lastNameAnimate = new LabelAnimateService;
  addressAnimate = new LabelAnimateService;
  emailAnimate = new LabelAnimateService;

  req: string = "Required";

  ngOnInit() {}

  /**
   * import NgForm
   * any property is fine as parameter.
   * parameter type must be NgForm
   * 
   */
  onSubmit(entryform: NgForm) {

    console.log(entryform);

  }

}
