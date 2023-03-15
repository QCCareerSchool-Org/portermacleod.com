import { SetNav } from "@/components/setNav";
import { Split } from "@/components/split";
import Image from "next/image";
import ContactPicture from './contact-picture.png';

export default function Contact() {
  return (
    <>
      <SetNav nav="contact" />
      <Split sidebarContent={<Image src={ContactPicture} width={222} height={334} placeholder="blur" alt="The Team" />}>
        <h1>Contact Information</h1>
        <p><strong>Porter & MacLeod Collection Agency</strong><br />911 Central Ave #146<br />Albany NY&nbsp; 12206<br />USA</p>
        <p><strong>Porter & MacLeod Collection Agency</strong><br />PO Box 7222<br />Ottawa ON&nbsp; K1L 8E3<br />Canada</p>
      </Split>
    </>
  )
}