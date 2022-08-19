import React from "react";
import styled from "styled-components";
import { ArrowDropDownIcon } from "./icons";
import Button from "../../components/Button/Button";
import { useNetworkModal, SwitchNetwork } from "../NetworkModal";
import { ChainId, NETWORK_LABEL } from "../NetworkModal/config";
import DogeChain from "../NetworkModal/icons/DogeChain";

interface Props {
  chainId: number;
  switchNetwork: SwitchNetwork;
}

const StyledButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.white3};
  border-radius: 10px;
  font-size: 14px;
  line-height: 10px;
  padding: 0px 15px 0px 10px;
  :focus {
    box-shadow: none !important;
  }
`;

export const NETWORK_ICON: { [key: number]: any } = {
  [ChainId.DOGECHAIN]: <DogeChain width="23px" mr="8px" />,
  [ChainId.DOGECHAIN_TESTNET]: <DogeChain width="23px" mr="8px" />,
};

const NetworkButton: React.FC<Props> = ({ chainId, switchNetwork }) => {
  const { onPresentNetworkModal } = useNetworkModal(switchNetwork, chainId);

  return (
    <StyledButton
      size="sm"
      variant="tertiary"
      color="text"
      onClick={() => {
        onPresentNetworkModal();
      }}
    >
      {NETWORK_ICON[chainId]} {NETWORK_LABEL[chainId]} <ArrowDropDownIcon width="10px" ml="8px" />
    </StyledButton>
  );
};

export default NetworkButton;
