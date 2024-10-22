"use client";

import { useEffect } from "react";

function Comment() {
  useEffect(() => {
    (function () {
      "use strict";
      const forms = document.querySelectorAll(".needs-validation");
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    })();
  }, []);

  return (
    <form
      className="needs-validation"
      noValidate
      id="commentform"
      method="post"
    >
      <div className="mb-3 col-md-12">
        <label htmlFor="comment">Comment</label>
        <textarea
          type="text"
          className="form-control w-100"
          id="comment"
          name="comment"
          placeholder="Enter Comment"
          rows={5}
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
