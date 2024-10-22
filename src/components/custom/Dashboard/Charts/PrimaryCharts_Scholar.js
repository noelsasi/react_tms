"use client";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 1006,
    fill: "#ff5c00",
  },
  {
    name: "AI",
    count: 530,
    fill: "#145650",
  },
  {
    name: "ML",
    count: 430,
    fill: "#f93a0b",
  },
  {
    name: "NLP",
    count: 730,
    fill: "#F6AD2E",
  },
];
const data2 = [
  {
    name: "Total",
    count: 506,
    fill: "#ff5c00",
  },
  {
    name: "AI",
    count: 330,
    fill: "#145650",
  },
  {
    name: "ML",
    count: 430,
    fill: "#f93a0b",
  },
  {
    name: "NLP",
    count: 167,
    fill: "#F6AD2E",
  },
];
const data1 = [
  {
    name: "Mon",
    views: 60,
    downloads: 40,
  },
  {
    name: "Tue",
    views: 70,
    downloads: 60,
  },
  {
    name: "Wed",
    views: 90,
    downloads: 75,
  },
  {
    name: "Thu",
    views: 90,
    downloads: 75,
  },
  {
    name: "Fri",
    views: 65,
    downloads: 55,
  },
  {
    name: "Sat",
    views: 80,
    downloads: 75,
  },
  {
    name: "Sun",
    views: 90,
    downloads: 75,
  },
  {
    name: "Mon",
    views: 80,
    downloads: 75,
  },
  {
    name: "Tue",
    views: 70,
    downloads: 60,
  },
];

function PrimaryCharts_Scholar() {
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-lg-6 col-sm-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Total Views</h4>
            </div>
            <div className="card-body">
              <div className="flot-chart">
                <ResponsiveContainer>
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="40%"
                    outerRadius="100%"
                    barSize={32}
                    data={data}
                  >
                    <RadialBar background dataKey="count" />
                    <Legend
                      align="left"
                      verticalAlign="left"
                      wrapperStyle={{
                        paddingTop: "20px",
                        paddingBottom: "40px",
                      }}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Most Viewed</h4>
            </div>
            <div className="card-body">
              <div className="flot-chart">
                <ResponsiveContainer width="100%" height="90%">
                  <BarChart width={500} height={300} data={data1} barSize={20}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#ddd"
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tick={{ fill: "#d1d5db" }}
                      tickLine={false}
                    />
                    <YAxis
                      axisLine={false}
                      tick={{ fill: "#d1d5db" }}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "10px",
                        borderColor: "lightgray",
                      }}
                    />
                    <Legend
                      align="left"
                      verticalAlign="top"
                      wrapperStyle={{
                        paddingTop: "20px",
                        paddingBottom: "40px",
                      }}
                    />
                    <Bar
                      dataKey="views"
                      fill="#ff5c00"
                      legendType="circle"
                      radius={[10, 10, 0, 0]}
                    />
                    <Bar
                      dataKey="downloads"
                      fill="145650"
                      legendType="circle"
                      radius={[10, 10, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Most Downloads</h4>
            </div>
            <div className="card-body">
              <div className="flot-chart">
                <ResponsiveContainer width="100%" height="90%">
                  <BarChart width={500} height={300} data={data1} barSize={20}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#ddd"
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tick={{ fill: "#d1d5db" }}
                      tickLine={false}
                    />
                    <YAxis
                      axisLine={false}
                      tick={{ fill: "#d1d5db" }}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "10px",
                        borderColor: "lightgray",
                      }}
                    />
                    <Legend
                      align="left"
                      verticalAlign="top"
                      wrapperStyle={{
                        paddingTop: "20px",
                        paddingBottom: "40px",
                      }}
                    />
                    <Bar
                      dataKey="views"
                      fill="#ff5c00"
                      legendType="circle"
                      radius={[10, 10, 0, 0]}
                    />
                    <Bar
                      dataKey="downloads"
                      fill="145650"
                      legendType="circle"
                      radius={[10, 10, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Total downloads</h4>
            </div>
            <div className="card-body">
              <div className="flot-chart">
                <ResponsiveContainer>
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="40%"
                    outerRadius="100%"
                    barSize={32}
                    data={data2}
                  >
                    <RadialBar background dataKey="count" />
                    <Legend
                      align="left"
                      verticalAlign="left"
                      wrapperStyle={{
                        paddingTop: "20px",
                        paddingBottom: "40px",
                      }}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default PrimaryCharts_Scholar;
