import React from "react"
import Gif from "./gif"

const GifList = (props) => {
  return (
    <div className="gif-list">
      <div className="gif">
        {props.gifList.map((id) => {
          return <Gif id={id} key={id} />
        })}
      </div>
    </div>
  )
}

export default GifList
