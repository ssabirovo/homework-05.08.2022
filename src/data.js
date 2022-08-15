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
  {
    isActive: false,
    title: "Orders",
    iconURL: ordersIcons,
    path: "/orders",
    children: [
      {
        isActive: false,
        title: faker.word.noun(),
        path: faker.random.numeric(5),
      },
      {
        isActive: false,
        title: faker.word.noun(),
        path: faker.random.numeric(5),
      },
      {
        isActive: false,
        title: faker.word.noun(),
        path: faker.random.numeric(5),
      },
    ],
  },
  {
    isActive: false,
    title: "Schedules",
    iconURL: schedules,
    path: "/schedules",
    children: [
      {
        isActive: false,
        title: faker.word.noun(),
        path: faker.random.numeric(5),
      },
      {
        isActive: false,
        title: faker.word.noun(),
        path: faker.random.numeric(5),
      },
    ],
  },
  {
    isActive: false,
    title: "Messages",
    iconURL: messages,
    path: "/message",
    children: [
      {
        isActive: false,
        title: faker.word.noun(),
        path: faker.random.numeric(5),
      },
      {
        isActive: false,
        title: faker.word.noun(),
        path: faker.random.numeric(5),
      },
      {
        isActive: false,
        title: faker.word.noun(),
        path: faker.random.numeric(5),
      },
    ],
  },
  {
    isActive: false,
    title: "Inbox",
    iconURL: inbox,
    path: "/inbox",
    children: [
      {
        isActive: false,
        title: faker.word.noun(),
        path: faker.random.numeric(5),
      },
    ],
  },
  {
    isActive: false,
    title: "Analytics",
    iconURL: analytics,
    path: "/analytics",
    children: [
      {
        isActive: false,
        title: faker.word.noun(),
        path: faker.random.numeric(5),
      },
      {
        isActive: false,
        title: faker.word.noun(),
        path: faker.random.numeric(5),
      },
      {
        isActive: false,
        title: faker.word.noun(),
        path: faker.random.numeric(5),
      },
      {
        isActive: false,
        title: faker.word.noun(),
        path: faker.random.numeric(5),
      },
    ],
  },
  {
    isActive: false,
    title: "News",
    iconURL: news,
    path: "/news",
    children: [],
  },
  {
    isActive: false,
    title: "Settings",
    iconURL: settings,
    path: "/settings",
    children: [
      {
        isActive: false,
        title: faker.word.noun(),
        path: faker.random.numeric(5),
      },
      {
        isActive: false,
        title: faker.word.noun(),
        path: faker.random.numeric(5),
      },
      {
        isActive: false,
        title: faker.word.noun(),
        path: faker.random.numeric(5),
      },
    ],
  },
];


//muhiddin
export default data;
