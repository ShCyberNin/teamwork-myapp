
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'


const page = async () => {
    
    const session = await getServerSession(authOptions);
    if (session?.user) {
        
        return (
            <div>          
            <h2 className='text-2xl h-screen flex flex-col justify-center items-center bg-slate-100'>
            Admin page- welcome back {session?.user.username}
            <p> blah blah blah </p>
            </h2>
            </div>
        )
    }

  return <h2 className='text-2xl'>Please login to see this admin page!!</h2>
}

export default page