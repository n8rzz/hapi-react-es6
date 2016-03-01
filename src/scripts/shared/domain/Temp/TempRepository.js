export default {
    someAction: () => {
        return new Promise((resolve, reject) => {
            return resolve('Success');
        })
        .then(r => r);
    }
}
