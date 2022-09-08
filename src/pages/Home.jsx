import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Home() {
  const [diary, setDiary] = useState('')
  const navi = useNavigate()

  const saveDiary = async () => {
    try {
      const {
        data: { diaryObj },
      } = await axios.post('/test/saveDiary', { content: diary })
      selectMood(diaryObj._id)
    } catch (e) {
      console.log(e.message)
    }
  }

  const selectMood = id => navi(`/mood?id=${id}`)

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
          烂&nbsp;笔&nbsp;头
        </button>
        <button className='text-xl' onClick={() => navi('/memories')}>
          好&nbsp;记&nbsp;性
        </button>
      </div>
    </div>
  )
}
