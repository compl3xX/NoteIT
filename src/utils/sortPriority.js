const priorityMapping = {
    Low: 1,
    Medium: 2,
    High: 3,
};

const filterPriority = ({ notes, type }) => {

    const filteredNotes = [...notes]

    filteredNotes.sort((a, b) => {

        const notePriorityA = priorityMapping[a.priority];

        const notePriorityB = priorityMapping[b.priority];

        if (type === 'lowToHigh') {
            return notePriorityA - notePriorityB;
        } else if (type === 'highToLow') {
            return notePriorityB - notePriorityA;
        } else {
            return 0;
        }
    });


    return filteredNotes
}

export default filterPriority