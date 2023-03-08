const { readFile } = require("fs");

const gettext = (path) => {
    return new Promise((resolve, reject) => {

readFile("./content/first.txt", "utf8", (err, data) => {
    if(err) {
        return;
    }
    else {
        console.log(data)
    }
})
    })
}
