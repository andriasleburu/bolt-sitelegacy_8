"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageCircle, UserPlus, Activity } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

const Members = () => {
  const { toast } = useToast();
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', jobTitle: 'Conservation Specialist', country: 'USA', avatar: 'https://i.pravatar.cc/150?img=1', connected: false },
    { id: 2, name: 'Jane Smith', jobTitle: 'Archaeologist', country: 'UK', avatar: 'https://i.pravatar.cc/150?img=2', connected: false },
    { id: 3, name: 'Ahmed Hassan', jobTitle: 'Environmental Scientist', country: 'Egypt', avatar: 'https://i.pravatar.cc/150?img=3', connected: false },
    { id: 4, name: 'Maria Garcia', jobTitle: 'Heritage Manager', country: 'Spain', avatar: 'https://i.pravatar.cc/150?img=4', connected: false },
  ]);

  const activities = [
    { id: 1, user: 'John Doe', action: 'Uploaded report', details: 'Annual Conservation Report 2023', date: '2023-06-20' },
    { id: 2, user: 'Jane Smith', action: 'Updated site data', details: 'Machu Picchu visitor statistics', date: '2023-06-19' },
    { id: 3, user: 'Ahmed Hassan', action: 'Submitted observation', details: 'New species spotted in Serengeti', date: '2023-06-18' },
  ];

  const handleConnect = (userId: number) => {
    toast({
      title: "Connection Request Sent",
      description: "The member will be notified of your request.",
    });

    setUsers(users.map(user => 
      user.id === userId ? { ...user, connected: true } : user
    ));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Members</h1>
      </div>

      <Tabs defaultValue="connect">
        <TabsList>
          <TabsTrigger value="connect">Connect</TabsTrigger>
          <TabsTrigger value="activity">User Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="connect">
          <Card>
            <CardHeader>
              <CardTitle>Connect with Members</CardTitle>
            </CardHeader>
            <CardContent>
              <Input className="mb-4" placeholder="Search members..." />
              <ul className="space-y-4">
                {users.map((user) => (
                  <li key={user.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.jobTitle}</p>
                        <p className="text-sm text-muted-foreground">{user.country}</p>
                      </div>
                    </div>
                    <div className="space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleConnect(user.id)}
                        disabled={user.connected}
                      >
                        <UserPlus className="mr-2 h-4 w-4" />
                        {user.connected ? 'Connected' : 'Connect'}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>User Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {activities.map((activity) => (
                  <li key={activity.id} className="flex items-start space-x-4">
                    <Activity className="h-5 w-5 mt-1" />
                    <div>
                      <p className="font-medium">{activity.user}</p>
                      <p className="text-sm">{activity.action}: {activity.details}</p>
                      <p className="text-sm text-muted-foreground">{activity.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Members;