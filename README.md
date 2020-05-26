# corona-api
http://ncov.mohw.go.kr/ 보건복지부 사이트를 파싱하는 API 입니다.

## 사용법
> 1. 레포지토리를 클론한 후 yarn 명령어를 통해 dependencies를 설치합니다.
> 2. yarn start 를 통해 테스트 서버를 가동합니다.

## API 정보

> * /domestic 국내 총 현황 정보를 가져옵니다.
> * /local 국내 지역별 총 현황 정보를 가져옵니다.
> * accumulated  : 누적 확진자 수
> * accumulatedsum : 전날대비 누적 확진자 증감수
> * onSeperate : 격리중 환자 수
> * onSeperatesum : 전날대비 격리중 환자 증감수
> * healed : 완치자 수
> * healedsum : 전날대비 완치자 증감수
> * death : 사망자 수
> * deathsum : 전날대비 사망자 증감수

## 데모버전 릴리즈
http://dev.api.corona.koreal.io/all
