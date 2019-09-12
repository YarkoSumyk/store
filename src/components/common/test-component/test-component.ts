import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test-component.html',
})
export class TestComponent implements OnInit {
  @Input() testProp;
  @Output() eventProp = new EventEmitter<{ massage: string }>();
  constructor() {}

  ngOnInit(): void {}
  testMethod = () => {
    this.eventProp.emit({ massage: this.testProp });
  };
}
