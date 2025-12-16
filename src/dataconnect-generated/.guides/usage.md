# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createNewRecipe, getPublicRecipes, addCommentToRecipe, getMyRecipes } from '@dataconnect/generated';


// Operation CreateNewRecipe:  For variables, look at type CreateNewRecipeVars in ../index.d.ts
const { data } = await CreateNewRecipe(dataConnect, createNewRecipeVars);

// Operation GetPublicRecipes: 
const { data } = await GetPublicRecipes(dataConnect);

// Operation AddCommentToRecipe:  For variables, look at type AddCommentToRecipeVars in ../index.d.ts
const { data } = await AddCommentToRecipe(dataConnect, addCommentToRecipeVars);

// Operation GetMyRecipes: 
const { data } = await GetMyRecipes(dataConnect);


```