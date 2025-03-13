
console.log("start of script")

//  class=  fc-timegrid-slot    fc-timegrid-slot-lane   fc-timegrid-slot-minor

setTimeout(injectColor, 1000)

function injectColor() {
    let timeSlots = document.querySelectorAll('.fc-timegrid-slot-lane')

    timeSlots.forEach((slot, index) => {
        console.log(index)
        if (index > 0 && index < 20 || index > 87 && index < 96) { // 1am-5am & 10pm-12pm
            slot.classList.add('night')
        }
        if (index > 27 && index < 64) {
            slot.classList.add('work')
        }
        if (index >= 20 && index <= 27 || index >= 64 && index <= 67) {
            slot.classList.add('golden-hour')
        }
        if (index >= 68 && index <= 75) {
            slot.classList.add('family-time')
        }
        if (index >= 76 && index <= 87) {
            slot.classList.add('cyber-focus')
        }
        if ((index + 1) % 4 ===0) {
            slot.classList.add('border')
        }

    })

}

console.log("end of script")