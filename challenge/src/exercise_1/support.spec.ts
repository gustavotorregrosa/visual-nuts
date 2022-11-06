import * as support from "./support"

describe('EX_1 - division function is OK', () => {
    it('10 is multiple of 2', () => {
        expect(support.isDivBy(10, [2])).toBeTruthy()
    })

    it('10 is not multiple of 3', () => {
        expect(support.isDivBy(10, [3])).toBeFalsy()
    })

    it('10 is not multiple of 2 and 5', () => {
        expect(support.isDivBy(10, [2, 5])).toBeTruthy()
    })
    
    it('10 is not multiple of 2, 3 and 5', () => {
        expect(support.isDivBy(10, [2, 3, 5])).toBeFalsy()
    })
})

describe('EX 1 - generating functions are OK', () => {

    afterEach(() => {
        jest.resetAllMocks()
    })

    it('isDivBy is called 300 times', () => {
        const mockIsDivBy = jest.spyOn(support, 'isDivBy').mockImplementation((jest.fn()))
        const standartArray = support.generateStandardArray()
        const transformedArray = support.transformArray(standartArray)
        expect(mockIsDivBy).toBeCalledTimes(300)
    })

    it('isDivBy is called 9 times', () => {
        const mockIsDivBy = jest.spyOn(support, 'isDivBy').mockImplementation((jest.fn()))
        const transformedArray = support.transformArray([1,2,3])
        expect(mockIsDivBy).toBeCalledTimes(9)
    })

  


})
