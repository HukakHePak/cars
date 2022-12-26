import React from "react";
import { Form } from "react-router-dom";
import { Button, Input, Container, Content, FlexboxGrid } from "rsuite";
import box from "scss/box.scss";

function Login() {
  console.log(box);
  return (
    <Container className={box.full}>
      <Content>
        <FlexboxGrid justify="center" align="middle">
          <Form>
            <Input />
            <Input />
            <Button> Submit </Button>
          </Form>
        </FlexboxGrid>
      </Content>
    </Container>
  );
}

export default Login;
