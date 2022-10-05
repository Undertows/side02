import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DateSelector from '../components/DateSelector'
import Cover from '../components/Cover'
import moods from '../util/constant'

export default function Memories() {
  const [diaries, setDiaries] = useState([])
  const [time, getTime] = useState()
  const [currentIndex, setCurrentIndex] = useState(-1)

  const props = {
    diaries,
    currentIndex,
    delectDiary,
    doubleClick,
  }

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
      </select>{' '}
      <DateSelector handleDateSelect={getTime} />
      <button onClick={() => getDiariesByWhat('date', time)}>
        byDate
      </button>{' '}
      <button onClick={test}>Test</button>
      {/* // flex flex-col place-items-center */}
      <Cover props={props} />
    </>
  )
}
