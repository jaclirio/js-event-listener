const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

grandparent.addEventListener('click', e => { //(type of event, callback function)
    console.log("Grandparent Bubble")
}) 

grandparent.addEventListener('click', e => { 
    console.log("Grandparent Capture") //CAPTURING. Document > Grandparent > Parent > Child. Need to put in every class
}, {capture:true}) //(type of event, callback function, additional option)

parent.addEventListener('click', e => {
    e.stopPropagation() //Prevents event from going through the entire bubble/capture process
    console.log("Parent Bubble")
}) 

parent.addEventListener('click', e => {
    console.log("Parent Capture")
} , {capture:true}) 

child.addEventListener('click', e => { //Console displays Child > Parent > Grandparent. BUBBLING
    console.log("Child Bubble")               
}, {once:true})  //Runs one time, removes itself after

child.addEventListener('click', e => {
    console.log("Child Capture")
}, { capture: true }) 

document.addEventListener("click", printHi)

setTimeout(() => {
    document.removeEventListener("click", printHi) //removes printHi function after 2 seconds
}, 2000) //2000 milliseconds = 2 seconds

function printHi() {
    console.log("Hi Timed")
}

const divs = document.querySelectorAll('div')

divs.forEach(div => {
    div.addEventListener('click', () => {
        console.log('Hi For Each')
    })
})

const newDiv = document.createElement('div') //div added after event listener
newDiv.style.width = '200px'
newDiv.style.height = '200px'
newDiv.style.backgroundColor = 'purple'

//document.addEventListener('click', e => {
//    if (e.target.matches('div')) { //If we click on a div
//        console.log('Hi')
//    }})

addGlobalEventListener('click', 'div', e => { //Only executes on newDiv, Same as e.target.matches
    console.log('Hello newDiv')               //Executes function only. Process addEventListener is stored below.
})
document.body.append(newDiv)

function addGlobalEventListener(type, selector, callback) {  //Universal Event Delegation
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })
}