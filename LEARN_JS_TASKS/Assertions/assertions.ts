// Jasmine CLI - Open in Terminal and type -  jasmine assertions.ts
const firstNumber = 1
const secondNumber = 2
const firstString = 'mama papa'
const secondString = 'mama'
const firstArray = [1, 2, 3]
const secondArray = [3, 2, 1]
const firstStringArray = ['papa', 'mama', 'ded']
const secondStringArray = ['papa', 'mama', 'ne ded']
describe('assertions homework', () => {
	it('some test case to assert', () => {
		expect(secondNumber).toBeLessThan(firstNumber)
		expect(firstString).toEqual(secondString)
		expect(firstString).toContain(secondString)
		expect(firstArray).toEqual(secondArray)
		expect(firstStringArray).toEqual(secondStringArray)

	})
})
