---
sidebar_position: 5
---

# Timers
Timers like the console are global objects accessible from any context.  The timers are fully asynchronous and very similar to timers from NodeJS.

## Methods

### SetTimeout
Calls a callback after a certain time, specified in milliseconds.
The following example will print a "Timed out" message to the server console after 5 seconds.
```
timers.SetTimeout(() => {
    console.log("Timed out!")
}, 5000)
```

### SetInterval
Intervals are very similar to timers, but they will re-call the callback every given time interval.
The following example will write a "tick" message to the server console every second.
```
timers.SetInterval(() => {
    console.log("tick")
}, 1000)
```

### ClearInterval
To be done.