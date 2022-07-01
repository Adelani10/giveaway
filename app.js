const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".time-counter h1")
const timeCounter = document.querySelector(".time-counter")


const futureDate = new Date(2022, 8, 7, 16, 30, 0)
const year = futureDate.getFullYear()
const month = months[futureDate.getMonth()]
const date = futureDate.getDate()
const day = weekdays[futureDate.getDay()]
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
const seconds = futureDate.getSeconds()

deadline.textContent = `Giveaway Ends on ${day}, ${date} ${month} ${year}, ${hours}:${minutes}pm.`
let getFutureMiliSecs = futureDate.getTime()

function getTimeInterval(){
  const present = new Date()
  let getPresentMiliSecs = present.getTime()
  let currMilliSecs = getFutureMiliSecs - getPresentMiliSecs

  const oneSecond = 1000
  const oneMinute = 1000 * 60
  const oneHour = 1000 * 60 * 60
  const oneDay = 1000 * 60 * 60 * 24
  
  let realDays = Math.floor(currMilliSecs/oneDay)
  let realHours = Math.floor((currMilliSecs % oneDay)/oneHour)
  let realMinutes = Math.floor((currMilliSecs % oneHour)/ oneMinute)
  let realSecs = Math.floor((currMilliSecs % oneMinute) / oneSecond)

  function formatArrange(item){
    if (item < 10) {
      return `0${item}`
    }
    else{
      return item
    }
  }

  const value = [realDays, realHours, realMinutes, realSecs]

  items.forEach(function(item, index){
    item.textContent = formatArrange(value[index])
  })

  if(currMilliSecs < 0) {
    clearInterval(countdown)
    timeCounter.innerHTML = `<h3 class="expired"> Sorry this Giveaway has expired. Be on the look-out for the next one</h3>`
  }

}
const countdown = setInterval(getTimeInterval, 1000)

getTimeInterval()

