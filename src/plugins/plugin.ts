type pluginFunction = {
    (date: Date): any

}

export const plugin = (date: Date, ...fn: pluginFunction[]) => {
    let resultObject = {};
    let returnValue;
    for (let func of fn) {
        returnValue = func(date)
        resultObject = { ...returnValue, ...resultObject }
    }
    return resultObject;
}