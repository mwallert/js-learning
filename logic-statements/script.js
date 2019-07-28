;(function(){
    // Buttons
    const addButton = document.querySelector('#add-button'),
        removeButton = document.querySelector('#remove-button');

    let appleCount = 0;

    const addApples = () => {
        appleCount++;
        doWeHaveApples();
    }

    const removeApples = () => {
        if (appleCount > 0) {
            appleCount--;
            doWeHaveApples();
        } else {
            console.log('You cannot remove apples you dont have!')
        }
    }

    const doWeHaveApples = () => {
        if (appleCount > 0) {
            console.log(`We has ${appleCount} apples!`);
        } else if (appleCount === 0) {
            console.log('We have no apples :(');
        } else {
            console.log(`You now have a negative apple count of: ${appleCount}`);
        }
    }

    addButton.addEventListener('click', (e) => {
        addApples();
    });

    removeButton.addEventListener('click', (e) => {
        removeApples();
    });
}());