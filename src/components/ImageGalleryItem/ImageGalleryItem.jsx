export const ImageGalleryItem = ({ image: { id, webformatURL, tags } }) => {
  return (<li>
  <img id={id} src={webformatURL} alt={tags} />
</li>)

}