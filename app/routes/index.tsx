import { useLoaderData, json } from "remix";
import { GraphQLClient, gql } from "graphql-request";

import { Header } from "../components/Header";
import { GRAPH_CMS_URL } from "../utils";

const GetShowsQuery = gql`
  {
    shows {
      title
    }
  }
`;

export let loader = async () => {
  const graphcms = new GraphQLClient(GRAPH_CMS_URL);

  const { shows } = await graphcms.request(GetShowsQuery);

  return json({ shows });
};

export default function Index() {
  const data = useLoaderData();

  return (
    <div role="document">
      <Header />

      <main role="main" className="container">
        <ul>
          {data.shows.map(({ title }: any) => (
            <li key={title}>
              <a>{title}</a>
            </li>
          ))}
        </ul>
      </main>

      <footer role="contentinfo" className="container">
        <small>OC/LA Hardcore!</small>
      </footer>
    </div>
  );
}
