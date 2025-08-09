type PlainObject = { [k: string]: any };

function isPlainObject(val: any): val is PlainObject {
  return (
    !!val &&
    typeof val === "object" &&
    !Array.isArray(val) &&
    !(val instanceof Date) &&
    !(val instanceof RegExp) &&
    !(val instanceof Map) &&
    !(val instanceof Set) &&
    !(val instanceof File)
  );
}

export function removeEmptyFields<T extends PlainObject>(obj: T): Partial<T> {
  if (obj == null || typeof obj !== "object") return obj;

  const result: PlainObject = Array.isArray(obj) ? [] : {};

  if (Array.isArray(obj)) {
    const cleanedArr = obj
      .map((item) =>
        isPlainObject(item) || Array.isArray(item)
          ? removeEmptyFields(item)
          : item
      )
      .filter((item) => !isEmptyValue(item));
    return cleanedArr as any;
  }

  for (const key of Object.keys(obj)) {
    const value = obj[key];

    if (value == null) continue;

    let cleaned = value;
    if (isPlainObject(value) || Array.isArray(value)) {
      cleaned = removeEmptyFields(value);
    }

    if (!isEmptyValue(cleaned)) {
      result[key] = cleaned;
    }
  }

  return result as Partial<T>;
}

function isEmptyValue(value: any): boolean {
  if (value == null) return true;
  if (typeof value === "string") return value.trim() === "";
  if (Array.isArray(value)) return value.length === 0;
  if (isPlainObject(value)) return Object.keys(value).length === 0;
  return false;
}
