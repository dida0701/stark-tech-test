"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AppBar, Autocomplete, styled, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StockInfo } from "@/api";

const StyledAutocomplete = styled(Autocomplete)(() => ({
  color: "inherit",
  flex: 1,
  margin: "auto",
  backgroundColor: "#FAFAFA",
  "& .MuiAutocomplete-popupIndicator": { transform: "none" },
  "& .MuiInputBase-input::placeholder": {
    opacity: 1,
    fontWeight: 600,
    fontSize: 15,
    color: "#434343",
  },
}));

export const AppAppBar = ({
  taiwanStockInfo,
}: {
  taiwanStockInfo: StockInfo[];
}) => {
  const [search, setSearch] = useState("");

  const options = useMemo(() => {
    if (!search) return [];

    const array: { label: string; value: string }[] = [];
    for (const data of taiwanStockInfo) {
      if (
        data.stock_id.includes(search) &&
        !array.some(({ value }) => value === data.stock_id)
      ) {
        array.push({
          label: `${data.stock_id} ${data.stock_name}`,
          value: data.stock_id,
        });
        if (array.length === 5) break;
      }
    }
    return array;
  }, [search, taiwanStockInfo]);
  const router = useRouter();

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
      <StyledAutocomplete
        disablePortal
        options={options}
        size="small"
        popupIcon={<SearchIcon />}
        noOptionsText={search ? "無資料" : "請輸入台／美股代號"}
        sx={{ width: 400 }}
        disableClearable
        value={""}
        onChange={(_, e) =>
          router.push(`/stock/${(e as { value: string }).value}`)
        }
        inputValue={search}
        onInputChange={(_, value) => setSearch(value)}
        renderInput={(params) => (
          <TextField {...params} placeholder="輸入台／美股代號，查看公司價值" />
        )}
      />
    </AppBar>
  );
};
