import { Login } from "../views/Login";
import {Search} from "../views/Search"
import { Home } from "../views/Home";
import { My } from "../views/My";
import { One } from "../views/One";
import { Two } from "../views/Two";
import { Navigate } from "react-router-dom";
import { Detail } from '../views/detail'
import {Deta} from '../views/deta'
const router = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/deta",
    element: <Deta />
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <Navigate to="/one" />,
      },
      {
        path: "one",
        element: <One />,
      },
      {
        path: "/two",
        element: <Two />,
      },
      {
        path: "/my",
        element: <My />,
      },
     
    ],
  },
];

export default router;