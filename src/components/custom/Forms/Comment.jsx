import { useState } from "react";

function Comment({ onSubmit }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment);
      setComment("");
    }
  };

  return (
    <form
      className="needs-validation"
      noValidate
      id="commentform"
      method="post"
      onSubmit={handleSubmit}
    >
      <div className="mb-3 col-md-12">
        <textarea
          type="text"
          className="form-control w-100"
          id="comment"
          name="comment"
          placeholder="Enter Comment"
          rows={5}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <div className="invalid-feedback">Please enter a comment.</div>
      </div>
      <div className="row">
        <div className="col-md-12 form-submit text-end">
          <button type="submit" className="btn btn-primary btn-sm" id="submit">
            Add Comment
          </button>
        </div>
      </div>
    </form>
  );
}

export default Comment;
