import Title from "../ui/Title";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddReserve = () => {
  const [isReservationModal, setIsReservationModal] = useState(false);
  const [reservations, setReservations] = useState([]);

  const getReservations = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/reservation`
      );
      setReservations(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReservations();
  }, []);
  const handleDelete = async (id) => {
    try {
      if (confirm("Are you sure you want to delete this product?")) {
        const res = await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/reservation/${id}`
        );
        if (res.status === 200) {
          toast.success("Product deleted successfully");
          getReservations();
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="lg:p-8 flex-1 lg:mt-0 relative min-h-[400px]  lg:max-w-[70%] xl:max-w-none flex flex-col justify-center">
      <Title addClass="text-[40px]">Reservations</Title>
      <div className="overflow-x-auto w-full mt-5 max-h-[500px] overflow-auto">
        <table className="w-full text-sm text-center text-gray-400 xl:min-w-[1000px]">
          <thead className="text-xs text-gray-200 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                Full Name
              </th>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3">
                Phone Number
              </th>
              <th scope="col" className="py-3 px-6">
                People
              </th>
              <th scope="col" className="py-3 px-6">
                Date and Time
              </th>
              <th scope="col" className="py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {reservations &&
              reservations.map((reservation) => (
                <tr
                  className="transition-all bg-secondary border-gray-700 hover:bg-violet-900"
                  key={reservation._id}
                >
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {reservation.fullName}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {/* <Image src={re.img} alt="" width={50} height={50} /> */}
                    {reservation._id.substring(0, 5)}...
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {reservation.phoneNumber}
                  </td>
                  <td className="py-4 font-medium whitespace-nowrap hover:text-white">
                    {reservation.persons}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {reservation.dateTime}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    <button
                      className="btn-primary !bg-danger"
                      onClick={() => handleDelete(reservation._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddReserve;
