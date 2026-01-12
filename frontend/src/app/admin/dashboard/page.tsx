'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAdminAuthenticated, deauthenticateAdmin } from '@/utils/auth';
import { getVisitorStats, getProjectAnalytics } from '@/lib/analytics';
import ProtectedRoute from '@/components/ProtectedRoute';
import VisitorChart from '@/components/charts/VisitorChart';
import ProjectPieChart from '@/components/charts/ProjectPieChart';
import TimeSpentChart from '@/components/charts/TimeSpentChart';
import { getVisitorsOverTime, getProjectClicksData, getTimeSpentData } from '@/lib/analytics';

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [projects, setProjects] = useState<any[]>([]);
  const [visitorChartData, setVisitorChartData] = useState<any[]>([]);
  const [projectClicksData, setProjectClicksData] = useState<any[]>([]);
  const [timeSpentData, setTimeSpentData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsData, projectsData, visitorData, clicksData, timeData] = await Promise.all([
          getVisitorStats(),
          getProjectAnalytics(),
          getVisitorsOverTime(),
          getProjectClicksData(),
          getTimeSpentData()
        ]);

        setStats(statsData);
        setProjects(projectsData);
        setVisitorChartData(visitorData);
        setProjectClicksData(clicksData);
        setTimeSpentData(timeData);
      } catch (error) {
        console.error('Error fetching analytics data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (isAdminAuthenticated()) {
      fetchData();
    }
  }, []);

  const handleLogout = () => {
    deauthenticateAdmin();
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2C2F6C] via-[#4D229D] to-[#8B4BEC]">
        <div className="text-white text-xl">Loading analytics...</div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-[#2C2F6C] via-[#4D229D] to-[#8B4BEC]">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-lg border-b border-white/10 p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Analytics Dashboard</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        </header>

        <main className="max-w-7xl mx-auto p-6">
          {/* Stats Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-gray-300 text-sm font-medium mb-1">Total Visitors</h3>
                <p className="text-3xl font-bold text-white">{stats?.totalVisitors || 0}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-gray-300 text-sm font-medium mb-1">Page Views</h3>
                <p className="text-3xl font-bold text-white">{stats?.totalPageViews || 0}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-gray-300 text-sm font-medium mb-1">Project Clicks</h3>
                <p className="text-3xl font-bold text-white">{stats?.totalProjectClicks || 0}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-gray-300 text-sm font-medium mb-1">Avg Time Spent</h3>
                <p className="text-3xl font-bold text-white">{Math.round(stats?.avgTimeSpent || 0)}s</p>
              </div>
            </div>
          </section>

          {/* Charts Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Visitor Analytics</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Visitors Over Time</h3>
                <VisitorChart data={visitorChartData} />
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Time Spent</h3>
                <TimeSpentChart data={timeSpentData} />
              </div>
            </div>
          </section>

          {/* Project Analytics */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Project Analytics</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Project Click Distribution</h3>
                <ProjectPieChart data={projectClicksData} />
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden">
                <h3 className="text-lg font-semibold text-white p-6">Detailed Project Stats</h3>
                <table className="w-full text-left">
                  <thead className="border-b border-white/20">
                    <tr>
                      <th className="p-4 text-gray-300 font-medium">Project</th>
                      <th className="p-4 text-gray-300 font-medium">Views</th>
                      <th className="p-4 text-gray-300 font-medium">Clicks</th>
                      <th className="p-4 text-gray-300 font-medium">Avg Time (s)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project) => (
                      <tr key={project._id} className="border-b border-white/10 last:border-0 hover:bg-white/5">
                        <td className="p-4 text-white">{project.title}</td>
                        <td className="p-4 text-white">{project.analytics?.viewCount || 0}</td>
                        <td className="p-4 text-white">{project.analytics?.clickCount || 0}</td>
                        <td className="p-4 text-white">{project.analytics?.averageTimeSpent || 0}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
      </div>
    </ProtectedRoute>
  );
}