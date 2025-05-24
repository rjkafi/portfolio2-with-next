import Error from "@/app/posts/error";


export default async function getAllPosts() {
    const result= await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    if(! result.ok){
        throw new Error("there was an error fetching Posts")
    }

  return result.json();
}
