{   //prep console
    console.clear()

    // declare closure
    function makeFunction(mf1, mf2) {
        const numbers = [];
        console.log("makeFunction(mf1,mf2) invoked with:   mf1: ", arguments[0], ", mf2: ", arguments[1]);
        return function innerFunction(arg) {
            numbers.push(arg);
            console.log("innerFunction(arg) invoked with:  arg[0]: ", arguments[0], ", arg[1]: ", arguments[1]);
            console.log(numbers);
            return innerFunction;
        }
    }
    
    //create closure
    const curriedADD = makeFunction();

    //instantiate closure objects

    curriedADD(3);
    //curriedADD(4);
    //curriedADD(6);
    curriedADD(4)(6)(7)();
    //console.log("\n\n See how makeFunction() is only invoked once.");


}