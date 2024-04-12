import { Appbar } from "@/components/Appbar";
import { CreateBooking } from "@/components/CreateBooking";
import Image from "next/image";

export default function Home() {
  return (
    <>
        <Appbar />
        <CreateBooking/>
    </>
  );
}
