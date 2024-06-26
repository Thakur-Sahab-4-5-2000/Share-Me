// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
import user from "./user";
import pin from "./pin";
import comment from "./comment";
import saveComment from "./save";
import postedBy from "./postedBy";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([user, pin, comment, saveComment, postedBy]),
});
