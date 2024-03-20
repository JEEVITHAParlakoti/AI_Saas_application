import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

import { useUser } from '@clerk/nextjs'

const Useravatar = () => {

  const {user} = useUser()
  return (
    <div>
      <Avatar>
        <AvatarImage src={user?.imageUrl} />
        <AvatarFallback>
          {user?.firstName?.charAt(0)}
          {user?.lastName?.charAt(0)}
        </AvatarFallback>
       
      </Avatar>
    </div>
  )
}

export default Useravatar