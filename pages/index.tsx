import Typography from "@mui/material/Typography";
import MuiButton from "../components/MuiButton";
import MuiCheckbox from "../components/MuiCheckbox";
import MuiRadioButton from "../components/MuiRadioButton";
import MuiRating from "../components/MuiRating";
import MuiSelect from "../components/MuiSelect";
import MuiTextField from "../components/MuiTextField";
import MuiTypography from "../components/MuiTypography";

export default function HomePage() {
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        Material UI ready!
      </Typography>
      {/* <MuiTypography /> */}
      <MuiButton />
      {/* <MuiSelect /> */}
      {/* <MuiRadioButton />
      <MuiCheckbox /> */}
      <MuiRating />
    </div>
  )
}