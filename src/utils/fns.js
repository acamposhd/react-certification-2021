import { formatDistance } from 'date-fns';

function random(limit) {
  return Math.floor(Math.random() * limit);
}

const textTruncate = (text = '', limit = 100, replacement = '') => {
  return text.length <= limit ? text : `${text.substring(0, limit)}${replacement}`;
};

const getRelativeDate = (oldDate) => {
  return formatDistance(new Date(oldDate), new Date(), {
    addSuffix: true,
  });
};

export { random, textTruncate, getRelativeDate };
