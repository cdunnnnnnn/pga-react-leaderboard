import React from 'react'

function Footer() {
  return (
    <footer className="text-center pt-4 pb-12">
      <p className="text-xs">
        copyright {new Date().getFullYear()}{' '}
        <a href="https://github.com/cdunnnnnnn" target="_blank">
          @cdunnnnnnn
        </a>
      </p>
    </footer>
  )
}

export default Footer
