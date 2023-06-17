import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  @Input() optionValueList!: Observable<any[]>;
  @Input() dropDownLabel!: string;

  @Output() optionValueSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.optionValueList.subscribe((options: string[]) => {
      console.log(options);
    })
  }

  onOptionValueSelected(optionValue: string): void {
    this.optionValueSelected.emit(optionValue);
  }

}
