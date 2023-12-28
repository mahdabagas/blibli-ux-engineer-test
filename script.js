const productCard = document.getElementById('card-container');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const distance = 30;

function scrollNext() {
    productCard.scrollBy({
        left: distance,
        behavior: 'smooth'
    });

    if (productCard.scrollLeft > 0) {
        prevButton.style.visibility = "visible"
    }

    if (!(productCard.scrollLeft < (productCard.scrollWidth - productCard.clientWidth - distance))) {
        nextButton.style.visibility = 'hidden';
    }
}

function prevScroll() {
    productCard.scrollBy({
        left: -distance,
        behavior: 'smooth'
    });

    if (productCard.scrollLeft < distance) {
        prevButton.style.visibility = "hidden"
    }

    if (productCard.scrollLeft > 0) {
        nextButton.style.visibility = "visible";
    }
}

function collapseGrow() {
    const desc = document.getElementById('desc')
    if (desc.clientHeight) {
        desc.style.height = 0;
    } else {
        const descText = document.getElementById('desc-text')
        desc.style.height = descText.clientHeight + "px";
    }

    const valueButton = document.getElementById("collapse-button").value;
    const valueText = document.getElementById("collapse-text");
    const collapseUp = document.getElementById("collapse-up");
    const collapseDown = document.getElementById("collapse-down");

    if (valueButton === valueText.innerHTML) {
        valueText.innerHTML = "collapse all"
        collapseUp.style.display = "block"
        collapseDown.style.display = "none"
    } else {
        valueText.innerHTML = "show all"
        collapseDown.style.display = "block"
        collapseUp.style.display = "none"
    }
}

function topPage() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}