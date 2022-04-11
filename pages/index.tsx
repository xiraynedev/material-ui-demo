import Typography from "@mui/material/Typography";
import MuiAutocomplete from "../components/MuiAutocomplete";
import MuiButton from "../components/MuiButton";
import MuiCard from "../components/MuiCard";
import MuiCheckbox from "../components/MuiCheckbox";
import MuiList from "../components/MuiList";
import MuiProgress from "../components/MuiProgress";
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
      {/* <MuiRating /> */}
      {/* <MuiAutocomplete /> */}
      {/* <MuiCard /> */}
      {/* <MuiList /> */}
      <MuiProgress />
    </div>
  )
}