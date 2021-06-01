const express = require("express");
const app = express();
const port = 3001

app.get('/', (req, res) => res.json([
  {
      "name":"vasith",
  },
  {
    "name":"mydeen",
},
{
    "name":"mohammed",
}

]))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
