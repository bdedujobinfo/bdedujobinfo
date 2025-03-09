import Image from 'next/image'
import React from 'react'
import logo from "../../../assets/images/logo/bdedujob-logo.png"

const Logo = () => {
  return (
    <div>
        <Image src={logo} alt='bdedujob-logo'  className='max-w-48'/>
    </div>
  )
}

export default Logo