"use client";

import { alpha, AppBar, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#FAFAFA",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.05),
  },
  transition: theme.transitions.create("background-color"),
  border: "solid 1px #DFDFDF",
  display: "flex",
  alignItems: "center",
  margin: "auto",
  width: 400,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#0000008A",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  flex: 1,
  "& .MuiInputBase-input": {
    padding: "7px 10px",
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  "& .MuiInputBase-input::placeholder": {
    opacity: 1,
    fontWeight: 600,
    fontSize: 15,
    color: "#434343",
  },
}));

export const AppAppBar = ({
  search,
  onSearchChange,
}: {
  search: string;
  onSearchChange: (value: string) => void;
}) => {
  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "white",
        p: "10px",
        color: "black",
        boxShadow: "none",
        borderBottom: "solid 1px #DFDFDF",
      }}
    >
      <Search>
        <StyledInputBase
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="輸入台／美股代號，查看公司價值"
          inputProps={{ "aria-label": "search" }}
        />

        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </Search>
    </AppBar>
  );
};
