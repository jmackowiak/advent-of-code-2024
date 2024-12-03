import { readFileSync } from 'fs'

export async function day2(filePath: string) {
  const data = readFileSync(filePath, 'utf8').trim().split('\n')

  let counter = 0

  outer:
  for (const line of data) {
    const values = line.split(' ').map(Number)
    const first = values[0]
    const last = values[values.length - 1]
    const isAscending = first < last

    for (let j = 0; j < values.length - 1; j++) {
      const diff = isAscending ? values[j + 1] - values[j] : values[j] - values[j + 1]

      if (diff > 3 || diff <= 0) {
        continue outer
      }
    }

    counter++
  }

  console.log(counter)
}
