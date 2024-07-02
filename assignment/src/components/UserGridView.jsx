import React from 'react'

import UserWidgetComponent from './UserWidgetComponent';

const UserGridView = ({users}) => {
  return (
    
      <div className="flex flex-wrap items-center justify-start gap-4 p-5 md:p-8">
        {users.map((user) => (
          <UserWidgetComponent key={user.id} user={user} />
        ))}
      </div>
  )
}

export default UserGridView
