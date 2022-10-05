import React from 'react'
import Iterable from './Iterable'

export default function Iterator({iterable}) {
  const { diaries } = iterable
  return (
    <>
      {diaries.map((d, i) => (
        <Iterable pac={iterable} d={d} i={i} key={i} />
      ))}
    </>
  )
}
