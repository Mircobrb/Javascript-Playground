let saveEl = document.getElementById("save-el")
let startingAdventurers = document.getElementById("count-el")
let adventurersCount = 0

function increment() {
    adventurersCount += 1
    startingAdventurers.textContent = adventurersCount
}

function decrease() {
    if (adventurersCount > 0)
        adventurersCount -= 1
    else 
        adventurersCount = 0

    startingAdventurers.textContent = adventurersCount
}

function save() {
    let previousSave = adventurersCount + " - "
    saveEl.textContent += previousSave
    adventurersCount = 0
    startingAdventurers.textContent = adventurersCount
}