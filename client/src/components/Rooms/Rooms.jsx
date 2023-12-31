import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "./Card";
import Container from "../Shared/Container";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";
import { getAllRooms } from "../../api/rooms";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const category = params.get('category');
  useEffect(() => {
    setLoading(true)
    getAllRooms()
      .then(data => {
        if (category) {
          const filtered = data.filter(room => room.category === category)
          setRooms(filtered)
        } else setRooms(data)
        setLoading(false)
      })
  }, [category])
  if (loading) return <Loader />
  return (
    <Container>
      {rooms && rooms.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 pt-12">
        {
          rooms?.map(room => <Card key={room._id} room={room} />)
        }
      </div> : <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
        <Heading
          center={true}
          title='No rooms available in this category!'
          subtitle='Please selected other category'
        />
      </div>}
    </Container >
  );
};

export default Rooms;