"use client";

import { useFilter } from "@/components/useFilter/useFilter";
import { accendBy, decendBy } from "@/utils/sorts";
import { redirect, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

export type TUserData = {
  name: string;
  wins: number;
}

type TSortProp = "wins" | "name" | undefined
type TCompFunc = (a: any, b: any) => 0 | 1 | -1
type TSortFunc = (p: TSortProp) => TCompFunc;

export type TProps = {
  data: TUserData[];
}
export default function Leaderboard({ data }: TProps) {
  const [userData, setData] = useState<TUserData[]>(data);
  const [sortByFunction, setSortByFunction] = useState<TSortFunc>((undefined) => () => 0);
  const [sortByProp, setSortByProp] = useState<TSortProp>("name");

  const params = useSearchParams();

  if (params.get("username")?.toLowerCase() !== "tester") redirect("/");

  const { results = [], filter, setFilter } = useFilter(userData);

  const setSortBy = (prop: TSortProp) => () => {
    setSortByFunction((state: any) => {
      if (sortByProp === prop && state === accendBy) return decendBy;
      return accendBy as any;
    });
    setSortByProp(() => prop);
  };

  const sortedData = results ? results.sort(sortByFunction(sortByProp) as TCompFunc) : [];

  const handleDelete = useCallback(
    (name: string) => () => {
      setData((prev) => prev.filter((item) => item.name != name));
    },
    []
  );

  return (
    <div className="grid max-w-[600px] w-full m-auto gap-4">
      <div>
        <input
          className="p-2 rounded-xl overflow-hidden"
          type="text"
          placeholder="enter a search term"
          aria-description="input for framework search term"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <table className="table-auto rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <td className="text-center">
              <p className="p-2" onClick={setSortBy("name")}>
                Username
              </p>
            </td>
            <td className="text-center">
              <p className="p-2" onClick={setSortBy("wins")}>
                Wins
              </p>
            </td>
            <td>X</td>
          </tr>
        </thead>
        <tbody>
          {sortedData &&
            sortedData.map((user, key) => {
              return (
                <tr
                  key={key}
                  className="even:bg-slate-50 odd:bg-white hover:bg-gray-100 leading-10"
                >
                  <td>
                    <p className="p-2">{user.name}</p>
                  </td>
                  <td className="min-w-28 text-center">
                    <p className="p-2">{user.wins}</p>
                  </td>
                  <td>
                    <button onClick={handleDelete(user.name)}>X</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
