import React, { Component } from "react"
import SearchBar from "./search_bar"
import Gif from "./gif"
import GifList from "./gif_list"
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifId: "3NtY188QaxDdC",
      gifList: [],
    }
    this.getFeaturedList()
  }

  getFeaturedList = () => {
    const apiKey = "iklpRhVg1ZRatjgUkMxG2CcjgFCK9zyf"
    const endPoint = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10&rating=g`
    fetch(endPoint)
      .then((response) => response.json())
      .then((data) => {
        const gifs = data.data.map((e) => e.id)
        this.setState({
          gifList: gifs,
        })
      })
  }

  search = (query) => {
    const apiKey = "iklpRhVg1ZRatjgUkMxG2CcjgFCK9zyf"
    const endPoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10&offset=0&rating=g&lang=en`
    fetch(endPoint)
      .then((response) => response.json())
      .then((data) => {
        const gifs = data.data.map((e) => e.id)
        this.setState({
          gifList: gifs,
        })
      })
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.gifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifList={this.state.gifList} />
        </div>
      </div>
    )
  }
}

export default App
