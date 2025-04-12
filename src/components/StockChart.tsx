"use client";

import { Box, Button } from "@mui/material";

export const StockChart = () => {
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
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained">每月營收</Button>
        <Button variant="contained">近五年</Button>
      </Box>
      <Box mt={2} sx={{ background: "#ddd", width: "100%", height: 350 }} />
    </Box>
  );
};
