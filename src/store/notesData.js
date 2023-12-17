import { v4 } from "uuid";
import { getTimeDate } from "../utils";

const { time, date } = getTimeDate();

console.log(date, time);

export const notesData = [
  {
    title: "Rishu Tiwari",
    content: "It's not over until I win!!",
    bgColor: "green",
    priority: "High",
    tag: [{ tagName: "quote", id: v4() }],
    id: v4(),
    date: "11/10/2023",
    time,
    isPinned: true,
    isDetailed: false,
  },
  {
    title: "Epictetus",
    content: "First say to yourself what you would be; and then do what you have to do",
    bgColor: "green",
    priority: "Medium",
    tag: [{ tagName: "quote", id: v4() }],
    id: v4(),
    date: "11/05/2023",
    time,
    isPinned: false,
    isDetailed: false,
  },
  {
    title: "Frontend",
    content: "Vanilla Js -> ReactJs -> NextJs",
    bgColor: "green",
    priority: "Low",
    tag: [{ tagName: "work", id: v4() }],
    id: v4(),
    date: "12/12/2023",
    time,
    isPinned: true,
    isDetailed: false,
  },
];
