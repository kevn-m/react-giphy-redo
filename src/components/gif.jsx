import React from "react"

const Gif = (props) => {
  return (
    <img
      className="gif"
      src={`https://media.giphy.com/media/${props.id}/giphy.gif`}
      alt=""
    />
  )
}

export default Gif
