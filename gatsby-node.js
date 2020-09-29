const createPages = require(`./config/createPages.js`);

exports.createPages = async ({actions, graphql}) => {
    await createPages({actions, graphql})
}