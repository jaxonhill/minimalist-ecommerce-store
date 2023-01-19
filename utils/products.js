function makeSlugFromPath(path) {
    const lastSlashIndex = path.lastIndexOf("/");
    const fileName = path.slice(lastSlashIndex + 1);
    const fileNameWithoutExt = fileName.split(".")[0];
    return fileNameWithoutExt;
}

export function getAllProducts() {
    const { products } = require("../public/products.json");

    // Return a new array with slugs for each product based off its image path
    const newProducts = products.map((product) => {
        return {
            ...product,
            slug: makeSlugFromPath(product.imgPath)
        }
    });

    return newProducts;
}

export function getProductFromSlug(slug) {
    // Get the products
    const products = getAllProducts();
    // Return the product that matches the slug passed into the function
    const productToReturn = products.filter((product) => {
        return product.slug === slug;
    })[0];
    return productToReturn;
}

export function formatPriceWithDecimals(price) {
    return price.toFixed(2);
}

export function isFilterMatch(theProduct, sideFilterData) {
    // Check that sideFilters even exists
    if (sideFilterData) {
        // Create two conditions in this function that check isClothingMatch and
        // isSizeMatch. If they are both true, return true from the function altogether
        let isClothingMatch;
        let isSizeMatch;

        // Check that clothing is not null
        if (sideFilterData.clothing) {
            // Lowercase and delete the last character (which is an extra s) of the clothing data
            const clothingSanitized = sideFilterData.clothing.toLowerCase().slice(0, sideFilterData.clothing.length - 1);
            // If they match, then return true for isClothingMatch, otherwise return false
            isClothingMatch = (clothingSanitized === theProduct.category);
        } else {
            // Else clothing is null, then just set isClothingMatch to true
            isClothingMatch = true;
        }

        // Check that size is not null
        if (sideFilterData.size) {
            // Check that product size and filter size match, set isSizeMatch accordingly
            isSizeMatch = (sideFilterData.size === theProduct.size);
        } else {
            // Else size is null, then set isSizeMatch to true
            isSizeMatch = true;
        }

        // If they are both true, then return true to return the product in the filtered array
        return (isClothingMatch && isSizeMatch);

        // If all of side filters is null, just return true automatically
    } else {
        return true;
    }
}