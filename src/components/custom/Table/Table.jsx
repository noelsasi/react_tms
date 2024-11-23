import React, { useEffect, useState } from 'react'
import Pagination from '../misc/Pagination'

function Table({
  title,
  rows = [],
  columns = [],
  onRowClick,
  getRowClassName,
}) {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [paginatedRows, setPaginatedRows] = useState([])

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    setTotalPages(Math.ceil(rows.length / 10))
  }, [rows])

  useEffect(() => {
    setPaginatedRows(rows.slice((currentPage - 1) * 10, currentPage * 10))
  }, [currentPage, rows])

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
                {columns.map(column => (
                  <th
                    key={column.id}
                    style={column.width ? { width: column.width } : {}}
                  >
                    <strong>{column.label}</strong>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedRows.map((row, rowIndex) => (
                <tr
                  key={row.id || rowIndex}
                  onClick={() => onRowClick?.(row)}
                  className={getRowClassName?.(row)}
                  style={{ cursor: onRowClick ? 'pointer' : 'default' }}
                >
                  {columns.map(column => (
                    <td key={`${row.id}-${column.id}`}>
                      {column.render ? column.render(row) : row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default Table
