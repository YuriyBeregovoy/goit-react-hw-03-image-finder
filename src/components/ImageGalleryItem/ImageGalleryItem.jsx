export const ImageGalleryItem = ({ image: { id, webformatURL } }) => {
  return (<li>
  <img id={id} src={webformatURL} alt="" />
</li>)

}