type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(
  items: Array<string | number>,
  key: string,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const el: string[] = item[key];

    if (Object.prototype.hasOwnProperty.call(result, el)) {
      result.el.push(item);
    } else {
      result.el = [item];
    }
  }

  return result;
}
