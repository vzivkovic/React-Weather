function addPromise(number1, number2){
    return new Promise((resolve, reject) => {

        if (typeof number1 == 'number' && typeof number2 == 'number'){

            resolve('Parametars is number: '+number1+', '+number2);
        }
        reject('Parametars must be a number!');
    });
}

addPromise(1,1).then((temp) => console.log('Sucess', temp)
                      , (err) =>  console.log('Not sucess', err ) );