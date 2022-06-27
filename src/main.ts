// import { Exemplos01 } from './Exemplos/Exemplo01'

import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

console.log('Bem vindos(as) 👋')

const rl = readline.createInterface({ input, output })

rl.question('What is your favorite food? ', (answer: string) => {
  console.log(`Oh, so your favorite food is ${answer}`)
})
