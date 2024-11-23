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
} from 'recharts'

const getDarkColor = () => {
  // Material UI dark colors
  const darkColors = [
    '#1976d2', // Blue
    '#388e3c', // Green
    '#d32f2f', // Red
    '#7b1fa2', // Purple
    '#c2185b', // Pink
    '#0288d1', // Light Blue
    '#00796b', // Teal
    '#689f38', // Light Green
    '#303f9f', // Indigo
    '#455a64', // Blue Grey
    '#5d4037', // Brown
    '#616161', // Grey
  ]
  return darkColors[Math.floor(Math.random() * darkColors.length)]
}

function PrimaryCharts({ dashboardData }) {
  // Add null check for dashboardData
  if (!dashboardData) {
    return null
  }

  // Transform viewsByCategory data with null check
  const viewsData = dashboardData.viewsByCategory
    ? Object.entries(dashboardData.viewsByCategory).map(([name, count]) => ({
        name,
        count,
        fill: getDarkColor(),
      }))
    : []

  // Transform downloadsByCategory data with null check
  const downloadsData = dashboardData.downloadsByCategory
    ? Object.entries(dashboardData.downloadsByCategory).map(
        ([name, count]) => ({
          name,
          count,
          fill: getDarkColor(),
        })
      )
    : []

  // Transform viewsAndDownloadsByDay data with null check
  // const timeSeriesData = dashboardData.viewsAndDownloadsByDay
  //   ? dashboardData.viewsAndDownloadsByDay.map(item => ({
  //       name: new Date(item.date).toLocaleDateString('en-US', {
  //         weekday: 'short',
  //       }),
  //       views: item.views,
  //       downloads: item.downloads,
  //     }))
  //   : []
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  // Assuming dashboardData.viewsAndDownloadsByDay contains data for specific dates
  console.log(dashboardData.viewsAndDownloadsByDay)

  const timeSeriesData = weekDays.map((day, index) => {
    const dataForDay = dashboardData.viewsAndDownloadsByDay?.find(item => {
      const itemDate = new Date(item.date)

      const itemDay = itemDate.getDay() + 1
      return itemDay === index
    })

    return {
      name: day, // Use the day name (Sun, Mon, etc.)
      views: dataForDay ? dataForDay.views : 0, // Set views or 0 if no data
      downloads: dataForDay ? dataForDay.downloads : 0, // Set downloads or 0 if no data
    }
  })

  console.log(timeSeriesData) // Output the processed time series data

  return (
    <div className="col-12">
      <div className="row">
        <div className="col-lg-6 col-sm-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Total Views by Category</h4>
            </div>
            <div className="card-body">
              <div className="">
                <ResponsiveContainer height={300}>
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="40%"
                    outerRadius="100%"
                    barSize={32}
                    data={viewsData}
                  >
                    <RadialBar background dataKey="count" />
                    <Legend
                      align="left"
                      verticalAlign="middle"
                      layout="vertical"
                      wrapperStyle={{
                        paddingLeft: '16px',
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
              <h4 className="card-title">Downloads by Category</h4>
            </div>
            <div className="card-body">
              <div className="">
                <ResponsiveContainer height={300}>
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="40%"
                    outerRadius="100%"
                    barSize={32}
                    data={downloadsData}
                  >
                    <RadialBar background dataKey="count" />
                    <Legend
                      align="left"
                      verticalAlign="middle"
                      layout="vertical"
                      wrapperStyle={{
                        paddingLeft: '16px',
                      }}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Views & Downloads Trend</h4>
            </div>
            <div className="card-body">
              <div className="">
                <ResponsiveContainer height={300}>
                  <BarChart data={timeSeriesData} barSize={20}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tick={{ fill: '#d1d5db' }}
                      tickLine={false}
                    />
                    <YAxis
                      axisLine={false}
                      tick={{ fill: '#d1d5db' }}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: '10px',
                        borderColor: 'lightgray',
                      }}
                    />
                    <Legend
                      align="left"
                      verticalAlign="top"
                      wrapperStyle={{
                        paddingTop: '20px',
                      }}
                    />
                    <Bar
                      dataKey="views"
                      fill={getDarkColor()}
                      radius={[10, 10, 0, 0]}
                      name="Views"
                    />
                    <Bar
                      dataKey="downloads"
                      fill={getDarkColor()}
                      radius={[10, 10, 0, 0]}
                      name="Downloads"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrimaryCharts
