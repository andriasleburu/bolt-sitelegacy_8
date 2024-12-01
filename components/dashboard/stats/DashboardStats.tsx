"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface StatItemProps {
  label: string;
  value: number;
}

const StatItem = ({ label, value }: StatItemProps) => (
  <div className="flex flex-col">
    <dt className="text-sm font-medium text-muted-foreground">{label}</dt>
    <dd className="text-2xl font-semibold">{value}</dd>
  </div>
);

const DashboardStats = () => {
  const stats = [
    { label: 'Monitored Sites', value: 1154 },
    { label: 'Sites at Risk', value: 52 },
    { label: 'Recent Alerts', value: 23 },
  ];

  return (
    <Card>
      <CardContent className="pt-6">
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </dl>
      </CardContent>
    </Card>
  );
};

export default DashboardStats;