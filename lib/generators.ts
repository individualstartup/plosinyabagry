import { Dayjs } from 'dayjs';

type DayJSPredicate = (start: Dayjs, nextValue: Dayjs) => boolean;
type DayJSAction = (prevDate: Dayjs) => Dayjs;

export const generateDayjs = (
  start: Dayjs,
  predicate: DayJSPredicate,
  action: DayJSAction,
  maxIteration = 31,
): Dayjs[] => {
  let a: Dayjs[] = [];
  a.push(start);
  let nextValue = action(start);
  let iteration = 1;
  while (predicate(start, nextValue) && iteration < maxIteration) {
    console.log(`Date: ${nextValue}`);
    a.push(nextValue);
    nextValue = action(nextValue);
    iteration++;
  }
  return a;
};
