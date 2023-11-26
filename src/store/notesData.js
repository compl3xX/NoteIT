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
        date: '11/10/2023',
        time,
        isPinned: true
    },
    {
        title: "123",
        content: "It's not over until I win!!",
        bgColor: 'green',
        priority: 'High',
        tag: [{ tagName: 'quote', id: v4() }],
        id: v4(),
        date: '11/05/2023',
        time,
        isPinned: true
    },
    {
        title: "abc",
        content: "It's not over until I win!!",
        bgColor: 'green',
        priority: 'High',
        tag: [{ tagName: 'work', id: v4() }],
        id: v4(),
        date: '12/12/2023',
        time,
        isPinned: true
    }
]

