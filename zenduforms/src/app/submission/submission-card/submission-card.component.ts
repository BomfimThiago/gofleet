import { Component, Input } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { Submission } from '../submission';

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
    title: '', 
    status: '', 
    from: '', 
    to: '', 
    dueDate: '' 
  }
}
