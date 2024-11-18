import React, { useState, useEffect } from "react";
import ManagePeerForm from "../../../../custom/Forms/ManagePeerForm";
import Table from "../../../../custom/Table/table";
import { useDispatch, useSelector } from "react-redux";
import { deletePeerReview, fetchPeers } from "../../slices/dashboardSlice";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

function Manage_Peer() {
  const dispatch = useDispatch()
  const [currentPeer, setCurrentPeer] = useState(null);
  const { peersList: peers, } = useSelector(state => state.dashboard)
  const [show, setShow] = useState(false)

  const handleEdit = (peer) => {
    setCurrentPeer(peer);
    setShow(true)
  };

  const columns = [
    { label: 'Title', key: 'title' },
    { label: 'Thesis Title', key: 'thesis_title' },
    { label: 'Review', key: 'review' },
    { label: 'Review Date', key: 'review_date', render: peer => new Date(peer.review_date).toLocaleDateString() },
    { label: 'Status', key: 'status' },
    { label: 'Reviewer Email', key: 'reviewer_email' },
    {
      label: 'Action', key: 'action', render: peer => <div className='d-flex flex-column'>
        <button className='btn btn-sm text-primary' onClick={() => handleEdit(peer)}>
          <Pencil1Icon />
        </button>
        <button className='btn btn-sm text-danger' onClick={() => dispatch(deletePeerReview(peer.id, () => setShow(false)))}>
          <TrashIcon />
        </button>
      </div>
    },
  ]

  useEffect(() => {
    dispatch(fetchPeers())
  }, [])

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <ManagePeerForm peer={currentPeer} show={show} setShow={setShow} />
          <div className="col-lg-12">
            <Table title="Peers" rows={peers} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage_Peer;
