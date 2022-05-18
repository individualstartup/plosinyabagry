import dayjs, { Dayjs } from 'dayjs';
import { isNullOrUndefined } from './utils';

const shortDateTime = 'DD.MM.YY, HH:mm';
const shortDate = 'D.M.YY';

export const dayjsToShortDateTime = (date: Dayjs) => (date ? date.format(shortDateTime) : null);
export const dayjsToShortDate = (date: Dayjs) => (date ? date.format(shortDate) : null);

export const formatPrice = (price: number, currency: string) => {
  return `${price?.toLocaleString('cs-CZ', { minimumFractionDigits: 2 }) || '-'} ${currency}`;
};

export const mapFromAPIDateTime = (stringDate: string): Dayjs => {
  if (isNullOrUndefined(stringDate)) return null;
  const date = dayjs(stringDate);
  //console.log(`stringDate: ${stringDate}, date: ${date} isValid: ${date.isValid()}, ${date.tz('Europe/Sofia')}`);
  return date.tz('Europe/Prague');
};
