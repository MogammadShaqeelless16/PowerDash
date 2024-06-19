import React, { useState } from "react";

import { useNavigation } from "@refinedev/core";

export const StaffPageWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { show } = useNavigation();
  const [selectedEventCategory, setSelectedEventCategory] = useState<string[]>(
    [],
  );

  return (
    <div className="page-container">
      {children}
      <iframe title="KopanoMaluleke" width="100%" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=384f22d8-98d2-4b96-b0df-5c485def6bfb&autoAuth=true&ctid=a3f14f21-237f-4028-b978-425eb768a716&navContentPaneEnabled=false&filterPaneEnabled=false" frameBorder="0"></iframe>
    </div>
  );
};