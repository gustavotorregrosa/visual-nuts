// exercise 01
// - we encapsulated the code in an arrow function so we can protect it from global scope vars
// - also, we opted to create one single function 'isDivBy' that accept the divisor too. so we dont have to 
// create one function for each divisor - 3, 5, 15

//we could call the isDivBy function only once per loop and per divisor by storing the results in a variable
//but leaving the code like this makes it more readable 

(() => {
    const isDivBy = (index, divisor) => {
        if (index % divisor == 0) {
            return true
        }

        return false
    }

    for (let index = 1; index <= 100; index++) {
        if (isDivBy(index, 3) && isDivBy(index, 15)) {
            console.log('Visual Nuts')
            continue
        }

        if (isDivBy(index, 3)) {
            console.log('Visual')
            continue
        }

        if (isDivBy(index, 5)) {
            console.log('Nuts')
            continue
        }

        console.log(index)
    }
})()
