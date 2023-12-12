import { Component, Input } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { Submission, SubmissionStatus } from '../submission';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-submission-card',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './submission-card.component.html',
  styleUrl: './submission-card.component.css'
})

export class SubmissionCardComponent {
  @Input() submission: Submission = { 
    id: 0, 
    task: '', 
    status: SubmissionStatus.Unassigned, 
    from: '', 
    to: '', 
    dueDate: '',
    latitude: 0,
    longitude: 0
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

}
