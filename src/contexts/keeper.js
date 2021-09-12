import React, { useState, useEffect, createContext, useContext } from "react"
import { API_SERVER } from "../config";

const DataKeeper = createContext();

export function DataProvider({ children }) {
    const [data, setData] = useState()

    return (
        <DataKeeper.Provider value={{setData, data}}>
            {children}
        </DataKeeper.Provider>
    )
}

export function useDataConsumer() {
    return useContext(DataKeeper)
}