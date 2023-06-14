const userInfo = [
    {
        name:'Aaron',
        age:26
    },
    {
        name:'Daniel',
        age:25
    },
    {
        name:'Roger',
        age:24
    },
]

const container = document.getElementById('container')
console.log(typeof container)
userInfo.map(printUser)


function printUser(user){
    const div = document.createElement('div')
    console.log( div)
    const p = document.createElement('p')
    const p2 = document.createElement('p')
    p.innerHTML = user.name
    p2.innerHTML = user.age

    div.appendChild(p)
    div.appendChild(p2)
    container.appendChild(div)
}
