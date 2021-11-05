const addDays = async (days: number, date = new Date()): Promise<Date> => {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
};

export const dateUtils = {
  addDays,
};
