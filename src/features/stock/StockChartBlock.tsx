"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Box, Button } from "@mui/material";
import { ButtonDropdown, NoData } from "@/components";

const getOptions = ({
  categories,
  revenues,
  rates,
}: {
  categories: string[];
  revenues: number[];
  rates: number[];
}): Highcharts.Options => ({
  title: { text: undefined },
  xAxis: {
    categories,
    crosshair: true,
    type: "datetime",
    labels: {
      rotation: 0,
      overflow: "allow",
      formatter: function () {
        const date = new Date(this.value);
        return date.getMonth() === 0 ? `${date.getFullYear()}` : "";
      },
    },
  },

  yAxis: [
    {
      title: {
        text: "千元",
        align: "high",
        offset: 0,
        rotation: 0,
        x: -10,
        y: -10,
      },
      labels: {
        style: { color: "#545454" },
        formatter: function () {
          return this.value.toLocaleString();
        },
      },
    },
    {
      title: {
        text: "%",
        align: "high",
        offset: 0,
        rotation: 0,
        x: 14,
        y: -10,
        style: { color: "#545454" },
      },
      opposite: true,
    },
  ],
  tooltip: {
    shared: true,
    backgroundColor: "#1c1c1c",
    borderRadius: 8,
    borderWidth: 0,
    padding: 12,
    style: {
      color: "#fff",
      fontSize: "13px",
    },
  },
  legend: {
    align: "left",
    verticalAlign: "top",
    x: 80,
    margin: -6,
  },
  series: [
    {
      name: "每月營收",
      type: "column",
      yAxis: 0,
      data: revenues,
      color: "#f3c420",
    },
    {
      name: "單月營收年增率 (%)",
      type: "spline",
      yAxis: 1,
      data: rates,
      color: "#CB4B4B",
      marker: {
        enabled: false,
      },
    },
  ],
  credits: {
    enabled: false,
  },
});

const periodOption = [
  { label: "近 3 年", value: 3 },
  { label: "近 5 年", value: 5 },
  { label: "近 8 年", value: 8 },
];
export const StockChartBlock = ({
  categories,
  revenues,
  rates,
}: {
  categories: string[];
  revenues: number[];
  rates: number[];
}) => {
  const options = getOptions({ categories, revenues, rates });

  const searchParams = useSearchParams();
  const selectedPeriod = +(searchParams.get("period") ?? 5);
  const router = useRouter();
  const pathname = usePathname();

  const handlePeriodChange = (value: number) => {
    router.push(`${pathname}?period=${value}`);
  };

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
        <ButtonDropdown
          menu={periodOption}
          onChange={(v) => handlePeriodChange(v as number)}
        >
          {periodOption.find(({ value }) => value === selectedPeriod)?.label}
        </ButtonDropdown>
      </Box>
      <Box mt={2}>
        {categories.length === 0 ? (
          <NoData height={400} />
        ) : (
          <HighchartsReact highcharts={Highcharts} options={options} />
        )}
      </Box>
    </Box>
  );
};
