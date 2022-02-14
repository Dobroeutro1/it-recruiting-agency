import { Picture } from "../types"

export const getPicturesApi = async (): Promise<Picture[]> => {
  const response = await fetch('http://jsonplaceholder.typicode.com/photos')

  if (!response.ok) {
    throw new Error('Error message')
  }

  return await response.json() as Picture[]
}
