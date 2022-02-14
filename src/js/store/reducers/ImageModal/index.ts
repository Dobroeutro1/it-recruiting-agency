import { ImageModalStorage } from "../../types"
import { IAction } from "../../../types"
import { actionsImageModal } from "../../actions"

const initialState: ImageModalStorage = {
  isOpen: false,
  url: null,
  title: null
}

export function reducer(state = initialState, action: IAction): ImageModalStorage {
  switch (action.type) {
    case actionsImageModal.OPEN:
      return { ...state, isOpen: true, ...(action.payload as { url: string, title: string }) }
    case actionsImageModal.CLOSE:
      return initialState

    default:
      return state
  }
}
