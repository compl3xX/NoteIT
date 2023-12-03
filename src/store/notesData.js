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
    title: "123",
    content: "It's not over until I win!!",
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
    title: "abc",
    content: "It's not over until I win!!",
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
