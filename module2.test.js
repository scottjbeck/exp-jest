import {logIt} from './simpleLogger'

logIt('module 2 file')

describe("module 2 testing", () => {
		beforeAll(async done => {
				logIt('module 2 beforeAll')
				done()
		})

		test("test 1 should pass", () => {
				logIt('module 2 - running test 1')
				expect(1).toBe(1);
		})
})

describe("module 2b testing", () => {
		beforeAll(async done => {
				logIt('module 2b beforeAll')
				done()
		})

		test("test 1 should pass", () => {
				logIt('module 2b - running test 1')
				expect(1).toBe(1);
		})
})