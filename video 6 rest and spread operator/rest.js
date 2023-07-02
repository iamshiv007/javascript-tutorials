console.log("Hello from rest file")

// const names = ["Ravi", "Ashvin", "Hardik", "Mahendra", "Virat"]

// const testFun = (names) => {
//     console.log(names)
// }

// testFun(...names)

// const testFun = (...data) => {
//     console.log(data)
// }

// testFun(1, 2, 3, 4)

// const add = (...numbers) => {

//     let total = 0
//     for (const number of numbers) {
//         total += number
//     }

//     console.log(total)
// }

// add(5, 10, 15, 20)

const myObj = {
    name: "Shiv",
    Class: "Cancel",
    village: "Nice"
}

const { name, Class, ...others } = myObj


console.log(name, Class, others)