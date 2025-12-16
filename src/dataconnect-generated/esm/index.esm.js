import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'tasty-recipe',
  location: 'us-east4'
};

export const createNewRecipeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewRecipe', inputVars);
}
createNewRecipeRef.operationName = 'CreateNewRecipe';

export function createNewRecipe(dcOrVars, vars) {
  return executeMutation(createNewRecipeRef(dcOrVars, vars));
}

export const getPublicRecipesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetPublicRecipes');
}
getPublicRecipesRef.operationName = 'GetPublicRecipes';

export function getPublicRecipes(dc) {
  return executeQuery(getPublicRecipesRef(dc));
}

export const addCommentToRecipeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddCommentToRecipe', inputVars);
}
addCommentToRecipeRef.operationName = 'AddCommentToRecipe';

export function addCommentToRecipe(dcOrVars, vars) {
  return executeMutation(addCommentToRecipeRef(dcOrVars, vars));
}

export const getMyRecipesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyRecipes');
}
getMyRecipesRef.operationName = 'GetMyRecipes';

export function getMyRecipes(dc) {
  return executeQuery(getMyRecipesRef(dc));
}

