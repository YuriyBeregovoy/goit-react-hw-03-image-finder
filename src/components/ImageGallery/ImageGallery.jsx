import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({imagesArea, openModal}) => {

  return (<ul>{imagesArea.map(image => (
    <ImageGalleryItem key={image.id} image={image} openModal={openModal} />
  ))}</ul>)

}