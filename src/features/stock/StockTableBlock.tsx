"use client";

import { useEffect, useRef } from "react";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { NoData } from "@/components";

const StockTable = ({
  categories,
  revenues,
  rates,
}: {
  categories: string[];
  revenues: number[];
  rates: number[];
}) => {
  const stickyCell = {
    position: "sticky",
    left: 0,
    boxShadow: "inset -2px 0 0 white",
  };

  const lastOne = useRef<HTMLTableCellElement | null>(null);

  useEffect(() => {
    if (!lastOne.current) return;
    lastOne.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [categories]);

  return (
    <TableContainer
      component={Paper}
      sx={{
        mt: 2,
        boxShadow: "none",
        borderRadius: 0,
        borderTop: "1px solid var(--mui-palette-TableCell-border)",
      }}
    >
      <Table aria-label="simple table" sx={{ whiteSpace: "nowrap" }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#F6F8FA" }}>
            <TableCell sx={{ backgroundColor: "#F6F8FA", ...stickyCell }}>
              年度月份
            </TableCell>
            {categories.map((category) => (
              <TableCell key={category}>
                {category.replace(/-\d+$/, "")}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              sx={{ backgroundColor: "white", ...stickyCell }}
              component="th"
              scope="row"
            >
              每月營收
            </TableCell>
            {revenues.map((data, i) => (
              <TableCell key={categories[i]}>{data}</TableCell>
            ))}
          </TableRow>
          <TableRow sx={{ backgroundColor: "#F6F8FA" }}>
            <TableCell
              sx={{ backgroundColor: "#F6F8FA", ...stickyCell }}
              component="th"
              scope="row"
            >
              單月營收年增率 (%)
            </TableCell>
            {rates.map((data, i) => (
              <TableCell
                ref={i === rates.length - 1 ? lastOne : undefined}
                key={categories[i]}
              >
                {data}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const StockTableBlock = ({
  categories,
  revenues,
  rates,
}: {
  categories: string[];
  revenues: number[];
  rates: number[];
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        background: "white",
        fontWeight: 600,
        fontSize: 15,
        borderRadius: "3px",
        border: "solid 1px #DFDFDF",
        py: "16px",
      }}
    >
      <Box px={"16px"}>
        <Button variant="contained">詳細數據</Button>
      </Box>
      {categories.length === 0 ? (
        <NoData height={160} />
      ) : (
        <StockTable categories={categories} revenues={revenues} rates={rates} />
      )}
    </Box>
  );
};
