import { List, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [Activities, setActivities] = useState<Activity[]>([]);
  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/Activities")
      .then((response) => setActivities(response.data));

    return () => {};
  }, []);
  return (
    <>
      <Typography variant="h3">Reactivities</Typography>
      <List>
        {Activities.map((activity) => (
          <li key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </li>
        ))}
      </List>
    </>
  );
}

export default App;
