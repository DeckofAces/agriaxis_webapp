import { fakerEN_NG as faker } from "@faker-js/faker";
import type { User } from "@/models/user.model";

export const generateUsers = (count = 5): User[] => {
  return Array.from({ length: count }, () => ({
    id: `U/${faker.string.numeric(4).toUpperCase()}`,
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    role: faker.helpers.arrayElement(["Admin", "Super Admin", "Manager", "Farmer"]),
    status: faker.helpers.arrayElement(["active", "inactive"]),
    date_created: faker.date
      .past({ years: 1 })
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
  }));
};