import queryString from "query-string";

export interface StockMonthRevenue {
  date: string;
  stock_id: string;
  country: string;
  revenue: number;
  revenue_month: number;
  revenue_year: number;
}

export const getStockMonthRevenue = async ({
  stockId,
  period = 5,
}: {
  stockId: string;
  period?: number;
}) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  // 拿過去 n 年的資料，再加 1 年計算單月營收年增率
  const start_date = `${year - period - 1}-${month}-${day}`;
  const end_date = `${year}-${month}-${day}`;

  const query = queryString.stringify({
    dataset: "TaiwanStockMonthRevenue",
    data_id: stockId,
    start_date,
    end_date,
    token: process.env.NEXT_PUBLIC_STOCK_API_TOKEN,
  });

  const res = await fetch(`https://api.finmindtrade.com/api/v4/data?${query}`);
  const data = await res.json();

  return data.data as StockMonthRevenue[];
};

export interface StockInfo {
  industry_category: string;
  stock_id: string;
  stock_name: string;
  type: string;
  date: string;
}

export const getTaiwanStockInfo = async () => {
  const query = queryString.stringify({
    dataset: "TaiwanStockInfo",
    token: process.env.NEXT_PUBLIC_STOCK_API_TOKEN,
  });

  const res = await fetch(`https://api.finmindtrade.com/api/v4/data?${query}`, {
    cache: "force-cache",
  });
  const data = await res.json();

  return data.data as StockInfo[];
};
