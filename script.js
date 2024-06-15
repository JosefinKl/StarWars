
import { emptyCells } from './emptycells.js'

const obiWan = document.querySelector ('.button')
const searchChar= document.querySelector ('.search')
const input= document.querySelector ('.input')
const searchPlanet= document.querySelector ('.searchP')
const inputPlanet= document.querySelector ('.inputP')
const displayN = document.querySelector('#nameChar')
const displayH = document.querySelector('#heightChar')
const displayM = document.querySelector('#massChar')
const displayHC = document.querySelector('#hairColorChar')
const displaySC = document.querySelector('#skinColorChar')
const displayP = document.querySelector('#planet')
const displayN2 = document.querySelector('#nameChar2')
const displayH2 = document.querySelector('#heightChar2')
const displayM2 = document.querySelector('#massChar2')
const displayHC2 = document.querySelector('#hairColorChar2')
const displaySC2 = document.querySelector('#skinColorChar2')
const displayP2 = document.querySelector('#planet2')
const displayN3 = document.querySelector('#nameChar3')
const displayH3 = document.querySelector('#heightChar3')
const displayM3 = document.querySelector('#massChar3')
const displayHC3 = document.querySelector('#hairColorChar3')
const displaySC3 = document.querySelector('#skinColorChar3')
const displayP3 = document.querySelector('#planet3')
const displayN4 = document.querySelector('#nameChar4')
const displayH4 = document.querySelector('#heightChar4')
const displayM4 = document.querySelector('#massChar4')
const displayHC4 = document.querySelector('#hairColorChar4')
const displaySC4 = document.querySelector('#skinColorChar4')
const displayP4 = document.querySelector('#planet4')
const displayN5 = document.querySelector('#nameChar5')
const displayH5 = document.querySelector('#heightChar5')
const displayM5 = document.querySelector('#massChar5')
const displayHC5 = document.querySelector('#hairColorChar5')
const displaySC5 = document.querySelector('#skinColorChar5')
const displayP5 = document.querySelector('#planet5')
const displayN6 = document.querySelector('#nameChar6')
const displayH6 = document.querySelector('#heightChar6')
const displayM6 = document.querySelector('#massChar6')
const displayHC6 = document.querySelector('#hairColorChar6')
const displaySC6 = document.querySelector('#skinColorChar6')
const displayP6 = document.querySelector('#planet6')


obiWan.addEventListener('click', starWApi)
searchChar.addEventListener('click', searchForChar)
searchPlanet.addEventListener('click', searchForPlanet)

async function searchForChar(){
    //Make info empty
    emptyCells()

    const baseUrl = 'https://swapi.dev/api/people/'
    const extra = "?search=" + input.value
    
    const response = await fetch(baseUrl+extra)
    const data = await response.json()
    console.log(data)
    const resultsArr = data.results
    const lengthresultsArr = resultsArr.length
    console.log(lengthresultsArr)
    
    if (lengthresultsArr >= 1){
    const dataOutput = data.results[0] 
    const homeWorldUrl = dataOutput.homeworld
    const responseHomeWorld = await fetch(homeWorldUrl )
    const homeWorld = await responseHomeWorld.json()
    console.log(homeWorld)
    
    displayN.innerText = dataOutput.name
    displayH.innerText = 'Height:' + " " + dataOutput.height
    displayM.innerText = 'Mass:' + " " +dataOutput.mass
    displayHC.innerText = 'Hair color:' + " " + dataOutput.hair_color
    displaySC.innerText = 'Skin color:' + " " + dataOutput.skin_color
    displayP.innerText = 'Home worl:' + " " + homeWorld.name
    }
    if (lengthresultsArr >= 2){
    const dataOutput2 = data.results[1]
    const homeWorldUrl2 = dataOutput2.homeworld
    console.log(homeWorldUrl2)
    const responseHomeWorld2 = await fetch(homeWorldUrl2 )
    const homeWorld2 = await responseHomeWorld2.json()
    
    displayN2.innerText = dataOutput2.name
    displayH2.innerText = 'Height:' + " " +  dataOutput2.height
    displayM2.innerText = 'Mass:' + " " +dataOutput2.mass
    displayHC2.innerText = 'Hair color:' + " " + dataOutput2.hair_color
    displaySC2.innerText = 'Skin color:' + " " + dataOutput2.skin_color
    displayP2.innerText = 'Home world:' + " " + homeWorld2.name
    }
    if (lengthresultsArr >= 3){
    const dataOutput3 = data.results[2]
    const homwWorldUrl3 = dataOutput3.homeworld
    const responseHomeWorld3 = await fetch(homwWorldUrl3 )
    const homeWorld3 = await responseHomeWorld3.json()
    displayN3.innerText = dataOutput3.name
    displayH3.innerText = 'Height:' + " " + dataOutput3.height
    displayM3.innerText = 'Mass:' + " " +dataOutput3.mass
    displayHC3.innerText =  'Hair color:' + " " + dataOutput3.hair_color
    displaySC3.innerText = 'Skin color:' + " " + dataOutput3.skin_color
    displayP3.innerText = 'Home world:' + " " + homeWorld3.name
    }
    if (lengthresultsArr >= 4){
    const dataOutput4 = data.results[3]
    const homwWorldUrl4 = dataOutput4.homeworld
    const responseHomeWorld4 = await fetch(homwWorldUrl4 )
    const homeWorld4 = await responseHomeWorld4.json()
    displayN4.innerText = dataOutput4.name
    displayH4.innerText = 'Height:' + " " + dataOutput4.height
    displayM4.innerText = 'Mass:' + " " +dataOutput4.mass
    displayHC4.innerText =  'Hair color:' + " " + dataOutput4.hair_color
    displaySC4.innerText = 'Skin color:' + " " + dataOutput4.skin_color
    displayP4.innerText = 'Home world:' + " " + homeWorld4.name
    }
    if (lengthresultsArr >= 5){
    const dataOutput5 = data.results[4]
    const homwWorldUrl5 = dataOutput5.homeworld
    const responseHomeWorld5 = await fetch(homwWorldUrl5 )
    const homeWorld5 = await responseHomeWorld5.json()
    displayN5.innerText = dataOutput5.name
    displayH5.innerText = 'Height:' + " " + dataOutput5.height
    displayM5.innerText = 'Mass:' + " " +dataOutput5.mass
    displayHC5.innerText =  'Hair color:' + " " + dataOutput5.hair_color
    displaySC5.innerText = 'Skin color:' + " " + dataOutput5.skin_color
    displayP5.innerText = 'Home world:' + " " + homeWorld5.name
    }
    if (lengthresultsArr >= 6){
    const dataOutput6 = data.results[5]
    const homeWorldUrl6 = dataOutput6.homeworld
    console.log(homeWorldUrl6)
    const responseHomeWorld6 = await fetch(homeWorldUrl6 )
    const homeWorld6 = await responseHomeWorld6.json()
    displayN6.innerText = dataOutput6.name
    displayH6.innerText = 'Height:' + " " + dataOutput6.height
    displayM6.innerText = 'Mass:' + " " +dataOutput6.mass
    displayHC6.innerText =  'Hair color:' + " " + dataOutput6.hair_color
    displaySC6.innerText = 'Skin color:' + " " + dataOutput6.skin_color
    displayP6.innerText = 'Home world:' + " " + homeWorld6.name
    }
}


