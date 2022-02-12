import argon2 from 'argon2'
import * as cookie from 'cookie'
import {v4 as uuidv4} from 'uuid'
import { getUser } from '$lib/model/userModel'
import type {RequestEvent} from "@sveltejs/kit";

export async function post({locals, params, request}: RequestEvent) {
    const data = await request.json()
    const user = await getUser(data.username)
    if (!user) {
        return {
            status: 409,
            body: {
                message: 'User not found'
            }

        }
    }
    const res = await argon2.verify(user.password, data.password)
    if (res) {
        return {
            status: 200
        }
    }
}