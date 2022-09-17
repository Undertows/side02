import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Memories() {
  const [diaries, setDiaries] = useState([])

  useEffect(() => {
    async function getDiaries() {//TODO: 一上来只随机展示一条日记
      //你妈逼,路径少写一段浪费三天...还是没有api的习惯
      const { data: diaries } = await axios('/test/showDiaries/all')
      setDiaries(diaries)
    }
    getDiaries()
  }, [])

  async function getDiariesByWhat(what,subCondi) {
    const { data: diaries } = await axios(`/test/showDiaries/${what}?subCondi=${subCondi}`)
    setDiaries(diaries)
  }
  return (
    <>
    <button onClick={()=>getDiariesByWhat('mood','emo')}>byMood</button>
    &nbsp;&nbsp;&nbsp;
    <button onClick={()=>getDiariesByWhat('date','8')}>byDate</button>
    {/* // flex flex-col place-items-center */}
    <div
      className='w-screen h-screen
    grid grid-flow-row grid-cols-4  place-content-center
    gap-6 justify-items-start '>
      {diaries.map((d, i) => (
        <div
          // border border-black border-solid
          className='pl-6'
          key={i}>
          {d.content}
        </div>
      ))}
    </div>
    </>
  )
}
