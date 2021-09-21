import { Dashboard, Users, TrackLocation, Report, Tips } from "../views/main";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <p>DASHBOARD</p>,
    main: () => <Dashboard />,
  },
  {
    path: "/users",
    sidebar: () => <p>USERS</p>,
    main: () => <Users />,
  },
  {
    path: "/track-location",
    sidebar: () => <p>TRACK LOCATION</p>,
    main: () => <TrackLocation />,
  },
  {
    path: "/report",
    sidebar: () => <p>REPORT</p>,
    main: () => <Report />,
  },
  {
    path: "/tips",
    sidebar: () => <p>TIPS</p>,
    main: () => <Tips />,
  },
];

export default routes;
