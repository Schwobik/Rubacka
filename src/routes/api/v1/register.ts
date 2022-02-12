import argon2 from 'argon2'
import * as cookie from 'cookie'
import {v4 as uuidv4} from 'uuid'
import { getUser, createUser } from '$lib/model/userModel'
import type {RequestEvent} from "@sveltejs/kit";

export async function post({locals, params, request}: RequestEvent) {
    const data = await request.json()
    const userExists = await getUser(data.email)
    if (userExists) {
        return {
            status: 409,
            body: {
                message: 'User already exists'
            }
        }
    }
    const password: string = data.password
    const confirmPassword: string = data.confirmPassword
    if (password != confirmPassword) {
        return {
            status: 409,
            body: {
                message: "Passwords do not match"
            }
        }
    }
    const passwordHash = await argon2.hash(password)
    await createUser(data.username, data.email, passwordHash, data.firstName, data.lastName)

    return {
        status: 201
    }


}