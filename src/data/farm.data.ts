import type { Farm } from "@/models/farm.model";
import  { fakerEN_NG as faker } from "@faker-js/faker";

const STATUSES = ["healthy", "average"];
const LOCATIONS = ["Jos", "Apapa, Il Ade", "Ibadan", "Abeokuta"];

export const generateFarms = (count = 5): Farm[] => {
  return Array.from({ length: count }, () => ({
    id: `F/${faker.string.alphanumeric(5).toUpperCase()}`,
    farmName: `${faker.company.name()} branch`,
    size: faker.number.int({ min: 1, max: 50 }),
    location: faker.helpers.arrayElement(LOCATIONS),
    status: faker.helpers.arrayElement(STATUSES),
    dateCreated: faker.date
      .past({ years: 1 })
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    soilPh: faker.number.float({ min: 0, max: 10, fractionDigits: 1 }),
    moisture: faker.number.int({ min: 0, max: 100 }),
    nutrient: faker.helpers.arrayElement(["low", "medium", "high"]),
    tests: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => ({
      testID: `R/${faker.string.alphanumeric(5).toUpperCase()}`,
      status: faker.helpers.arrayElement(["processing", "completed"]),
      payment: faker.number.int({ min: 5000, max: 25000 }),
      date: faker.date
        .past({ years: 1 })
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
      plantingDate: faker.date
        .past({ years: 1 })
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
    })),
  }));
};
