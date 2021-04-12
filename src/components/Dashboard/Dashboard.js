import React, { Component } from "react";
import styled from "styled-components";

class Dashboard extends Component {
  render() {
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: rgb(114, 91, 115);
    `;

    const Wrapper = styled.section`
      padding: 4em;
      background: rgb(
        237, 230, 237
        );
    `;
    return (
      <Wrapper>
        <Title>
          <h1 class="text-center">Добродошли</h1>
          <p class="text-center">ДМС пракса</p>
        </Title>
      </Wrapper>
    );
  }
}

export default Dashboard;
