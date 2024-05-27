import Box from "@mui/material/Box";
import Link from "next/link";
import PrimaryButton from "./components/PrimaryButton";

export default function Home() {
  return (
    <Box
      component="section"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Link href="/devices" passHref>
        <PrimaryButton>Device List</PrimaryButton>
      </Link>
    </Box>
  );
}
