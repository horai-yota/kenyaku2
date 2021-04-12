import axios from 'axios';

export function fetchRanking(age, sex) {
  return axios.get(`https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?`, {
    params: { format: 'json', applicationId: '1048884116063282170', age, sex }
  });
}