"use client";
import Button, { ButtonProps } from "@mui/material/Button";

interface CustomizedButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export default function PrimaryButton({
  children,
  ...props
}: CustomizedButtonProps) {
  return (
    <Button variant="contained" color="secondary" {...props}>
      {children}
    </Button>
  );
}
