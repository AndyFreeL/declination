function someFunc(a, b) {

    const ab = a + ' ' + b.slice(0, -3);
    const bEnd = ['аю', 'ешь', 'ает', 'ают', 'аем', 'ете'];

    switch (a) {
        case 'я':
            return ab + bEnd[0]
        case 'ты':
            return ab + bEnd[1]
        case 'он':
            return ab + bEnd[2]
        case 'она':
            return ab + bEnd[2]
        case 'оно':
            return ab + bEnd[2]
        case 'они':
            return ab + bEnd[3]
        case 'мы':
            return ab + bEnd[4]
        case 'вы':
            return ab + bEnd[5]
        default:
            return '(-_-)'
    }
}
function logFunc() {
    const a = ['я', 'ты', 'он', 'она', 'оно', 'они', 'мы', 'вы'];
    for (let i = 0; i < a.length; i++) {
        console.log(someFunc(a[i],'страдать'))
    }
}
logFunc();







