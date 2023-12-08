import React, { useState } from 'react'

export const Model = ({isModalOpen, setModalOpen,
Title, Content , closeModal}) => {

  
    return (
      <div> 
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className='close-button'  onClick={closeModal}>
                &times;
              </button>
              <h2 className="modal-title">{Title}</h2>
              <p>{Content}</p>
            </div>
          </div>
        )}
      </div>
    );
}
