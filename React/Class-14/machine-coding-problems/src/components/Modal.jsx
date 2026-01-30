import React from 'react'

const Modal = ({ visibility, hide }) => {
    if (!visibility) {
        return null;
    }
    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <h2>This is a modal</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam eaque necessitatibus provident officiis obcaecati vero corrupti delectus! Consequatur, nostrum libero quos excepturi quae, quasi tempora, deserunt animi eos quas officiis.</p>
                <button onClick={hide}>Close</button>
            </div>
        </div>
    )
}

export default Modal
