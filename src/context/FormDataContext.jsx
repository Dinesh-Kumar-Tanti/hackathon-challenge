import React, { createContext, useState} from 'react';
import { getData } from '../utils/dataStore';

export const formDataContext = createContext();

export const FormDataProvider = ({ children }) => {    

    // const [formData, setFormData] = useState([])
    const [formData, setFormData] = useState(getData())
    const [filterData, setFilterData] = useState(formData)
    
    return (
        <formDataContext.Provider value={[formData, setFormData]}>
            {children}
        </formDataContext.Provider>
    );
}
