export const splitToBulks = <T>(arr: T[], bulkSize: number = 20): T[][] => {
  const bulks: T[][] = [];
  for (let i = 0; i < Math.ceil(arr.length / bulkSize); i++) {
    bulks.push(arr.slice(i * bulkSize, (i + 1) * bulkSize));
  }
  return bulks;
};

export const isNullOrUndefined = (value: any) => value === undefined || value === null;
export const isNotNullOrUndefined = (value: any) => !(value === undefined || value === null);

export const makeVariableSymbol = (applicationId: string) => applicationId.replace(/\D/g, '');
