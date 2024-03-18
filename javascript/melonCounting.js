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

// create a function to loop through allMelons and add them to an array of melon counts.

function countMelons(melonArray) {
    const melonCounts = {};

    for (const melon of melonArray) {
        if (melonCounts[melon]) {
            melonCounts[melon] += 1;
        } else {
            melonCounts[melon] = 1;
        }
    }

    return melonCounts;
}

console.log(countMelons(allMelons));