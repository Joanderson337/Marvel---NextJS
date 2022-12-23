import Image from "next/image";
import Link from "next/link";

import { HeaderStyle } from "./styles";
import { Container } from "../../styles/global";

import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderStyle>
      <Container>
        <div className="logo">
          <Link href="/">
              <Image src={Logo} alt="Marvel Studios" />
          </Link>
        </div>
      </Container>
    </HeaderStyle>
  );
}
