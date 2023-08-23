import { fetchImages } from "api";
import { Component } from "react";
import Notiflix from 'notiflix';
import { InfinitySpin } from  'react-loader-spinner'
import { ImageGallery } from "./ImageGallery/ImageGallery";

export class App extends Component {
  state = {
    query: "",
   imagesGallery: [],
    page: 1,
    hasImages: false,
    isLoading: false,
}


  changeQuery = (newQuery) => {
 if (newQuery !== "") {this.setState({
      query: `${Date.now()}/${newQuery}`,
      imagesGallery: [],
      page: 1
    });}

  };
  



  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.fetchAndSetImages();
    }
  }
  
  fetchAndSetImages = async () => {
     this.setState({ isLoading: true });

    const { query, page, imagesGallery } = this.state;
    const indexOfSlash = query.indexOf("/");
    const queryAfterSlash = query.slice(indexOfSlash + 1);
    const newImages = await fetchImages(queryAfterSlash, page);

    if (newImages.length === 0) {
      Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
    }
    
    this.setState({
      imagesGallery: [...imagesGallery, ...newImages],
      hasImages: true && newImages.length > 0,
      isLoading: false,
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
       {this.state.isLoading ? (<InfinitySpin width='100' color="#4fa94d" />) :
         (<ImageGallery imagesArea={this.state.imagesGallery} />
)}

      <div>
        {this.state.hasImages && (<button onClick={this.handleLoadMore}>Load more</button>)}
      </div>

    </div>
  );
}

 
};
