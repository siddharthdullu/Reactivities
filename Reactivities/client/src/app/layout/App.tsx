import { Box, Container, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router";

function App() {
  //const [Activities, setActivities] = useState<Activity[]>([]);
  // const [selectedActivity, setSelectedActivity] = useState<
  //   Activity | undefined
  // >(undefined);
  // const [editMode, setEditMode] = useState(false);

  // const handleSelectActivity = (id: string) => {
  //   setSelectedActivity(activities!.find((x) => x.id === id));
  //   console.log(id);
  // };

  // const handleCancelSelectActivity = () => {
  //   setSelectedActivity(undefined);
  // };

  // const handleOpenForm = (id?: string) => {
  //   if (id) handleSelectActivity(id);
  //   else handleCancelSelectActivity();
  //   setEditMode(true);
  // };

  // const handleFormClose = () => {
  //   setEditMode(false);
  // };

  return (
    <>
      <Box sx={{ bgcolor: "#eeeeee" }}>
        <CssBaseline />
        <NavBar />
        <Container maxWidth="xl" sx={{ mt: 3 }}>
          <Outlet />
        </Container>
      </Box>
    </>
  );
}

export default App;
