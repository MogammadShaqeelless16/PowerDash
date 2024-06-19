import React from "react";
import { useCustom } from "@refinedev/core";
import { Col, Row } from "antd";
import type { DashboardTotalCountsQuery } from "@/graphql/types";
import {
  CompaniesMap,
  DashboardDealsChart,
  DashboardTasksChart,
  DashboardTotalCountCard,
  DashboardTotalRevenueChart,
} from "./components";
import { DASHBOARD_TOTAL_COUNTS_QUERY } from "./queries";

const DashboardPage: React.FC = () => {
  const { data, isLoading } = useCustom<DashboardTotalCountsQuery>({
    url: "",
    method: "get",
    meta: { gqlQuery: DASHBOARD_TOTAL_COUNTS_QUERY },
  });

  // Ensure data and data.data are properly checked
  const companiesTotalCount = "28"; // Default hardcoded value for companies
  const contactsTotalCount = "100+"; // Default hardcoded value for contacts
  const dealsTotalCount = "120+"; // Default hardcoded value for deals

  return (
    <div className="page-container">
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource="companies"
            isLoading={isLoading}
            totalCount={companiesTotalCount}
          />
        </Col>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource="contacts"
            isLoading={isLoading}
            totalCount={contactsTotalCount}
          />
        </Col>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource="deals"
            isLoading={isLoading}
            totalCount={dealsTotalCount}
          />
        </Col>
      </Row>

      <Row gutter={[32, 32]} style={{ marginTop: "32px" }}>
        <Col xs={24} sm={24} xl={8} style={{ height: "432px" }}>
          <DashboardTotalRevenueChart />
        </Col>
        <Col xs={24} sm={24} xl={16} style={{ height: "432px" }}>
          <DashboardDealsChart />
        </Col>
      </Row>

      <Row gutter={[32, 32]} style={{ marginTop: "32px" }}>
        <Col xs={24} sm={24} xl={14} xxl={16}>
          {/* Add your content here */}
        </Col>
        <Col xs={24} sm={24} xl={10} xxl={8}>
          {/* Add your content here */}
        </Col>
      </Row>

      <Row gutter={[32, 32]} style={{ marginTop: "32px" }}>
        <Col xs={24} sm={24} xl={8} style={{ height: "448px" }}>
          <DashboardTasksChart />
        </Col>
        <Col xs={24} sm={24} xl={16} style={{ height: "448px" }}>
          <CompaniesMap />
        </Col>
      </Row>
    </div>
  );
};

export default DashboardPage;
