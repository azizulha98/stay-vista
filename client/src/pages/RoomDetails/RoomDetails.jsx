// import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import { useLoaderData } from 'react-router-dom';
// import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RomeDetails/Header";
import RoomInfo from "../../components/RomeDetails/RoomInfo";
import RoomReservation from "../../components/RomeDetails/RoomReservation";


const RoomDetails = () => {
  const room = useLoaderData()
  // const { id } = useParams();
  // const [room, setRoom] = useState({});
  // const [params, setParams] = useSearchParams();
  // const [loading, setLoading] = useState(false);
  // const category = params.get('category');
  // useEffect(() => {
  //   setLoading(true)
  //   fetch('/rooms.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       const singleRoom = data.find(room => room._id === id)
  //       setRoom(singleRoom)
  //       setLoading(false)
  //     })
  // }, [id])
  // if (loading) return <Loader />

  return (
    <Container>
      <Helmet><title>{room?.title}</title></Helmet>
      <section className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          {/* header  */}
          <Header room={room} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-8">
          <RoomInfo room={room} />
          <div className="md:col-span-3 order-first md:order-last">
            <RoomReservation room={room} />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default RoomDetails;