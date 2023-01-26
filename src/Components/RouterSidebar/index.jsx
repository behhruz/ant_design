import { NavLink } from "react-router-dom";
import { Navbars } from "../../Utilities/navbar";
import { Container, Option } from "./style";

export const RouterSidebar = () => {
  return (
    <>
      <Container>
        {Navbars?.map((v) => {
          return (
            <>
              {v.key?.map((i) => {
                return (
                  <>
                    <NavLink to={i.path}>
                      <h1>{i.title}</h1>
                    </NavLink>
                  </>
                );
              })}
            </>
          );
        })}
        {/* <h1>Hello</h1> */}
      </Container>
    </>
  );
};
