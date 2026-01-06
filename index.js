import express from "express"
import { getlcs } from "./util.js";
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/name',(req,res)=>
{
  res.send("Yakshith")
})
app.get('/lcs',(req,res)=>{
  const {a,b} = req.query;
  if(!a||!b)
  {
    return res.send("Please proveide both Strings");
  }
  const ans = getlcs(a,b)
    return res.send(`result : ${ans}`);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
