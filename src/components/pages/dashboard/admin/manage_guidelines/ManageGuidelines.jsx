import { useEffect, useState } from 'react'
import ManageGuidelineForm from "../../../../custom/Forms/ManageGuidelineForm"
import { useDispatch, useSelector } from 'react-redux'
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'
import { deleteGuideline, fetchGuidelines } from '../../slices/dashboardSlice'
import { Table } from '../../../../custom/Table'

function Manage_Guidelines() {
  const dispatch = useDispatch()
  const { guidelinesList: guidelines } = useSelector(state => state.dashboard)
  const [currentGuideline, setCurrentGuideline] = useState(null)
  const [show, setShow] = useState(false)

  const handleEdit = guideline => {
    setCurrentGuideline(guideline)
    setShow(true)
  }

  const columns = [
    { 
      id: 'id', 
      label: 'ID', 
      width: 80, 
      render: guideline => (
        <strong>{String(guideline.id).padStart(2, '0')}</strong>
      )
    },
    { id: 'title', label: 'Title', key: 'title' },
    { id: 'description', label: 'Description', key: 'description' },
    { id: 'addedBy', label: 'Added By', key: 'addedBy' },
    {
      id: 'actions',
      label: 'Action',
      render: guideline => (
        <div className="d-flex flex-column gap-2">
          <button
            type="button"
            className="btn btn-sm text-primary"
            onClick={() => handleEdit(guideline)}
          >
            <Pencil1Icon />
          </button>
          <button
            type="button"
            className="btn btn-sm text-danger"
            onClick={() => dispatch(deleteGuideline(guideline.id, () => setShow(false)))}
          >
            <TrashIcon />
          </button>
        </div>
      )
    }
  ]

  useEffect(() => {
    dispatch(fetchGuidelines())
  }, [])

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <ManageGuidelineForm 
            guideline={currentGuideline} 
            show={show} 
            setShow={setShow} 
          />
          <div className="col-lg-12">
            <Table
              title="List of Guidelines"
              rows={guidelines}
              columns={columns}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manage_Guidelines
