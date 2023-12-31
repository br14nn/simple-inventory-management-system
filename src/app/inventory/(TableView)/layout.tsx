import { Metadata } from "next";

import SearchBox from "@/components/MyComponents/SearchBox";
import AddItemModal from "@/components/MyComponents/AddItemModal/AddItemModal";

export const metadata: Metadata = {
  title: "IMS: Inventory",
  description: "Generated by create next app",
};

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-full w-full flex-col gap-12 py-6 pl-[99px] pr-6 text-text lg:py-12 lg:pl-[123px] lg:pr-12">
      <SearchBox />
      <AddItemModal />
      {children}
    </main>
  );
}
