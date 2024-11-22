export interface PicsumImage {
  id: string
  author: string
  width: number
  height: number
  url: string
  download_url: string
}

export interface PicsumListRequest {
  limit?: number
  page?: number
}
