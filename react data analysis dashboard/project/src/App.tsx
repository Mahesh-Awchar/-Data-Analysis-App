import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { salesData, regionalData, productData } from './data/mockData';
import Header from './components/Header';
import DashboardCard from './components/DashboardCard';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Revenue Trends */}
          <DashboardCard title="Revenue Trends">
            <LineChart width={350} height={200} data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#0088FE" />
              <Line type="monotone" dataKey="profit" stroke="#00C49F" />
            </LineChart>
          </DashboardCard>

          {/* Regional Performance */}
          <DashboardCard title="Regional Performance">
            <BarChart width={350} height={200} data={regionalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="region" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#0088FE" />
            </BarChart>
          </DashboardCard>

          {/* Product Categories */}
          <DashboardCard title="Product Categories">
            <PieChart width={350} height={200}>
              <Pie
                data={productData}
                cx={175}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="sales"
              >
                {productData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </DashboardCard>

          {/* Key Metrics */}
          <DashboardCard title="Key Metrics">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">
                  ${salesData.reduce((acc, curr) => acc + curr.revenue, 0).toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">Total Revenue</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">
                  ${salesData.reduce((acc, curr) => acc + curr.profit, 0).toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">Total Profit</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-600">
                  {salesData.reduce((acc, curr) => acc + curr.customers, 0)}
                </p>
                <p className="text-sm text-gray-600">Total Customers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">
                  {(productData.reduce((acc, curr) => acc + curr.growth, 0) / productData.length).toFixed(1)}%
                </p>
                <p className="text-sm text-gray-600">Avg Growth</p>
              </div>
            </div>
          </DashboardCard>
        </div>
      </main>
    </div>
  );
}

export default App;