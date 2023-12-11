import { Component, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgbCalendar, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'
import { JsonPipe } from '@angular/common';
import { SubmissionCardComponent } from './submission-card/submission-card.component';
import { SubmissionMapComponent } from './submission-map/submission-map.component';
import { Submission, SubmissionStatus } from './submission';

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
    { id:1, title: 'Work Flow1: Requires Location', status: SubmissionStatus.Uncomplete, from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', dueDate: '06 december' },
    { id: 2, title: 'Work Flow2: Requires Location', status: SubmissionStatus.LowRisk, from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', dueDate: '06 december' },
    { id: 3, title: 'Work Flow3: Requires Location', status: SubmissionStatus.Uncomplete, from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', dueDate: '06 december' },
    { id: 4, title: 'Work Flow4: Requires Location', status: SubmissionStatus.NeedsReview, from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', dueDate: '06 december' },
    { id: 5, title: 'Work Flow5: Requires Location', status: SubmissionStatus.Uncomplete, from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', dueDate: '06 december' },
    { id: 6, title: 'Work Flow6: Requires Location', status: SubmissionStatus.LowRisk, from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', dueDate: '06 december' },
    { id: 7, title: 'Work Flow7: Requires Location', status: SubmissionStatus.Unassigned, from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', dueDate: '06 december' },
  ];

  filteredSubmissions: Submission[];
  searchField: string = '';
  status: string = '';
  selectedSubmissionId: number = 0;

	model: NgbDateStruct = { year: this.today.year, month: this.today.month, day: this.today.day };

  constructor(private calendar: NgbCalendar) {
    // Initialize the filtered list with all submissions
    this.filteredSubmissions = [...this.submissions]
  }

  

  updateFilteredSubmissions() {
    if (this.searchField || this.status || this.selectedSubmissionId ) {
      // || this.select1 !== 'Select Form' || this.select2 !== 'Select Status'
      // Filter only if there is any search criteria
      this.filteredSubmissions = this.submissions.filter(submission => {
        const matchesSearch = submission.title.toLowerCase().includes(this.searchField.toLowerCase());
        const matchesSelectStatus = this.status  ? submission.status === this.status : true;
        const matchesSelectedSubmission = this.selectedSubmissionId != 0 ? submission.id === this.selectedSubmissionId : true;

        return matchesSearch && matchesSelectStatus && matchesSelectedSubmission
      });
    } else {
      this.filteredSubmissions = [...this.submissions];
    }
  }

  onFormChange() {
    this.updateFilteredSubmissions();
  }

}



