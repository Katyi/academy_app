'use client';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { Card } from '@/components/ui/card';

const Chart = ({ data }: { data: { name: string; total: number }[] }) => {
  return (
    <Card>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} className="pt-4">
          <br />
          <XAxis
            dataKey="name"
            stroke="888888"
            fontSize={12}
            axisLine={false}
            tickLine={false}
            angle={-90}
            textAnchor="end"
            interval={0}
            height={120}
            width={30}
          />
          <YAxis
            stroke="888888"
            fontSize={12}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `₽${value}`}
          />
          <Tooltip />
          <Bar dataKey="total" fill="#8884d8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
