import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { CustomerComponent } from './customer/customer.component';
import { SubmissionComponent } from './submission/submission.component';
import { HistoryComponent } from './history/history.component';
import { ReportComponent } from './report/report.component';
import { WorkflowComponent } from './workflow/workflow.component';

export const routes: Routes = [
    { path: 'forms', component: FormComponent },
    { path: 'customers', component: CustomerComponent },
    { path: 'submissions', component: SubmissionComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'reports', component: ReportComponent },
    { path: 'workflow', component: WorkflowComponent },
];
