"use client";

import { FormEvent, useState } from "react";
import { IPost } from "@/types/post";

type PostsResponse = {
  posts: IPost[];
  total: number;
  skip: number;
  limit: number;
};

export default function PageForm() {
  const [userId, setUserId] = useState("");
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const id = Number(userId);
    if (!Number.isInteger(id) || id < 1) {
      setError("Digite um ID válido.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://dummyjson.com/posts/user/${id}`
      );

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data: PostsResponse = await response.json();
      setPosts(data.posts);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Ocorreu um erro.");
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-5 flex w-3xs flex-col gap-2"
      >
        <label htmlFor="userId">User ID</label>

        <input
          type="number"
          name="userId"
          id="userId"
          placeholder="Digite o ID do usuário"
          className="bg-white text-black"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />

        <button type="submit" className="bg-sky-500" disabled={loading}>
          {loading ? "Buscando..." : "Buscar usuário"}
        </button>
      </form>

      {error && <p>{error}</p>}

      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}
