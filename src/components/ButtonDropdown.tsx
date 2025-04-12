import { useRef, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

export const ButtonDropdown = ({
  menu,
  onChange,
  children,
}: {
  menu: { label: string; value: string | number }[];
  onChange: (value: string | number) => void;
  children: React.ReactNode;
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  const handleMenuItemClick = (value: string | number) => {
    onChange(value);
    setOpen(false);
  };

  return (
    <>
      <Button ref={buttonRef} variant="contained" onClick={() => setOpen(true)}>
        {children}
      </Button>
      <Menu
        anchorEl={buttonRef.current}
        open={open}
        onClose={() => setOpen(false)}
      >
        {menu.map(({ label, value }) => (
          <MenuItem key={value} onClick={() => handleMenuItemClick(value)}>
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
