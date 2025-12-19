import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <Image src="/404.svg" alt="not found" width={500} height={500} />
      <Link href="/"><Button>Return Home</Button></Link>
    </div>
  )
}