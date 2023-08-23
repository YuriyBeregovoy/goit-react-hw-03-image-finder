import { fetchImages } from "api";
import { Component } from "react";

export class App extends Component {
  state = {
    query: "",
   imagesGallery: [],
    page: 1
}


  changeQuery = (newQuery) => {
    this.setState({
      query: newQuery,
      imagesGallery: [],
      page: 1
    });
  };
  

  async componentDidMount() {
    const imagesGallery = await fetchImages();
    console.log(imagesGallery);
    this.setState({ imagesGallery });
  
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
       console.log(this.state.query)
     }
  }
  

  handleLoadMore = () => {
    this.setState(prevState => ({page: prevState.page + 1}))
  }

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
          <button type="submit">Submit</button>
        </form>
      </div>

      <div>Gallery</div>
      <div>
        <button onClick={this.handleLoadMore}>Load more</button>
      </div>

    </div>
  );
}

 
};
