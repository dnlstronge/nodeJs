const { readFile } = require("fs");


// now you I can invoke getText and it will return a promise

const gettext = (path) => {
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


gettext("./content/first.txt");