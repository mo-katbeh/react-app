import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () =>{
const [users, setUsers] = useState<User[]>([]);
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAll<User>();
    request
        .then((res) => {
        setUsers(res.data);
        setLoading(false);
        })
        .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
        });
    // .finally(() => setLoading(false)); //it's work just in production mode
    return () => cancel();
}, []);
return {users, error, loading, setUsers, setError}
}

export default useUsers;