import React, { useState, useEffect } from 'react'

export default function DateSelector({handleDateSelect}) {
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
    setMonth(generateArray(1, 12))
    setDate(generateArray(1, 31))
    setYear(generateArray(2018, 2022))
  }, [])

  const FullYear = dataTypes => e => {
    if (dataTypes === 'year') fullYear.year = e.target.value
    else if (dataTypes === 'month') fullYear.month = e.target.value
    else if (dataTypes === 'date') fullYear.date = e.target.value
    handleDateSelect(fullYear)
  }

  return (
    <>
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
    </>
  )
}
