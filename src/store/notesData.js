import { v4 } from "uuid";
import { getTimeDate } from "../utils";

const { time, date } = getTimeDate()

console.log(date, time)

export const notesData = [
    {
        title: "Rishu Tiwari",
        content: "It's not over until I win!!",
        bgColor: 'green',
        priority: 'High',
        tag: [{ tagName: 'quote', id: v4() }],
        id: v4(),
        date,
        time,
        isPinned: true
    }
]

