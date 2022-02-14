import React from "react"

import { PictureProps } from "./types"
import { useDispatch } from "react-redux"
import { actionsImageModal, actionsPictureList } from "../../store"

export const Picture: React.FC<PictureProps> = ({
  picture
}) => {
  const dispatch = useDispatch()

  const onDeleteImage = (): void => {
    dispatch(actionsPictureList.deleteImage(picture.id))
  }

  const onOpenModal = (): void => {
    dispatch(actionsImageModal.open(picture.url, picture.title))
  }

  return (
    <div className="picture">
      <img
        className="picture__img"
        src={picture.thumbnailUrl}
        alt={picture.title}
        onClick={onOpenModal}
      />
      <div className="picture__footer">
        <p className="picture__title">{picture.id}</p>
      </div>
      <button type="button" className="button picture__btn" onClick={onDeleteImage}>Delete</button>
    </div>
  )
}

