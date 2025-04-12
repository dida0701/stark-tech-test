import { AppAppBar } from "@/features/stock";
import { getTaiwanStockInfo } from "@/api";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const taiwanStockInfo = await getTaiwanStockInfo();

  return (
    <div>
      <AppAppBar taiwanStockInfo={taiwanStockInfo} />
      {children}
    </div>
  );
};

export default Layout;
