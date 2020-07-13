import { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';

export const useFetch = (url) => {

    const isMounted = useRef(true);

    useEffect(() => {
        
        return () => {
            isMounted.current = false;
        }
    }, []);


    const [state, setState] = useState({
        data: [],
        loading: true,
        error: null
    });

    useEffect(() => {

        setState({data:[], loading: true, error: null});

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                /*  Con estas líneas de código retrasamos la respuesta del api y se generá un error 
                    en el componente que lo invoca: Can't perform a React state update on an unmounted 
                    component. This is a no-op, but it indicates a memory leak in your application. 
                    To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
                    in MultipleCustomHooks.
                */
                // setTimeout(() => {
                //     if (isMounted.current) {
                //         setState({
                //             data,
                //             loading:false,
                //             error: null
                //         });
                //     } else {
                //         console.log(`isMounted.current: ${isMounted.current}`);
                //     }
                // }, 3000);
                
                if (isMounted.current) {
                    setState({
                        data,
                        loading:false,
                        error: null
                    });
                } 
            })
            .catch( (err) =>{
                setState({
                    data:[],
                    loading:false,
                    error: 'Error al cargar la información: ' + err
                });
            });

    }, [url]);

    return state;
}

useFetch.propTypes = {
    url: PropTypes.string.isRequired
};