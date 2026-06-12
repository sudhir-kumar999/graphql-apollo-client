import { GET_USERS } from './apollo/query';
import { client } from './apollo/apollo';
import type { GetUserQuery } from './types/__generated__/graphql';


export const getUsers=async()=>{
    const {data}=await client.query<GetUserQuery>({
        query:GET_USERS
    })
    console.log(data?.getUser)
    return data?.getUser
}