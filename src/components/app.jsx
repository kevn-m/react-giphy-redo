import React, { Component } from "react"
import SearchBar from "./search_bar"
import Gif from "./gif"
import GifList from "./gif_list"

const App = () => {
  const gifId = "3NtY188QaxDdC"
  const gifList = ["3NtY188QaxDdC", "ujh2qQvMVlZflF1mPQ"]

  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif id={gifId} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifList={gifList} />
      </div>
    </div>
  )
}

export default App
