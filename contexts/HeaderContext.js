import { createContext, useState } from "react"

export const HeaderContext = createContext(null)

const HeaderProvider = ({children}) => {
    const [menuHeight, setMenuHeight] = useState(0);

    return (
        <HeaderContext.Provider value={{menuHeight, setMenuHeight}}>
            {children}
        </HeaderContext.Provider>
    )
}

export default HeaderProvider