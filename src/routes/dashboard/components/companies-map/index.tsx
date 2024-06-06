import { lazy, Suspense } from "react";

import { useNavigation } from "@refinedev/core";

import { GlobalOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";

import { Text } from "@/components";

import Countries from "./countries.json";
import styles from "./index.module.css";

const Map = lazy(() => import("./map"));

export const CompaniesMap: React.FC = () => {
  const { list } = useNavigation();

  return (
    <Card
      style={{ height: "100%" }}
      bodyStyle={{
        padding: 0,
        overflow: "hidden",
      }}
      title={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {/* @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66 */}
          <GlobalOutlined />
          <Text size="sm" style={{ marginLeft: ".5rem" }}>
            Companies
          </Text>
        </div>
      }
      extra={
        <Button
          onClick={() => list("companies")}
          // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
          icon={<RightCircleOutlined />}
        >
          See all universities
        </Button>
      }
    >
      <div
        style={{
          height: "318px",
          marginTop: "2px",
          position: "relative",
        }}
      >
        <Suspense>
        <iframe title="Enrollment" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=ec189112-9c0e-47e6-9b0d-34d33a5daae5&autoAuth=true&ctid=a3f14f21-237f-4028-b978-425eb768a716&pageName=Page1&navContentPaneEnabled=false&filtersPaneEnabled=false&showControls=false&filterPaneEnabled=false" frameborder="0" allowFullScreen="true"></iframe>
        </Suspense>
      </div>
      <div className={styles.countries}>
      
      </div>
    </Card>
  );
};
