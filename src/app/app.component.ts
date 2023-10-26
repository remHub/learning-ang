import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Projects and Tutorials';

  keyPressed: any;

  colorTheme: number = 0;

  pageSetup: any = [
    {
      viewportContainer: `flex flex-col h-screen w-full bg-slate-400`,
      headerWrapper: `flex-shrink-0 m-5 bg-slate-600 rounded-lg outline outline-1 shadow-lg shadow-slate-600`,
      headerText: `my-3 text-white text-3xl font-thin text-center cursor-pointer`,
      bodyWrapper: `flex-grow`
    },
    {
      viewportContainer: `flex flex-col h-screen w-full bg-blue-300`,
      headerWrapper: `flex-shrink-0 m-5 bg-blue-400 rounded-lg outline outline-1 shadow-lg shadow-blue-800`,
      headerText: `my-3 text-blue-900 text-3xl font-thin text-center cursor-pointer`,
      bodyWrapper: `flex-grow`
    }
  ]

  changeTheme() {
    return this.colorTheme = this.colorTheme === 0 ? 1 : 0;
  }

  // Template Variable section
  myKeyup(uservalue: any) {
    console.log(uservalue);
    this.keyPressed = uservalue;
  }




}
