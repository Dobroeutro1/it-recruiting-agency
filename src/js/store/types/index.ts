import { Picture } from "../../types"

export interface ImageModalStorage {
  isOpen: boolean
  url: string
  title: string
}

export interface PictureListStorage {
  pictureList: Picture[]
  loading: boolean
}

export interface Storage {
  pictureList: PictureListStorage
  imageModal: ImageModalStorage
}
