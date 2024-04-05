import { Jersey } from "../models/index.js";
import { db } from '../config/db.js';
import jerseyData from './data.js';

console.log('Syncing database...');
await db.sync({ force: true });

console.log('Seeding database...');

const jerseysInDB = await Promise.all(
  jerseyData.map( async(jersey) => {
    const newJersey = await Jersey.create(jersey);

    return newJersey;
  })
);

console.log(jerseysInDB);

await db.close();
console.log('Finished seeding database!');