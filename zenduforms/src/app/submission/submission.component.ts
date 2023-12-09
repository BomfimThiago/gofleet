import { Component, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgbCalendar, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'
import { JsonPipe } from '@angular/common';
import { SubmissionCardComponent } from './submission-card/submission-card.component';
import { SubmissionMapComponent } from './submission-map/submission-map.component';

@Component({
  selector: 'app-submission',
  standalone: true,
  imports: [FormsModule, JsonPipe, NgbDatepickerModule, SubmissionCardComponent, SubmissionMapComponent],
  templateUrl: './submission.component.html',
  styleUrl: './submission.component.css'
})
export class SubmissionComponent {
  today = inject(NgbCalendar).getToday();

	model: NgbDateStruct = { year: this.today.year, month: this.today.month, day: this.today.day };
}



