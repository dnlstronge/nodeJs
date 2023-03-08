const { readFile, writeFile } = require("fs").promises
const util = require("util");

// util has promisify() to return promise. end result is to get promise back

// now you I can invoke getText and it will return a promise
// this is a behind the scenes for async-await


/*
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

*/

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile("./content/third.txt", "Eagerly I 'wait the morrow, vainly I had saught to borrow...")
    console.log(first, second); // only once promise is resolved get response
  } catch (error) {
    console.log(error);
  }
};

// invoke start:

start();

/* old code for reference:  */

// gettext("./content/first.txt").then(result => console.log(result)).catch(err => console.log(err));

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };