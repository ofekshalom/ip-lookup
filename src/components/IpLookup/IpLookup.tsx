import { Button, Card, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { IpSearchField } from "./IpSearchField/IpSearchField";

export interface IpSearchItem {
  id: string;
}

export const IpLookup = () => {
  const [ipSearchList, setIpSearchList] = useState<IpSearchItem[]>([]);

  const handleAppIp = () => {
    const id = uuidv4();
    setIpSearchList((prevState) => [...prevState, { id }]);
  };
  return (
    <Card>
      <Typography>Ip Lookup</Typography>
      <Typography>
        Enter one or more IP addresses and get their country
      </Typography>
      <Button startIcon={<AddIcon />} onClick={handleAppIp}>
        Add IP
      </Button>
      {ipSearchList.map((_, index) => (
        <IpSearchField index={index} />
      ))}
    </Card>
  );
};
