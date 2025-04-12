import { Box } from "@mui/material";

export const Header = ({ name, id }: { name: string; id: number }) => {
  return (
    <Box
      sx={{
        width: "100%",
        background: "white",
        p: "16px",
        fontWeight: 600,
        fontSize: 15,
        borderRadius: "3px",
        border: "solid 1px #DFDFDF",
      }}
    >
      {name} ({id})
    </Box>
  );
};
