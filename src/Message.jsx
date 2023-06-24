import React from 'react'

export default function Message(props) {
  return (
    <div>
      <p>You have read <strong>{props.count}</strong> pieces of advice.</p>
    </div>
  )
}
