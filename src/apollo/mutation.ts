import { gql } from "@apollo/client";

export const SIGNUP=gql`
mutation createUser($input:userInput!){
    createUser(input:$input){
        success
        message
        user{
            name
            email
            password
        }
    }
}`

export const LOGIN=gql`
mutation loginUser($input:inputLogin!){
    loginUser(input:$input){
        success
        message
        userDetails{
            id
            email
        }
    }
}
`

export const POSTDATA=gql`
mutation createPost($input:postInput!){
    createPost(input:$input){
        success
        message
        posts{
        id
        title
        content
        slug
        }
    }
}
`

export const UPDATE_POST=gql`
mutation updatePost($id:ID!,$input:inputPost){
    updatePost(id:$id,input:$input){
        title,
        id,
        content,
        slug
    }
}
`

export const DELETE_POST=gql`
mutation deletePost($id:ID!){
    deletePost(id:$id){
        message
    }
}
`

export const LOGOUT_USER=gql`
mutation logoutUser{
    logoutUser{
        message
    }
}
`