const arr = ["asd", "afffd", "cc", "kk"]

const compare = (arr) => {

    newArr = []

    arr.forEach((item, i) => {
        if (!(i + 1 < arr.length)) {
            return
        }
        if (item[0] === arr[i + 1][0] && item[item.length - 1] === arr[i + 1][(arr[i + 1]).length - 1]) {
            newArr.push(true)
        } else {
            newArr.push(false)
        }

    })
    return newArr
}

console.log(compare(arr))

const arr2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]

const likeFlat = (arr) => {
    return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            return [...acc, ...likeFlat(item)]
        } else {
            return [...acc, item]
        }
    }, [])
}

console.log(likeFlat(arr2))

const arr3 = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]

const transform = (arr) => {

    let newArr = []
    let prepArr = []

    arr.forEach((item, i) => {
        const lastEl = prepArr[prepArr.length - 1]
        if (!lastEl) {
            return prepArr.push(item)
        }

        if (lastEl + 1 === item) {
            prepArr.push(item)
            if (i + 1 === arr.length) {
                if (prepArr.length >= 3) {
                    newArr = [...newArr, `${prepArr[0]} - ${prepArr[prepArr.length - 1]}`]
                } else {
                    newArr = [...newArr, ...prepArr]
                }
            }
        } else {
            if (prepArr.length >= 3) {
                newArr = [...newArr, `${prepArr[0]} - ${prepArr[prepArr.length - 1]}`]
            } else {
                newArr = [...newArr, ...prepArr]
            }
            prepArr = [item]
        }

    })
    return newArr.join()
}

console.log(transform(arr3))