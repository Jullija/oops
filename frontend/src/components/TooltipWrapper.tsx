import { Tooltip } from "@mui/material";
import { ReactElement } from "react";

type TooltipWrapper = {
  children: ReactElement;
  tooltipContent: ReactElement;
};

export const TooltipWrapper = ({
  children,
  tooltipContent,
}: TooltipWrapper) => {
  return (
    <Tooltip title={tooltipContent} placement="top">
      <div>{children}</div>
    </Tooltip>
  );
};
