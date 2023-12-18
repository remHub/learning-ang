import { Component } from '@angular/core';
import { LabelAnimateService } from 'src/app/label-animate.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css'],
  providers: [LabelAnimateService]
})
export class EntryFormComponent {

  firstNameAnimate = new LabelAnimateService;
  lastNameAnimate = new LabelAnimateService;
  adressAnimate = new LabelAnimateService;

}
