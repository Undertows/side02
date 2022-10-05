import React from 'react'
import Iterator from './Iterator'

export default function Cover({props}) {
  return (
    <div
      className='w-screen h-screen
    grid grid-flow-row grid-cols-4  place-content-center
    gap-6 justify-items-start '>
      <Iterator iterable={props}/>
    </div>
  )
}
