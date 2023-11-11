import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

  receiveData: string = "Placeholder";

  /**
   * ViewChild decorator will give access to the entire
   * component template's methods and properties.
   * 
   * Child Component must be imported then referenced
   * 
   * No changes to child components are necessary
   */
  @ViewChild(ChildComponent) childRef!: ChildComponent;

  constructor(private cdr: ChangeDetectorRef) { }

  /**
   * detectChanges() method is used with ngAfterViewInit() to 
   * force change detection that will
   * in turn update the component template.
   */
  ngAfterViewInit(): void {
    this.receiveData = this.childRef.messagePropertyInChild;
    this.cdr.detectChanges();
  }
}
