function boxResizingStandard(container) {
    let lastItem = container.querySelector('.standard-line .last-line');
    let box = container.querySelector('.standard-line .box');

    var cardButtonHeight = 0;
    var cardButton = container.querySelector('.standard-line .card-button');
    if (cardButton) {
        cardButtonHeight = cardButton.offsetHeight;
    }

    var colButtonHeight = 0;
    var colButton = container.querySelector('.standard-line .button-col');
    if (colButton) {
        colButtonHeight = colButton.offsetHeight;
    }

    const styles = window.getComputedStyle(container);
    const containerHeightNP = container.clientHeight - parseFloat(styles.paddingTop) - parseFloat(styles.paddingBottom);

    if (box && lastItem) {
        let lastItemheight = lastItem.offsetHeight;
        let lastItemHeightHalf = Math.floor(lastItemheight / 2)
        let finalBox = containerHeightNP - 13 - lastItemHeightHalf - (cardButtonHeight / 2) - (colButtonHeight / 2);
        box.style.height = finalBox + 'px';
    }
}

function computeBoxResizing() {
    // Select all elements with .standard-line class that exist in the DOM
    const containers = document.querySelectorAll('.standard-line');
    // Loop over each container and run function on it
    containers.forEach((container) => {
        boxResizingStandard(container);
    })
}

// Using DOMContentLoaded to detect and run when DOM is fully available
window.addEventListener('DOMContentLoaded', computeBoxResizing)

// Run whenever window is resized
window.addEventListener('resize', computeBoxResizing)