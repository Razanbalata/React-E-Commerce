import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
const ArrowIcon = ({ direction = 'left' }) => (
  <IconButton size="small" className="bg-gray-200">
    {direction === 'left' ? <ArrowBackIcon /> : <ArrowForwardIcon />}
  </IconButton>
);
export default ArrowIcon