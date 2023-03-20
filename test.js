const Söz = require(".")
new Söz((kabul, red) => {

    setTimeout(() => kabul("kabul"), 1000)

}).sonra(console.log)
    .olmazsa(r => console.log("olmadi", r));

