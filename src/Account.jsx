import React from "react";
import { useSelector } from "react-redux";

export default function Account() {
    let data = useSelector((state)=>{
    //    console.log(state);
       return state;
    });
   

    return (
        <div className="container">
            <h2 className="text-primary">Account Details</h2>
            <table className="table table-bordered w-70">
                <thead>
                    <tr>
                        <th>Balance</th>
                        <th>Full Name</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.user.balance}</td>
                        <td>{data.user.fullname}</td>
                        <td>{data.user.mobile}</td>
                    </tr>
                </tbody>
            </table>
            <h2 className="text-primary">Transaction Details</h2>
            <table className="table table-bordered w-70 col-5">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Timestamp</th>
                        <th>amount</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    data.transaction.map(
                        (tr)=>
                        (
                            <tr>
                                <td>{tr.type}</td>
                                <td>{tr.timestamp}</td>
                                <td>{tr.amount}</td>
                            </tr>
                        )
                    )

                  }
                </tbody>
            </table>
        </div>
    );
}
