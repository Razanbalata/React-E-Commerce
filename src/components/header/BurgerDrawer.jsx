import React, { useState,useEffect} from "react";
import { Drawer, Box, Typography, Button ,useMediaQuery} from "@mui/material";
import NavigationMenu from "./NavigationMenu";
import ListBar from '../../pages/home/heroSection/ListBar'
import { useTheme } from "@mui/material/styles";


const BurgerDrawer = ({ open, onClose }) => {
  const [openCate,setOpenCate] = useState(false)

   const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // يعني من 900px وطالع


  function handleClick(){
    setOpenCate(!openCate)
  }

  useEffect(() => {
    if (isDesktop && open) {
      onClose();
    }
  }, [isDesktop,open]);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 250, p: 2 }}>
        <NavigationMenu direction="column" onItemClick={onClose} />
         <Button
          variant="text"
          onClick={handleClick}
          sx={{
            mt: 2,
            textTransform: "none",
            fontWeight: "bold",
            color: "white",
            backgroundColor:"purple"
          }}
        >
           {openCate ? "Hide Categories" : "Show Categories"}
        </Button>
        {openCate && <ListBar isInDrawer/>}
      </Box>
    </Drawer>
  );
};

export default BurgerDrawer;
