// const events_db = ["123",112333333];
import userJson from "./user.json"
import { v1 as uuidv1 } from 'uuid';
console.log(userJson)

interface User{
  id: string;
  username: string;
  email: string;
  phone_number: string;
  password: string;
  personal_number: string;
  first_name: string;
  last_name: string;
  birth_date: string;
  nick_name: string;
  gender_id: string;
  culture_id: string;
  role_id: string;
  department_id: string;
  group_id: string;
  avatar: string;
}

// npm i @types/uuid

export const getUser = (ctx: { body?: any; status: number; }) => {
  ctx.body = userJson;
  ctx.status = 200;
};

export const addUser = (ctx: { request: {  body?: any; }; body: User[]; status: number;  }) => {
  let user = {
    id: uuidv1(),
    ...ctx.request.body
  };
  userJson.Users.push(user);
  ctx.body = userJson.Users;
  ctx.status = 201;
};


export const deleteUser = ((ctx: { params: { id?: string; }; body: User[]; status: number; message: string; }) =>{
  userJson.Users = userJson.Users.filter(item => item.id !== ctx.params.id)
  ctx.body =  userJson.Users
  ctx.status =201
  ctx.message = 'user deleted'

})


export const update_user = (ctx: {
  params: { id?: string };
  request?: {
    body?: User;
  };
  body:any;
  status: number;
  message: string;
}) => {
 let testUserArray: any[] = []

 
 userJson.Users.forEach((person:any) => {
    if(person.id === ctx.params.id) {
      person = ctx.request?.body
    }
    testUserArray.push(person)
  })
  userJson.Users = testUserArray
  ctx.body = userJson.Users
  ctx.status = 204
ctx.message = 'deleted successfuly'
  console.log(testUserArray, "<<<<<<<<<<<testuser")
};