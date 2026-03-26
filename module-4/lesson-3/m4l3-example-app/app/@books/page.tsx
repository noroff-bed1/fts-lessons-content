interface Book {
  id: number;
  title: string;
}
 
export default async function FriendsPage() {
  const res = await fetch("https://v2.api.noroff.dev/books", {
    next: { revalidate: 60 },
  });
 
  if (!res.ok) throw new Error(`Failed to fetch books: ${res.status}`);
 
  const books = await res.json();
 
  return (
    <ul className="card-list">
      {books.data.map((book: Book, i: number) => (
        <li
          key={book.id}        >
          <p className="card-title">{book.title}</p>
        </li>
      ))}
    </ul>
  );
}