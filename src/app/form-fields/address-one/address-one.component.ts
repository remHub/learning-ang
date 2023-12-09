import { Component } from '@angular/core';
import { LabelAnimateService } from 'src/app/label-animate.service';

@Component({
  selector: 'app-address-one',
  templateUrl: './address-one.component.html',
  styleUrls: ['./address-one.component.css'],
  providers: [LabelAnimateService]
})
export class AddressOneComponent {

  constructor(public lblAnimate: LabelAnimateService) {}

}
