import * as Types from "../__generated__/schema.graphql.types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type SetupEditionMutationVariables = Types.Exact<{
  editionName: Types.Scalars["String"]["input"];
  editionYear: Types.Scalars["Int"]["input"];
  label?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
}>;

export type SetupEditionMutation = {
  __typename?: "mutation_root";
  addEdition?: {
    __typename?: "EditionType";
    editionId: string;
    editionName: string;
    editionYear: number;
    endDate: string;
    label: string;
    startDate: string;
  } | null;
};

export const SetupEditionDocument = gql`
  mutation SetupEdition(
    $editionName: String!
    $editionYear: Int!
    $label: String
  ) {
    addEdition(
      editionName: $editionName
      editionYear: $editionYear
      label: $label
    ) {
      editionId
      editionName
      editionYear
      endDate
      label
      startDate
    }
  }
`;
export type SetupEditionMutationFn = Apollo.MutationFunction<
  SetupEditionMutation,
  SetupEditionMutationVariables
>;

/**
 * __useSetupEditionMutation__
 *
 * To run a mutation, you first call `useSetupEditionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetupEditionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setupEditionMutation, { data, loading, error }] = useSetupEditionMutation({
 *   variables: {
 *      editionName: // value for 'editionName'
 *      editionYear: // value for 'editionYear'
 *      label: // value for 'label'
 *   },
 * });
 */
export function useSetupEditionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SetupEditionMutation,
    SetupEditionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SetupEditionMutation,
    SetupEditionMutationVariables
  >(SetupEditionDocument, options);
}
export type SetupEditionMutationHookResult = ReturnType<
  typeof useSetupEditionMutation
>;
export type SetupEditionMutationResult =
  Apollo.MutationResult<SetupEditionMutation>;
export type SetupEditionMutationOptions = Apollo.BaseMutationOptions<
  SetupEditionMutation,
  SetupEditionMutationVariables
>;
