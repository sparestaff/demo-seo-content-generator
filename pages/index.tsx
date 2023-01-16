import { useState } from 'react';
import Button from 'antd/lib/button'
import { APIWithoutAuth } from 'utils/api'

export default function Home() {
  const [message, setMessage] = useState("")
  const fetchMessage = async() =>{
    const {data} = await APIWithoutAuth("/healthcheck");
    setMessage(data.message)
    setTimeout(removeMessage, 1500)
  }

  const removeMessage = () =>{
    setMessage("")
  }

  return (
    <>
      <div className='h-screen text-center p-16'>
        <Button type="primary" onClick={fetchMessage}>Get API message</Button>
        <p>{message}</p>
        <p>Text size</p>
      </div>
    </>
  )
}
