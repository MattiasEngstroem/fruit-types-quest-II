import "./styles.css";

import type { fruitObject } from "./types";

import { getFruit, 
        getIcon, 
        getColor, 
        getCategory, 
        numberOfColoredFruits, 
        numberOfCategoryFruits,
        getFruitsByCategory,
        getFruitsByColor, 
        getIconsByCategory,
        getIconsByColor,
        getCategories,
        getColors,
    } from "./fruits/utils";

import { fruits } from "./fruits/fruits";



console.log("Welcome to fruit-types-quest-II, please fix the code!");

// skriv ett program här nedan som testar alla de funktioner som finns i fruits/utils

console.log("Test av getFruit:");
console.log(getFruit(fruits, "banana"));
console.log(getFruit(fruits, "frukt som inte finns"));

console.log("Test av getIcon:");
console.log(getIcon(fruits, "lime"));
console.log(getIcon(fruits, "frukt som inte finns"));

console.log("Test av getColor:");
console.log(getColor(fruits, "tangerine"));
console.log(getColor(fruits, "frukt som inte finns"));

console.log("Test av getCategory:");
console.log(getCategory(fruits, "mango"));
console.log(getCategory(fruits, "frukt som inte finns"));

console.log("Test av numberOfColoredFruits");
console.log(numberOfColoredFruits(fruits, "yellow"));
console.log(numberOfColoredFruits(fruits, "färg som inte finns"));

console.log("Test av numberOfCategoryFruits");
console.log(numberOfCategoryFruits(fruits, "drupe"));
console.log(numberOfCategoryFruits(fruits, "kategori som inte finns"));

console.log("Test av getFruitsByCategory");
console.log(getFruitsByCategory(fruits, "pepo"));

console.log("Test av getFruitsByColor");
console.log(getFruitsByColor(fruits, "red"));

console.log("Test av getIconsByCategory");
console.log(getIconsByCategory(fruits, "citrus"));

console.log("Test av getIconsByColor");
console.log(getIconsByColor(fruits, "purple"));

console.log("Test av getCategories");
console.log(getCategories(fruits));

console.log("Test av getColors");
console.log(getColors(fruits));