import {
  Ant,
  Box1,
  Box2,
  Container,
  Img1,
  Input,
  Latter,
  Option,
  Select,
} from "./style";
import AntDesign from "../../Assets/icons/ant.png";
import Search from "../../Assets/icons/lupa.png";
import Global from "../../Assets/icons/global.png";
import Ltr from "../../Assets/icons/ltr.png";
import Github from "../../Assets/icons/github.png";
import { NavLink, Outlet } from "react-router-dom";
import { Navbars } from "../../Utilities/navbar";

export const Navbar = () => {
  return (
    <>
      <Container>
        <Box1>
          <NavLink to={"/"}>
            <Img1 src={AntDesign} />
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to={"/"}>
            <Ant>Ant Design</Ant>
          </NavLink>

          <Img1 lupa src={Search} />
          <Input type="checked" placeholder="Type keywords..." />
        </Box1>
        <Box2>
          {Navbars.map((v) => {
            return (
              <>
                <NavLink to={v.path} style={{ textDecoration: "none" }}>
                  <Latter>{v.title}</Latter>
                </NavLink>
              </>
            );
            <Outlet />;
          })}

          <Select>
            <option value="">5.1.6</option>
            <option value="">4.x</option>
            <option value="">3.x</option>
            <option value="">2.x</option>
            <option value="">1.x</option>
          </Select>
          <Select>
            <option value="">More</option>
            <option value="">Ant design Charts</option>
            <option value="">Ant design pro</option>
            <option value="">Ant design Components</option>
            <option value="">Ant design Angular</option>
            <option value="">Ant design Vue</option>
          </Select>
          <NavLink to={"recources"}>
            <Img1 ff global src={Global} />
          </NavLink>
          <NavLink to={"development"}> <Img1 ff global src={Ltr} /></NavLink>
          <Img1 ff global src={Github} />
        </Box2>
      </Container>
    </>
  );
};
