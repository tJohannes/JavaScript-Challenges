//This challenge requires you to determine if the mean is equal to the mode of an array. The mean is the average of the array, in other words, 
//all the numbers added up and divided by the number of elements. The mode is the element that appears most often in the array. For example,
//if the array were [5, 3, 3, 3, 1] your program should return 1 because the mean is 3 and the mode is 3. If they are not equal your program should return 0. 

function MeanMode(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    var mean = sum / arr.length

    var mode = arr.filter(function(value, index, array) {
        return array.indexOf(value) != index
    })

    if (mode.length > 1) {
        mode = mode[0]
    }

    var output = (mean == mode)
        ? 1
        : 0

    return output
}
console.log(MeanMode([5, 3, 3, 3, 1]))
