import React from "react";

import "./App.css";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(responce => responce.json())
      .then(responce => this.setState({ items: responce }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value }, () =>
      console.log(this.state.searchField)
    );
  };

  render() {
    const { items, searchField } = this.state;
    /* the same:
    const items = this.state.items    
    const searchField =this.state.searchField
    */
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          onSearchChangee={this.onSearchChange}
        />

        <CardList items={filteredItems} />
        {/* <CardList items={this.state.items} /> */}
      </div>
    );
  }
}

export default App;
