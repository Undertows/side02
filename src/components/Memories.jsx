import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DateSelector from '../components/DateSelector'
import moods from '../util/constant'

export default function Memories() {
  const [diaries, setDiaries] = useState([])
  const [time, getTime] = useState()

  useEffect(() => {
    async function getDiaries() {
      //TODO: 一上来只随机展示一条日记
      //你妈逼,路径少写一段浪费三天...还是没有api的习惯
      const { data: diaries } = await axios.post('/test/showDiaries/all')
      setDiaries(diaries)
    }
    getDiaries()
  }, [])

  async function getDiariesByWhat(what, subCondition) {
    const { data: diaries } = await axios.post(
      `/test/showDiaries/${what}`,
      subCondition
    )
    setDiaries(diaries)
  }
  function test() {
    axios(`/test/test`)
    console.log(fullYear)
    // setDiaries(diaries)
  }

  return (
    <>
      <select
        onChange={e => getDiariesByWhat('mood', { mood: e.target.value })}>
        {moods.map(m => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
      &nbsp;&nbsp;&nbsp;
      <DateSelector handleDateSelect={getTime} />
      <button onClick={() => getDiariesByWhat('date', time)}>byDate</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => test()}>Test</button>
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
