import React from 'react'

import UserWidgetComponent from './UserWidgetComponent';

const UserGridView = ({users}) => {
  return (
    <div className='flex flex-wrap'>
       
        {users.map((user)=>(
            <UserWidgetComponent user={user} key={user.id}/>
        ))}
       
      
    </div>
  )
}

export default UserGridView
