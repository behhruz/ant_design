import { All, Button, Container, Latter, Latter1 } from "./style";

export const Body = () => {
  return (
    <>
      <Container>
        <Latter> Ant Design 5.0</Latter>
        <Latter1>
          Help designers/developers building beautiful products more flexible
          and working with happeness
        </Latter1>
        <All>
          <Button get>Getting Started</Button>
          <Button des>Design Launguage</Button>
        </All>
      </Container>
    </>
  );
};
