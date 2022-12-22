import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.svg";
import {HeaderStyle} from './styles'
import {Container} from '../../styles/global'

export function Header() {
  return (
    <HeaderStyle>
      <Container>
        <div className="logo">
          <Link href="/">
              <Image src={logo} alt="logo Marvel" />
          </Link>
        </div>
      </Container>
    </HeaderStyle>
  );
}
