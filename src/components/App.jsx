import { fetchImages } from "api";
import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";

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
   await this.fetchAndSetImages();
  
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.fetchAndSetImages();
     }
  }
  
  fetchAndSetImages = async () => {
    const { query, page } = this.state;
    const imagesGallery = await fetchImages(query, page);
    // console.log(imagesGallery)
    this.setState(prevState => ({
      imagesGallery: [...prevState.imagesGallery, ...imagesGallery]
    }));
  }




  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }), () => {
      this.fetchAndSetImages();
    });
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

       <ImageGallery imagesArea={this.state.imagesGallery} />
      <div>
        <button onClick={this.handleLoadMore}>Load more</button>
      </div>

    </div>
  );
}

 
};
