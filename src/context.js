import React from 'react';
import {useContext, useEffect, useReducer} from 'react';
import reducer from './reducer';
// create context
const AppContext = React.createContext();

let API = "https://hn.algolia.com/api/v1/search?";

let initialState = {
    isLoading : true,
    page : 0,
    nbPages : 0,
    query : "",
    hits : []
}

// data provider
const AppProvider = ({children}) => { //app ka saar data children mai agaya

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchApiData = async(URL) => {
        try{
            const response = await fetch(URL); // returns a promise
            const data = await response.json();
            console.log(data);
            dispatch({type : "GET_STORIES",
                payload : {
                    hits : data.hits,
                    nbPages : data.nbPages,
                    page : data.page
                }
            });
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query, state.page]);

    const removePost = (objectID) => {
        dispatch({
            type : "REMOVE_POST",
            payload : {
                objectID : objectID
            }
        })
    }

    // search functionality
    const searchPost = (query) => {
        dispatch({
            type : "SEARCH_POST",
            payload : query
        })
    }

    //prev page
    const prevPage = () => {
        if(state.page !== 0){
            // we can go to prev page
            dispatch({
                type : "PREV_PAGE"
            })
        }
    }

    // next page
    const nextPage = () =>{
        if(state.page === state.nbPages - 1){
            return;
        }
        dispatch({
            type : "NEXT_PAGE"
        })
    }

    return (
        //we can use suzaan khan data anywhere now  
        <AppContext.Provider value={{ ...state , removePost, searchPost, prevPage, nextPage }}> 
            {children}
        </AppContext.Provider>
    )
}
// custom hook creation

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};