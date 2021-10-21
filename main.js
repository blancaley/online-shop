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
const isHumanCheckbox = document.querySelector("#isHumanCheckbox");
let feedbackMsg;

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

    const isHuman = checkHuman();
    // Stop filter function if it's not checked
    if (!isHuman) return;

    // Find selected category
    categoryOptions.forEach(category => {
        if(category.checked) {
            chosenCategory = category.value;
        }
    });
    // Find selected brand
    brandOptions.forEach(brand => {
        if(brand.checked) {
            chosenBrand = brand.value;
        }
    });
    // If both category and brand options are selected filter by category and brand
    if (chosenCategory !== null && chosenBrand !== null) {
        filteredArray = clothes.filter(item => 
            item.category === chosenCategory && item.brand === chosenBrand);
    // If one category option is selected filter by category
    } else if (chosenCategory !== null) {
        filteredArray = clothes.filter(item => 
            item.category === chosenCategory);
    // If one brand option is selected filter by brand
    } else if (chosenBrand !== null) {
        filteredArray = clothes.filter(item => 
            item.brand === chosenBrand);
    }

    show(filteredArray);
}

function checkHuman() {
    feedbackMsg = document.querySelector(".feedback-message-human");
    // If it's checked continue filtering
    if (isHumanCheckbox.checked) return true;
    // If there's already message, return false
    if (feedbackMsg) return false;
    // If it's unchecked and there's no message, show message
    if (!isHumanCheckbox.checked && !feedbackMsg) {
        let imHumanContainer = document.querySelector("#imHumanContainer");
        feedbackMsg = document.createElement("p");
        feedbackMsg.classList.add("feedback-message-human");
        feedbackMsg.innerText = "Please confirm you’re not a robot.";
        imHumanContainer.appendChild(feedbackMsg);
        return false;
    }
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

    isHumanCheckbox.checked = false;
    show(clothes);
}

show(clothes);

filterButton.addEventListener("click", filter);

resetFilterButton.addEventListener("click", resetFilter);

isHumanCheckbox.addEventListener("change", (e) => {
    if(e.target.checked) {
        feedbackMsg?.remove();
    }
})