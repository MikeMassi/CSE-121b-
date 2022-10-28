// OBJECT LITERALS
const myInfo = {
    name: 'Mike',
    myImage: './img/mike.jpg',
    favoriteFoods: ['chips', 'chapati', 'rice', 'pork'],
    hobbies: ['playing soccer', 'playing volleyball', 'reading novels', 'watching movies'],
    placesLived: [
        { place: 'lilongwe', length: '3 years' },
        { place: 'mangochi', length: '2 years' },
        { place: 'zomba', length: '2 years' },
        { place: 'balaka', length: '17 years' },
    ],
}

document.getElementById('name').innerHTML = myInfo.name
document.getElementById('photo').src = myInfo.myImage
document.getElementById('photo').alt = myInfo.name

let favoriteFoodList = myInfo.favoriteFoods.map(food => {
    return `<li>${food}</li>`
}).join('')


document.getElementById('favorite-foods').innerHTML = favoriteFoodList

let hobbiesList = myInfo.hobbies.map(food => {
    return `<li>${food}</li>`
}).join('')


document.getElementById('hobbies').innerHTML = hobbiesList

myInfo.placesLived.map(placeObj => {
        let placesLivedDt = document.createElement('dt')
        let placesLivedDd = document.createElement('dd')
        placesLivedDt.innerHTML = placeObj.place
        placesLivedDd.innerHTML = placeObj.length

        document.getElementById('places-lived').append(placesLivedDt)
        document.getElementById('places-lived').append(placesLivedDd)
    }

)