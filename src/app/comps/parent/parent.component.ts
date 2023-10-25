import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

  receiveData: string = "Placeholder";

  @ViewChild(ChildComponent) childRef!: ChildComponent;

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.receiveData = this.childRef.messagePropertyInChild;
    this.cdr.detectChanges();
  }
}
