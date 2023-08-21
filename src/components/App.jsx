import { Component } from "react";

export class App extends Component {
  state = {
    query: "",
    images: [],
    page: 1
}

  changeQuery = (newQuery) => {
    this.setState({
      query: newQuery,
    });
   };



  render() {
   return (
    <div>
      <div>
        <form onSubmit={evt => {
          evt.preventDefault();
          this.changeQuery(evt.target.elements.query.value);
          evt.target.reset();
        }}>
          <input type="text" name="query" />
          <button type="submit"></button>
        </form>
      </div>

      <div>Gallery</div>
      <div>
        <button>Load more</button>
      </div>

    </div>
  );
}

 
};
