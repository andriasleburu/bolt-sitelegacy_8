"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save } from 'lucide-react';
import RichTextEditor from './RichTextEditor';
import { Report } from '../types';
import { useToast } from "@/components/ui/use-toast";

interface CustomReportProps {
  report: Report;
  onSave: () => void;
  onChange: (title: string, content: string) => void;
}

const CustomReport = ({ report, onSave, onChange }: CustomReportProps) => {
  const [title, setTitle] = useState(report.title || '');
  const [content, setContent] = useState(report.content || '');
  const { toast } = useToast();
  
  useEffect(() => {
    const debounce = setTimeout(() => {
      onChange(title, content);
      toast({
        title: "Changes saved",
        description: "Your changes have been automatically saved",
        duration: 2000,
      });
    }, 1000);

    return () => clearTimeout(debounce);
  }, [title, content, onChange]);

  const handleSave = () => {
    onChange(title, content);
    onSave();
    toast({
      title: "Report saved",
      description: "Your report has been saved successfully",
    });
  };

  return (
    <Card>
      <CardContent className="p-4">
        <Input
          type="text"
          placeholder="Report Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-4"
        />
        <RichTextEditor
          value={content}
          onChange={setContent}
          onSave={handleSave}
        />
        <Button onClick={handleSave} className="mt-4">
          <Save className="mr-2 h-4 w-4" />
          Save
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomReport;