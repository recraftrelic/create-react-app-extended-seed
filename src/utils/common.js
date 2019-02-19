export function partial(fn, ...presetArgs) {
    return function partiallyApplied(...laterArgs) {
        return fn(...presetArgs, ...laterArgs)
    }
}

export function actionCreatorUtil(type) {
    return payload => ({
        type,
        payload,
    })
}
