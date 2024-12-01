"use client";

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreateReportTab from './tabs/CreateReportTab';
import SubmitDataTab from './tabs/SubmitDataTab';
import HistoricalData from './HistoricalData';
import CommunityContributions from './CommunityContributions';
import ScheduledReports from './ScheduledReports';

const Reports = () => {
  return (
    <div className="p-6 space-y-6">
      <Tabs defaultValue="create">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="create">Reports</TabsTrigger>
          <TabsTrigger value="submit">Submit New Data</TabsTrigger>
          <TabsTrigger value="view">View Historical Trends</TabsTrigger>
        </TabsList>
        <TabsContent value="create">
          <CreateReportTab />
        </TabsContent>
        <TabsContent value="submit">
          <SubmitDataTab />
        </TabsContent>
        <TabsContent value="view">
          <HistoricalData />
        </TabsContent>
      </Tabs>

      <CommunityContributions />
      <ScheduledReports />
    </div>
  );
};

export default Reports;