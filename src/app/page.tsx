import { ModeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-100 flex justify-end">
        <ModeToggle />
      </div>
      <h1 className="text-3xl">Hello world</h1>
      <h1 className="text-3xl font-barlow">Hello world</h1><Button variant='destructive'>CLick here</Button></div>
      
  );
}
