import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    // tanstack query
    const {data: payments = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        },
        
    })

    return (
        <div>
            <h2 className="text-xl">Total payment: {payments.length}</h2>
            <div>
                <div className="overflow-x-auto mt-5">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className='bg-[#D1A054] text-white '>
                            <tr className="text-base">
                                <th></th>
                                <th>price</th>
                                <th>Transaction Id</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            payments.map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>{payment.price}</td>
                                <td>{payment.transactionId}</td>
                                <td>{payment.status}</td>
                              </tr>)
                        }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;