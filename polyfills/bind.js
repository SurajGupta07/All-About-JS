Function.prototype.myBind = function (...args) {
    let obj = this
    params = obj.slice(1)
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2])
    }
}