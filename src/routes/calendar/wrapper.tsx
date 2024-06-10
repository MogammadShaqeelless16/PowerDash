import React, { useState } from "react";

import { useNavigation } from "@refinedev/core";

export const CalendarPageWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { show } = useNavigation();
  const [selectedEventCategory, setSelectedEventCategory] = useState<string[]>(
    [],
  );

  return (
    <div className="page-container">
      {children}
      <iframe title="Enrollment" width="100%" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=ec189112-9c0e-47e6-9b0d-34d33a5daae5&autoAuth=true&ctid=a3f14f21-237f-4028-b978-425eb768a716&navContentPaneEnabled=false&filterPaneEnabled=false" frameBorder="0"></iframe>
    </div>
  );
};