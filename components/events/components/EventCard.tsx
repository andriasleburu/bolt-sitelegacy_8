"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  onViewDetails: (event: Event) => void;
}

const EventCard = ({ event, onViewDetails }: EventCardProps) => {
  return (
    <li className="flex items-center justify-between">
      <div>
        <h3 className="font-medium">{event.title}</h3>
        <p className="text-sm text-muted-foreground">
          <Calendar className="inline-block mr-1 h-4 w-4" />
          {event.date}
        </p>
        <p className="text-sm text-muted-foreground">
          <MapPin className="inline-block mr-1 h-4 w-4" />
          {event.location}
        </p>
      </div>
      <div className="space-x-2">
        <Badge>{event.type}</Badge>
        <Button size="sm" onClick={() => onViewDetails(event)}>Details</Button>
      </div>
    </li>
  );
};

export default EventCard;