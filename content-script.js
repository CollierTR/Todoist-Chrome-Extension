
console.log("start of script")

//  class=  fc-timegrid-slot    fc-timegrid-slot-lane   fc-timegrid-slot-minor

setTimeout(injectColor, 4000)

function injectColor() {
    let timeSlots = document.querySelectorAll('.fc-timegrid-slot-lane')

    timeSlots.forEach((slot, index) => {
        console.log(index)
        if (index > 0 && index < 24 || index > 91 && index < 96) { // 1am-5am & 10pm-12pm
            slot.classList.add('night')
        }
        if (index > 27 && index < 64) {
            slot.classList.add('work')
        }
        if (index >= 24 && index <= 27 || index >= 64 && index <= 67) {
            slot.classList.add('golden-hour')
        }
        if (index >= 68 && index <= 75) {
            slot.classList.add('family-time')
        }
        if (index >= 76 && index <= 91) {
            slot.classList.add('cyber-focus')
        }
        if ((index + 1) % 4 ===0) {
            slot.classList.add('border')
        }

    })


const divs = document.querySelectorAll('div'); // Get all div elements

divs.forEach(div => {
  if (div.textContent.trim() === 'meeting') {
    let parent = div;
    
    // Traverse up 3 levels
    for (let i = 0; i < 2; i++) {
      if (parent.parentElement) {
        parent = parent.parentElement;
      } else {
        console.log('Less than 3 parent levels available');
        return; // Stop if there are not enough parents
      }
    }
    
    // Add the class to the third parent
    parent.classList.add('meeting');
    console.log(parent.classList)
    console.log('Added class to:', parent);
  }
});


}

console.log("end of script")