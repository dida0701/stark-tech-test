import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box sx={{ display: "flex", p: 5, justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
