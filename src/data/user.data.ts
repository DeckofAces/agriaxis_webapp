import { fakerEN_NG as faker } from "@faker-js/faker";
import type { User } from "@/models/user.model";

export const generateUsers = (count = 5): User[] => {
  return Array.from({ length: count }, () => ({
    id: `U/${faker.string.numeric(4).toUpperCase()}`,
    name: `${faker.person.firstName()} ${faker.person.lastName()}`,
    organisations: [],
    email: faker.internet.email(),
    created_at: faker.date.past().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    updated_at: faker.date.past().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    email_verified_at: faker.date.past().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    phone: faker.phone.number(),
    role: faker.helpers.arrayElement([
      "Admin",
      "Super Admin",
      "Manager",
      "Farmer",
    ]),
    status: faker.helpers.arrayElement(["active", "inactive"]),
    date_created: faker.date.past({ years: 1 }).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
  }));
};

