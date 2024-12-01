"use client";

import React from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from 'lucide-react';

export interface AlertItemProps {
  title: string;
  description: string;
  severity: 'high' | 'medium' | 'low';
}

const AlertItem = ({ title, description, severity }: AlertItemProps) => {
  return (
    <Alert variant={severity === 'high' ? 'destructive' : 'default'}>
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};

export default AlertItem;