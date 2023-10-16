import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts";

// agar mengetahui struktur json menggunakan TS
interface id_posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const About = async () => {
  // ini untuk melakakan fetch data api
  const response = await fetch(base_url,{
    // membuat server menjadi dinamis ketika ada suatu perubahan didalam website secara runtime menggunakan cache
    cache: 'no-store',
    // membuat server menjadi dinamis ketika ada suatu perubahan tertentu dalam kurun waktu yang ditentukan menggunakan next
    // next: {revalidate: 60}
  });
  // : id_posts[] untuk memberitahukan bahwa isi didalam posts tidak bisa diluar dari seed atau struktur
  const posts: id_posts[] = await response.json();
  // sampai sini untuk ngefetch api
  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">Testing about page</h1>
      {/* ini untuk memecah kumpulan api (posts) menjadi single (post) */}
      {posts.map((post) => {
        return (
          <CardList key={post.id}>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <ViewUserButton userId={post.userId} />
          </CardList>
        );
      })}
    </>
  );
};

export default About;
