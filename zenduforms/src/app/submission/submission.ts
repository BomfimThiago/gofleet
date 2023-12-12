import { NgbDate } from "@ng-bootstrap/ng-bootstrap";

export enum SubmissionStatus {
    Uncomplete = 'Uncomplete',
    LowRisk = 'Low Risk',
    NeedsReview = 'Needs Review',
    Unassigned = 'Unassigned',
  }


export interface Submission {
    id: number, 
    task: string, 
    status: string, 
    from: string, 
    to: string, 
    dueDate: NgbDate,
    latitude: number,
    longitude: number
}