

// export default function App({ task, isDone }) {
//     return (
//         <li>.Task:{task}</li>
//     )
// }



//  system 1 or type 1
// export default function App({ task, isDone }) {
//     return (
//         // <li>.Task:{task}</li>
//         if (isDone === true) {
//         return <li>finished: {task}</li>
//     }
//     else {
//         return <li>Work on:{task}</li>
//     }
//     )
// }



//  type 2 or system -2
export default function App({ task, isDone }) {
    if (isDone === true) {
        return <li>Finished:{task}</li>
    }
    return <li>work on:{task}</li>
}

// type-3 or conditional rendering 3
export default function Todo({ task, isDone }) {
    return <li>{isDone ? 'finished' : 'work on'}:{task}</li>
}

