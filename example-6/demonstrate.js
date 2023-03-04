require("./app") // hmmm so doing this calls that function even though it's located
// in another file and I didn't export it???? 

/* The reason for this is that if you have invoked a function inside a module as in the example - when node wraps it
it also invokes the function (i.e you havent placed it in a variable ===> wouldn't lose sleep over this though) */