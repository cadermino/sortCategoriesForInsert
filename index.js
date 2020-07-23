const sortCategoriesForInsert = require('./sortCategoriesForInsert');

// let json = `[
//   {
//     "name": "Accessories",
//     "id": 1,
//     "parent_id": 20
//   },
//   {
//     "name": "Watches",
//     "id": 57,
//     "parent_id": 1
//   },
//   {
//     "name": "Men",
//     "id": 20,
//     "parent_id": null
//   },
//   {
//     "name": "Smart watch",
//     "id": 200,
//     "parent_id": 57
//   },
//   {
//     "name": "Women",
//     "id": 2,
//     "parent_id": null
//   },
//   {
//     "name": "Earings",
//     "id": 60,
//     "parent_id": 2
//   },
//   {
//     "name": "Piercings",
//     "id": 70,
//     "parent_id": 60
//   },
//   {
//     "name": "Neckless",
//     "id": 30,
//     "parent_id": 2
//   }
// ]`;


// let json = `[
//   {
//     "name": "Men",
//     "id": 20,
//     "parent_id": null
//   },
//   {
//     "name": "Accessories",
//     "id": 1,
//     "parent_id": 20
//   },
//   {
//     "name": "Watches",
//     "id": 57,
//     "parent_id": 1
//   },
//   {
//     "name": "Women",
//     "id": 2,
//     "parent_id": null
//   },
//   {
//     "name": "Earings",
//     "id": 60,
//     "parent_id": 2
//   },
//   {
//     "name": "Piercings",
//     "id": 70,
//     "parent_id": 60
//   },
//   {
//     "name": "Neckless",
//     "id": 30,
//     "parent_id": 2
//   }
// ]`;


let json = `[
  {
    "name": "Accessories",
    "id": 1,
    "parent_id": 20
  },
  {
    "name": "Watches",
    "id": 57,
    "parent_id": 1
  },
  {
    "name": "Men",
    "id": 20,
    "parent_id": null
  }
]`;
sortCategoriesForInsert(json)