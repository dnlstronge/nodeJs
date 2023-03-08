const { readFile } = require("fs");


// now you I can invoke getText and it will return a promise
// this is a behind the scenes for async-await

const getText = (path) => {
    return new Promise((resolve, reject) => {

readFile(path, "utf8", (err, data) => {
    if(err) {
        reject(err)
    }
    else {
        resolve(data)
    }
})
    })
}

const start = async() => {
    const first = await getText("./content/first.txt")
                  console.log(first) // only once promise is resolved get response
}

// invoke start: 

start();

// gettext("./content/first.txt").then(result => console.log(result)).catch(err => console.log(err));