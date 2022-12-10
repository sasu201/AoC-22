let value1 = 0;
let value2 = 0;

fetch("data.txt")
  .then((response) => response.text())
  .then((text) =>
    text.split(/\r?\n/).forEach((line) => {
      if (line !== "") {
        line = parseInt(line);
        value1 += line;
      } else {
        if (value1 >= value2) {
          value2 = value1;
          value1 = 0;
        } else {
          value1 = 0;
        }
      }
    })
  )
  .then((result) => console.log("REsult is: " + value2));
