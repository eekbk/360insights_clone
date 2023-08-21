export interface MenuCategory {
  title: string,
  items: Array<Array<string>>,
}

export interface CardInfo {
  category: string,
  title: string,
  callToAction: string,
  imageUrl: string,
}