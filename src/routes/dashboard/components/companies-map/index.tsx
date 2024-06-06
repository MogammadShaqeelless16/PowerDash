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
            Universities
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
          <iframe title="EnrollmentMAP" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=dc82f16b-ba22-40b6-a2fe-39bfe9ad52f0&autoAuth=true&ctid=a3f14f21-237f-4028-b978-425eb768a716" frameBorder="0"></iframe>
        </Suspense>
      </div>
      <div className={styles.countries}>
      
      </div>
    </Card>
  );
};
