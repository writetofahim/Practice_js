console.log('hello destructuring')
const vehicles = ['mustang', 'f-150', 'expedition']
const p = document.getElementById('demo')
vehicles.map(vehicle=>p.innerHTML=vehicle)
// old way
{const car = vehicles[0]
const truk = vehicles[1]
const suv = vehicles[2]
console.log(car, truk, suv)}

// new way
{const [car, truck, suv]=vehicles
console.log(car,truck,suv)

// spread operator
const [firstElement, ...rest]=vehicles
console.log(firstElement, rest)}

// destructuring of objects
const myself={
    name:'fahim',
    age:26,
}
// old way
// {
//     const name = myself.name
// const age = myself.age
// const text = 'My name is '+name+' I am '+age
// console.log(text)}
// new way
const {age, name}=myself
const x = 'My name is '+name+' I am '+age
console.log(x)