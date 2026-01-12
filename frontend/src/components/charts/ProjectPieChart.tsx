'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface ProjectData {
  name: string;
  clicks: number;
  fill?: string;
}

const COLORS = ['#8B4BEC', '#FDBE79', '#4D229D', '#2C2F6C', '#B0B0B0', '#F2F2F2'];

export default function ProjectPieChart({ data }: { data: ProjectData[] }) {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="clicks"
            nameKey="name"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(30, 30, 50, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              backdropFilter: 'blur(10px)'
            }}
            itemStyle={{ color: 'white' }}
            formatter={(value) => [value, 'Clicks']}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}