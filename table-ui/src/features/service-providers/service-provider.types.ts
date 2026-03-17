export type RegistrationStatus =
  | "Onboarded"
  | "Rejected"

export type VendorType =
  | "Independent"
  | "Company"

export type ServiceOffering =
  | "Housekeeping"
  | "Window Cleaning"
  | "Car Valet"

export interface ServiceProvider {
  id: string

  email: string
  phoneNumber: string
  postcode: string

  vendorType: VendorType
  serviceOffering: ServiceOffering[]

  signupDate: string
  status?: RegistrationStatus
}