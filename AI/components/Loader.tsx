import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex h-full flex-col items-center'>
        <div className='w-10 h-10 relative animate-spin'>
            <Image 
                src="/logo.png"
                alt='logo'

                fill
            />
        </div>

    </div>
  )
}

export default Loader