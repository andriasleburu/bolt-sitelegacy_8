"use client";

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, ChevronDown, FileText, Upload, Folder } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CustomReport from '../editor/CustomReport';
import SaveReportDialog from '../dialogs/SaveReportDialog';
import { Report } from '../types';

const CreateReportTab = () => {
  const [showCustomReport, setShowCustomReport] = useState(false);
  const [files, setFiles] = useState<Array<{ name: string; content: string; file: File }>>([]);
  const [folders, setFolders] = useState<string[]>([]);
  const [currentReport, setCurrentReport] = useState<Report>({ title: '', content: '', file: null });
  const [showSaveDialog, setShowSaveDialog] = useState(false);

  const handleNewCustomReport = () => {
    setShowCustomReport(true);
    setCurrentReport({ title: '', content: '', file: null });
  };

  const handleUploadReports = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;
    
    const uploadedFiles = Array.from(event.target.files);
    const processedFiles = await Promise.all(uploadedFiles.map(async (file) => {
      const content = await file.text();
      return {
        name: file.name,
        content,
        file
      };
    }));
    
    setFiles(prevFiles => [...prevFiles, ...processedFiles]);
  };

  const handleSaveReport = (folder: string) => {
    if (currentReport.title) {
      const newFile = {
        name: `${currentReport.title}.docx`,
        content: currentReport.content,
        file: currentReport.file as File
      };
      setFiles(prevFiles => [...prevFiles, newFile]);
      setShowCustomReport(false);
      setShowSaveDialog(false);
    }
  };

  return (
    <Card>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center mb-4">
          {showCustomReport && (
            <Button variant="outline" onClick={() => setShowCustomReport(false)}>
              Back
            </Button>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Plus className="mr-2 h-4 w-4" /> New <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={handleNewCustomReport}>
                <FileText className="mr-2 h-4 w-4" /> Custom Report
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => document.getElementById('file-upload')?.click()}>
                <Upload className="mr-2 h-4 w-4" /> Upload Report(s)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setShowSaveDialog(true)}>
                <Folder className="mr-2 h-4 w-4" /> New Folder
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <input
            id="file-upload"
            type="file"
            multiple
            onChange={handleUploadReports}
            className="hidden"
          />
        </div>
        {showCustomReport ? (
          <CustomReport 
            report={currentReport}
            onSave={() => setShowSaveDialog(true)}
            onChange={(title, content) => setCurrentReport({ ...currentReport, title, content })}
          />
        ) : (
          <div className="border rounded-md p-4 min-h-[400px] bg-background">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Folders</h3>
              {folders.length > 0 ? (
                <ul>
                  {folders.map((folder, index) => (
                    <li key={index} className="flex items-center">
                      <Folder className="mr-2 h-4 w-4" /> {folder}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">No folders created yet.</p>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Files</h3>
              {files.length > 0 ? (
                <ul>
                  {files.map((file, index) => (
                    <li key={index} className="flex items-center cursor-pointer">
                      <FileText className="mr-2 h-4 w-4" /> {file.name}
                      <p className="ml-4 text-sm text-muted-foreground">
                        {file.content.substring(0, 100)}...
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">No files uploaded yet.</p>
              )}
            </div>
          </div>
        )}
        <SaveReportDialog
          open={showSaveDialog}
          onOpenChange={setShowSaveDialog}
          folders={folders}
          onCreateFolder={(name) => setFolders(prev => [...prev, name])}
          onSave={handleSaveReport}
        />
      </CardContent>
    </Card>
  );
};

export default CreateReportTab;