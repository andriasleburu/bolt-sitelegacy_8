"use client";

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { NewSubmission } from '../types';

const SubmitDataTab = () => {
  const [newSubmission, setNewSubmission] = useState<NewSubmission>({
    title: '',
    description: '',
    file: null,
    image: null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic here
    console.log('Submitting:', newSubmission);
    setNewSubmission({
      title: '',
      description: '',
      file: null,
      image: null
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setNewSubmission(prev => ({ ...prev, file }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setNewSubmission(prev => ({ ...prev, image: file }));
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={newSubmission.title}
              onChange={(e) => setNewSubmission(prev => ({ ...prev, title: e.target.value }))}
              placeholder="Enter title"
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={newSubmission.description}
              onChange={(e) => setNewSubmission(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Enter description"
            />
          </div>
          <div>
            <Label htmlFor="file">Document Upload</Label>
            <Input
              id="file"
              type="file"
              onChange={handleFileChange}
            />
          </div>
          <div>
            <Label htmlFor="image">Image Upload</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <Button type="submit">Submit Data</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SubmitDataTab;