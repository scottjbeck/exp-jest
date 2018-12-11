import fs from 'fs'

const pathFileLog = './log.txt'

export function logIt(message = '') {
		const logItem = new Date().getTime() + ' - ' + message + '\n'
		fs.appendFileSync(pathFileLog, logItem)
}