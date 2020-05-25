const request = require('request');
const cheerio = require('cheerio');
const getLocalTotal = new Promise((resolve, reject) => {
    let datas = [];

    request('http://ncov.mohw.go.kr/', (err, res, body) => {

        var $ = cheerio.load(body);
        for(var i = 1; i < 19; i++) { // 아이디 값을 #map_city1 ~ #map_city18 까지 반복
            // 0번 배열 : 누적확진 1번 배열 : 격리중 2번 배열 : 누적 격리해제 3번 : 사망자
            var cityname = $($(`#map_city${i} .cityname`)).text().trim();
            var accumulated = $($(`#map_city${i} .mapview .cityinfo li div .num`)[0]).text()
            var onSeperate = $($(`#map_city${i} .mapview .cityinfo li div .num`)[1]).text()
            var healed = $($(`#map_city${i} .mapview .cityinfo li div .num`)[2]).text()
            var deaths = $($(`#map_city${i} .mapview .cityinfo li div .num`)[3]).text()
            var accumulatedsum = $($(`#map_city${i} .mapview .cityinfo li div .sub_num`)).text()
            accumulatedsum = accumulatedsum.replace("(", ""); // 증감 값의 괄호 제거
            accumulatedsum = accumulatedsum.replace(")", "");

            let localdata = {
                cityname: cityname,
                accumulated: accumulated,
                accumulatedsum: accumulatedsum,
                onSeperate: onSeperate,
                healed: healed,
                death: deaths
            }
            datas.push(localdata);
        }
        resolve(datas);
    });
});

module.exports.getLocalTotal = getLocalTotal;