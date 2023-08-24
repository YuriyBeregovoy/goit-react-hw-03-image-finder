export const ImageGalleryItem = ({ image: { id, webformatURL, tags, largeImageURL }, openModal }) => {
  return (<li>
  <img id={id} src={webformatURL} alt={tags} onClick={() => openModal(largeImageURL)} />
</li>)

}