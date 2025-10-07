import { Google } from '@mui/icons-material';
import { Box , Typography,TextField,Button,Link} from '@mui/material';
import React, { useState } from 'react';

function SignForm() {
    const [formData,setFormData] = useState({
        email:"",
        password:""
    })

   function handleSubmit(e){
    const {name,value} = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
   }

  return (
    <Box
        width={{ xs: "100%", sm: "80%", md: "371px" }}
        height={{ md: "326px" }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={3}
      >
        <Box textAlign={{ xs: "center", md: "left" }}>
          <Typography
            variant="h5"
            fontWeight={600}
            mb={1}
            fontSize={{ xs: "1.8rem", md: "1.7rem" }}
          >
           Log in to Exclusive
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Enter your details below
          </Typography>
        </Box>

        <form
        onSubmit={(e)=>
            e.preventDefault()
        }
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "100%",
          }}
        >
          <TextField
          name='email'
          value={formData.email}
          onChange={handleSubmit}
            label="Email Address"
            variant="standard"
            fullWidth
            type="email"
            InputProps={{
              disableUnderline: false,
            }}
          />
          <TextField
          name='password'
          value={formData.password}
          onChange={handleSubmit}
            label="Password"
            variant="standard"
            fullWidth
            type="password"
            InputProps={{
              disableUnderline: false,
            }}
          />

          {/* زر إنشاء الحساب */}
          <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <Box width="50%">
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#DB4444",
                fontWeight: "bold",
                py: 1.3,
                "&:hover": { backgroundColor: "#C33D3D" },
              }}
            >
              Log in
            </Button>
          </Box>
          <Typography variant='body2' sx={{color:"#DB4444",cursor:"pointer"}}>Forget Password?</Typography>
          </Box>
        </form>
      </Box>
  );
}

export default SignForm;
