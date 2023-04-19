import React from 'react'

export default function alert(props) {
  return (
    
    props.alert && <div className={`alert alert-${props.alert.type} `} role="alert">
  {props.alert.message}
    {/* An example alert with an icon */}
  </div>
  )
}
