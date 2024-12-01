import { Event, EventReport } from '../types';

export const events: Event[] = [
  { 
    id: 1, 
    title: 'UNESCO World Heritage Committee Meeting', 
    date: '2023-07-15', 
    location: 'Paris, France',
    type: 'Virtual',
    agenda: ['Opening ceremony', 'Review of new nominations', 'Discussion on conservation strategies'],
    speakers: ['Dr. Jane Smith', 'Prof. John Doe'],
  },
  { 
    id: 2, 
    title: 'Great Barrier Reef Conservation Workshop', 
    date: '2023-08-10', 
    location: 'Cairns, Australia',
    type: 'In-person',
    agenda: ['Coral restoration techniques', 'Climate change mitigation', 'Community involvement'],
    speakers: ['Dr. Emma Watson', 'Mr. Chris Hemsworth'],
  },
  { 
    id: 3, 
    title: 'Machu Picchu Sustainable Tourism Seminar', 
    date: '2023-09-05', 
    location: 'Cusco, Peru',
    type: 'Hybrid',
    agenda: ['Visitor management strategies', 'Local community benefits', 'Site preservation techniques'],
    speakers: ['Ms. Maria Garcia', 'Dr. Carlos Rodriguez'],
  },
];

export const eventReports: EventReport[] = [
  { id: 1, title: 'Summary: UNESCO World Heritage Committee Meeting 2022', date: '2022-07-20' },
  { id: 2, title: 'Workshop Report: Angkor Wat Restoration Techniques', date: '2023-03-15' },
];