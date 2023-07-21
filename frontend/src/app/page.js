"use client";
import TableComponent from "@/components/HomePage/TableComponent";
import Loader from "@/components/UI/Loader";
import { useGlobalStateContext } from "@/context/StateContext";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-start justify-center w-screen min-h-screen pt-20">
      <div className="flex flex-col items-start justify-start w-full max-w-6xl p-2">
        <p className="my-6 text-2xl font-bold">Trains In Next 12 Hours</p>

        <TableComponent />
      </div>
    </main>
  );
}
