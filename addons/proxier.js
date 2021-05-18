var app=require("express")()
app.use(require("body-parser").json())
const fetch=require("node-fetch")
app.post("/v1/trades/send",(req,res)=>{
  headers={'Content-Type': 'application/json'}
  headers.cookie=req.headers.cookie.replace(/[^A-Za-z-:_0-9.|]/,"")
  console.log(req.body)
  headers["X-CSRF-TOKEN"]= (req.headers["X-CSRF-TOKEN"] || req.headers["x-csrf-token"]).replace(/[^A-Za-z-:_0-9.|]/,"")
  fetch(`https://trades.roblox.com/v1/trades/send`,{method:"POST",headers:headers,body:JSON.stringify(req.body)}).then((tres)=>{
    console.log("response get")
    tres.text().then(tres=>{
    console.log(tres)
    res.send(tres)
    
    })
  })
})

app.listen(8080)
