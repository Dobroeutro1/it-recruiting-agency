import { combineReducers } from 'redux'

import { reducer as imageModal } from './ImageModal'
import { reducer as pictureList } from './PictureList'

export default combineReducers({ imageModal, pictureList })
