"use client";

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video } from 'lucide-react';
import EventCard from './components/EventCard';
import EventDetails from './components/EventDetails';
import EventReportList from './components/EventReportList';
import { Event } from './types';
import { events, eventReports } from './data/mockData';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = React.useState<Event | null>(null);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Events</h1>
        <Button>
          <Video className="mr-2 h-4 w-4" />
          Livestream
        </Button>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="nearby">Nearby</TabsTrigger>
          <TabsTrigger value="reports">Event Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {events.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onViewDetails={setSelectedEvent}
                  />
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="nearby">
          <Card>
            <CardHeader>
              <CardTitle>Nearby Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Feature coming soon. We'll use your location to show events near you.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Event Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <EventReportList reports={eventReports} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {selectedEvent && <EventDetails event={selectedEvent} />}
    </div>
  );
};

export default Events;