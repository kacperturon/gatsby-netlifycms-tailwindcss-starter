import * as React from 'react';

const IndexPage = ({ data }) => {
  const blogPosts = data.allMarkdownRemark.edges;
  return (
    <ul>
      {blogPosts.map((post) => {
        const { path, date, title } = post.node.frontmatter;
        return (
          <li className="flex justify-between">
            <a href={`/${path}`}>
              {title}
            </a>
            <p>
              {date}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default IndexPage;

export const pageQuery = graphql`
{
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    limit: 1000
  ) {
    edges {
      node {
        frontmatter {
          path
          date
          title
        }
      }
    }
  }
}
`;
