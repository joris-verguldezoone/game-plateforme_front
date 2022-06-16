import React, { useEffect, useState } from "react";
// import io from "socket.io-client";
import { SOCKET_URL } from "../const"
import { socketIo, SocketContext } from "../scenes/socketContext"
// export const SocketContext = React.createContext();

// const AppStateProvider = props => {



export default function ClientComponent() {
    // const socket = React.useContext(SocketContext);

    const [response, setResponse] = useState("");
    const contextValue = response[1]

    useEffect(() => {
        // const socket = socketIo(SOCKET_URL); // maintain connection 

        socket.on("FromAPI", data => {
            setResponse(data);
            console.log(data)
        });
        return () => socket.disconnect();

    }, []);



    // const emitCreateLobby = () => {
    //     socket.emit('create_lobby', nomLobby);
    // }

    return (
        <>
            {/* <SocketContext.Provider value={contextValue}> */}

            {/* </SocketContext.Provider> */}
            {/* <p>
                It's <time dateTime={response}>{response[0]}</time> the user is : {response[1]}
            </p> */}
        </>
    );
}