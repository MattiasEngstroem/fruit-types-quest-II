import { fruitObject } from "../types";
import { fruits } from "./fruits";

// använd fruits-arrayen och returnera det fruit-objekt som matchar name
// finns det ingen sådan fruit så returnera undefined

export const getFruit = (fruits: fruitObject[], name: string): fruitObject | undefined => {
	
	return fruits.find((f) => f.name === name);

};

// använd fruits-arrayen och returnera ikonen som matchar frukten name
// finns det ingen sådan frukt så returnera undefined


export const getIcon = (fruits: fruitObject[], name: string): string | undefined => {

	const match: fruitObject | undefined = fruits.find((f) => f.name === name);
	if (match === undefined) {
		return undefined;
	}
	else {
		return match.icon;
	}

};

// använd fruits-arrayen och returnera färgen som matchar frukten name
// finns det ingen sådan frukt så returnera undefined


export const getColor = (fruits: fruitObject[], name: string): string | undefined => {

	const match: fruitObject | undefined = fruits.find((f) => f.name === name);
	if (match === undefined) {
		return undefined;
	}
	else {
		return match.color;
	}

};

// gör en till funktion som man ger ett fruktnamn och som returnerar en frukts kategori

export const getCategory = (fruits: fruitObject[], name: string): string | undefined => {

	const match: fruitObject | undefined = fruits.find((f) => f.name === name);
	if (match === undefined) {
		return undefined;
	}
	else {
		return match.category;
	}

};

// använd fruits-arrayen och returnera hur många frukter det finns av en given färg color
// finns det inga frukter av den färgen så svara 0

export const numberOfColoredFruits = (fruits: fruitObject[], color: string): number => {
	const matchingFruits: fruitObject[] = fruits.filter((f) => f.color === color);
	return matchingFruits.length;
};

// gör en numberOfCategoryFruits här också
// använd fruits-arrayen och returnera hur många frukter det finns av en given kategori

export const numberOfCategoryFruits = (fruits: fruitObject[], category: string): number => {
	const matchingFruits: fruitObject[] = fruits.filter((f) => f.category === category);
	return matchingFruits.length;
};

// använd fruits-arrayen
// ta emot en kategori och returnera en array av alla frukter som ingår i den kategorin

export const getFruitsByCategory = (fruits: fruitObject[], category: string): fruitObject[] => {
	const matchingFruits: fruitObject[] = fruits.filter((f) => f.category === category);
	return matchingFruits;
};

// gör en getFruitsByColor också

export const getFruitsByColor = (fruits: fruitObject[], color: string): fruitObject[] => {
	const matchingFruits: fruitObject[] = fruits.filter((f) => f.color === color);
	return matchingFruits;
};

// använd fruits-arrayen
// ta emot en kategori och returnera alla ikoner från alla frukter i den kategorin

export const getIconsByCategory = (fruits: fruitObject[], category: string): string[] => {
	const iconsOfCategory: string[] = [];
	fruits.forEach((f) => {
		if (f.category === category) {
			iconsOfCategory.push(f.icon);
		}
	});
	return iconsOfCategory;
};

// gör en getIconsByColor också

export const getIconsByColor = (fruits: fruitObject[], color: string): string[] => {
	const iconsOfColor: string[] = [];
	fruits.forEach((f) => {
		if (f.color === color) {
			iconsOfColor.push(f.icon);
		}
	});
	return iconsOfColor;
};

// gör en getCategories som returnerar en array av alla kategorier

export const getCategories = (fruits: fruitObject[]): string[] => {
	const uniqueCategories: string[] = [];
	fruits.forEach((f) => {
		if (!uniqueCategories.includes(f.category)) {
			uniqueCategories.push(f.category);
		}
	});
	return uniqueCategories;
};

// gör en getColors som returnerar en array av alla färger

export const getColors = (fruits: fruitObject[]): string[] => {
	const uniqueColors: string[] = [];
	fruits.forEach((f) => {
		if (!uniqueColors.includes(f.color)) {
			uniqueColors.push(f.color);
		}
	});
	return uniqueColors;
};