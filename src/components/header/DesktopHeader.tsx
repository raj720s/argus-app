import Image from 'next/image'
import React from 'react'
import HeaderAds from './HeaderAds'
import Link from 'next/link'

function DesktopHeader() {
  return (
    <div className='desktop-header flex justify-between items-center  m-1 w-full max-h-32 gap-3 border-b border-gray-50 max-md:hidden overflow-hidden' >

      <div className="header-logo ">
        <Link href={'/'} >
          <Image src="/assets/logo/argus_logo.svg" alt="logo" width={240} height={52} />
        </Link>
      </div>

      <div className="header-ads">
        <HeaderAds />
      </div>
    </div>
  )
}

export default DesktopHeader   