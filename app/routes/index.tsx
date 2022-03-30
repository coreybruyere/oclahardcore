import { useLoaderData, json } from "remix";
import { GraphQLClient, gql } from "graphql-request";

import { Header } from "../components/Header";
import { ConditionalWrapper } from "../components/ConditionalWrapper";
import { GRAPH_CMS_URL } from "../utils";

const GetShowsQuery = gql`
  {
    shows {
      title
      date
      image {
        url
      }
      link
      info {
        html
      }
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
        <ul className="box-list">
          {data.shows.map(({ title, date, image, link, info }: any) => (
            <li key={title}>
              <ConditionalWrapper
                condition={link}
                wrapper={(children: any) => (
                  <a className="box-link" href={link}>
                    {children}
                  </a>
                )}
              >
                {date && (
                  <div>
                    <time>{date}</time>
                  </div>
                )}
                {title && <h2 className="link u-heading-3 u-m-0">{title}</h2>}

                {info && (
                  <div
                    className="u-last-child-m-0"
                    dangerouslySetInnerHTML={{
                      __html: info.html,
                    }}
                  />
                )}
              </ConditionalWrapper>
            </li>
          ))}
        </ul>
      </main>

      <footer role="contentinfo" className="container">
        <small className="logo">OC/LA Hardcore Shows</small>
      </footer>
    </div>
  );
}
