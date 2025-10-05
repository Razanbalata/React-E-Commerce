import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => (
  <TextField
    placeholder="What are you looking for?"
    variant="outlined"
    size="small"
    fullWidth
    sx={{
      '& .MuiOutlinedInput-root': {
        borderRadius: '8px',
        fontSize: '13px',
        height: '36px',
        backgroundColor: '#f3f4f6',
        '& fieldset': { border: 'none' },
      },
      '& input': { padding: '6px 8px' },
    }}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <SearchIcon fontSize="small" sx={{ color: 'gray' }} />
        </InputAdornment>
      ),
    }}
  />
);
export default SearchBar;