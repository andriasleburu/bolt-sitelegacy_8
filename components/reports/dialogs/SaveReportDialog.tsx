"use client";

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SaveReportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  folders: string[];
  onCreateFolder: (name: string) => void;
  onSave: (folder: string) => void;
}

const SaveReportDialog = ({
  open,
  onOpenChange,
  folders,
  onCreateFolder,
  onSave,
}: SaveReportDialogProps) => {
  const [selectedFolder, setSelectedFolder] = useState('');
  const [newFolderName, setNewFolderName] = useState('');

  const handleNewFolder = () => {
    if (newFolderName) {
      onCreateFolder(newFolderName);
      setNewFolderName('');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save Report</DialogTitle>
          <DialogDescription>
            Choose a folder to save your report or create a new one.
          </DialogDescription>
        </DialogHeader>
        <Select onValueChange={setSelectedFolder}>
          <SelectTrigger>
            <SelectValue placeholder="Select folder" />
          </SelectTrigger>
          <SelectContent>
            {folders.map((folder, index) => (
              <SelectItem key={index} value={folder}>{folder}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex items-center space-x-2">
          <Input
            placeholder="New folder name"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
          />
          <Button onClick={handleNewFolder}>Create Folder</Button>
        </div>
        <DialogFooter>
          <Button onClick={() => onSave(selectedFolder)}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SaveReportDialog;