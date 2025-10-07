import React from "react";
import FullServices from "../home/services/FullServices";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import StorefrontIcon from '@mui/icons-material/Storefront';
function AboutServices() {
  const extra = [
    {
      title: "10.5K",
      desc: "Sallers active our site",
      Icon: StorefrontIcon,
    },
    {
      title: "33K",
      desc: "Mopnthly Produduct Sale",
      Icon: AttachMoneyIcon,
    },
    {
      title: "45.5K",
      desc: "Customer active in our site",
      Icon: CardGiftcardIcon,
    },
    {
      title: "25K",
      desc: "Anual gross sale in our site",
      Icon: CardGiftcardIcon,
    },
  ];
  return (
    <FullServices
      services={extra}
      sx={{
        borderRadius: 1,
        py:15
      }}
      bordered={true}
    />
  );
}

export default AboutServices;
