import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type AddCategoryMutationVariables = Types.Exact<{
  canAddPoints: Types.Scalars["Boolean"]["input"];
  categoryName: Types.Scalars["String"]["input"];
}>;

export type AddCategoryMutation = {
  __typename?: "mutation_root";
  addCategory?: {
    __typename?: "CategoryType";
    categoryId: string;
    categoryName: string;
    darkColor: string;
    lightColor: string;
  } | null;
};

export const AddCategoryDocument = gql`
  mutation AddCategory($canAddPoints: Boolean!, $categoryName: String!) {
    addCategory(canAddPoints: $canAddPoints, categoryName: $categoryName) {
      categoryId
      categoryName
      darkColor
      lightColor
    }
  }
`;
export type AddCategoryMutationFn = Apollo.MutationFunction<
  AddCategoryMutation,
  AddCategoryMutationVariables
>;

/**
 * __useAddCategoryMutation__
 *
 * To run a mutation, you first call `useAddCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCategoryMutation, { data, loading, error }] = useAddCategoryMutation({
 *   variables: {
 *      canAddPoints: // value for 'canAddPoints'
 *      categoryName: // value for 'categoryName'
 *   },
 * });
 */
export function useAddCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddCategoryMutation,
    AddCategoryMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddCategoryMutation, AddCategoryMutationVariables>(
    AddCategoryDocument,
    options,
  );
}
export type AddCategoryMutationHookResult = ReturnType<
  typeof useAddCategoryMutation
>;
export type AddCategoryMutationResult =
  Apollo.MutationResult<AddCategoryMutation>;
export type AddCategoryMutationOptions = Apollo.BaseMutationOptions<
  AddCategoryMutation,
  AddCategoryMutationVariables
>;
