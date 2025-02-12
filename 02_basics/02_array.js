const marvels_heros = ["thor", "ironman", "spiderman"]
const dc_heros= ["superman", "flash", "batman"]

/*-----------push function---------------*/
// marvels_heros.push(dc_heros)        // marge use push  here only one variable push not multiple
// console.log(marvels_heros);

// console.log(marvels_heros[4][1]);  // access 1 element of 4th

/*  ------- concat ---- Spread operator-------------*/
const allHeros = marvels_heros.concat(dc_heros)   // use concat with new variable
// console.log(allHeros);

const all_new_heros = [...marvels_heros, ...dc_heros]  // use spread operator  // here multiple variable concat in single line
// console.log(all_new_heros);


/* ------------- Flat function------------------------*/

const another_array = [1, 2, 3,[4, 5, 6], 7, [6, 7, [4,5]]];

const real_another_array = another_array.flat(Infinity)    // use flat function to remove nested array  // enter how many depth u want to remove
console.log(real_another_array);

//data scraping

console.log(Array.isArray("unnati"));

console.log(Array.from("unnati"));    //use from convert array any object or string

console.log(Array.from({name: "hitesh"}));   // intresting

let score1 = 100
let score2 = 200       // suppose multiple variable  or array
let score3 = 300

console.log(Array.of(score1, score2, score3));  // multi variable in single array



