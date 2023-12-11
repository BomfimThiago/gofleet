export enum SubmissionStatus {
    Uncomplete = 'Uncomplete',
    LowRisk = 'Low Risk',
    NeedsReview = 'Needs Review',
    Unassigned = 'Unassigned',
  }


export interface Submission {
    id: number, 
    title: string, 
    status: string, 
    from: string, 
    to: string, 
    dueDate: string, 
}