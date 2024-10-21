import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type SetupAddCategoryMutationVariables = Types.Exact<{
  canAddPoints: Types.Scalars["Boolean"]["input"];
  categoryName: Types.Scalars["String"]["input"];
  subcategories: Array<Types.SubcategoryInputType> | Types.SubcategoryInputType;
}>;

export type SetupAddCategoryMutation = {
  __typename?: "mutation_root";
  addCategory?: {
    __typename?: "CategoryType";
    categoryId: string;
    categoryName: string;
    darkColor: string;
    lightColor: string;
  } | null;
};

export const SetupAddCategoryDocument = gql`
  mutation SetupAddCategory(
    $canAddPoints: Boolean!
    $categoryName: String!
    $subcategories: [SubcategoryInputType!]!
  ) {
    addCategory(
      canAddPoints: $canAddPoints
      categoryName: $categoryName
      subcategories: $subcategories
    ) {
      categoryId
      categoryName
      darkColor
      lightColor
    }
  }
`;
export type SetupAddCategoryMutationFn = Apollo.MutationFunction<
  SetupAddCategoryMutation,
  SetupAddCategoryMutationVariables
>;

/**
 * __useSetupAddCategoryMutation__
 *
 * To run a mutation, you first call `useSetupAddCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetupAddCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setupAddCategoryMutation, { data, loading, error }] = useSetupAddCategoryMutation({
 *   variables: {
 *      canAddPoints: // value for 'canAddPoints'
 *      categoryName: // value for 'categoryName'
 *      subcategories: // value for 'subcategories'
 *   },
 * });
 */
export function useSetupAddCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SetupAddCategoryMutation,
    SetupAddCategoryMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SetupAddCategoryMutation,
    SetupAddCategoryMutationVariables
  >(SetupAddCategoryDocument, options);
}
export type SetupAddCategoryMutationHookResult = ReturnType<
  typeof useSetupAddCategoryMutation
>;
export type SetupAddCategoryMutationResult =
  Apollo.MutationResult<SetupAddCategoryMutation>;
export type SetupAddCategoryMutationOptions = Apollo.BaseMutationOptions<
  SetupAddCategoryMutation,
  SetupAddCategoryMutationVariables
>;
