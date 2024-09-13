type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(
  items: Array<string | number>,
  key: string | number,
): GroupsMap {
  const result: GroupsMap = {};

  for (const item of items) {
    if (result.hasOwnProperty(item[key])) {
      result[item[key]].push(item);
    } else {
      result[item[key]] = [item];
    }
  }

  return result;
}
