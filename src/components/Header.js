import React from 'react'

function Header() {
  return (
    <div className="sticky top-0 z-50">
      <header className="flex items-center justify-between flex-wrap bg-blue py-4 px-8">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <a style={{ display: 'block', width: 156 }} href="/">
            <img
              src="https://beta.pga.org/assets/images/pga-logo-tm.svg"
              alt="PGA"
            />
          </a>
        </div>
      </header>
    </div>
  )
}

export default Header
