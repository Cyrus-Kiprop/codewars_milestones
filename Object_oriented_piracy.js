// learning basic oop in javascript
function Ship(draft, crew) {
    this.draft = parseInt(draft, 10);
    this.crew = parseInt(crew, 10);
}

// basic oop method
Ship.prototype.isWorthIt = () => {
    const crew_weight = this.draft - (this.crew * 1.5);
    console.log(crew_weight)
    if (crew_weight > 20) {
        return true;
    } else {
        return false;
    }
}

let titanic = new Ship(23, 1);
console.log(titanic)
console.log(titanic.isWorthIt())
