import React from 'react'
import withAuth from '../utils/withAuth'
import withDarkMode from '../utils/withDarkMode'

const Demo = (props) => {
  return (
    <div {...props}>
        <h2>Demo Component</h2>
    </div>
  )
}

export default withDarkMode(withAuth(Demo));
