/**
 * Some user interactions, such as resizing and scrolling, can create a huge number of browser events in a short period of time. If listeners attached to these events take a long time to execute, the user's browser can start to slow down significantly. To mitigate this issue, we want to to implement a throttle function that will detect clusters of events and reduce the number of times we call an expensive function.

Your function will accept an array representing a stream of event timestamps and return an array representing the times that a callback should have been called. If an event happens within wait time of the previous event, it is part of the same cluster. Your function should satisfy the following use cases:

1) Firing once on the first event in a cluster, e.g. as soon as the window starts resizing.
2) Firing once after the last event in a cluster, e.g. after the user window stops resizing.
3) Firing every interval milliseconds during a cluster, e.g. every 100ms while the window is resizing.
 */

function throttle(wait, onLast, onFirst, interval, timestamps) {
    var cls = [];
    var res = [];
    var i = 0;
    while (i < timestamps.length) {
        var cl = [], l = timestamps[i], r = timestamps[i] + wait;
        while (timestamps[i] >= l && timestamps[i] <= r) {
            cl.push(timestamps[i]);
            l = timestamps[i++];
            r = l + wait;
        }
        cl.push(r);
        cls.push(cl);
    }

    for (var i = 0; i < cls.length; i++) {
        for (var j = 0; j < cls[i].length; j++) {
            if ((j === 0 && onFirst) || (j === cls[i].length - 1 && onLast))
                res.push(cls[i][j]);
            if (interval > 0 && j + 1 < cls[i].length && cls[i][j] + interval === cls[i][j + 1])
                res.push(interval);
        }
    }

    return res;
}

var t = throttle(20, true, true, 0, [0, 5, 50]);
console.log(t);


//test Cases
/*

wait = 20
onLast = false  
onFirst = true
interval = 0
timestamps = [0,10,20,30] 
Result : [0]
--------------------------------
wait = 20
onLast = true
onFirst = true
interval = 10
timestamp = [0,10,50]
result : [0,10,20,30,50,60,70]



*/