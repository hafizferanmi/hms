import * as React from 'react'

const Trash = (props) => {
  return (
    <svg width={16} height={18} viewBox='0 0 16 18' fill='none' {...props}>
      <path
        d='M10 0H6C4.897 0 4 .897 4 2v1H0v2h2v11c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2V5h2V3h-4V2c0-1.103-.897-2-2-2zM6 2h4v1H6V2zm6 14H4V5h8v11z'
        fill='#8E95A9'
      />
      <path d='M5.25 6h2v9h-2V6zM8.75 6h2v9h-2V6z' fill='#8E95A9' />
    </svg>
  )
}

export default Trash
