import Typography from "@mui/material/Typography";
import MuiButton from "../components/MuiButton";
import MuiTypography from "../components/MuiTypography";

export default function HomePage() {
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        Material UI ready!
      </Typography>
      {/* <MuiTypography /> */}
      <MuiButton />
    </div>
  )
}