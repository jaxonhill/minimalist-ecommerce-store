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