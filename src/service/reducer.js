export const  drones = async (options) => {
  const url = 'http://localhost:8080/drones'
  const request = await fetch(url, options)
  const response = await request.json()
  return response;
}

export const videos = async (options) => {
  const url = 'http://localhost:8080/videos/'
  const request = await fetch(url, options)
  const response = await request.json()
  return response;
}

export const entregas = async (options) => {
  const url = 'http://localhost:8080/entregas/'
  const request = await fetch(url, options)
  const response = await request.json()
  return response;
}

export const  deleteDrones = async (options, id) => {
  const url = `http://localhost:8080/drones/${id}`;
  const request = await fetch(url, options)
  const response = await request.json()
  return response;
}

export const  deleteVideos = async (options, id) => {
  const url = `http://localhost:8080/videos/${id}`;
  const request = await fetch(url, options)
  const response = await request.json()
  return response;
}

export const  deleteEntregas = async (options, id) => {
  const url = `http://localhost:8080/entregas/${id}`;
  const request = await fetch(url, options)
  const response = await request.json()
  return response;
}

export const  putStatus = async (options, id, status) => {
  const url = `http://localhost:8080/entregas/${id}/${status}`;
  const request = await fetch(url, options)
  const response = await request.json()
  return response;
}

export const  getEntregasDrone = async (options, id) => {
  const url = `http://localhost:8080/entregas/drones/${id}`;
  const request = await fetch(url, options)
  const response = await request.json()
  return response;
}