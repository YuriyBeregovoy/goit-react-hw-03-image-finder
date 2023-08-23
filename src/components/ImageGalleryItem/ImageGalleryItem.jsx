export const ImageGalleryItem = ({image: {id, webformatURL}}) => {<li class="gallery-item">
  <img id={id} src={webformatURL} alt="" />
</li>

}