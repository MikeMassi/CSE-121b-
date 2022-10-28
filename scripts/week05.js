//  CONDITIONALS

// Using If and Else If
let currentDate = new Date
let dayOfTheWeek = currentDate.getDay()

let message = ''
let messageTwo = ''

if (dayOfTheWeek < 6) {
    message = 'Hang in there!'
} else {
    message = 'Woohoo! It is the weekend!'
}

// Switch, Case, Break

switch (dayOfTheWeek) {
    case 1:
        messageTwo = 'Monday'
        break;
    case 2:
        messageTwo = 'Tuesday'
        break;
    case 3:
        messageTwo = 'Wednesday'
        break;
    case 4:
        messageTwo = 'Thursday'
        break;
    case 5:
        messageTwo = 'Friday'
        break;
    case 6:
        messageTwo = 'Sartuday'
        break;
    default:
        messageTwo = 'Sunday'
        break;
}

document.getElementById('message1').innerHTML = message
document.getElementById('message2').innerHTML = messageTwo

let templesList = []

const getTemples = async() => {
    let res = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json')
    let data = await res.json()
    templesList = [...data]
    sortBy()
}

getTemples()

function output(list) {
    if (list.length > 0) {
        list.map(temple => {
            let article = document.createElement('article')

            let h3 = document.createElement('h3')
            h3.innerHTML = temple.templeName
            article.append(h3)

            let h4 = `
                <h4>Location: ${temple.location}</h4>
                <h4>Dedicated: ${temple.dedicated}</h4>
            `
            article.innerHTML += h4

            let img = document.createElement('img')
            img.src = temple.imageUrl
            img.alt = temple.templeName
            article.append(img)

            document.getElementById('temples').append(article)

        })
    } else {
        console.error('no data available')

        document.getElementById('temples').innerHTML = `<p style="color: red; font-weight: bold;">Failed to retrieve data, check your internet connection and try reloading the pag</p>`
    }
}

function reset() {
    document.getElementById('temples').innerHTML = ''
}


function sortBy(option) {
    reset()
    if (templesList.length > 0) {
        if (option === 'Dedicated') {
            console.log(templesList[0].dedicated.split(' ')[2])

            templesList.sort(function(a, b) { return a.dedicated.split(' ')[2] - b.dedicated.split(' ')[2] })
        } else if (option === 'Name') {
            templesList.sort(function(a, b) {
                var x = a.templeName.toLowerCase();
                var y = b.templeName.toLowerCase();
                if (x < y) { return -1; }
                if (x > y) { return 1; }
            });
        } else if (option === 'Location') {
            templesList.sort(function(a, b) {
                var x = a.location.toLowerCase();
                var y = b.location.toLowerCase();
                if (x < y) { return -1; }
                if (x > y) { return 1; }
            });
        }
    }
    output(templesList)
}

document.getElementById('sortBy').addEventListener('change', (e) => {
    sortBy(e.target.value)
})