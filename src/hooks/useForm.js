import { useState } from "react"

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);


    const reset = () => {
      setValues(initialState);
    };

    /* Esta función esta ligada a un handleSubmit (e).
      {target} = e
    */
    const handleInputChange = ({ target }) => {
        setValues({
          ...values,
          [target.name]: target.value
        });
      }
      
    return [values, handleInputChange, reset];

}
