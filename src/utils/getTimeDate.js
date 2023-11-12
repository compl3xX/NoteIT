const currentDate = new Date();

const date = currentDate.toLocaleDateString();
const time = currentDate.toLocaleTimeString();


const getTimeDate = () => {
    return (
        { time, date }
    )
}

export default getTimeDate