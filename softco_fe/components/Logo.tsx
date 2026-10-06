import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import logo from "@/assets/logo/SoftCo Logo Hor Color.svg";


type Props = {}

const Logo = (props: Props) => {
  return (
    <Link href="/">
      <Image src={logo} alt="logo" className="w-43.75 h-auto" />
    </Link>
  );
}

export default Logo