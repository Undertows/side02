const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const diaryRoutes = require('./routes/diary')

const app = express()

app.use(cors())
app.use(express.json())

mongoose
  .connect('mongodb://81.68.184.72:27017/side02', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('数据库连接正常。'))
  .catch(e => console.log(e.message))

app.use('/test',diaryRoutes)//

app.get('/', (req, res) => {
  res.send('hello express')
})


app.listen(3002, () => {
    console.log(`服务器启动 监听3002端口。`)
  })