const categories = document.getElementById('categories');

const listItems = [...categories.children];
console.log(`Number of categories: ${listItems.length}`);

listItems.forEach((elem) => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`);
});

