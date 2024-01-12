import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProviders";

const useCart = () => {

    const { user } = useContext(AuthContext)

    const { data: cart = [], refetch } = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async () => {
            const res = await fetch(`https://food-frenzy-server-delta.vercel.app/cart/${user?.email}`)
            return res.json()

        }
    })

    return { cart, refetch }
};

export default useCart;