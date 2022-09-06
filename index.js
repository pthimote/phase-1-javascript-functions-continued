// code your solution here
function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`);
}
function mondayWork(word = "go to the office") {
    return(`This Monday, I will ${word}.`)
}
function wrapAdjective(result = "*") {
    return function(adjective = "special") {
        return `You are ${result}${adjective}${result}!`
    }
}