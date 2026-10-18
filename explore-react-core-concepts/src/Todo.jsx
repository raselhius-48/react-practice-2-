

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



//  tupe 2 or system -2
export default function App({ task, isDone }) {
    if (isDone === true) {
        return <li>Finished:{task}</li>
    }
    return <li>work on:{task}</li>
}