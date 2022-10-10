import { makeRequest } from '../requests';

const addZero = (value) => value < 10 ? `0${value}`: value;

export const getTrendings = (lang = 'javascript') => {
  const params = new URLSearchParams();
  const msInWeek = 7 * 24 * 60 * 60 * 1000;
  const weekAgo = new Date(Date.now() - msInWeek);
  const formattedDate = [
    weekAgo.getFullYear(),
    addZero(weekAgo.getMonth() + 1),
    addZero(weekAgo.getDate())
  ].join('-');

  params.append('order', 'desc');
  params.append('sort', 'stars');
  params.append('per_page', 10);
  params.append('q', `language:${lang} created:>${formattedDate}`)

  return makeRequest({
    url: `/search/repositories?${params}`
  });
}
