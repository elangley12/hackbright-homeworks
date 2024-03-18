// goal: convert python file melon_counting.py into JavaScript

// write melon dictionary as a js array
'use strict';

const allMelons = [
    'Ogen',
  'Horned Melon',
  'Watermelon',
  'Casaba',
  'Sharlyn',
  'Xigua',
  'Ogen',
  'Christmas',
  'Christmas',
  'Christmas',
  'Christmas',
  'Watermelon',
  'Sharlyn',
  'Xigua',
  'Cantaloupe',
  'Christmas',
  'Watermelon',
  'Christmas',
  'Sharlyn',
  'Christmas',
  'Cantaloupe',
  'Casaba',
  'Cantaloupe',
  'Santa Claus',
  'Horned Melon',
  'Watermelon',
  'Ogen',
  'Horned Melon',
  'Cantaloupe',
  'Xigua',
  'Horned Melon',
  'Sharlyn',
  'Horned Melon',
  'Sharlyn',
  'Cantaloupe',
  'Christmas',
  'Horned Melon',
  'Horned Melon',
  'Horned Melon',
  'Xigua',
  'Xigua',
  'Watermelon',
  'Cantaloupe',
  'Casaba',
  'Cantaloupe',
  'Casaba',
  'Watermelon',
  'Santa Claus',
  'Casaba',
]

// create a function to loop through allMelons and add them to a dict of melon counts.

function countMelons(melonArray) {
    const melonCounts = {};

    for (let melon of melonArray) {
        if (melonCounts[melon]) {
            melonCounts[melon] += 1;
        } else {
            melonCounts[melon] = 1;
        }
    }

    return melonCounts;
}

console.log(countMelons(allMelons));

// some other methods for looping over allMelons in js for review:

// using array.reduce() instead of a function:

// const melonCounts = allMelons.reduce(melonCounts, melon) => {
//     if (melonCounts[melon]) {
//         melonCounts[melon] += 1;
//     } else {
//         melonCounts[melon] = 1;
//     }

//     return melonCounts;

// }, {});

// console.log(melonCounts);


// using short-circuit evaluation:
const melonCounts = melonsToAdd.reduce((mCounts, melon) => {
    melonCounts[melon] = (melonCounts[melon] || 0) + 1;

    return melonCounts;
}, {});

console.log(melonCounts);