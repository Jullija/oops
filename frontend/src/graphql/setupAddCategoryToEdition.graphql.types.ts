import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type SetupAddCategoryToEditionMutationVariables = Types.Exact<{
  categoryId: Types.Scalars["Int"]["input"];
  editionId: Types.Scalars["Int"]["input"];
}>;

export type SetupAddCategoryToEditionMutation = {
  __typename?: "mutation_root";
  addCategoryToEdition?: {
    __typename?: "CategoryEditionType";
    categoryEditionId: string;
    label: string;
  } | null;
};

export const SetupAddCategoryToEditionDocument = gql`
  mutation SetupAddCategoryToEdition($categoryId: Int!, $editionId: Int!) {
    addCategoryToEdition(categoryId: $categoryId, editionId: $editionId) {
      categoryEditionId
      label
    }
  }
`;
export type SetupAddCategoryToEditionMutationFn = Apollo.MutationFunction<
  SetupAddCategoryToEditionMutation,
  SetupAddCategoryToEditionMutationVariables
>;

/**
 * __useSetupAddCategoryToEditionMutation__
 *
 * To run a mutation, you first call `useSetupAddCategoryToEditionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetupAddCategoryToEditionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setupAddCategoryToEditionMutation, { data, loading, error }] = useSetupAddCategoryToEditionMutation({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *      editionId: // value for 'editionId'
 *   },
 * });
 */
export function useSetupAddCategoryToEditionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SetupAddCategoryToEditionMutation,
    SetupAddCategoryToEditionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SetupAddCategoryToEditionMutation,
    SetupAddCategoryToEditionMutationVariables
  >(SetupAddCategoryToEditionDocument, options);
}
export type SetupAddCategoryToEditionMutationHookResult = ReturnType<
  typeof useSetupAddCategoryToEditionMutation
>;
export type SetupAddCategoryToEditionMutationResult =
  Apollo.MutationResult<SetupAddCategoryToEditionMutation>;
export type SetupAddCategoryToEditionMutationOptions =
  Apollo.BaseMutationOptions<
    SetupAddCategoryToEditionMutation,
    SetupAddCategoryToEditionMutationVariables
  >;
