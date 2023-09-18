document.getElementById('calculate').addEventListener('click', function () {
    var list = document.getElementById('main-input').value;
    list = list.replaceAll(' ', '');
    list = list.split(',');
    list = list.map((item, index) => {
        return parseInt(item);
    })

    var operator = document.getElementById('operator').value;


    switch (operator) {
        case 'sum':
            var sum = 0;
            for (var i = 0; i < list.length; i++) {
                sum += parseInt(list[i]);
            }
            document.getElementById('output').innerHTML = sum;
            break;

        case 'average':
            var sum = 0;
            for (var i = 0; i < list.length; i++) {
                sum += parseInt(list[i]);
            }
            document.getElementById('output').innerHTML = sum / list.length;
            break;

        case 'minimum':
            var min = list[0];
            for (var i = 0; i < list.length; i++) {
                if (list[i] < min) {
                    min = list[i];
                }
            }
            document.getElementById('output').innerHTML = min;
            break;

        case 'maximum':
            var max = list[0];
            for (var i = 0; i < list.length; i++) {
                if (list[i] > max) {
                    max = list[i];
                }
            }
            document.getElementById('output').innerHTML = max;
            break;

        case 'mode':

            function findMode(list) {
                // Create a map to store the number of occurrences of each number.
                const map = new Map();
                for (const num of list) {
                    if (!map.has(num)) {
                        map.set(num, 0);
                    }
                    map.set(num, map.get(num) + 1);
                }

                // Find the number with the highest number of occurrences.
                let mode = null;
                let maxCount = 0;
                for (const [num, count] of map) {
                    if (count > maxCount) {
                        mode = num;
                        maxCount = count;
                    }
                }

                return mode;
            }
        /* var mode = list => {
             var mode = {};
             let most = 0, count = 0;
 
             for (let i = 0; i < list.length; i++){
                 const item = list[i];
 
                 if (mode[item]) {
                     mode[item]++;
                 } else {
                     mode[item] = 1;
                 }
 
                 if (count < mode[item]) {
                     most = item;
                     count = mode[item];
                 }
             }
             return most;
         }
         document.getElementById('output').innerHTML = most;
         break;*/

        case 'median':
            //sort list
            for (var i = 0; i < list.length; i++) {
                for (var j = 0; j < list.length; j++) {
                    if (list[i] < list[j]) {
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
                }
            }
            //get median
            var median = 0;
            if (list.length % 2 == 0) {
                median = (list[list.length / 2] + list[(list.length / 2) - 1])
            } else {
                median = list[Math.floor(list.length / 2)];
            }
            document.getElementById('output').innerHTML = median;
            break;

        case 'range':
            var min = list[0];
            var max = list[0];
            for (var i = 0; i < list.length; i++) {
                if (list[i] < min) {
                    min = list[i];
                }
                if (list[i] > max) {
                    max = list[i];
                }
            }
            document.getElementById('output').innerHTML = max - min;
            break;
        default:
            document.getElementById('output').innerHTML = 'Invalid operator';
            break;
    }
})




