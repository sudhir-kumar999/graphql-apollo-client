/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type InputLogin = {
  email: string;
  password: string;
};

export type InputPost = {
  content?: string | null | undefined;
  slug?: string | null | undefined;
  title?: string | null | undefined;
};

export type PostInput = {
  content?: string | null | undefined;
  slug?: string | null | undefined;
  title?: string | null | undefined;
};

export type UserInput = {
  email: string;
  name: string;
  password?: string | null | undefined;
};

export type CreateUserMutationVariables = Exact<{
  input: UserInput;
}>;


export type CreateUserMutation = { createUser: { __typename: 'UserRes2', success: boolean | null, message: string | null, user: { __typename: 'User', name: string, email: string, password: string | null } | null } };

export type LoginUserMutationVariables = Exact<{
  input: InputLogin;
}>;


export type LoginUserMutation = { loginUser: { __typename: 'loginRes', success: boolean | null, message: string | null, userDetails: { __typename: 'loginOutput', id: string | null, email: string | null } | null } | null };

export type CreatePostMutationVariables = Exact<{
  input: PostInput;
}>;


export type CreatePostMutation = { createPost: { __typename: 'postRes', success: boolean | null, message: string | null, posts: Array<{ __typename: 'postData', id: string | null, title: string | null, content: string | null, slug: string | null } | null> | null } | null };

export type UpdatePostMutationVariables = Exact<{
  id: string | number;
  input?: InputPost | null | undefined;
}>;


export type UpdatePostMutation = { updatePost: { __typename: 'outputPost', title: string | null, id: string | null, content: string | null, slug: string | null } | null };

export type DeletePostMutationVariables = Exact<{
  id: string | number;
}>;


export type DeletePostMutation = { deletePost: { __typename: 'deleteRes', message: string | null } | null };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { logoutUser: { __typename: 'logoutRes', message: string | null } };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { getUser: { __typename: 'UserRes', success: boolean | null, message: string | null, user: Array<{ __typename: 'User', name: string, id: string, email: string } | null> | null } };

export type GetPostDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostDataQuery = { getPostData: { __typename: 'postRes', success: boolean | null, message: string | null, posts: Array<{ __typename: 'postData', id: string | null, title: string | null, content: string | null, slug: string | null } | null> | null } | null };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { getMe: { __typename: 'getMe', id: string | null, name: string | null, email: string | null } | null };
