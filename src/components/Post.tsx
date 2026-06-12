import { useMutation, useQuery } from "@apollo/client/react";
import React, { useState } from "react";
import type { CreatePostMutation, DeletePostMutation, GetPostDataQuery, LogoutUserMutation, UpdatePostMutation } from "../types/__generated__/graphql";
import { DELETE_POST, LOGOUT_USER, POSTDATA, UPDATE_POST } from '../apollo/mutation';
import { GET_POSTS } from "../apollo/query";
import { client } from "../apollo/apollo";

const Post = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [slug, setSlug] = useState("");
  const [edit,setEdit]=useState(false)
  const [postId,setPostId]=useState("")
// console.log("first")
  const [createUser] = useMutation<CreatePostMutation>(POSTDATA);
    const [deletePost]=useMutation<DeletePostMutation>(DELETE_POST)
    const [logoutUser] =useMutation<LogoutUserMutation>(LOGOUT_USER)
  const { data, error, refetch,loading } = useQuery<GetPostDataQuery>(GET_POSTS);
  console.log(data);
  const [updatePost]=useMutation<UpdatePostMutation>(UPDATE_POST)
  if(loading){
    return <p>loading...</p>
  }
  if(error){
    console.log(error)
  }


  async function handleDelete(ele){
const ress=await deletePost({
variables:{
    id:ele.id
}})
console.log(ress)
refetch()
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if(edit){
const resp=await updatePost({
        variables:{
            id:postId,
            input:{
            title:title,
            content:content,
            slug:slug
            }
        }
    })
    console.log(resp)
    }else{
    await createUser({
      variables: {
        input: {
          title,
          content,
          slug,
        },
      },
    });
}
    console.log(data);
    setContent("")
    setTitle("")
    setSlug("")
    refetch()
  }

  async function handleUpdate(ele){
    setContent(ele.content)
    setTitle(ele.title)
    setSlug(ele.slug)
    setEdit(true)
    setPostId(ele.id)
    // const resp=await updatePost({
    //     variables:{
    //         id:ele.id,
    //         input:{
    //         title:ele.title,
    //         content:ele.content,
    //         slug:ele.slug
    //         }
    //     }
    // })
    // console.log(resp)
    
  }

  async function handleLogout(){
    const res=await logoutUser()
      console.log(res)
      await client.clearStore()
    window.location.href="/login"
  }

  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter name"
        />
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter name"
        />
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="Enter name"
        />
        <button type="submit">Submit</button>
      </form>

      <div>{data?.getPostData &&
        
        data.getPostData.posts?.map((ele)=>(
            <div>
                <h2>{ele?.title}</h2>
                <button onClick={()=>handleUpdate(ele)}>update</button>
                <button onClick={()=>handleDelete(ele)}>Delete</button>

            </div>
        ))}
      </div>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Post;
