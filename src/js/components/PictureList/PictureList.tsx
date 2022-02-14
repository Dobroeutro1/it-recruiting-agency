import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { actionsPictureList } from "../../store"
import { picturesOnPage } from "../../constants"

import { Pagination } from "../Pagination"
import { Picture } from "../Picture"

import { PictureListProps } from "./types"

export const PictureList: React.FC<PictureListProps> = ({
  pictureList,
  loading
}) => {
  const [page, setPage] = useState<number>(0)
  const [filteredAlbumId, setFilteredAlbumId] = useState<number>(1)

  const dispatch = useDispatch()

  const visiblePictures = []

  for (let i = 0; i <= pictureList.length; i += picturesOnPage) {
    const splitPictureList = pictureList.filter((picture) => {
      if (filteredAlbumId > 0) {
        return picture.albumId === filteredAlbumId
      }
      return picture
    }).slice(i, i + picturesOnPage)
    if (splitPictureList.length) {
      visiblePictures.push(splitPictureList)
    }
  }

  const prev = (): void => {
    if (page !== 0) {
      setPage(page - 1)
    }
  }

  const next = (): void => {
    if (page < visiblePictures.length) {
      setPage(page + 1)
    }
  }

  const onFilter = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setFilteredAlbumId(parseInt(event.currentTarget.value, 10))
  }

  useEffect(() => {
    dispatch(actionsPictureList.getPictures())
  }, [])

  if (loading) {
    return null
  }

  const albumIdList = Array.from(new Set(pictureList.map((picture) => picture.albumId)))

  return (
    <>
      <div className="filter">
        <p className="filter__text">Filter by album</p>
        <select className="button filter__select" onChange={onFilter}>
          {albumIdList.map((id) => <option key={id} value={id}>{id}</option>)}
        </select>
      </div>
      <div className="picture-list">
        {visiblePictures[page]?.map((picture) => <Picture key={picture.id} picture={picture} />)}
      </div>
      <Pagination
        page={page + 1}
        picturesCounter={visiblePictures.length}
        prev={prev}
        next={next}
      />
    </>
  )
}
