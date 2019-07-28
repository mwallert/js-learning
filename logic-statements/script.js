;(function(){
    let hasApples = 1;

    if (hasApples) {
        console.log(`We has ${hasApples} apples!`);
    } else if (!hasApples) {
        console.log('We have no apples :(');
    } else {
        console.log('This is a fail safe else statement.');
    }
}());