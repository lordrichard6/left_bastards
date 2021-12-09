import { TitleBig } from "../../../assets/variables/typography";
import { HeaderContainer } from "../../../assets/variables";
import { header } from "../../../assets/data/members";

export default function Header() {
  return (
    <HeaderContainer image={header.image} height="100vh">
      <TitleBig>{header.title}</TitleBig>
    </HeaderContainer>
  );
}
