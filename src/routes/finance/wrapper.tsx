import React, { useState } from "react";

import { useNavigation } from "@refinedev/core";

export const FinancePageWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { show } = useNavigation();
  const [selectedEventCategory, setSelectedEventCategory] = useState<string[]>(
    [],
  );

  return (
    <div className="page-container">
      {children}
      <iframe title="Sinovuyo Gcanga" width="100%" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=1cdbedc3-1a55-422f-b28c-a105922ae725&autoAuth=true&ctid=a3f14f21-237f-4028-b978-425eb768a716" frameBorder="0" ></iframe>
    </div>
  );
};