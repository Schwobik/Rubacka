import argon2 from 'argon2'
import * as cookie from 'cookie'
import {v4 as uuidv4} from 'uuid'
import { modelUsers } from '$lib/../../lib/model/db'

export async function post({body}) {
    const user = await modelUsers.findOne({username: body.username})
    if (!user) {
        return {
            status: 409,
            body: {
                message: 'User not found'
            }

        }
    }
}

