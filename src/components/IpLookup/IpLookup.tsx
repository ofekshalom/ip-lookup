import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { IpSearchField } from "./IpSearchField/IpSearchField";
import { useTranslation } from "react-i18next";
import {
  StyledAddButton,
  StyledBoxIpSearchWrapper,
  StyledCard,
  StyledHeader,
  StyledSubHeader,
} from "./IpLookup.styles";

export interface IpSearchItem {
  id: string;
}

export const IpLookup = () => {
  const [ipSearchList, setIpSearchList] = useState<IpSearchItem[]>([]);
  const { t } = useTranslation();

  const handleAppIp = () => {
    const id = uuidv4();
    setIpSearchList((prevState) => [...prevState, { id }]);
  };
  return (
    <StyledCard>
      <StyledHeader>{t("ipLookup.header")}</StyledHeader>
      <StyledSubHeader>{t("ipLookup.subheader")}</StyledSubHeader>
      <StyledAddButton
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleAppIp}
      >
        {t("ipLookup.addIpButton")}
      </StyledAddButton>
      <StyledBoxIpSearchWrapper>
        {ipSearchList.map((item, index) => (
          <IpSearchField key={item.id} index={index + 1} />
        ))}
      </StyledBoxIpSearchWrapper>
    </StyledCard>
  );
};
