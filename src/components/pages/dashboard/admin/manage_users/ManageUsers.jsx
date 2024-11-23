import { useEffect, useState } from 'react'
import ManageUserForm from '../../../../custom/Forms/ManageUserForm'
import Pagination from '../../../../custom/misc/Pagination'
import { deleteUser, fetchUsers } from '../../slices/dashboardSlice'
import { useDispatch, useSelector } from 'react-redux'
import Table from '../../../../custom/Table/table'
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'

function Manage_users() {
  const dispatch = useDispatch()
  const { usersList: users } = useSelector(state => state.dashboard)
  const [currentUser, setCurrentUser] = useState(null)
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const [show, setShow] = useState(false)

  const toggleDropdown = index => {
    setDropdownOpen(dropdownOpen === index ? null : index)
  }

  const handleEdit = user => {
    setCurrentUser(user)
    setShow(true)
  }

  const columns = [
    { label: 'First Name', key: 'firstname' },
    { label: 'Last Name', key: 'lastname' },
    { label: 'Gender', key: 'gender' },
    {
      label: 'Date of Birth',
      key: 'dob',
      render: user => new Date(user.dob).toLocaleDateString(),
    },
    { label: 'Address', key: 'address' },
    { label: 'Phone', key: 'phone' },
    { label: 'Email', key: 'email' },
    { label: 'Role', key: 'role' },
    { label: 'Status', key: 'status' },
    {
      label: 'Action',
      key: 'action',
      render: user => (
        <div className="d-flex flex-column">
          <button
            className="btn btn-sm text-primary"
            onClick={() => handleEdit(user)}
          >
            <Pencil1Icon />
          </button>
          <button
            className="btn btn-sm text-danger"
            onClick={() => dispatch(deleteUser(user.id))}
          >
            <TrashIcon />
          </button>
        </div>
      ),
    },
  ]

  useEffect(() => {
    dispatch(fetchUsers())

    return () => {
      setCurrentUser(null)
    }
  }, [])

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <ManageUserForm show={show} setShow={setShow} user={currentUser} />
          <div className="col-lg-12">
            <Table title="Users" rows={users} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manage_users
