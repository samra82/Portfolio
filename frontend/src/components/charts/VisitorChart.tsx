'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface VisitorData {
  date: string;
  visitors: number;
  pageViews: number;
}

export default function VisitorChart({ data }: { data: VisitorData[] }) {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
          <XAxis dataKey="date" stroke="#B0B0B0" />
          <YAxis stroke="#B0B0B0" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(30, 30, 50, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              backdropFilter: 'blur(10px)'
            }}
            itemStyle={{ color: 'white' }}
            labelStyle={{ color: '#8B4BEC', fontWeight: 'bold' }}
          />
          <Legend />
          <Bar dataKey="visitors" fill="#8B4BEC" name="Unique Visitors" radius={[4, 4, 0, 0]} />
          <Bar dataKey="pageViews" fill="#FDBE79" name="Page Views" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}