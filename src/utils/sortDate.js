
const filterDate = ({ notes, type }) => {

    const notesCopy = [...notes];

    notesCopy.sort((a, b) => {

        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (type === 'lowToHigh') {
            return dateA - dateB;
        } else if (type === 'highToLow') {
            return dateB - dateA;
        } else {
            return 0;
        }
    });


    return notesCopy
}



export default filterDate