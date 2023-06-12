import React, { useState } from 'react';

const FeedbackModal = ({ selectedClassId, closeModal }) => {
    const [feedback, setFeedback] = useState('');
    //   console.log(selectedClassId)
    // console.log(feedback);
    const handleSubmit = () => {
        // Perform the necessary logic to send feedback to the instructor
        // ...
    
        // Update the feedback for the selected class ID
        fetch(`https://skillset-academy-server.vercel.app/class/${selectedClassId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ feedback }),
        })
          .then(res => res.json())
          .then(data => {
            // Handle the response data
            console.log(data);
    
            // Close the modal
            closeModal();
          })
          .catch(error => {
            // Handle any errors
            console.error(error);
    
            // Close the modal
            closeModal();
          });
      };

    const handleInputChange = e => {
        setFeedback(e.target.value);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal modal-open">
                <div className="modal-box">
                    <h3 className="modal-title">Send Feedback</h3>
                    <div className="modal-body">
                        <textarea
                            className="form-input w-full"
                            placeholder="Write your feedback here..."

                            value={feedback}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="modal-action">
                        <button className="btn btn-primary" onClick={handleSubmit}>
                            Send
                        </button>
                        <button className="btn btn-secondary" onClick={closeModal}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
            <div className="modal-overlay"></div>
        </div>
    );
};

export default FeedbackModal;
