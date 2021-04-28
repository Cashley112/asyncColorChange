const body = document.body;


// function changeColor(newColor, delay, doNext) {
//     setTimeout(() => {
//         body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// changeColor('red', 1000, () => {
//     changeColor('orange', 1000, () => {
//         changeColor('yellow', 1000, () => {
//             changeColor('green', 1000, () => {
//                 changeColor('blue', 1000, () => {
//                     changeColor('purple', 1000)
//                 });
//             })
//         });
//     });
// })

// Same Thing Refactored Using a Promise

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))

// Same Thing Refactored with Async and Await

async function rainbow(){
    // for (let i = 0; i < 5; i++) {
    //     await delayedColorChange('red', 1000)
    //     await delayedColorChange('orange', 1000)
    //     await delayedColorChange('yellow', 1000)
    //     await delayedColorChange('green', 1000)
    //     await delayedColorChange('blue', 1000)
    //     await delayedColorChange('indigo', 1000)
    //     await delayedColorChange('violet', 1000)
    // }
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
}

async function printRainbow(){
    await rainbow();
    console.log('End of Rainbow!');
}

printRainbow();
