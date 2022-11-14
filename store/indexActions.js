export const NEXT = "NEXT";
export const PREV = "PREV";

export const nextIndex = (modulo) => ({ type: NEXT, modulo });
export const prevIndex = (modulo) => ({ type: PREV, modulo });
