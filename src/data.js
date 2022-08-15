import { faker } from "@faker-js/faker";

import {
  analytics,
  dashboardIcon,
  inbox,
  messages,
  news,
  ordersIcons,
  schedules,
  settings,
} from "./components/icons/index";
const data = [
  {
    isActive: true,
    title: "Dashboard",
    iconURL: dashboardIcon,
    path: "/dashboard",
    children: [
      {
        isActive: false,
        title: faker.vehicle.manufacturer(),
        path: faker.random.numeric(5),
      },
      {
        isActive: false,
        title: faker.vehicle.manufacturer(),
        path: faker.random.numeric(5),
      },
      {
        isActive: false,
        title: faker.vehicle.manufacturer(),
        path: faker.random.numeric(5),
      },
    ],
  },
  { isActive: false, title: "Orders", iconURL: ordersIcons },
  { isActive: false, title: "Schedules", iconURL: schedules },
  { isActive: false, title: "Messages", iconURL: messages },
  { isActive: false, title: "Inbox", iconURL: inbox },
  { isActive: false, title: "Analytics", iconURL: analytics },
  { isActive: false, title: "News", iconURL: news },
  { isActive: false, title: "Settings", iconURL: settings },
];


//muhiddin
export default data;
