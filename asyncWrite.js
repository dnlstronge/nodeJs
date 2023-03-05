// async:

const { readFile, writeFile } = require("fs");

// async needs a callback :)

// whenever the functionality is complete run the callback, just like
// add eventlistener on a button

readFile("./content/third.txt", "utf8", (err, result) => {
    if(err) {
        console.log("Whoops, something went wrong.....")
        return;
    }
    console.log(result);
});

/* if you don't add encoding value you will get buffer data ;

<Buffer 41 73 20 49 20 6e 6f 64 64 65 64 20 6e 65 61 72 6c 79 20 6e 
61 70 70 69 6e 67 2e 2e 2e 2e 73 75 64 64 65 6e 6c 79 20 74 68 65 
72 65 20 63 61 6d 65 20 ... 183 more bytes>

*/

// after encoding added as 2nd arg: 

/*

As I nodded nearly napping....suddenly there came a tapping.......
as if someone gently rapping......rapping at my chamber door....
tis some late visitor I muttered, entreating entrance at my chamber door
....this it is and nothing more

*/



