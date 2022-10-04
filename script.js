function f1(i) {
    var a = document.getElementsByClassName('false')[i-1]
    console.log(a)
    a.style.backgroundColor = 'red'
    a.style.color = 'black'
}

function f2(i) {
    var a = document.getElementsByClassName('true')[i-1]
    a.style.backgroundColor = 'black'
}