async function starWApi(){
    emptyCells()
    const baseUrl = 'https://swapi.dev/api/people/10/'
    const response = await fetch(baseUrl)
    const data = await response.json()
    displayN.innerText = data.name
    heightChar.innerText = "Height:" + " " + data.height
    massChar.innerText = 'Mass:' + " " + data.mass
    hairColorChar.innerText = 'Hair color:' + " " + data.hair_color
    skinColorChar.innerText =  'Skin color:' + " " +  data.skin_color
}

async function searchForPlanet(){
    emptyCells()


    const baseUrlPlanet = 'https://swapi.dev/api/planets/'
    const extraPlanet = "?search=" + inputPlanet.value

    const responsePlanet = await fetch(baseUrlPlanet+extraPlanet)
    const dataPlanet = await responsePlanet.json()
    const resultsArrP = dataPlanet.results
    const lengthresultsArrP = resultsArrP.length
    

    if (lengthresultsArrP >= 1){
    const outputPlanet = dataPlanet.results[0] 
    displayN.innerText = outputPlanet.name
    displayH.innerText = 'Rotation period:' + " " + outputPlanet.rotation_period
    displayM.innerText = 'Climate:' + " " + outputPlanet.climate
    displayHC.innerText = 'Terrain:' + " " + outputPlanet.terrain
    displaySC.innerText = 'Population:' + " " + outputPlanet.population
    }
    if (lengthresultsArrP >= 2){
    const outputPlanet2 = dataPlanet.results[1] 
    displayN2.innerText = outputPlanet2.name
    displayH2.innerText = 'Rotation period:' + " " + outputPlanet2.rotation_period
    displayM2.innerText = 'Climate:' + " " + outputPlanet2.climate
    displayHC2.innerText = 'Terrain:' + " " + outputPlanet2.terrain
    displaySC2.innerText = 'Population:' + " " + outputPlanet2.population
    }
    if (lengthresultsArrP >= 3){
    const outputPlanet3 = dataPlanet.results[2] 
    displayN3.innerText = outputPlanet3.name
    displayH3.innerText = 'Rotation period:' + " " + outputPlanet3.rotation_period
    displayM3.innerText = 'Climate:' + " " + outputPlanet3.climate
    displayHC3.innerText = 'Terrain:' + " " + outputPlanet3.terrain
    displaySC3.innerText = 'Population:' + " " + outputPlanet3.population
    }
    if (lengthresultsArrP >= 4){
    const outputPlanet4 = dataPlanet.results[3] 
    displayN4.innerText = outputPlanet4.name
    displayH4.innerText = 'Rotation period:' + " " + outputPlanet4.rotation_period
    displayM4.innerText = 'Climate:' + " " + outputPlanet4.climate
    displayHC4.innerText = 'Terrain:' + " " + outputPlanet4.terrain
    displaySC4.innerText = 'Population:' + " " + outputPlanet4.population
    }
    if (lengthresultsArrP >= 5){
    const outputPlanet5 = dataPlanet.results[4] 
    displayN5.innerText = outputPlanet5.name
    displayH5.innerText = 'Rotation period:' + " " + outputPlanet5.rotation_period
    displayM5.innerText = 'Climate:' + " " + outputPlanet5.climate
    displayHC5.innerText = 'Terrain:' + " " + outputPlanet5.terrain
    displaySC5.innerText = 'Population:' + " " + outputPlanet5.population
    }
    if (lengthresultsArrP >= 6){
    const outputPlanet6 = dataPlanet.results[5] 
    displayN6.innerText = outputPlanet6.name
    displayH6.innerText = 'Rotation period:' + " " + outputPlanet6.rotation_period
    displayM6.innerText = 'Climate:' + " " + outputPlanet6.climate
    displayHC6.innerText = 'Terrain:' + " " + outputPlanet6.terrain
    displaySC6.innerText = 'Population:' + " " + outputPlanet6.population
    }
}