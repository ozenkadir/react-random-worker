import React from 'react'
import User from './user.js'

function users({users, page}) {
    const startIndex = (page - 1) * 10;
    const selectedUsers = users.slice(startIndex, startIndex + 15)
  return (
    <div className='usersContainer'>
    {
        selectedUsers.map((user) => (
            <User user={user} key={user.login.uuid}/>
        ))
    }
    </div>
  )
}

export default users
