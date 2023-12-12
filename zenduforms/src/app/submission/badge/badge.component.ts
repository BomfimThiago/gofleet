import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css'
})
export class BadgeComponent implements OnInit {
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
