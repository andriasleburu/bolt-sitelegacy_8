"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users } from 'lucide-react';
import { Event } from '../types';

interface EventDetailsProps {
  event: Event;
}

const EventDetails = ({ event }: EventDetailsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2"><strong>Date:</strong> {event.date}</p>
        <p className="mb-2"><strong>Location:</strong> {event.location}</p>
        <p className="mb-2"><strong>Type:</strong> {event.type}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Agenda:</h4>
          <ul className="list-disc list-inside">
            {event.agenda.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Speakers:</h4>
          <div className="flex space-x-4">
            {event.speakers.map((speaker, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src={`https://i.pravatar.cc/150?img=${index + 5}`} />
                  <AvatarFallback>{speaker.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <span>{speaker}</span>
              </div>
            ))}
          </div>
        </div>
        <Button>
          <Users className="mr-2 h-4 w-4" />
          RSVP / Register
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventDetails;