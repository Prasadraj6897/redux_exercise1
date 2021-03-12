import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody,  MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css'
import {SayGoodmorningAction, SayGoodAfternoonAction, SayGoodNightAction} from '../redux_folder/action_reducer/wish.action.js'
import {useDispatch, useSelector} from 'react-redux'


let View = () => {
    
    const dispatch = useDispatch()

    let message = useSelector((state) => {
        return state.ReducerMessage;
    })

   let sayGMview = () => {
        dispatch(SayGoodmorningAction())
    }

   let sayGAview = () => {
        dispatch(SayGoodAfternoonAction())
    }

   let sayGNview = () => {
        dispatch(SayGoodNightAction())
    }


  
        return(
            <div>
                <MDBCol>
                    {/* <pre>{JSON.stringify(message.message)}</pre> */}
                    <MDBCard style={{ width: "22rem" }}>
                        
                        <MDBCardBody>
                        <MDBCardTitle>Redux Exercise</MDBCardTitle>
                        <MDBCardText>
                            <h1>Message : {message.message}</h1>
                        </MDBCardText>
                        <MDBBtn rounded gradient="purple" onClick = {sayGMview}>Good Morning</MDBBtn>
                        <MDBBtn rounded gradient="blue" onClick = {sayGAview}>Good Afternoon</MDBBtn>
                        <MDBBtn rounded gradient="aqua" onClick = {sayGNview}>Good Night</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </div>    
            
        )
   
}

export default View;