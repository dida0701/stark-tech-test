import { Box } from "@mui/material";

export const NoData = ({ ...props }: React.ComponentProps<typeof Box>) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="#545454"
      {...props}
    >
      無資料
    </Box>
  );
};
