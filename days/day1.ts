import { readFileSync } from 'fs'

export async function day1(filePath: string) {
  const data = await readFileSync(filePath, 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split(/\s+/).map(Number))

  let firstArray: number[] = []
  let secondArray: number[] = []
  let sum = 0

  data.forEach(([firstValue, secondValue]) => {
    firstArray.push(firstValue)
    secondArray.push(secondValue)
  })

  // --- Part One ---
  // firstArray.sort()
  // secondArray.sort()

  // for (let i = 0; i < firstArray.length; i++) {
  //   sum += Math.abs(firstArray[i] - secondArray[i])
  // }

  // --- Part Two ---
  for (let i = 0; i < firstArray.length; i++){
    for (let j = 0; j < secondArray.length; j++){
      let similarity = 0

      if (firstArray[i] === secondArray[j]){
        similarity++
      }

      sum += firstArray[i] * similarity
    }
  }

  console.log(sum)
}


