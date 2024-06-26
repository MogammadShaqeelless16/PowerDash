import React, { lazy, Suspense, useMemo } from "react";

import { useList, useNavigation } from "@refinedev/core";
import type { GetFieldsFromList } from "@refinedev/nestjs-query";

import { DollarOutlined, RightCircleOutlined } from "@ant-design/icons";
import type { AreaConfig } from "@ant-design/plots";
import { Button, Card } from "antd";
import dayjs from "dayjs";

import { Text } from "@/components";
import type { DashboardDealsChartQuery } from "@/graphql/types";

import { DASHBOARD_DEALS_CHART_QUERY } from "./queries";

const Area = lazy(() => import("@ant-design/plots/es/components/area"));

export const DashboardDealsChart: React.FC = () => {
  const { list } = useNavigation();
  const { data, isError, error } = useList<
    GetFieldsFromList<DashboardDealsChartQuery>
  >({
    resource: "dealStages",
    filters: [{ field: "title", operator: "in", value: ["WON", "LOST"] }],
    meta: {
      gqlQuery: DASHBOARD_DEALS_CHART_QUERY,
    },
  });

  if (isError) {
    console.error("Error fetching deals chart data", error);
    return null;
  }

  const dealData = useMemo(() => {
    const won = data?.data
      .find((node) => node.title === "WON")
      ?.dealsAggregate.map((item) => {
        const { closeDateMonth, closeDateYear } = item.groupBy!;
        const date = dayjs(`${closeDateYear}-${closeDateMonth}-01`);
        return {
          timeUnix: date.unix(),
          timeText: date.format("MMM YYYY"),
          value: item.sum?.value,
          state: "Income",
        };
      });

    const lost = data?.data
      .find((node) => node.title === "LOST")
      ?.dealsAggregate.map((item) => {
        const { closeDateMonth, closeDateYear } = item.groupBy!;
        const date = dayjs(`${closeDateYear}-${closeDateMonth}-01`);
        return {
          timeUnix: date.unix(),
          timeText: date.format("MMM YYYY"),
          value: item.sum?.value,
          state: "Expenditure",
        };
      });

    return [...(won || []), ...(lost || [])].sort(
      (a, b) => a.timeUnix - b.timeUnix,
    );
  }, [data]);

  const config: AreaConfig = {
    isStack: false,
    data: dealData,
    xField: "timeText",
    yField: "value",
    seriesField: "state",
    animation: true,
    startOnZero: false,
    smooth: true,
    legend: {
      offsetY: -6,
    },
    yAxis: {
      tickCount: 4,
      label: {
        formatter: (v) => {
          return `R${Number(v) / 1000}k`;
        },
      },
    },
    tooltip: {
      formatter: (data) => {
        return {
          name: data.state,
          value: `R${Number(data.value) / 1000}k`,
        };
      },
    },
    areaStyle: (datum) => {
      const won = "l(270) 0:#ffffff 0.5:#b7eb8f 1:#52c41a";
      const lost = "l(270) 0:#ffffff 0.5:#f3b7c2 1:#ff4d4f";
      return { fill: datum.state === "Won" ? won : lost };
    },
    color: (datum) => {
      return datum.state === "Income" ? "#52C41A" : "#F5222D";
    },
  };

  return (
    <Card
      style={{ height: "100%" }}
      headStyle={{ padding: "8px 16px" }}
      bodyStyle={{ padding: "24px 24px 0px 24px" }}
      title={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {/* @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66 */}
          <DollarOutlined />
          <Text size="sm" style={{ marginLeft: ".5rem" }}>
            Budget
          </Text>
        </div>
      }
      extra={
        // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
        <Button onClick={() => list("deals")} icon={<RightCircleOutlined />}>
          See sales pipeline
        </Button>
      }
    >
      <Suspense>
      <iframe title="Sinovuyo graph" width="100%" height="350" src="https://app.powerbi.com/reportEmbed?reportId=2dfefe01-f70b-4801-ac7c-2df37eaf1d0b&autoAuth=true&ctid=a3f14f21-237f-4028-b978-425eb768a716&navContentPaneEnabled=false&chromeless=true" frameBorder="0"></iframe>
      </Suspense>
    </Card>
  );
};
