import { fakerEN_NG as faker } from "@faker-js/faker";
import type { Role } from "@/models/role.model";

export const generateRoles = (count = 5): Role[] => {
  return Array.from({ length: count }, () => ({
    title: faker.helpers.arrayElement(["Admin", "Super Admin", "Manager", "Farmer"]),
    description: faker.lorem.sentence(),
    user_count: faker.number.int({ min: 1, max: 10 }),
    created_by: faker.person.fullName(),
    date_created: faker.date
      .past({ years: 1 })
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
  }));
};