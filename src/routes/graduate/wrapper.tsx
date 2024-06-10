import React, { useState } from "react";

import { useNavigation } from "@refinedev/core";

export const GraduatePageWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { show } = useNavigation();
  const [selectedEventCategory, setSelectedEventCategory] = useState<string[]>(
    [],
  );

  return (
    <div className="page-container">
      {children}
      <iframe title="Graduates2" width="100%" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=37253408-fcb8-4b5f-8b4a-b5d14b93672e&autoAuth=true&ctid=a3f14f21-237f-4028-b978-425eb768a716" frameBorder="0" ></iframe>
    </div>
  );
};