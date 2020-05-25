const express = require('express');
const app = express();
const port = process.env.PORT ? process.env.PORT : 4000;

const { getCurrentTotal } = require('./domestic')
const { getLocalTotal } = require('./local');

app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send("API 사용법 /domestic : 국내 총 현황 /local : 지역 별 현황")
});

app.get('/domestic', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let datas = await getCurrentTotal;
    res.json(datas);
});

app.get('/local', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let datas = await getLocalTotal;
    res.json(datas);
})

app.listen(port, () => {
    console.log("서버 오픈");
});