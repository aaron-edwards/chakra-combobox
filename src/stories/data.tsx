/* eslint-disable import/no-extraneous-dependencies */
import { faker } from "@faker-js/faker";

faker.seed(42);

export const animalTypes = [
  { type: "bear", emoji: "🐻", color: "red.500" },
  { type: "bird", emoji: "🐦", color: "orange.500" },
  { type: "cat", emoji: "🐱", color: "yellow.500" },
  { type: "cow", emoji: "🐮", color: "green.500" },
  { type: "crocodilia", emoji: "🐊", color: "teal.500" },
  { type: "dog", emoji: "🐶", color: "blue.500" },
  { type: "fish", emoji: "🐟", color: "cyan.500" },
  { type: "horse", emoji: "🐴", color: "purple.500" },
  { type: "rabbit", emoji: "🐰", color: "pink.500" },
  { type: "snake", emoji: "🐍", color: "gray.500" },
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
    ...type,
    name: faker.animal[type.type](),
  };
}

export const animals = Array.from({ length: 10_000 }, generateAnimal);
