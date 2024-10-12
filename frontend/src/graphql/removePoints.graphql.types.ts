import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type RemovePointsMutationVariables = Types.Exact<{
  pointsId: Types.Scalars["Int"]["input"];
}>;

export type RemovePointsMutation = {
  __typename?: "mutation_root";
  removePoints?: boolean | null;
};

export const RemovePointsDocument = gql`
  mutation RemovePoints($pointsId: Int!) {
    removePoints(pointsId: $pointsId)
  }
`;
export type RemovePointsMutationFn = Apollo.MutationFunction<
  RemovePointsMutation,
  RemovePointsMutationVariables
>;

/**
 * __useRemovePointsMutation__
 *
 * To run a mutation, you first call `useRemovePointsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePointsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePointsMutation, { data, loading, error }] = useRemovePointsMutation({
 *   variables: {
 *      pointsId: // value for 'pointsId'
 *   },
 * });
 */
export function useRemovePointsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemovePointsMutation,
    RemovePointsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemovePointsMutation,
    RemovePointsMutationVariables
  >(RemovePointsDocument, options);
}
export type RemovePointsMutationHookResult = ReturnType<
  typeof useRemovePointsMutation
>;
export type RemovePointsMutationResult =
  Apollo.MutationResult<RemovePointsMutation>;
export type RemovePointsMutationOptions = Apollo.BaseMutationOptions<
  RemovePointsMutation,
  RemovePointsMutationVariables
>;
