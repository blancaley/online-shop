let clothes = [
    {
        name: "Black Trench Coat by Burberry",
        category: "Trench Coat",
        color: "black",
        brand: "Burberry"
    },
    {
        name: "Black Trench Coat by Max Mara",
        category: "Trench Coat",
        color: "black",
        brand: "Max Mara"
    },
    {
        name: "Camel Trench Coat by Max Mara",
        category: "Trench Coat",
        color: "camel",
        brand: "Max Mara"
    },
    {
        name: "Camel Trench Coat by Burberry",
        category: "Trench Coat",
        color: "camel",
        brand: "Burberry"
    },
    {
        name: "White Dress by Tiger of Sweden",
        category: "Dress",
        color: "white",
        brand: "Tiger of Sweden"
    },
    {
        name: "Camel Coat by Ted Baker",
        category: "Coat",
        color: "camel",
        brand: "Ted Baker"
    },
    {
        name: "Black Coat by Ted Baker",
        category: "Coat",
        color: "black",
        brand: "Ted Baker"
    },
    {
        name: "Navy Coat by Ted Baker",
        category: "Coat",
        color: "navy",
        brand: "Ted Baker"
    },
    {
        name: "Navy Coat by Max Mara",
        category: "Coat",
        color: "navy",
        brand: "Max Mara"
    },
    {
        name: "Black Coat by Max Mara",
        category: "Coat",
        color: "black",
        brand: "Max Mara"
    },
    {
        name: "Camel Coat by Max Mara",
        category: "Coat",
        color: "camel",
        brand: "Max Mara"
    },
    {
        name: "Navy Skirt by Max Mara",
        category: "Skirt",
        color: "navy",
        brand: "Max Mara"
    },
    {
        name: "Black Skirt by Max Mara",
        category: "Skirt",
        color: "black",
        brand: "Max Mara"
    },
    {
        name: "Camel Skirt by Max Mara",
        category: "Skirt",
        color: "camel",
        brand: "Max Mara"
    },
    {
        name: "Camel Skirt by Burberry",
        category: "Skirt",
        color: "camel",
        brand: "Burberry"
    },
    {
        name: "Black Skirt by Burberry",
        category: "Skirt",
        color: "black",
        brand: "Burberry"
    },
    {
        name: "Black Skirt by Filippa K",
        category: "Skirt",
        color: "black",
        brand: "Filippa K"
    },
    {
        name: "Navy Skirt by Filippa K",
        category: "Skirt",
        color: "navy",
        brand: "Filippa K"
    },
    {
        name: "Brown Sweater by Filippa K",
        category: "Sweater",
        color: "brown",
        brand: "Filippa K"
    },
    {
        name: "Black Sweater by Filippa K",
        category: "Sweater",
        color: "black",
        brand: "Filippa K"
    },
    {
        name: "Black Sweater by Tommy Hilfiger",
        category: "Sweater",
        color: "black",
        brand: "Tommy Hilfiger"
    }     
];

const clothesList = document.querySelector("#clothesList");
const filterButton = document.querySelector("#filterButton");
const resetFilterButton = document.querySelector("#resetFilterButton");
const categoryOptions = document.querySelectorAll("[name='category']");
const brandOptions = document.querySelectorAll("[name='brand']");

function show(arr) {
    clearList();
    arr.forEach(garment => {
        const listItem = document.createElement("li");
        listItem.innerText = garment.name;
        clothesList.appendChild(listItem);
    });
}

function clearList() {
    let children = clothesList.children;
    while(children.length > 0) {
        children[children.length - 1].remove();
    }
}

function filter() {
    let chosenCategory = null;
    let chosenBrand = null;
    let filteredArray;

    // Find selected category
    categoryOptions.forEach(category => {
        if(category.checked) {
            chosenCategory = category.value;
        }
    });
    //Find selected brand
    brandOptions.forEach(brand => {
        if(brand.checked) {
            chosenBrand = brand.value;
        }
    });
    //If both category and brand options are selected filter by category and brand
    if (chosenCategory !== null && chosenBrand !== null) {
        filteredArray = clothes.filter(item => 
            item.category === chosenCategory && item.brand === chosenBrand);
    //If one category option is selected filter by category
    } else if (chosenCategory !== null) {
        filteredArray = clothes.filter(item => 
            item.category === chosenCategory);
    //If one brand option is selected filter by brand
    } else if (chosenBrand !== null) {
        filteredArray = clothes.filter(item => 
            item.brand === chosenBrand);
    }

    show(filteredArray);
}

function resetFilter() {
    // Unchecks category
    categoryOptions.forEach(category => {
        if(category.checked) {
            category.checked = false;
        }
    });
    // Unchecks brand
    brandOptions.forEach(brand => {
        if(brand.checked) {
            brand.checked = false;
        }
    });

    show(clothes);
}

show(clothes);

filterButton.addEventListener("click", filter);

resetFilterButton.addEventListener("click", resetFilter);