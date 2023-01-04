import Link from "next/link";
import Image from "next/image";

import styled from "styled-components";

export default function MoviesPage() {
  return (
    <>
      <h1>Movies</h1>
      <StyledImage
        src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80"
        alt=""
        width={300}
        height={300}
      />
      <li>
        <Link href="/movies/hulk">Hulk</Link>
      </li>
      <li>
        <Link href="/movies/thor">Thor</Link>
      </li>
    </>
  );
}

const StyledImage = styled(Image)`
  object-fit: cover;
`;
