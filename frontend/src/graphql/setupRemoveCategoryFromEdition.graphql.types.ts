import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type SetupRemoveCategoryFormEditionMutationVariables = Types.Exact<{
  categoryId: Types.Scalars["Int"]["input"];
  editionId: Types.Scalars["Int"]["input"];
}>;

export type SetupRemoveCategoryFormEditionMutation = {
  __typename?: "mutation_root";
  removeCategoryFromEdition?: boolean | null;
};

export const SetupRemoveCategoryFormEditionDocument = gql`
  mutation SetupRemoveCategoryFormEdition($categoryId: Int!, $editionId: Int!) {
    removeCategoryFromEdition(categoryId: $categoryId, editionId: $editionId)
  }
`;
export type SetupRemoveCategoryFormEditionMutationFn = Apollo.MutationFunction<
  SetupRemoveCategoryFormEditionMutation,
  SetupRemoveCategoryFormEditionMutationVariables
>;

/**
 * __useSetupRemoveCategoryFormEditionMutation__
 *
 * To run a mutation, you first call `useSetupRemoveCategoryFormEditionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetupRemoveCategoryFormEditionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setupRemoveCategoryFormEditionMutation, { data, loading, error }] = useSetupRemoveCategoryFormEditionMutation({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *      editionId: // value for 'editionId'
 *   },
 * });
 */
export function useSetupRemoveCategoryFormEditionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SetupRemoveCategoryFormEditionMutation,
    SetupRemoveCategoryFormEditionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SetupRemoveCategoryFormEditionMutation,
    SetupRemoveCategoryFormEditionMutationVariables
  >(SetupRemoveCategoryFormEditionDocument, options);
}
export type SetupRemoveCategoryFormEditionMutationHookResult = ReturnType<
  typeof useSetupRemoveCategoryFormEditionMutation
>;
export type SetupRemoveCategoryFormEditionMutationResult =
  Apollo.MutationResult<SetupRemoveCategoryFormEditionMutation>;
export type SetupRemoveCategoryFormEditionMutationOptions =
  Apollo.BaseMutationOptions<
    SetupRemoveCategoryFormEditionMutation,
    SetupRemoveCategoryFormEditionMutationVariables
  >;
