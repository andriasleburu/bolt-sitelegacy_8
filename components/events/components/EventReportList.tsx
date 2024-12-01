"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText } from 'lucide-react';
import { EventReport } from '../types';

interface EventReportListProps {
  reports: EventReport[];
}

const EventReportList = ({ reports }: EventReportListProps) => {
  return (
    <ul className="space-y-4">
      {reports.map((report) => (
        <li key={report.id} className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">{report.title}</h3>
            <p className="text-sm text-muted-foreground">{report.date}</p>
          </div>
          <Button size="sm" variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            View Report
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default EventReportList;