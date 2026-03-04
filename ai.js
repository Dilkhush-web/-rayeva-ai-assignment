async function generateCategory(data) {

    return {
        category: "Sustainable Products",
        subCategory: "Eco Friendly",
        seoTags: [
            "eco friendly",
            "reusable",
            "sustainable",
            data.name.toLowerCase()
        ],
        filters: ["plastic-free", "vegan", "recyclable"]
    };

}

module.exports = { generateCategory };