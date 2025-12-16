import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddCommentToRecipeData {
  comment_insert: Comment_Key;
}

export interface AddCommentToRecipeVariables {
  recipeId: UUIDString;
  text: string;
}

export interface Comment_Key {
  id: UUIDString;
  __typename?: 'Comment_Key';
}

export interface CreateNewRecipeData {
  recipe_insert: Recipe_Key;
}

export interface CreateNewRecipeVariables {
  title: string;
  cuisine: string;
  instructions: string;
  mealType: string;
  isPublic: boolean;
  description?: string | null;
  imageUrl?: string | null;
  cookTime?: number | null;
  prepTime?: number | null;
  servings?: number | null;
}

export interface GetMyRecipesData {
  recipes: ({
    id: UUIDString;
    title: string;
    cuisine: string;
    imageUrl?: string | null;
  } & Recipe_Key)[];
}

export interface GetPublicRecipesData {
  recipes: ({
    id: UUIDString;
    title: string;
    cuisine: string;
    imageUrl?: string | null;
  } & Recipe_Key)[];
}

export interface Ingredient_Key {
  id: UUIDString;
  __typename?: 'Ingredient_Key';
}

export interface Rating_Key {
  id: UUIDString;
  __typename?: 'Rating_Key';
}

export interface Recipe_Key {
  id: UUIDString;
  __typename?: 'Recipe_Key';
}

export interface SavedRecipe_Key {
  userId: UUIDString;
  recipeId: UUIDString;
  __typename?: 'SavedRecipe_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateNewRecipeRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewRecipeVariables): MutationRef<CreateNewRecipeData, CreateNewRecipeVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewRecipeVariables): MutationRef<CreateNewRecipeData, CreateNewRecipeVariables>;
  operationName: string;
}
export const createNewRecipeRef: CreateNewRecipeRef;

export function createNewRecipe(vars: CreateNewRecipeVariables): MutationPromise<CreateNewRecipeData, CreateNewRecipeVariables>;
export function createNewRecipe(dc: DataConnect, vars: CreateNewRecipeVariables): MutationPromise<CreateNewRecipeData, CreateNewRecipeVariables>;

interface GetPublicRecipesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetPublicRecipesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetPublicRecipesData, undefined>;
  operationName: string;
}
export const getPublicRecipesRef: GetPublicRecipesRef;

export function getPublicRecipes(): QueryPromise<GetPublicRecipesData, undefined>;
export function getPublicRecipes(dc: DataConnect): QueryPromise<GetPublicRecipesData, undefined>;

interface AddCommentToRecipeRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddCommentToRecipeVariables): MutationRef<AddCommentToRecipeData, AddCommentToRecipeVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddCommentToRecipeVariables): MutationRef<AddCommentToRecipeData, AddCommentToRecipeVariables>;
  operationName: string;
}
export const addCommentToRecipeRef: AddCommentToRecipeRef;

export function addCommentToRecipe(vars: AddCommentToRecipeVariables): MutationPromise<AddCommentToRecipeData, AddCommentToRecipeVariables>;
export function addCommentToRecipe(dc: DataConnect, vars: AddCommentToRecipeVariables): MutationPromise<AddCommentToRecipeData, AddCommentToRecipeVariables>;

interface GetMyRecipesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyRecipesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyRecipesData, undefined>;
  operationName: string;
}
export const getMyRecipesRef: GetMyRecipesRef;

export function getMyRecipes(): QueryPromise<GetMyRecipesData, undefined>;
export function getMyRecipes(dc: DataConnect): QueryPromise<GetMyRecipesData, undefined>;

