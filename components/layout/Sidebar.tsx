"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Building, LayoutDashboard, BarChart2, FileText, FolderKanban, Calendar, Users, Layers } from 'lucide-react';

const staticMenuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { name: 'Analytics', icon: BarChart2, href: '/analytics' },
  { name: 'Reports', icon: FileText, href: '/reports' },
  { name: 'Projects', icon: FolderKanban, href: '/projects' },
  { name: 'Events', icon: Calendar, href: '/events' },
  { name: 'Members', icon: Users, href: '/members' },
  { name: 'Spaces', icon: Layers, href: '/spaces' },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [spaces, setSpaces] = useState([
    { id: 1, name: 'Great Barrier Reef Discussion', href: '/spaces/great-barrier-reef' },
    { id: 2, name: 'Machu Picchu Updates', href: '/spaces/machu-picchu' },
    { id: 3, name: 'Taj Mahal Restoration', href: '/spaces/taj-mahal' },
  ]);

  return (
    <div className="flex flex-col w-64 bg-card text-card-foreground">
      <div className="flex items-center justify-center h-16 border-b">
        <Building className="w-6 h-6 mr-2" />
        <span className="text-2xl font-semibold">Sitelegacy</span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-4 space-y-2">
          {staticMenuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className={cn(
                "flex items-center p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors",
                pathname === item.href ? "bg-accent text-accent-foreground" : ""
              )}>
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            </li>
          ))}
          {spaces.length > 0 && (
            <>
              <li className="pt-4">
                <h3 className="px-2 text-sm font-semibold text-muted-foreground">My Spaces</h3>
              </li>
              {spaces.map((space) => (
                <li key={space.id}>
                  <Link href={space.href} className={cn(
                    "flex items-center p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors",
                    pathname === space.href ? "bg-accent text-accent-foreground" : ""
                  )}>
                    <Layers className="w-5 h-5 mr-3" />
                    {space.name}
                  </Link>
                </li>
              ))}
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;