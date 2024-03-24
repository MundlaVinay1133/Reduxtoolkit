import { useState } from "react"
import { deposit,withdraw,updateName,updateMobile, reset } from "./store"
import { useDispatch, useSelector } from "react-redux"
import { addTransactions } from "./store"

export default function Form(){
    const[amount,setAmount]=useState("")
    const[fullname,setFullName]=useState("")
    const[mobile,setAMobile]=useState("")
     let dispatch=useDispatch()


     let accntName=useSelector((state)=>state.user.fullname
     )

    return(
        <>
        <div className="container">
            <h2>Account Form</h2>
            <div className="row">
                <div className="col-5">
                    <input type="number" className="form-control" placeholder="Enter amount" value={amount} onChange={(e)=>{
                        let data=e.target.value;
                        setAmount(data);
                        }}/>
                </div>
                <button className="btn btn-danger col-3 mx-2"
                onClick={()=>{
                        dispatch(withdraw(amount));
                        dispatch(addTransactions({
                            timestamp:new Date().toISOString(),
                            type:'debit',
                            accountname:accntName,
                            amount:amount,
                        }))
                        setAmount("");
                }}
                
                >Withdraw</button>
                    <button className="btn btn-primary col-3"
                    
                    onClick={()=>{
                        dispatch(deposit(amount));
                        dispatch(addTransactions({
                            timestamp:new Date().toISOString(),
                            type:'credit',
                            accountname:accntName,
                            amount:amount,
                        }))

                        setAmount("");
                }}
                    
                    
                    >deposit</button>

            </div>
            <div className="row mt-2">
                <div className="col-5">
                    <input type="text" className="form-control" placeholder="Enter name" value={fullname} onChange={(e)=>{
                        let data=e.target.value
                        setFullName(data)
                        
                        }}></input>
                </div>
                <button className="btn btn-primary col-3 mx-2"
                 onClick={()=>{
                    dispatch(updateName(fullname));
                    setFullName("");
            }}
                >updatename</button>

            </div>
            <div className="row mt-2">
                <div className="col-6">
                    <input type="number" className="form-control" placeholder="Enter mobile" value={mobile} onChange={(e)=>{
                    let data=e.target.value    
                    setAMobile(data)}}></input>
                </div>
                <button className="btn btn-primary col-4 mx-2 mt-2"
                onClick={()=>{
                    dispatch(updateMobile(mobile));
                    setAMobile("");
            }}
                
                >UpdateNumber</button>

            </div>
            <div className="mt-3">
                <button className="btn btn-danger"
                onClick={()=>{
                    dispatch(reset());
                }}
                >reset</button>
            </div>

        </div>
        </>
    )
}