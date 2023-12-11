import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionStatus } from '../submission';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css'
})
export class BadgeComponent {
  @Input() status: string = '';
  mappedStatus: string = '';

  mapStatus: { [key: string]: string } = {
    "Uncomplete" : "uncomplete",
    "Low Risk" : "low_risk",
    "Needs Review" : "needs_review",
    "Unassigned": "unassigned"
  }

  ngOnInit() {
    this.mappedStatus = this.mapStatus[this.status]
  }
}
