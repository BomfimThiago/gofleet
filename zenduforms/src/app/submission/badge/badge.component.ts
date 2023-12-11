import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    "uncomplete": "Uncomplete",
    "low_risk": "Low Risk",
    "needs_review": "Needs Review",
    "unassigned": "Unassigned",
  }

  ngOnInit() {
    this.mappedStatus = this.mapStatus[this.status]
  }
}
