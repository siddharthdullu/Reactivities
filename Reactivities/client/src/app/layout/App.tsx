import { Box, Container, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router";
import HomePage from "../../features/home/HomePage";

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

  const location = useLocation();

  return (
    <>
      <Box sx={{ bgcolor: "#eeeeee" }}>
        <CssBaseline />
        {location.pathname === "/" ? (
          <HomePage />
        ) : (
          <>
            <NavBar />
            <Container maxWidth="xl" sx={{ mt: 3 }}>
              <Outlet />
            </Container>
          </>
        )}
      </Box>
    </>
  );
}

export default App;
