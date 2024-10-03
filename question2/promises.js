const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let success = { message: 'resolved promise success!' };
            resolve(success); // Resolve the promise with the success message
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject('error: rejected promise!'); // Reject the promise with the error message
        }, 500);
    });
};

resolvedPromise()
    .then(success => {
        console.log(success);
    })
    .catch(error => {
        console.error(error); 
    });

rejectedPromise()
    .then(success => {
        console.log(success); 
    })
    .catch(error => {
        console.error(error); 
    });