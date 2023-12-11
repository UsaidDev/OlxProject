import React, { createContext, useState } from 'react'
import Signup from '../Components/Signup/Signup'

const NameContext = createContext('')
function AuthContext() {
    const [state, Setstate] = useState('This IS Context')
    return (
        <div>
            <NameContext.Provider value={{ state }}>
                <Signup />
            </NameContext.Provider>
        </div>
    )
}

export default AuthContext
