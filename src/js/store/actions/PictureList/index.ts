import { IAction, IActionAsync } from "../../../types"

import { getPicturesApi } from "../../../api"

class Actions {
  readonly GET_PICTURES = 'GET_PICTURES'
  readonly GET_PICTURES_OK = 'GET_PICTURES_OK'
  readonly GET_PICTURES_ERROR = 'GET_PICTURES_ERROR'

  readonly DELETE_IMAGE = 'DELETE_IMAGE'

  getPictures = ():IActionAsync => async (dispatch) => {
    dispatch({ type: this.GET_PICTURES })
    try {
      dispatch({ type: this.GET_PICTURES_OK, payload: await getPicturesApi() })
    } catch (err) {
      dispatch({ type: this.GET_PICTURES_ERROR, payload: err })
    }
  }

  deleteImage = (id: number): IAction => ({ type: this.DELETE_IMAGE, payload: id })
}

export const actionsPictureList = new Actions()
