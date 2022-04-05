// code your solution here
let winYear = record => record.result === "W"

let superbowlWin = (record) => {
    const result = record.find(winYear)
    return !!result ? result.year : undefined;
}