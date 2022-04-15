import React from 'react'
import '../screens/styles/worker.css'
import {CgProfile} from "react-icons/cg";

function WorkerCard() {
  return (
    <div class="container workercard_container mt-5 d-flex justify-content-left">
    {/* <div class="card worker_card p-3"> */}
    <div class="image"> <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" class="rounded wimage" width="110"/> </div>
             <div class="ml-3">
                <h4 class="mb-0 mt-0 ctext">Sarat Ahmad</h4>
                <p class="mb-0 card__sender__rating card__sender__rating-4">
                    <span class="card__sender__rating__star">&#9733;</span>
                    <span class="card__sender__rating__star">&#9733;</span>
                    <span class="card__sender__rating__star">&#9733;</span>
                    <span class="card__sender__rating__star">&#9733;</span>
                    <span class="card__sender__rating__star">&#9733;</span>
                  </p>
                <div class="p-2 mt-auto mb-auto bg-primary d-flex justify-content-between rounded text-white stats">
                    <div class="d-flex flex-column"> <span class="articles">Price Range: </span> <span class="number1">Rs 145-200</span> </div>
                </div>
                <div class="button mt-0 d-flex flex-row align-items-center"> 
                <button class="btn  workercard_button btn-sm btn-outline-primary mr-3">Request</button> 
                <button class="btn workercard_button2 btn-sm btn-primary  ml-3">View Profile</button> </div>
            </div>
        </div>
//   </div>
// </div>
    )
}

export default WorkerCard