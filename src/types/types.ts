type User= {
  name: string
  id:string
  email: string
}

type UserRes={
    success:boolean
    message:string,
    user:User[]
}

export interface getUserRes{
    getUser:UserRes
}