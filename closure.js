function createTracker() {
    var value = 0;

    let tracker = { 
        increase: function () {
            value++; 
            console.log(value);
        },
        decrease: function () {
            value--; 
            console.log(value);
        },
        getValue: function () {
            console.log(value); 
        }
    };

    return tracker; 
}

let tracker = createTracker();

tracker.increase(); 
tracker.increase(); 
tracker.decrease(); 
tracker.getValue(); 
