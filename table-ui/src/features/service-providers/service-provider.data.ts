import { ServiceProvider } from "./service-provider.types"

const vendorTypes = ["Independent", "Company"] as const
const statuses = ["Onboarded", "Rejected"] as const
const services = [
  "Housekeeping",
  "Window Cleaning",
  "Car Valet"
] as const

function randomItem<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)]
}

function generatePostcode() {
  return `EC${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * 9)}AB`
}

function generateDate() {
  const start = new Date(2023, 0, 1).getTime()
  const end = new Date().getTime()

  const random = new Date(start + Math.random() * (end - start))

  return random.toISOString().split("T")[0]
}

export function generateServiceProviders(
  count: number
): ServiceProvider[] {
  return Array.from({ length: count }).map((_, index) => ({
    id: `sp-${index}`,

    email: `user${index}@mail.com`,
    phoneNumber: `+44 7700 ${100000 + index}`,
    postcode: generatePostcode(),

    vendorType: randomItem(vendorTypes),
    serviceOffering: randomItem(services),

    signupDate: generateDate(),
    status: randomItem(statuses)
  }))
}

export const mockServiceProviders =
  generateServiceProviders(60)