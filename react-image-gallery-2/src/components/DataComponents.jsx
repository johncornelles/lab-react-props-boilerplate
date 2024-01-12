import elephant from "../assets/images/elephant.jpeg"
const DataComponent = () => {
    let objs = []
    for (let i = 1; i <=4; i++){
        let y = {
            id: i,
            img: elephant
        }
        objs.push(y)
    }
    return objs
}

export default DataComponent