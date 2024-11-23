import { useEffect, useState } from 'react'
import ManageThesisForm from '../../../../custom/Forms/ManageThesisForm'
import Table from '../../../../custom/Table/table'
import { useDispatch, useSelector } from 'react-redux'
import {
  createThesis,
  deleteThesis,
  fetchAllThesis,
} from '../../slices/dashboardSlice'
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'

function Manage_Thesis() {
  const dispatch = useDispatch()
  const { thesisData } = useSelector(state => state.dashboard)
  const [currentThesis, setCurrentThesis] = useState(null)
  const [show, setShow] = useState(false)

  const handleEdit = thesis => {
    setCurrentThesis(thesis)
    setShow(true)
  }

  const columns = [
    {
      id: 'id',
      label: 'ID',
      width: 80,
      render: thesis => (
        <strong>{String(thesis.thesis_id).padStart(2, '0')}</strong>
      ),
    },
    { id: 'title', label: 'Title', key: 'title' },
    { id: 'author', label: 'Author', key: 'author_name' },
    {
      id: 'reviewer',
      label: 'Reviewer',
      key: 'reviewer_name',
      render: thesis => (
        <span className={thesis.reviewer_id ? '' : 'text-danger'}>
          {thesis.reviewer_name || 'Not Assigned'}
        </span>
      ),
    },
    { id: 'category', label: 'Category', key: 'category' },
    {
      id: 'keywords',
      label: 'Keywords',
      render: thesis => thesis.keywords,
    },
    { id: 'abstract', label: 'Abstract', key: 'abstract' },
    { id: 'views', label: 'Views', key: 'views_count' },
    { id: 'downloads', label: 'Downloads', key: 'downloads_count' },
    {
      id: 'status',
      label: 'Status',
      render: thesis => (
        <span className="text-capitalize">{thesis.status}</span>
      ),
    },
    {
      id: 'actions',
      label: 'Action',
      render: thesis => (
        <div className="d-flex flex-column gap-2">
          <button
            type="button"
            className="btn btn-sm text-primary"
            onClick={() => handleEdit(thesis)}
          >
            <Pencil1Icon />
          </button>
          <button
            type="button"
            className="btn btn-sm text-danger"
            onClick={() =>
              dispatch(deleteThesis(thesis.thesis_id, () => setShow(false)))
            }
          >
            <TrashIcon />
          </button>
        </div>
      ),
    },
  ]

  useEffect(() => {
    dispatch(fetchAllThesis())
  }, [])

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <ManageThesisForm
            thesis={currentThesis}
            show={show}
            setShow={setShow}
          />
          <div className="col-lg-12">
            <Table title="List of Thesis" rows={thesisData} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manage_Thesis
