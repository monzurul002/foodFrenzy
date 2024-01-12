

const useUserDb = (user) => {

    //user saved in db
    return fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    })
}


export default useUserDb;