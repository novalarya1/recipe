const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'tasty-recipe',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createNewRecipeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewRecipe', inputVars);
}
createNewRecipeRef.operationName = 'CreateNewRecipe';
exports.createNewRecipeRef = createNewRecipeRef;

exports.createNewRecipe = function createNewRecipe(dcOrVars, vars) {
  return executeMutation(createNewRecipeRef(dcOrVars, vars));
};

const getPublicRecipesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetPublicRecipes');
}
getPublicRecipesRef.operationName = 'GetPublicRecipes';
exports.getPublicRecipesRef = getPublicRecipesRef;

exports.getPublicRecipes = function getPublicRecipes(dc) {
  return executeQuery(getPublicRecipesRef(dc));
};

const addCommentToRecipeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddCommentToRecipe', inputVars);
}
addCommentToRecipeRef.operationName = 'AddCommentToRecipe';
exports.addCommentToRecipeRef = addCommentToRecipeRef;

exports.addCommentToRecipe = function addCommentToRecipe(dcOrVars, vars) {
  return executeMutation(addCommentToRecipeRef(dcOrVars, vars));
};

const getMyRecipesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyRecipes');
}
getMyRecipesRef.operationName = 'GetMyRecipes';
exports.getMyRecipesRef = getMyRecipesRef;

exports.getMyRecipes = function getMyRecipes(dc) {
  return executeQuery(getMyRecipesRef(dc));
};
