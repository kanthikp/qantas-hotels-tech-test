export interface Rating {
  ratingValue: number
  ratingType: string
}
export interface PreviewImage {
  url: string
  caption: string
  imageType: string
}
export interface Property {
  propertyId: string
  title: string
  address: string[]
  previewImage: PreviewImage
  rating: Rating
}
export interface Promotion {
  title: string
  type: string
}
export interface OfferPrice {
  amount: number
  currency: string
}
export interface CancellationOption {
  cancellationType: string
}
export interface Offer {
  promotion: Promotion
  name: string
  displayPrice: OfferPrice
  savings: OfferPrice | null
  cancellationOption: CancellationOption
}
export interface PropertyDetail {
  id: string
  property: Property
  offer: Offer
}
