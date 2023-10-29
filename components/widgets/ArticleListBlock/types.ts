export interface Article {
  title: string,
  link: string,
  image: string
}

export interface Articles {
  title?: string,
  articles: Article[]
}