export interface TaskInterface {
    id?: number;
    text: string;
    date: string;
    time: string;
    reminder: boolean;
}

export const Tasks: TaskInterface[] = [
    {
        id: 1,
        text: "Doctor's Appointment",
        date: "May 5  2021",
        time: "2:30 pm",
        reminder: true
    },

    {
        id: 2,
        text: "Lawyer's Appointment",
        date: "May 10 2021",
        time: "12:30 pm",
        reminder: true
    }, 

    {
        id: 3,
        text: "Banker's Appointment",
        date: "May 11 2021",
        time: "1:30 pm",
        reminder: true
    }
]