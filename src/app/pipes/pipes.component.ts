import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  userDetails: any = {
    name: "User 1",
    city: "New York",
    countryCode: 'US'
  }

  dummyText: string = `The pair walked on again for a while in silence; and then “Enfield,” said Mr. Utterson, “that’s a good rule of yours.”

  “Yes, I think it is,” returned Enfield.
  
  “But for all that,” continued the lawyer, “there’s one point I want to ask: I want to ask the name of that man who walked over the child.”
  
  “Well,” said Mr. Enfield, “I can’t see what harm it would do. It was a man of the name of Hyde.”
  
  “Hm,” said Mr. Utterson. “What sort of a man is he to see?”`;

}
