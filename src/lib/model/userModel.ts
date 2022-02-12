import {HydratedDocument, model, QueryWithHelpers, Schema} from "mongoose"
import argon2 from "argon2"
import * as assert from "assert"
import type {EndpointOutput} from "@sveltejs/kit"

interface User {
    firstName: string
    lastName: string
    email: string
    password: string
    username: string
}

const userSchema = new Schema<User>({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    username: {type: String, required: true}
})

export const userModel = model<User>('User', userSchema)

export const createUser = async (
    username: string,
    email: string,
    passwordHash: string,
    firstName: string,
    lastName: string
): Promise<void> => {
    const user = new userModel({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: passwordHash,
        username: username
    })
    await user.save().catch((err) => console.error(err)).then(() => console.log("user created"))
}

export function getUser(email: string) {
    return userModel.findOne({email: email})
}

