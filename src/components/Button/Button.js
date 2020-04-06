import React from 'react'
import PropTypes from 'prop-types'

import './Button.css'

const Button = ({ className, type, children }) => {
  switch (type) {
    case '3d':
      return (
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          {children}
        </button>
      )
    case 'icon':
      return (
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          {children}
        </button>
      )

    case 'default':
      return (
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          {children}
        </button>
      )

    default:
      return <button className={className}>{children}</button>
  }
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node
}

Button.defaultProps = {
  type: 'default'
}

export default Button
