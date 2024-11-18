import React from 'react'

function Table({ title, rows = [], columns = [] }) {
  return (
    <div className="card">
      {title && (
        <div className="card-header">
          <h4 className="card-title">{title}</h4>
        </div>
      )}
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-responsive-md">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.id} style={column.width ? { width: column.width } : {}}>
                    <strong>{column.label}</strong>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={row.id || rowIndex}>
                  {columns.map((column) => (
                    <td key={`${row.id}-${column.id}`}>
                      {column.render ? column.render(row) : row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Table
