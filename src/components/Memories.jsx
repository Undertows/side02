import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Memories() {
  const [diaries, setDiaries] = useState([])
  const [month, setMonth] = useState([])
  const [date, setDate] = useState([])
  const [year, setYear] = useState([])
  const [fullYear, setFullYear] = useState({
    year: undefined,
    month: undefined,
    date: undefined,
  })

  useEffect(() => {
    function generateArray(start, end) {
      return Array.from(new Array(end + 1).keys()).slice(start)
    }
    async function getDiaries() {
      //TODO: 一上来只随机展示一条日记
      //你妈逼,路径少写一段浪费三天...还是没有api的习惯
      const { data: diaries } = await axios('/test/showDiaries/all')
      setDiaries(diaries)
    }
    getDiaries()
    setMonth(generateArray(1, 12))
    setDate(generateArray(1, 31))
    setYear(generateArray(2010, 2022))
  }, [])

  async function getDiariesByWhat(what, subCondition) {
    const { data: diaries } = await axios.post(
      `/test/showDiaries/${what}`,subCondition
    )
    setDiaries(diaries)
  }
  function test() {
    axios(`/test/test`)
    console.log(fullYear)
    // setDiaries(diaries)
  }

  const FullYear = dataTypes => e => {
    if (dataTypes === 'year') fullYear.year = e.target.value
    else if (dataTypes === 'month') fullYear.month = e.target.value
    else if (dataTypes === 'date') fullYear.date = e.target.value
    setFullYear(fullYear)
  }
  return (
    <>
      <button onClick={() => getDiariesByWhat('mood', {mood:'sad'})}>byMood</button>
      &nbsp;&nbsp;&nbsp;
      <select onChange={FullYear('year')}>
        {year.map(y => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
      &nbsp;&nbsp;&nbsp;
      {/* 不要相信开发者工具，真的会不幸。。。从此只信clg了 */}
      <select onChange={FullYear('month')}>
        {month.map(m => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
      &nbsp;&nbsp;&nbsp;
      <select onChange={FullYear('date')}>
        {date.map(d => (
          <option value={d} key={d}>
            {d}
          </option>
        ))}
      </select>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => getDiariesByWhat('date', fullYear)}>byDate</button>
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
