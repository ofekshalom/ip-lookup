import { Button, Card, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { IpSearchField } from "./IpSearchField/IpSearchField";
import { useTranslation } from "react-i18next";

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
    <Card>
      <Typography>{t("ipLookup.header")}</Typography>
      <Typography>{t("ipLookup.subheader")}</Typography>
      <Button startIcon={<AddIcon />} onClick={handleAppIp}>
        {t("ipLookup.addIpButton")}
      </Button>
      {ipSearchList.map((_, index) => (
        <IpSearchField index={index} />
      ))}
    </Card>
  );
};
