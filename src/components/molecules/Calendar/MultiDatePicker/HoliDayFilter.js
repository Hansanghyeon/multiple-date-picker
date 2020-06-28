// @ts-nocheck
// import axios from 'axios';

const HoliDayFilter = (day) => {
  // 토요일, 일요일 제외
  // if (day.day() === 0 || day.day() === 6) return true;

  // 공휴일 제외
  // let url =
  //   'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo';
  // let queryParams = `?${encodeURIComponent('ServiceKey')}=${
  //   process.env.REACT_APP_getHoliDeInfo
  // }`;
  // queryParams += `&${encodeURIComponent('solYear')}=${encodeURIComponent(
  //   '2020',
  // )}`;
  // queryParams += `&${encodeURIComponent('solMonth')}=${encodeURIComponent(
  //   '06',
  // )}`;
  // queryParams += `&${encodeURIComponent('_type')}=${encodeURIComponent(
  //   'json',
  // )}`;
  // const URL = `${url}${queryParams}`;
  // const test = async () =>
  //   await axios
  //     .get(URL)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));
  const mockData = {
    data: {
      items: {
        item: [
          {
            dateKind: '01',
            dateName: '1월1일',
            isHoliday: 'Y',
            locdate: 20200101,
            seq: 1,
          },
          {
            dateKind: '01',
            dateName: '설날',
            isHoliday: 'Y',
            locdate: 20200124,
            seq: 1,
          },
          {
            dateKind: '01',
            dateName: '설날',
            isHoliday: 'Y',
            locdate: 20200125,
            seq: 1,
          },
          {
            dateKind: '01',
            dateName: '설날',
            isHoliday: 'Y',
            locdate: 20200126,
            seq: 1,
          },
          {
            dateKind: '01',
            dateName: '설날',
            isHoliday: 'Y',
            locdate: 20200127,
            seq: 1,
          },
          {
            dateKind: '01',
            dateName: '삼일절',
            isHoliday: 'Y',
            locdate: 20200301,
            seq: 1,
          },
          {
            dateKind: '01',
            dateName: '제21대 국회의원선거',
            isHoliday: 'Y',
            locdate: 20200415,
            seq: 1,
          },
          {
            dateKind: '01',
            dateName: '부처님오신날',
            isHoliday: 'Y',
            locdate: 20200430,
            seq: 1,
          },
          {
            dateKind: '01',
            dateName: '어린이날',
            isHoliday: 'Y',
            locdate: 20200505,
            seq: 1,
          },
          {
            dateKind: '01',
            dateName: '현충일',
            isHoliday: 'Y',
            locdate: 20200606,
            seq: 1,
          },
          {
            dateKind: '01',
            dateName: '광복절',
            isHoliday: 'Y',
            locdate: 20200815,
            seq: 1,
          },
          {
            dateKind: '01',
            dateName: '추석',
            isHoliday: 'Y',
            locdate: 20200930,
            seq: 1,
          },
          {
            dateKind: '01',
            dateName: '추석',
            isHoliday: 'Y',
            locdate: 20201001,
            seq: 1,
          },
          {
            dateKind: '01',
            dateName: '추석',
            isHoliday: 'Y',
            locdate: 20201002,
            seq: 1,
          },
          {
            dateKind: '01',
            dateName: '개천절',
            isHoliday: 'Y',
            locdate: 20201003,
            seq: 1,
          },
          {
            dateKind: '01',
            dateName: '한글날',
            isHoliday: 'Y',
            locdate: 20201009,
            seq: 1,
          },
          {
            dateKind: '01',
            dateName: '기독탄신일',
            isHoliday: 'Y',
            locdate: 20201225,
            seq: 1,
          },
        ],
      },
    },
  };
  if (mockData.data.items === '') {
    return;
  }
  const HoliDayItems = mockData.data.items.item;
  if (Array.isArray(HoliDayItems)) {
    return HoliDayItems.find((item) => {
      if (item.locdate.toString() === day.format('YYYYMMDD')) return true;
    });
  } else {
    return HoliDayItems.item.locdate === day.format('YYYYMMDD');
  }
};

export default HoliDayFilter;
