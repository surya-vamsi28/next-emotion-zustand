export async function getData(usertype: string) {
  "use server";
  
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  const headersValue = new Headers({'user-type': usertype})
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "GET",
    headers: headersValue
  });
  const data = await res.json();
  return data;
}
