
function fibonacciGenerator (n) {

    var output = [0,1];

    if (n === 1) {
        output.pop(1);
        return output;
    }
    else if (n === 2) {
        return output;
    }
    else
    {
        for (var i = 2; i < n; i++) {
            var sum = output[i-2] + output[i-1];
            output.push(sum);
            
        }
        return output;
    }
}

// Put the number of array output required down below;
// fibonacciGenerator(1);

