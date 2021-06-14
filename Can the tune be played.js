
//Can the tune be played?

const canPlayGuitar = true
const knowsChords = true

console.log(canPlayGuitar && knowsChords);
console.log(canPlayGuitar || knowsChords);
console.log(!canPlayGuitar);

const isGuitarInTune = false

if (canPlayGuitar && knowsChords && !isGuitarInTune) {
    console.log('Go play that tune!');
} else {
    console.log('You need to practice more!');
}
