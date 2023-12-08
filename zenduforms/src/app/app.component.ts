import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { SubmissionComponent } from './submission/submission.component';
import { CustomerComponent } from './customer/customer.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { HistoryComponent } from './history/history.component';
import { ReportComponent } from './report/report.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    HeaderComponent,
    FormComponent,
    SubmissionComponent,
    CustomerComponent,
    WorkflowComponent,
    HistoryComponent,
    ReportComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zenduforms';
}
