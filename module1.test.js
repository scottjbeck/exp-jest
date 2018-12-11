import {logIt} from './simpleLogger'

logIt('module 1 file')

describe("module 1 testing", () => {
		beforeAll(async done => {
				logIt('module 1 beforeAll')
				done()
		})

		test("test 1 should pass", () => {
				logIt('module 1 - running test 1')
				expect(1).toBe(1);
		})
})

describe("module 1b testing", () => {
		beforeAll(async done => {
				logIt('module 1b beforeAll')
				done()
		})

		test("test 1 should pass", () => {
				logIt('module 1b - running test 1')
				expect(1).toBe(1);
		})
})