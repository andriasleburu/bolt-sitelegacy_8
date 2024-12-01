"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AlertItem, { AlertItemProps } from './AlertItem';

const TopAlerts = () => {
  const alerts: AlertItemProps[] = [
    { 
      title: 'Flood Warning', 
      description: 'Potential flooding near Angkor Archaeological Park', 
      severity: 'high' 
    },
    { 
      title: 'Drought Alert', 
      description: 'Prolonged dry spell affecting Serengeti National Park', 
      severity: 'medium' 
    },
    { 
      title: 'Vandalism Report', 
      description: 'Recent graffiti discovered at Petra', 
      severity: 'low' 
    },
  ];

  return (
    <Card className="h-[400px] overflow-auto">
      <CardHeader>
        <CardTitle>Top Alerts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert, index) => (
          <AlertItem key={index} {...alert} />
        ))}
      </CardContent>
    </Card>
  );
};

export default TopAlerts;