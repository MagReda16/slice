import useSWR from "swr";

const fetcher = () => {
  // const res = await fetch(...)
  // if (res.statusCode !== 200) {
  //   if (res.statusCode === 403) {
  //     const error: any = new Error(res.body.message);
  //     error.status = res.statusCode
  //     throw error

  //   }
  // } 
}

const useUser = () => {
  const accessToken = localStorage.getItem('accessToken');
  const {data, error} = useSWR(accessToken ? '/endpont' : null, fetcher)

  if (error && error.status === 403) {
    localStorage.removeItem('accessToken');
  }

  return {
    user: data,
    isLoggedIn: !!data, // coherces to boolean value
    error,

  }
};


export {useUser};