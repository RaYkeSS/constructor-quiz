import {useQuery} from "@apollo/client";
import {useEffect} from "react";

import {User, GET_USER} from '../model/'

const UserCard = () => {
    const { loading, error, data } = useQuery(GET_USER, {
        variables: { id: 1}
    });


    useEffect(() => {
        console.log(data)
        console.log(loading)
        console.log(error)
    }, [])
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    return (
        <>
            <h1>123</h1>
            {data?.user && data.user as User}
        </>
    )
}

export default UserCard;