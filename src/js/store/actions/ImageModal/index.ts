import { IAction } from "../../../types"

class Actions {
  readonly OPEN = 'OPEN'
  readonly CLOSE = 'CLOSE'

  open = (url: string, title: string): IAction => ({ type: this.OPEN, payload: { url, title } })
  close = (): IAction => ({ type: this.CLOSE })
}

export const actionsImageModal = new Actions()
