import { Metadata } from 'next';
import Dashboard from '@/components/dashboard/Dashboard';
import Layout from '@/components/layout/Layout';

export const metadata: Metadata = {
  title: 'Dashboard | Sitelegacy',
  description: 'Monitor and manage World Heritage Sites through our comprehensive dashboard.',
};

export default function Home() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}