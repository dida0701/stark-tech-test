"use client";

import { useState } from "react";
import { Box } from "@mui/material";
import { Header, AppAppBar, StockChart, StockTable } from "@/components";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <AppAppBar search={search} onSearchChange={setSearch} />
      <Box
        sx={{
          margin: "auto",
          width: 717,
          py: "18px",
          display: "flex",
          flexDirection: "column",
          rowGap: "6px",
        }}
      >
        <Header name={"三商壽"} id={2867} />
        <StockChart />
        <StockTable />
      </Box>
    </div>
  );
};

export default Home;
