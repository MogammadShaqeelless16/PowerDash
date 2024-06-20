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
     <iframe title="graduates_final_finale" width="100%" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=d6c4ce29-4544-4605-94e8-c0b6bff08f73&autoAuth=true&ctid=a3f14f21-237f-4028-b978-425eb768a716" frameBorder="0"></iframe>
    </div>
  );
};
