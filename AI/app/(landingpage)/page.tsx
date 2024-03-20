import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <div className='flex flex-row gap-3 '>
    <Link href={"/sign-in"}><Button className='relative '>login</Button></Link>
    <Link href={"/sign-up"}><Button className='relative'>signup</Button></Link>
   </div>
  )
}
