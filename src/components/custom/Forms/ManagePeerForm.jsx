import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createPeerReview, fetchAllThesis } from '../../pages/dashboard/slices/dashboardSlice';
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";

const initialFormData = {
  title: '',
  thesis_id: '',
  review: '',
  review_date: '',
  status: '',
};

function ManagePeerForm({ peer, show, setShow }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialFormData);
  const [mode, setMode] = useState('create')
  const { formSubmitting } = useSelector(state => state.dashboard)

  useEffect(() => {
    if (peer) {
      setFormData({
        title: peer.title || '',
        thesis_id: peer.thesis_id || '',
        review: peer.review || '',
        review_date: new Date(peer.review_date).toISOString().split('T')[0] || '',
        status: peer.status || '',
      });

      setMode('edit')
    }
  }, [peer]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleReset = (e) => {
    e?.preventDefault();
    setFormData(initialFormData);
    setMode('create')
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      const dataToSubmit = { ...formData };

      if (mode === 'edit') {
        dataToSubmit.id = peer.id;
      }

      dispatch(createPeerReview(dataToSubmit, () => handleReset()));
    } else {
      e.target.classList.add('was-validated');
    }
  };

  const thesisData = useSelector(state => state.dashboard.thesisData)

  React.useEffect(() => {
    dispatch(fetchAllThesis())

  }, [])

  return (
    <div className="col-lg-12">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center" style={{ cursor: 'pointer' }} onClick={() => setShow(!show)}>
          <h4 className="card-title">Manage Peer Review</h4>
          <button className="btn btn-sm" onClick={() => setShow(!show)}>
            <ChevronDownIcon style={{ rotate: show ? '180deg' : '0deg' }} />
          </button>
        </div>
        {show && <div className="card-body">
          <div className="basic-form">
            <form className="needs-validation" noValidate onSubmit={handleSubmit}>
              <div className="row">
                <div className="mb-3 col-md-12">
                  <label className="form-label">Title</label>
                  <input type="text" className="form-control" name="title" value={formData.title} onChange={handleInputChange} required />
                  <div className="invalid-feedback">Please enter a Title.</div>
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label">Thesis Name</label>
                  <select className="form-control" name="thesis_id" value={formData.thesis_id} onChange={handleInputChange} required>
                    <option value="" disabled>Choose Thesis</option>
                    {thesisData.map(thesis => (
                      <option value={thesis.thesis_id}>{thesis.title}</option>
                    ))}
                  </select>
                  <div className="invalid-feedback">Please enter a Title.</div>
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="review_date"
                    value={formData.review_date}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="invalid-feedback">Please enter a Date.</div>
                </div>
              </div>

              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label">Review</label>
                  <textarea
                    name="review"
                    value={formData.review}
                    onChange={handleInputChange}
                    required
                    className="form-control"
                    placeholder="Enter Review"
                  />
                  <div className="invalid-feedback">Please enter Review.</div>
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label">Status</label>
                  <select
                    name="status"
                    className="form-control"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>Choose Status</option>
                    <option value="pending">Pending</option>
                    <option value="in review">In Review</option>
                    <option value="completed">Completed</option>
                  </select>
                  <div className="invalid-feedback">Please select a Status.</div>
                </div>
              </div>

              <div className="d-flex justify-content-end gap-3">
                <button type="button" className="btn btn-outline-primary" onClick={handleReset}>
                  Reset
                </button>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={formSubmitting}
                >
                  {formSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      {mode === 'edit' ? 'Editing...' : 'Creating...'}
                    </>
                  ) : (
                    `${mode === 'edit' ? 'Edit' : 'Create'} Review`
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default ManagePeerForm;
