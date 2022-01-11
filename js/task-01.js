console.log(`Hw ${6}, exercise 1`);

const categories = document.querySelectorAll('.item');
console.log(`Number of categories:`, categories.length);

for (let i = 0; i < categories.length; i++) {
    let categotiH2 = categories[i].firstElementChild;
    console.log(`Category: ${categotiH2.textContent}`);

    let ulLiCounter = categories[i].querySelectorAll("li");
    console.log(`Elements: ${ulLiCounter.length}`);
}
