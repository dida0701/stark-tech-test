import { Box, Typography } from "@mui/material";
import { Header, StockChartBlock, StockTableBlock } from "@/features/stock";
import { getStockMonthRevenue, getTaiwanStockInfo } from "@/api";

const CodePage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ code?: string[] }>;
  searchParams: Promise<{ period?: number }>;
}) => {
  const stockId = (await params).code?.[0];
  const period = (await searchParams).period;

  const taiwanStockInfo = await getTaiwanStockInfo();
  const currentStock = taiwanStockInfo.find(
    ({ stock_id }) => stock_id === stockId
  );

  const stockMonthRevenue = stockId
    ? await getStockMonthRevenue({ stockId, period })
    : [];
  const currentMonthRevenue = stockMonthRevenue.slice(12);
  const categories = currentMonthRevenue.map(({ date }) => date);
  const revenues = currentMonthRevenue.map(({ revenue }) => revenue / 1000);
  const rates = currentMonthRevenue.map(
    ({ revenue }, i) =>
      +((revenue / stockMonthRevenue[i].revenue - 1) * 100).toFixed(2)
  );

  return (
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
      <Header
        name={currentStock?.stock_name ?? "查無資料"}
        id={currentStock?.stock_id ?? "-"}
      />
      <StockChartBlock
        categories={categories}
        revenues={revenues}
        rates={rates}
      />
      <StockTableBlock
        categories={categories}
        revenues={revenues}
        rates={rates}
      />
      <Box display="flex" justifyContent="flex-end" alignItems="center">
        <Typography
          variant="body1"
          textAlign="right"
          mt={1}
          color="#434343"
          fontSize={13}
        >
          圖表單位：千元，數據來自公開資訊觀測站
          <br />
          網頁圖表歡迎轉貼引用，請註明出處為財報狗
        </Typography>
      </Box>
    </Box>
  );
};

export default CodePage;
