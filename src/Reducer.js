import React from 'react'

export const Reducer = (state,action) => {
     if(action.type === 'push'){
        return{
            data:action.payload
        }
     }
}
