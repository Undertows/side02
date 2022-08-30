import React from 'react'
import { useState } from 'react'
export default function Loginput() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    pwd: '',
  })

  const handleLogin = dataTypes => e => {
    if (dataTypes === 'name') userInfo.name = e.target.value
    else userInfo.pwd = e.target.value
    return setUserInfo(userInfo)
  }
  
  const loginAuth = () => {
    let { name, pwd } = userInfo
    alert(`${name}    ${pwd}`)
    console.log(name, pwd)
  }
  return (
    <div>
      <input type='text' onChange={handleLogin('name')} />
      <input type='password' onChange={handleLogin('pwd')} />
      <button onClick={loginAuth}>Login</button>
    </div>
  )
}
