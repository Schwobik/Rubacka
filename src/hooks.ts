import {connect} from "mongoose"

async function connectToDatabase() {
    return await connect('mongodb://localhost:27017/Rubacka')
}

connectToDatabase().catch(reason => console.error(reason)).then(() => console.log("connected to db"))
