const request = require('request');
const cheerio = require('cheerio');
const getCurrentTotal = new Promise((resolve, reject) => {
    let datas = {
        accumulated: "", // 누적확진
        accumulatedsum: "",
        healed: "", // 완치
        healedsum: "",
        onControl: "", // 격리중
        onControlsum: "",
        deaths: "", // 사망
        deathsSum: ""
    };
        request('http://ncov.mohw.go.kr/', (err, res, body) => { // 보건복지부 코로나19 홈페이지에서 데이터 가져옴
            var $ = cheerio.load(body); // cheerio를 통해 가져온 body 입력
            var accumulated = $($(".liveNum li .num")[0]).text().replace("(누적)", ""); // .liveNum li .num 값을 만족하는 데이터중 첫 번째 값, (누적) 텍스트를 제거
            var accumulatedsum = $($(".liveNum li .before")[0]).text().replace("전일대비", "").replace("(", "").replace(")", "").trim();
            var healed = $($(".liveNum li .num")[1]).text() // 두 번째 값
            var healedsum = $($(".liveNum li .before")[1]).text().replace("전일대비", "").replace("(", "").replace(")", "").trim();
            var onControl = $($(".liveNum li .num")[2]).text() // 세 번째 값
            var onControlsum = $($(".liveNum li .before")[2]).text().replace("전일대비", "").replace("(", "").replace(")", "").trim();
            var deaths = $($(".liveNum li .num")[3]).text() // 네 번째 값
            var deathsSum = $($(".liveNum li .before")[3]).text().replace("전일대비", "").replace("(", "").replace(")", "").trim();
            datas = {
                accumulated: accumulated,
                accumulatedsum: accumulatedsum,
                healed: healed,
                healedsum: healedsum,
                onControl: onControl,
                onControlsum: onControlsum,
                death: deaths,
                deathsum: deathsSum
            }
            resolve(datas);
        });
});

module.exports.getCurrentTotal = getCurrentTotal;