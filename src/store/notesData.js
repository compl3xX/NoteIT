import { v4 } from "uuid";

const currentDate = new Date();

const date=currentDate.toLocaleDateString();
const time=currentDate.toLocaleTimeString();

console.log(date,time)

export const notesData = [
    {
        title: "Rishu Tiwari",
        content: "It's not over until I win!!",
        bgColor: 'green',
        priority: 'high',
        tag: 'quote',
        id: v4(),
        date,
        time,
        isPinned:true
    }
]

