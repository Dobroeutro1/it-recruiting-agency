import React from "react"
import { useDispatch } from "react-redux"

import { ImageModalProps } from "./types"
import { actionsImageModal } from "../../store"

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  url,
  title
}) => {
  const dispatch = useDispatch()

  const onClose = (): void => {
    dispatch(actionsImageModal.close())
  }

  return (
    <div className={`modal ${isOpen && 'modal_open'}`} onClick={onClose}>
      <div className="modal__content" onClick={(event) => event.stopPropagation()}>
        <img className="modal__img" src={url} alt={title}/>
        <p className="modal__title">{title}</p>
      </div>
    </div>
  )
}
