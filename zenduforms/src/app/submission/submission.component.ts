import { Component, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgbCalendar, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'
import { JsonPipe } from '@angular/common';
import { SubmissionCardComponent } from './submission-card/submission-card.component';
import { SubmissionMapComponent } from './submission-map/submission-map.component';
import { Submission } from './submission';

@Component({
  selector: 'app-submission',
  standalone: true,
  imports: [
    FormsModule, 
    JsonPipe, 
    NgbDatepickerModule, 
    SubmissionCardComponent, 
    SubmissionMapComponent,
  ],
  templateUrl: './submission.component.html',
  styleUrl: './submission.component.css'
})
export class SubmissionComponent {
  today = inject(NgbCalendar).getToday();

  submissions: Submission[] = [
    { id:0, title: 'Work Flow: Requires Location', status: 'uncomplete', from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', dueDate: '06 december' },
    { id: 1, title: 'Work Flow: Requires Location', status: 'low_risk', from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', dueDate: '06 december' },
    { id: 2, title: 'Work Flow: Requires Location', status: 'uncomplete', from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', dueDate: '06 december' },
    { id: 3, title: 'Work Flow: Requires Location', status: 'needs_review', from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', dueDate: '06 december' },
    { id: 4, title: 'Work Flow: Requires Location', status: 'uncomplete', from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', dueDate: '06 december' },
    { id: 5, title: 'Work Flow: Requires Location', status: 'low_risk', from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', dueDate: '06 december' },
    { id: 6, title: 'Work Flow: Requires Location', status: 'unassigned', from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', dueDate: '06 december' },
  ];
  

	model: NgbDateStruct = { year: this.today.year, month: this.today.month, day: this.today.day };

}



