export const API_URL = 'https://66afa211b05db47acc5a60e5.mockapi.io/products'
export const API_ITEMS_PAGE_LIMIT: number = 12

export function createUrl(page: string | number, name: string, sort: string, order: string): string {
  const urlObject: URL = new URL(API_URL)
  urlObject.searchParams.set('page', `${page}`)
  urlObject.searchParams.set('limit', `${API_ITEMS_PAGE_LIMIT}`)
  name && urlObject.searchParams.set('name', `${name}`)
  sort && urlObject.searchParams.set('sortBy', `${sort}`)
  order && urlObject.searchParams.set('order', `${order}`)

  return urlObject.toString()
}
