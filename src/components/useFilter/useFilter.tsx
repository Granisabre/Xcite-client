'use client'
import { useState } from "react";

export const useFilter = (values: any[] = []) => {
  const [filter, setFilter] = useState("");
  const lowerCaseFilter = filter.toLowerCase();
  const results = values.filter(
    ({ name, wins }) =>
      name?.toLowerCase().includes(lowerCaseFilter) || String(wins).includes(lowerCaseFilter)
  );

  return { results, filter, setFilter };
};
