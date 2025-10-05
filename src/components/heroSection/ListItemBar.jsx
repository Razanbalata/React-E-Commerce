import { ListItem, ListItemText, ListItemButton } from '@mui/material';
import ChevronRight from '@mui/icons-material/ChevronRight';

const ListItemBar = ({ text, showIcon }) => (
  <ListItem disablePadding>
    <ListItemButton sx={{ py: 0.5, pr: 2,pl:0 }}>
      <ListItemText primary={text} primaryTypographyProps={{ fontSize: 14 }} />
      {showIcon && <ChevronRight fontSize="small" />}
    </ListItemButton>
  </ListItem>
);
export default ListItemBar;