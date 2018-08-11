const path = require("path");
const _ = require("lodash");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");

let postNodes = [];
const createPaginatedPages = require("gatsby-paginate");

function addSiblingNodes(createNodeField) {
  postNodes = _.filter(postNodes, (node => {
    if (node.frontmatter.templateKey == "comic") {
      return node;
    }
  }));

  console.log("sort");
  postNodes.sort(
    ({ frontmatter: { page: page1 } }, { frontmatter: { page: page2 } }) => {
      //const dateA = moment(date1, siteConfig.dateFromFormat);
      //const dateB = moment(date2, siteConfig.dateFromFormat);
      //if (dateA.isBefore(dateB)) return 1;
      //if (dateB.isBefore(dateA)) return -1;
      return page1-page2;
    }
  );
  console.log("create nodes");
  for (let i = 0; i < postNodes.length; i += 1) {
    let nextID, prevID;
    if (i+1 < postNodes.length) {
      nextID = i+1;
    } else {
      nextID = i;
    }

    if (i-1 >= 0) {
      prevID = i-1;
    } else {
      prevID = i;
    }

    const currNode = postNodes[i];
    const nextNode = postNodes[nextID];
    const prevNode = postNodes[prevID];

    console.log("HEEEEEEEEEEEEEEEEEEEEEEY");
    console.log("Previous Node",prevNode.frontmatter.title);
    console.log("Current Node",currNode.frontmatter.title);
    console.log("Next Node",nextNode.frontmatter.title);

    createNodeField({
      node: currNode,
      name: "nextTitle",
      value: nextNode.frontmatter.title
    });
    createNodeField({
      node: currNode,
      name: "nextSlug",
      value: nextNode.fields.slug
    });
    createNodeField({
      node: currNode,
      name: "prevTitle",
      value: prevNode.frontmatter.title
    });
    createNodeField({
      node: currNode,
      name: "prevSlug",
      value: prevNode.fields.slug
    });
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug"))
        slug = `/${_.kebabCase(node.frontmatter.slug)}`;
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
        const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
        if (!date.isValid)
          console.warn(`WARNING: Invalid date.`, node.frontmatter);

        createNodeField({
          node,
          name: "date",
          value: date.toISOString()
        });
      }
    }
    createNodeField({ node, name: "slug", value: slug });
    postNodes.push(node);
  }
};

exports.setFieldsOnGraphQLNodeType = ({ type, actions }) => {
  const { name} = type;
  const { createNodeField } = actions;
  if (name === "MarkdownRemark") {
    addSiblingNodes(createNodeField);
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postPage = path.resolve("src/templates/post.jsx");
    const tagPage = path.resolve("src/templates/tag.jsx");
    //const categoryPage = path.resolve("src/templates/category.jsx");
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(filter: {
              frontmatter: {templateKey: {in: "comic"}}
            }) {
              edges {
                node {
                  frontmatter {
                    tags
                    templateKey
                    page
                    title
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors);
          reject(result.errors);
        }

        const tagSet = new Set();
        const categorySet = new Set();
        result.data.allMarkdownRemark.edges.forEach(edge => {
          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag);
            });
          }

          /*if (edge.node.frontmatter.category) {
            categorySet.add(edge.node.frontmatter.category);
          }*/

          if (edge.node.frontmatter.templateKey == "comic_winga") { //remove Winga to use Page Numbers as Reference
            console.log("edge", edge);
            let page = edge.node.frontmatter.page
            let number_path = Array(4-String(page).length+1).join('0')+page //Transforms 1 to 0001
            createPage({
              path: number_path,
              component: postPage,
              context: {
                slug: number_path
              }
            });
          } else {
            createPage({
              path: edge.node.fields.slug,
              component: postPage,
              context: {
                slug: edge.node.fields.slug
              }
            });
          }
        });

        const tagList = Array.from(tagSet);
        tagList.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagPage,
            context: {
              tag
            }
          });
        });

        /*const categoryList = Array.from(categorySet);
        categoryList.forEach(category => {
          createPage({
            path: `/categories/${_.kebabCase(category)}/`,
            component: categoryPage,
            context: {
              category
            }
          });
        });*/
      })
    );
  });
};
