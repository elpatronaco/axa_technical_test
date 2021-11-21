export async function get<T>(pathname: string | null): Promise<T> {
  return await fetch(`${process.env.REACT_APP_BACK_URL}/${pathname ?? ''}`)
    .then(res => {
      if (!res.ok) throw Error(res.statusText)

      return res
    })
    .then(res => res.json())
    .catch(err => {
      throw Error(err)
    })
}
