import React from 'react';
import './UserWidgetComponent.css';

function UserWidgetComponent({ user }) {
    return (
        <div className="user-widget">
            <img className="user-photo" src={user.photo} alt={`${user.firstName} ${user.lastName}`} />
            <div className="user-details">
                <h2>{user.firstName} {user.lastName}</h2>
                <p>{user.email}</p>
                <p>Status: {user.status ? 'Active' : 'Inactive'}</p>
               

            </div>
           <div className='rotated-image'> <svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-three-dots">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg></div>
        </div>
    );
}

export default UserWidgetComponent;
