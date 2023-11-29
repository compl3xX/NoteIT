import React from 'react'
import './StyleWrapper.scss'

const StyleWrapper = ({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default StyleWrapper