/**
 * @return {Function}
 */
function createHelloWorld() {
    return function(...args) {//...args
        return("Hello World")
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */