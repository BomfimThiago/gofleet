import { Component } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-submission-card',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './submission-card.component.html',
  styleUrl: './submission-card.component.css'
})
export class SubmissionCardComponent {

}
