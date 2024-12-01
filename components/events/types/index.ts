export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  type: 'Virtual' | 'In-person' | 'Hybrid';
  agenda: string[];
  speakers: string[];
}

export interface EventReport {
  id: number;
  title: string;
  date: string;
}

export interface Speaker {
  name: string;
  role?: string;
  avatar?: string;
}