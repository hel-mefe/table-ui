import {
  VendorType,
  RegistrationStatus,
  ServiceOffering
} from "./service-provider.types"

export interface ServiceProviderFilters {
  postcode?: string

  status?: RegistrationStatus[]

  vendorType?: VendorType[]

  serviceOffering?: ServiceOffering[]

  startDate?: string
  endDate?: string
}