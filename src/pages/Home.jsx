import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Home() {
  const [diary, setDiary] = useState('')
  const [_, setID] = useSearchParams()
  const navi = useNavigate()

  const saveDiary = async () => {
    try {
      const {
        data: { diaryObj, msg },
      } = await axios.post('/test/saveDiary', { content: diary })
      // console.log(diaryObj.date)
      // alert(msg)
      selectMood(diaryObj._id)
    } catch (e) {
      console.log(e.message)
    }
  }
  const selectMood = id => {
    setID(id)
    navi(`/mood?id=${id}`)
  }
  return (
    // 别忘了加h-screen w-screen...这里太坑了
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <textarea
        autoFocus
        onChange={e => setDiary(e.target.value)}
        className='w-[40vw] h-[50vh] rounded outline-none resize-none
        border-transparent border-solid border-2 text-2xl'
      />
      <div className='flex mt-10 gap-20'>
        <button
          className='border-2 border-solid border-transparent
        bg-opacity-40 bg-gray-400 rounded-md w-[10vw] h-[7vh]
        text-xl'
          onClick={saveDiary}>
          保&nbsp;&nbsp;存
        </button>
        {/* <button className=''>清空</button> */}
      </div>
    </div>
  )
}
