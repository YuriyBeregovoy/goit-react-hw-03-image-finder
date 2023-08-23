import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({imagesArea}) => {

  return (<ul>{imagesArea.map(image => (
    <ImageGalleryItem key={image.id} image={image} />
  ))}</ul>)

}