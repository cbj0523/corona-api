const express = require('express');
const app = express();

const { getCurrentTotal } = require('./domestic')
const { getLocalTotal } = require('./local');

app.get('/', (req, res) => {
    res.send("API 사용법 /domestic : 국내 총 현황 /local : 지역 별 현황")
});

app.get('/domestic', async (req, res) => {
    let datas = await getCurrentTotal;
    res.json(datas);
});

app.get('/local', async (req, res) => {
    let datas = await getLocalTotal;
    res.json(datas);
})

app.listen(4000, () => {
    console.log("서버 오픈");
});