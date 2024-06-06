import * as monsters from './monsters.json' assert {type: "json"};
for (let item in monsters.default) {
    console.log(item + ": " + monsters.default[item]);
}