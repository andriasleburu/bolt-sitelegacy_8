export interface Report {
  title: string;
  content: string;
  file: File | null;
}

export interface NewSubmission {
  title: string;
  description: string;
  file: File | null;
  image: File | null;
}

export interface EventReport {
  id: number;
  title: string;
  date: string;
}

export interface ReportFolder {
  id: string;
  name: string;
  reports: Report[];
}