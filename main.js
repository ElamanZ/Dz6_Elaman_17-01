// Hw.1
const arr1 = ['porridge', 'eggs']
const arr2 = ['sandwich', 'tea']
const arr3 = ['soup']
const arr4 = ['rolls']
const arr5 = ['stew']

const menu = [...arr1, ...arr2, ...arr3, ...arr4, ...arr5]
console.log(menu);

// Hw.2 первый вариант решения
const obj1 = {
    first_name: 'Olga',
    last_name: 'Loginova',
    age: 21,
    country: 'Turkey',
    growth: 174
}
const obj2 = {
    ...obj1,
    hobby: 'read books',
    skills: 'Java Script',
    profession: 'programmer',
}
console.log(obj2)

// Hw.2 второй вариант решения

const info = (user) => {
    return `First name: ${user.first_name}\nLast Name: ${user.last_name}\nAge: ${user.age}\nCountry: ${user.country}\ngrowth: ${user.growth}\n\hobby: read books\nskills: Java Script\nprofession: programmer`
}

const user = {
    first_name: 'Olga',
    last_name: 'Loginova',
    age: 21,
    country: 'Turkey',
    growth: 174
}
console.log(info(user))

// Hw.3

const button = document.getElementById('button')
const input = document.getElementById('input')

button.onclick = () => {

    const div = document.createElement('div')
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'delete'
    const div2 = document.createElement('div2')
    const changeButton = document.createElement('button')
    changeButton.innerText = 'change'
    div.setAttribute('class','block')
    div2.innerText = 'Hello ' + input.value
    deleteButton.onclick = () => {
        div.remove('block')
    }
    changeButton.onclick = () => {
        div2.innerText = prompt('Введите текст')
    }
    div.append(div2, deleteButton, changeButton)
    document.body.append(div)

}

const reset = document.getElementById('reset')
reset.onclick = () => {
    document.getElementById('input').value = ''
}