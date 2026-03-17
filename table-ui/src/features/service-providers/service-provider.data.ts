import { ServiceProvider } from "./service-provider.types"

const designRows: ServiceProvider[] = [
  {
    id: "sp-design-1",
    email: "jonesadam@gmail.com",
    phoneNumber: "+44 20 7946 0958",
    postcode: "SW1A 1AA",
    vendorType: "Independent",
    serviceOffering: ["Housekeeping", "Car Valet"],
    signupDate: "2024-05-01",
    status: undefined,
  },
  {
    id: "sp-design-2",
    email: "Gler@app.com",
    phoneNumber: "+44 20 7946 0958",
    postcode: "M1 1AE",
    vendorType: "Company",
    serviceOffering: ["Housekeeping", "Car Valet"],
    signupDate: "2025-03-21",
    status: "Onboarded",
  },
  {
    id: "sp-design-3",
    email: "Albertwatson@gmail.com",
    phoneNumber: "+44 20 7946 0958",
    postcode: "OX1 2JD",
    vendorType: "Independent",
    serviceOffering: ["Housekeeping", "Car Valet"],
    signupDate: "2023-10-11",
    status: "Rejected",
  },
]

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
    serviceOffering: ["Housekeeping", "Car Valet"],

    signupDate: generateDate(),
    status: randomItem(statuses)
  }))
}

export const mockServiceProviders: ServiceProvider[] = [
  ...designRows,
  ...generateServiceProviders(57),
]