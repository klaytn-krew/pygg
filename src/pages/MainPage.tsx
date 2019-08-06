import React from "react"
import styled from "styled-components";

const MainWithMarketContainer = styled.div`
  display: block;
  position: relative;
  width: 1400px;
  margin: 72px auto 0;
`;

const SectionStyle = styled.section`
  display: block;
`;

const RightSection = styled(SectionStyle)`
  float: right;
  width: 400px;
`;

const ExchangeOrderBookList = () => (
  <MainWithMarketContainer>
    <RightSection />
  </MainWithMarketContainer>
);

export default ExchangeOrderBookList;