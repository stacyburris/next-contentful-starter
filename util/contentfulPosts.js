// pulling in API keys
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

// making contentful client
const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});

// making a fetchEntries function that calls `client.getEntries` from contentful
export async function fetchEntries() {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
  console.log(`Error fetching entries for ${contentType.name}`);
}

// exporting the fetchEntries function to use in a getStaticProps function
export default { fetchEntries };
