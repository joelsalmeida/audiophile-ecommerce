export function getDifferenceBetweenDatesInDays(dateOne: Date, dateTwo: Date) {
  const differenceInMilliseconds = Math.abs(
    dateOne.getTime() - dateTwo.getTime(),
  );

  const differenceInDays = Math.ceil(
    differenceInMilliseconds / (1000 * 60 * 60 * 24),
  );

  return differenceInDays;
}
