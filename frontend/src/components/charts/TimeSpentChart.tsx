'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface TimeData {
  date: string;
  timeSpent: number;
}

export default function TimeSpentChart({ data }: { data: TimeData[] }) {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
          <XAxis dataKey="date" stroke="#B0B0B0" />
          <YAxis stroke="#B0B0B0" tickFormatter={(value) => `${value}s`} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(30, 30, 50, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              backdropFilter: 'blur(10px)'
            }}
            itemStyle={{ color: 'white' }}
            formatter={(value) => [`${value}s`, 'Time Spent']}
            labelStyle={{ color: '#8B4BEC', fontWeight: 'bold' }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="timeSpent"
            stroke="#8B4BEC"
            strokeWidth={2}
            activeDot={{ r: 8 }}
            name="Avg. Time Spent (seconds)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}