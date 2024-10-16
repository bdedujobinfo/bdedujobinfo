/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

export const Jobs = ({post}) => {
  return (
    <div>
        {post.title} {post.lastDate} {post.details}
    </div>
  )
}
