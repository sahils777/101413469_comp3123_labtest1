function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        try {
            const result = mixedArray
                .filter(item => typeof item === 'string') 
                .map(item => item.toLowerCase()); 

            resolve(result);
        } catch (error) {
            reject('Oops! Something went wrong: ' + error);
        }
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(output => console.log(output)) 
    .catch(error => console.error(error)); 