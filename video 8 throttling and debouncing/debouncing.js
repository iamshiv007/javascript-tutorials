console.log("Testing by debouncing file")

const searchBar = document.getElementById("search")


const searchFun = (fun, delay) => {
    let timer;

    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fun()
        }, delay);
    }
}

const searchName = searchFun(() => {
    console.log("Shivraj")
}, 3000)

searchBar.addEventListener("input", searchName)