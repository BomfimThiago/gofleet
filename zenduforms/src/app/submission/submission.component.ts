import { Component, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgbCalendar, NgbDate, NgbDatepicker, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'
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
    { id: 1, task: 'Work Flow1: Requires Location', status: SubmissionStatus.Uncomplete, from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', dueDate: this.today, latitude: 43.6332, longitude: -79.2670 },
    { id: 2, task: 'Work Flow2: Requires Location', status: SubmissionStatus.LowRisk, from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', dueDate: this.calendar.getNext(this.today, 'm', 1), latitude: 43.6532, longitude: -79.3832 },
    { id: 3, task: 'Work Flow3: Requires Location', status: SubmissionStatus.Uncomplete, from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', dueDate: this.calendar.getNext(this.today, 'm', 2), latitude: 43.651070, longitude: -79.347015 }, // Exemplo de uma localização diferente em Toronto
    { id: 4, task: 'Work Flow4: Requires Location', status: SubmissionStatus.NeedsReview, from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', dueDate: this.calendar.getNext(this.today, 'm', 3), latitude: 43.6561, longitude: -79.3930 }, // Outra localização diferente
    { id: 5, task: 'Work Flow5: Requires Location', status: SubmissionStatus.Uncomplete, from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', dueDate: this.calendar.getNext(this.today, 'm', 4), latitude: 43.6426, longitude: -79.3871 },
    { id: 6, task: 'Work Flow6: Requires Location', status: SubmissionStatus.LowRisk, from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', dueDate: this.calendar.getNext(this.today, 'm', 5), latitude: 43.7182, longitude: -79.5182 },
    { id: 7, task: 'Work Flow7: Requires Location', status: SubmissionStatus.Unassigned, from: 'denisgordiyenya@gmail.com', to: 'denisgordiyenya@gmail.com', dueDate: this.calendar.getNext(this.today, 'm', 6), latitude: 43.7731, longitude: -79.2575 },
  ];

  filteredSubmissions: Submission[];
  searchField: string = '';
  status: string = '';
  selectedSubmissionId: number = 0;
  view: 'card-map' | 'list' = 'card-map';

	selectedDate: NgbDateStruct = { year: this.today.year, month: this.today.month, day: this.today.day };

  constructor(private calendar: NgbCalendar) {
    this.filteredSubmissions = [...this.submissions]
  }

  updateFilteredSubmissions(): void {
    if (this.searchField || this.status || this.selectedSubmissionId || this.selectedDate ) {
      
      
      this.filteredSubmissions = this.submissions.filter(submission => {
        const matchesSearch = submission.task.toLowerCase().includes(this.searchField.toLowerCase());
        const matchesSelectStatus = this.status  ? submission.status === this.status : true;
        const matchesSelectedSubmission = this.selectedSubmissionId != 0 ? submission.id === this.selectedSubmissionId : true;
        const matchesDueDate = this.selectedDate ? this.compareDueDate(submission.dueDate) : true;

        return matchesSearch && matchesSelectStatus && matchesSelectedSubmission && matchesDueDate
      });
    } else {
      this.filteredSubmissions = [...this.submissions];
    }
  }

  compareDueDate(submissionDueDate: NgbDate): boolean {
    // what should be the rule for filter by date? I will assume that the user wants to see, everything where 
    // the dueDate is bigger then the date he selected in the filter. because otherwise the submission
    // is already overdue so maybe the user dont wanna see them.
    const selectedDate = new Date(this.selectedDate.year, this.selectedDate.month - 1, this.selectedDate.day);
    const dueDate = new Date(submissionDueDate.year, submissionDueDate.month - 1, submissionDueDate.day);

    return dueDate >= selectedDate; 
  }

  onDateChange(event: {year: number, month: number, day: number}) {
    this.selectedDate.year = event.year
    this.selectedDate.month = event.month
    this.selectedDate.day = event.day

    this.onFormChange()
  }

  onFormChange() {
    this.updateFilteredSubmissions();
  }

  updateView(selectedView: 'card-map' | 'list'): void {
    this.view = selectedView; 
  }

  formatDate(date: NgbDate): string {
    const monthNames = [
      'january', 'february', 'march', 'april', 'may', 'june',
      'july', 'august', 'september', 'october', 'november', 'december'
    ];
  
    const day = date.day.toString().padStart(2, '0');
    const month = monthNames[date.month - 1];
    return `${day} ${month}`;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  closeFix(event: any, datePicker: any) {
    if (event.target.offsetParent == null) datePicker.close();
    else if (this.clickedInNgbDatePicker(event.path)) datePicker.close();
  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clickedInNgbDatePicker(eventPath: any) {
    let datePickerClicked = true;
    // @ts-expect-error Parameter 'item' implicitly has an 'any' type
    eventPath.forEach(function (item) {
      datePickerClicked = item.tagName != "NGB-DATEPICKER" && datePickerClicked;
    });
    return datePickerClicked;
  }
  


  exportFilteredSubmissions(): void {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    const exportData = this.filteredSubmissions.map(submission => {
        return {
            Task: submission.task,
            Status: submission.status,
            From: submission.from,
            To: submission.to,
            DueDate: this.formatDate(submission.dueDate),
            Latitude: submission.latitude.toString(),
            Longitude: submission.longitude.toString(),
        };
    });

    this.exportToCSV(exportData, formattedDate);
  }

  private exportToCSV(data: { [key: string]: string }[], currentDate: string): void {
    const csvContent = "data:text/csv;charset=utf-8," +
        Object.keys(data[0]).map(key => key).join(",") + "\n" +
        data.map(submission => Object.values(submission).map(value => `"${value}"`).join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const fileName = `submission_${currentDate}.csv`;
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
  }
}
