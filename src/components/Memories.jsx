import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DateSelector from '../components/DateSelector'
import moods from '../util/constant'

export default function Memories() {
  const [diaries, setDiaries] = useState([])
  const [time, getTime] = useState()
  const [currentIndex, setCurrentIndex] = useState(-1)

  useEffect(() => {
    //TODO: 一上来只随机展示一条日记
    getDiariesByWhat('all', {})
  }, [])

  //   //你妈逼,路径少写一段浪费三天...还是没有api的习惯
  async function getDiariesByWhat(what, subCondition) {
    const { data: diaries } = await axios.post(
      `/test/showDiaries/${what}`,
      subCondition
    )
    setDiaries(diaries)
  }

  async function delectDiary(id, index) {
    if (index == currentIndex) {
      setDiaries(diaries.filter(d => d._id !== id))
      setCurrentIndex(-1)
      const {
        data: { msg },
      } = await axios.delete(`test/delectDiary?id=${id}`)
      alert(msg)
    }
  }

  function test() {
    axios(`/test/test`)
  }

  document.oncontextmenu = e => {
    e.preventDefault()
  }

  function doubleClick(index, e) {
    if (e.button === 2) setCurrentIndex(index)
    setTimeout(() => {
      setCurrentIndex(-1)
    }, 5000)
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
      <button onClick={test}>Test</button>
      {/* // flex flex-col place-items-center */}
      <div
        className='w-screen h-screen
    grid grid-flow-row grid-cols-4  place-content-center
    gap-6 justify-items-start '>
        {diaries.map((d, i) => (
          <div
            // border border-black border-solid
            onClick={() => delectDiary(d._id, i)}
            onMouseDown={e => doubleClick(i, e)}
            className={`relative pl-6 ${
              i == currentIndex &&
              `pointer-events-none before:pointer-events-auto before:w-4 before:h-4 before:rounded-2xl before:bg-rose-500
              before:absolute before:z-10 before:mr--5 before:mt--5 before:right-0 before:bottom-4`
            }`}
            key={i}>
            {d.content}
          </div>
        ))}
      </div>
    </>
  )
}
