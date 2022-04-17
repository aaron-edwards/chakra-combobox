/* eslint-disable import/no-extraneous-dependencies */
import { faker } from "@faker-js/faker";

faker.seed(42);

export const animalTypes = [
  { type: "bear", emoji: "🐻", color: "red" },
  { type: "bird", emoji: "🐦", color: "orange" },
  { type: "cat", emoji: "🐱", color: "yellow" },
  { type: "cow", emoji: "🐮", color: "green" },
  { type: "crocodilia", emoji: "🐊", color: "teal" },
  { type: "dog", emoji: "🐶", color: "blue" },
  { type: "fish", emoji: "🐟", color: "cyan" },
  { type: "horse", emoji: "🐴", color: "purple" },
  { type: "rabbit", emoji: "🐰", color: "pink" },
  { type: "snake", emoji: "🐍", color: "gray" },
];

type Animal = {
  type: string;
  color: string;
  emoji: string;
  name: string;
};

function generateAnimal(): Animal {
  const type = faker.random.arrayElement(animalTypes);
  return {
    name: faker.animal[type.type](),
    ...type,
  };
}

export const animals = Array.from({ length: 10_000 }, generateAnimal);
