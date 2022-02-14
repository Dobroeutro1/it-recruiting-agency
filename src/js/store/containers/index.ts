import { connect } from 'react-redux'

import { Storage } from '../types'
import {
  ImageModal,
  ImageModalProps,
  PictureList,
  PictureListProps
} from "../../components"

function imageModal(state: Storage): ImageModalProps {
  return { ...state.imageModal }
}

function pictureList(state: Storage): PictureListProps {
  return { ...state.pictureList }
}

export const PictureListContainer = connect(pictureList)(PictureList)
export const ImageModalContainer = connect(imageModal)(ImageModal)

