import React from "react";
import axios from 'axios';
import Book from "./Components/Start/Book";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  componentDidMount() {
    axios.get('https://in3.dev/knygos/')
      .then(res => {
        this.setState({ books: res.data })
      })
  }

  render() {

    if (this.state.books.length) {
      return (
        <div className="App">
          <div className="big-blue">
            {
              this.state.books.map(b => <Book key={b.id} book={b}></Book>)
            }
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <div className="big-blue">
            <div class="loader">
              <div class="square" ></div>
              <div class="square"></div>
              <div class="square last"></div>
              <div class="square clear"></div>
              <div class="square"></div>
              <div class="square last"></div>
              <div class="square clear"></div>
              <div class="square "></div>
              <div class="square last"></div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;