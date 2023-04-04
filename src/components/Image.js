import React from 'react'

function Image(props) {
  return (
    <>
    <img src={props.source} alt="detective"  width={150} id="pic"/>
    </>
  )
}

export default Image;