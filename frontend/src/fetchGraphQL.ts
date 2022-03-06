async function fetchGraphQL(text: string, variables?: string) {
  const response = await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
}

export default fetchGraphQL;