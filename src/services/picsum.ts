import { externalApi } from '../config/axios'
import { PicsumImage, PicsumListRequest } from './@types'

const BASE_URL = 'https://picsum.photos/'

export const getPicsumImages = async (
  params?: PicsumListRequest,
): Promise<PicsumImage[]> => {
  try {
    const { data }: { data: PicsumImage[] } = await externalApi.get(
      `${BASE_URL}v2/list`,
      {
        params,
      },
    )
    return data
  } catch (error: unknown) {
    const err = error as Error
    throw new Error(err.message)
  }
}
