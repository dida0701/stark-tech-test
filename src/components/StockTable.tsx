"use client";

import { Box, Button } from "@mui/material";

export const StockTable = () => {
  return (
    <Box
      sx={{
        width: "100%",
        background: "white",
        p: "16px",
        fontWeight: 600,
        fontSize: 15,
        borderRadius: "3px",
        border: "solid 1px #DFDFDF",
      }}
    >
      <div>
        <Button variant="contained">詳細數據</Button>
      </div>
      <Box mt={2} sx={{ background: "#ddd", width: "100%", height: 350 }} />
    </Box>
  );
};
