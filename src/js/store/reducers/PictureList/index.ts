import { PictureListStorage } from "../../types"
import { IAction, Picture } from "../../../types"
import { actionsPictureList } from "../../actions"

const initialState: PictureListStorage = {
  pictureList: [],
  loading: false
}

export function reducer(state = initialState, action: IAction): PictureListStorage {
  switch (action.type) {
    case actionsPictureList.GET_PICTURES:
      return { ...state, loading: true }
    case actionsPictureList.GET_PICTURES_OK:
      return { ...state, loading: false, pictureList: action.payload as Picture[] }
    case actionsPictureList.DELETE_IMAGE:
      return { ...state, pictureList: state.pictureList.filter((picture) => picture.id !== (action.payload as number)) }

    default:
      return state
  }
}
