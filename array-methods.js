
// Constructors is kind of a bad name for a JS tutorial because a "constructor" is its own thing in the JavaScript world.
// However, F1 Teams are called Constructors because they build almost every piece and part of the car.

const constructors = [
    {name: 'Red Bull',  rank: 2},
    {name: 'Mercedes',  rank: 1},
    {name: 'Mclaren',  rank: 4},
    {name: 'Alfa Romeo',  rank: 9},
    {name: 'AlphaTauri',  rank: 6},
    {name: 'Alpine',  rank: 5},
    {name: 'Aston Martin',  rank: 7},
    {name: 'Williams',  rank: 8},
    {name: 'Haas',  rank: 10},
    {name: 'Ferrari',  rank: 3},
]

// We can filter items using the .filer() method

const top5Teams = constructors.filter((team) => {
    return team.rank >= 5;
})

console.log(top5Teams);