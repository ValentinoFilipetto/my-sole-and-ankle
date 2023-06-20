import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <Tools>
        <SearchInput />
        <HelpLink href="/help">Help</HelpLink>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={1} />
        </UnstyledButton>
      </Tools>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  padding: 10px 24px; // padding-right should take into account gap: 24px
`;

const Tools = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1 1;
  gap: 24px;
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
