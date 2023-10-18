import React, { useEffect, useState } from 'react'
import { useApiData } from '../ContextApi/apiDataContext'

const CommandPrompt = () => {

  const apiData = useApiData();



  return (
<p className='text-violet-300'>{apiData?.userIpAddress ? apiData?.userIpAddress : 'user'}@portfolio:~$ </p>  )
}

export default CommandPrompt