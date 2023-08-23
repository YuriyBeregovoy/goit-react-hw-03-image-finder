import { fetchImages } from "api";
import { Component } from "react";
import Notiflix from 'notiflix';
import { ImageGallery } from "./ImageGallery/ImageGallery";

export class App extends Component {
  state = {
    query: "",
   imagesGallery: [],
    page: 1
}


  changeQuery = (newQuery) => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
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
    const { query, page, imagesGallery } = this.state;
    const indexOfSlash = query.indexOf("/");
    const queryAfterSlash = query.slice(indexOfSlash + 1);

    const newImages = await fetchImages(queryAfterSlash, page);
    this.setState({
  imagesGallery: [...imagesGallery, ...newImages],
});
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
           const searchQuery = evt.target.elements.query.value.trim();
           if ( searchQuery) { this.changeQuery(searchQuery); } else {
             Notiflix.Notify.failure('Please enter a valid search query.');
          }
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
