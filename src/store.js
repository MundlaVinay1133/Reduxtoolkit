import { createSlice,configureStore} from "@reduxjs/toolkit";
const state={
   balance:0,
   fullname:"",
   mobile:null 
};
const transactions=[]
const userSlice=createSlice({
    name: 'user',
    initialState:state,
    reducers:{ 
        updateMobile:(state,action)=>{
            state.mobile=action.payload
        },
        updateName:(state,action)=>{
            state.fullname=action.payload
        },
        withdraw:(state,action)=>{
            state.balance-=action.payload
        },
        deposit:(state,action)=>{
            state.balance=state.balance+ +action.payload
        },
        reset:(state)=>{
           state.balance=0,
           state.mobile="",
           state.fullname=""
        }
    }
    });
const transitionSlice=createSlice({
    name: 'transaction',
    initialState:transactions,
    reducers:{ 
      addTransactions:(state,action)=>{
        state.push(action.payload)
      }
    }
    });
    console.log(userSlice)
    const store=configureStore({
        reducer:{
            user:userSlice.reducer,
            transaction:transitionSlice.reducer
        }
    })
    export default store;
    export const{updateMobile,updateName,withdraw,deposit,reset}=userSlice.actions
    export const{addTransactions}=transitionSlice.actions
