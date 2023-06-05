const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const first = data.lists[0][1] || {}                      //decalre First, second and Third: 
const second = data.lists[1][1] || {}					  //get the data information
const third = data.lists[2][1]|| {}						 //call the Array by using "[ ]" keep in mind Array always start at 0

const result = []

const extractBiggest = () => {
	let firstLast = first[first.length -1]                //use let to declare firstlast, secondlast and thirdlast
	let secondLast = second[second.length -1]			  //add first.length -1 to check number from array's from the back of the 3 lines.
	let thirdLast = third[third.length -1]

	if (firstLast > secondLast && firstLast > thirdLast) {      // use the if statments correctly
		return first.pop()										//use .pop to remove the number from the back and return the numbers thats left 
	}

	if (secondLast > thirdLast) {
		return second.pop()
	}
	
	return third.pop()
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)

/*const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const { first = 1 } = data.first|| {}
const { second = 1 } = data.second || {}
const { third = 1 } = data.third || {}

const result = []

const extractBiggest = () => {
	if (first[-1] > second[-1]) {
		return first
	}

	if (third[-1] < 1) {
		return second
	}
	
	return third
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)*/