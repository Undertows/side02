import React from 'react'

export default function Iterable({ pac, d, i }) {
  return (
    <div
      // border border-black border-solid
      onClick={() => pac.delectDiary(d._id, i)}
      onMouseDown={e => pac.doubleClick(i, e)}
      className={`relative pl-6 ${
        i == pac.currentIndex &&
        `pointer-events-none before:pointer-events-auto before:w-4 before:h-4 before:rounded-2xl before:bg-rose-500
              before:absolute before:z-10 before:mr--5 before:mt--5 before:right-0 before:bottom-4`
      }`}>
      {d.content}
    </div>
  )
}
