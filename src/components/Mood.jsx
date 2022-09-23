import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function mood() {
  let moods = [
    'anxiety',
    'anger',
    'sad',
    'emo',
    'ecstasy',
    'fear',
    'joyful',
    'unknown',
  ]
  const [searchId] = useSearchParams()
  const navi = useNavigate()

  const setMood = async mood => {
    try {
      const {
        data: { msg },
      } = await axios.post('/test/setMood', {
        mood: mood,
        id: searchId.get('id'),
      })
      alert(msg)
      navi('/')
    } catch (e) {
      console.log(e.message)
    }
  }
  return (
    <div className='w-screen h-screen flex place-content-center place-items-center'>
      {/* border-black border-solid border-2 */}
      <div
        className='grid gap-10 grid-cols-4 w-[30vw] h-[35vh]
    place-content-center place-items-center'>
        {moods.map((m, i) => (
          <div
            key={i}
            className='rounded-full w-16 h-16 border-[1px] border-opacity-20 border-black border-solid '
            onClick={() => setMood(m)}>
            {m}
          </div>
        ))}
      </div>
    </div>
  )
}
