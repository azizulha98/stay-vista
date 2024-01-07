import axiosSecure from "."

//get all rooms get in de
export const getAllRooms = async () => {
  const { data } = await axiosSecure('/rooms')
  return data
}
//get single room get in de
export const getRoom = async id => {
  const { data } = await axiosSecure(`/room/${id}`)
  return data
}

//saves room data in db
export const addRoom = async roomData => {
  const { data } = await axiosSecure.post('/rooms', roomData)
  return data
}