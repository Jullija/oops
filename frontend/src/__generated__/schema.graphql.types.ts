export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  bigint: { input: string; output: string };
  date: { input: string; output: string };
  float8: { input: number; output: number };
  time: { input: string; output: string };
  timestamp: { input: string; output: string };
};

export type AddBonusReturnType = {
  __typename?: "AddBonusReturnType";
  bonus: BonusType;
  points: PointType;
};

/** columns and relationships of "award" */
export type Award = {
  __typename?: "Award";
  /** An array relationship */
  awardEditions: Array<AwardEdition>;
  /** An aggregate relationship */
  awardEditionsAggregate: AwardEditionAggregate;
  awardId: Scalars["bigint"]["output"];
  awardName: Scalars["String"]["output"];
  awardType: Scalars["String"]["output"];
  awardValue: Scalars["float8"]["output"];
  /** An array relationship */
  bonuses: Array<Bonuses>;
  /** An aggregate relationship */
  bonusesAggregate: BonusesAggregate;
  /** An object relationship */
  category: Categories;
  categoryId: Scalars["bigint"]["output"];
  /** An array relationship */
  chestAwards: Array<ChestAward>;
  /** An aggregate relationship */
  chestAwardsAggregate: ChestAwardAggregate;
  /** An object relationship */
  file?: Maybe<Files>;
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  label: Scalars["String"]["output"];
  maxUsages: Scalars["Int"]["output"];
};

/** columns and relationships of "award" */
export type AwardAwardEditionsArgs = {
  distinctOn?: InputMaybe<Array<AwardEditionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<AwardEditionOrderBy>>;
  where?: InputMaybe<AwardEditionBoolExp>;
};

/** columns and relationships of "award" */
export type AwardAwardEditionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AwardEditionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<AwardEditionOrderBy>>;
  where?: InputMaybe<AwardEditionBoolExp>;
};

/** columns and relationships of "award" */
export type AwardBonusesArgs = {
  distinctOn?: InputMaybe<Array<BonusesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<BonusesOrderBy>>;
  where?: InputMaybe<BonusesBoolExp>;
};

/** columns and relationships of "award" */
export type AwardBonusesAggregateArgs = {
  distinctOn?: InputMaybe<Array<BonusesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<BonusesOrderBy>>;
  where?: InputMaybe<BonusesBoolExp>;
};

/** columns and relationships of "award" */
export type AwardChestAwardsArgs = {
  distinctOn?: InputMaybe<Array<ChestAwardSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestAwardOrderBy>>;
  where?: InputMaybe<ChestAwardBoolExp>;
};

/** columns and relationships of "award" */
export type AwardChestAwardsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChestAwardSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestAwardOrderBy>>;
  where?: InputMaybe<ChestAwardBoolExp>;
};

/** aggregated selection of "award" */
export type AwardAggregate = {
  __typename?: "AwardAggregate";
  aggregate?: Maybe<AwardAggregateFields>;
  nodes: Array<Award>;
};

export type AwardAggregateBoolExp = {
  avg?: InputMaybe<AwardAggregateBoolExpAvg>;
  corr?: InputMaybe<AwardAggregateBoolExpCorr>;
  count?: InputMaybe<AwardAggregateBoolExpCount>;
  covar_samp?: InputMaybe<AwardAggregateBoolExpCovar_Samp>;
  max?: InputMaybe<AwardAggregateBoolExpMax>;
  min?: InputMaybe<AwardAggregateBoolExpMin>;
  stddev_samp?: InputMaybe<AwardAggregateBoolExpStddev_Samp>;
  sum?: InputMaybe<AwardAggregateBoolExpSum>;
  var_samp?: InputMaybe<AwardAggregateBoolExpVar_Samp>;
};

/** aggregate fields of "award" */
export type AwardAggregateFields = {
  __typename?: "AwardAggregateFields";
  avg?: Maybe<AwardAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<AwardMaxFields>;
  min?: Maybe<AwardMinFields>;
  stddev?: Maybe<AwardStddevFields>;
  stddevPop?: Maybe<AwardStddevPopFields>;
  stddevSamp?: Maybe<AwardStddevSampFields>;
  sum?: Maybe<AwardSumFields>;
  varPop?: Maybe<AwardVarPopFields>;
  varSamp?: Maybe<AwardVarSampFields>;
  variance?: Maybe<AwardVarianceFields>;
};

/** aggregate fields of "award" */
export type AwardAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AwardSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "award" */
export type AwardAggregateOrderBy = {
  avg?: InputMaybe<AwardAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AwardMaxOrderBy>;
  min?: InputMaybe<AwardMinOrderBy>;
  stddev?: InputMaybe<AwardStddevOrderBy>;
  stddevPop?: InputMaybe<AwardStddevPopOrderBy>;
  stddevSamp?: InputMaybe<AwardStddevSampOrderBy>;
  sum?: InputMaybe<AwardSumOrderBy>;
  varPop?: InputMaybe<AwardVarPopOrderBy>;
  varSamp?: InputMaybe<AwardVarSampOrderBy>;
  variance?: InputMaybe<AwardVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "award" */
export type AwardArrRelInsertInput = {
  data: Array<AwardInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<AwardOnConflict>;
};

/** aggregate avg on columns */
export type AwardAvgFields = {
  __typename?: "AwardAvgFields";
  awardId?: Maybe<Scalars["Float"]["output"]>;
  awardValue?: Maybe<Scalars["Float"]["output"]>;
  categoryId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  maxUsages?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "award" */
export type AwardAvgOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  awardValue?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  maxUsages?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "award". All fields are combined with a logical 'AND'. */
export type AwardBoolExp = {
  _and?: InputMaybe<Array<AwardBoolExp>>;
  _not?: InputMaybe<AwardBoolExp>;
  _or?: InputMaybe<Array<AwardBoolExp>>;
  awardEditions?: InputMaybe<AwardEditionBoolExp>;
  awardEditionsAggregate?: InputMaybe<AwardEditionAggregateBoolExp>;
  awardId?: InputMaybe<BigintComparisonExp>;
  awardName?: InputMaybe<StringComparisonExp>;
  awardType?: InputMaybe<StringComparisonExp>;
  awardValue?: InputMaybe<Float8ComparisonExp>;
  bonuses?: InputMaybe<BonusesBoolExp>;
  bonusesAggregate?: InputMaybe<BonusesAggregateBoolExp>;
  category?: InputMaybe<CategoriesBoolExp>;
  categoryId?: InputMaybe<BigintComparisonExp>;
  chestAwards?: InputMaybe<ChestAwardBoolExp>;
  chestAwardsAggregate?: InputMaybe<ChestAwardAggregateBoolExp>;
  file?: InputMaybe<FilesBoolExp>;
  imageFileId?: InputMaybe<BigintComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
  maxUsages?: InputMaybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "award" */
export enum AwardConstraint {
  /** unique or primary key constraint on columns "award_id" */
  AwardPkey = "award_pkey",
}

/** columns and relationships of "award_edition" */
export type AwardEdition = {
  __typename?: "AwardEdition";
  /** An object relationship */
  award: Award;
  awardEditionId: Scalars["bigint"]["output"];
  awardId: Scalars["bigint"]["output"];
  /** An object relationship */
  edition: Edition;
  editionId: Scalars["bigint"]["output"];
  label: Scalars["String"]["output"];
};

/** aggregated selection of "award_edition" */
export type AwardEditionAggregate = {
  __typename?: "AwardEditionAggregate";
  aggregate?: Maybe<AwardEditionAggregateFields>;
  nodes: Array<AwardEdition>;
};

export type AwardEditionAggregateBoolExp = {
  count?: InputMaybe<AwardEditionAggregateBoolExpCount>;
};

/** aggregate fields of "award_edition" */
export type AwardEditionAggregateFields = {
  __typename?: "AwardEditionAggregateFields";
  avg?: Maybe<AwardEditionAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<AwardEditionMaxFields>;
  min?: Maybe<AwardEditionMinFields>;
  stddev?: Maybe<AwardEditionStddevFields>;
  stddevPop?: Maybe<AwardEditionStddevPopFields>;
  stddevSamp?: Maybe<AwardEditionStddevSampFields>;
  sum?: Maybe<AwardEditionSumFields>;
  varPop?: Maybe<AwardEditionVarPopFields>;
  varSamp?: Maybe<AwardEditionVarSampFields>;
  variance?: Maybe<AwardEditionVarianceFields>;
};

/** aggregate fields of "award_edition" */
export type AwardEditionAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AwardEditionSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "award_edition" */
export type AwardEditionAggregateOrderBy = {
  avg?: InputMaybe<AwardEditionAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AwardEditionMaxOrderBy>;
  min?: InputMaybe<AwardEditionMinOrderBy>;
  stddev?: InputMaybe<AwardEditionStddevOrderBy>;
  stddevPop?: InputMaybe<AwardEditionStddevPopOrderBy>;
  stddevSamp?: InputMaybe<AwardEditionStddevSampOrderBy>;
  sum?: InputMaybe<AwardEditionSumOrderBy>;
  varPop?: InputMaybe<AwardEditionVarPopOrderBy>;
  varSamp?: InputMaybe<AwardEditionVarSampOrderBy>;
  variance?: InputMaybe<AwardEditionVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "award_edition" */
export type AwardEditionArrRelInsertInput = {
  data: Array<AwardEditionInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<AwardEditionOnConflict>;
};

/** aggregate avg on columns */
export type AwardEditionAvgFields = {
  __typename?: "AwardEditionAvgFields";
  awardEditionId?: Maybe<Scalars["Float"]["output"]>;
  awardId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "award_edition" */
export type AwardEditionAvgOrderBy = {
  awardEditionId?: InputMaybe<OrderBy>;
  awardId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "award_edition". All fields are combined with a logical 'AND'. */
export type AwardEditionBoolExp = {
  _and?: InputMaybe<Array<AwardEditionBoolExp>>;
  _not?: InputMaybe<AwardEditionBoolExp>;
  _or?: InputMaybe<Array<AwardEditionBoolExp>>;
  award?: InputMaybe<AwardBoolExp>;
  awardEditionId?: InputMaybe<BigintComparisonExp>;
  awardId?: InputMaybe<BigintComparisonExp>;
  edition?: InputMaybe<EditionBoolExp>;
  editionId?: InputMaybe<BigintComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "award_edition" */
export enum AwardEditionConstraint {
  /** unique or primary key constraint on columns "edition_id", "award_id" */
  AwardEditionPkey = "award_edition_pkey",
}

/** input type for incrementing numeric columns in table "award_edition" */
export type AwardEditionIncInput = {
  awardEditionId?: InputMaybe<Scalars["bigint"]["input"]>;
  awardId?: InputMaybe<Scalars["bigint"]["input"]>;
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "award_edition" */
export type AwardEditionInsertInput = {
  award?: InputMaybe<AwardObjRelInsertInput>;
  awardEditionId?: InputMaybe<Scalars["bigint"]["input"]>;
  awardId?: InputMaybe<Scalars["bigint"]["input"]>;
  edition?: InputMaybe<EditionObjRelInsertInput>;
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type AwardEditionMaxFields = {
  __typename?: "AwardEditionMaxFields";
  awardEditionId?: Maybe<Scalars["bigint"]["output"]>;
  awardId?: Maybe<Scalars["bigint"]["output"]>;
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "award_edition" */
export type AwardEditionMaxOrderBy = {
  awardEditionId?: InputMaybe<OrderBy>;
  awardId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AwardEditionMinFields = {
  __typename?: "AwardEditionMinFields";
  awardEditionId?: Maybe<Scalars["bigint"]["output"]>;
  awardId?: Maybe<Scalars["bigint"]["output"]>;
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "award_edition" */
export type AwardEditionMinOrderBy = {
  awardEditionId?: InputMaybe<OrderBy>;
  awardId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "award_edition" */
export type AwardEditionMutationResponse = {
  __typename?: "AwardEditionMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<AwardEdition>;
};

/** on_conflict condition type for table "award_edition" */
export type AwardEditionOnConflict = {
  constraint: AwardEditionConstraint;
  updateColumns?: Array<AwardEditionUpdateColumn>;
  where?: InputMaybe<AwardEditionBoolExp>;
};

/** Ordering options when selecting data from "award_edition". */
export type AwardEditionOrderBy = {
  award?: InputMaybe<AwardOrderBy>;
  awardEditionId?: InputMaybe<OrderBy>;
  awardId?: InputMaybe<OrderBy>;
  edition?: InputMaybe<EditionOrderBy>;
  editionId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: award_edition */
export type AwardEditionPkColumnsInput = {
  awardId: Scalars["bigint"]["input"];
  editionId: Scalars["bigint"]["input"];
};

/** select columns of table "award_edition" */
export enum AwardEditionSelectColumn {
  /** column name */
  AwardEditionId = "awardEditionId",
  /** column name */
  AwardId = "awardId",
  /** column name */
  EditionId = "editionId",
  /** column name */
  Label = "label",
}

/** input type for updating data in table "award_edition" */
export type AwardEditionSetInput = {
  awardEditionId?: InputMaybe<Scalars["bigint"]["input"]>;
  awardId?: InputMaybe<Scalars["bigint"]["input"]>;
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type AwardEditionStddevFields = {
  __typename?: "AwardEditionStddevFields";
  awardEditionId?: Maybe<Scalars["Float"]["output"]>;
  awardId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "award_edition" */
export type AwardEditionStddevOrderBy = {
  awardEditionId?: InputMaybe<OrderBy>;
  awardId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type AwardEditionStddevPopFields = {
  __typename?: "AwardEditionStddevPopFields";
  awardEditionId?: Maybe<Scalars["Float"]["output"]>;
  awardId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevPop() on columns of table "award_edition" */
export type AwardEditionStddevPopOrderBy = {
  awardEditionId?: InputMaybe<OrderBy>;
  awardId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type AwardEditionStddevSampFields = {
  __typename?: "AwardEditionStddevSampFields";
  awardEditionId?: Maybe<Scalars["Float"]["output"]>;
  awardId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevSamp() on columns of table "award_edition" */
export type AwardEditionStddevSampOrderBy = {
  awardEditionId?: InputMaybe<OrderBy>;
  awardId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "award_edition" */
export type AwardEditionStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AwardEditionStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AwardEditionStreamCursorValueInput = {
  awardEditionId?: InputMaybe<Scalars["bigint"]["input"]>;
  awardId?: InputMaybe<Scalars["bigint"]["input"]>;
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type AwardEditionSumFields = {
  __typename?: "AwardEditionSumFields";
  awardEditionId?: Maybe<Scalars["bigint"]["output"]>;
  awardId?: Maybe<Scalars["bigint"]["output"]>;
  editionId?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by sum() on columns of table "award_edition" */
export type AwardEditionSumOrderBy = {
  awardEditionId?: InputMaybe<OrderBy>;
  awardId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
};

export type AwardEditionType = {
  __typename?: "AwardEditionType";
  award: AwardType;
  awardEditionId: Scalars["ID"]["output"];
  edition: EditionType;
  label: Scalars["String"]["output"];
};

/** update columns of table "award_edition" */
export enum AwardEditionUpdateColumn {
  /** column name */
  AwardEditionId = "awardEditionId",
  /** column name */
  AwardId = "awardId",
  /** column name */
  EditionId = "editionId",
  /** column name */
  Label = "label",
}

export type AwardEditionUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AwardEditionIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AwardEditionSetInput>;
  /** filter the rows which have to be updated */
  where: AwardEditionBoolExp;
};

/** aggregate varPop on columns */
export type AwardEditionVarPopFields = {
  __typename?: "AwardEditionVarPopFields";
  awardEditionId?: Maybe<Scalars["Float"]["output"]>;
  awardId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varPop() on columns of table "award_edition" */
export type AwardEditionVarPopOrderBy = {
  awardEditionId?: InputMaybe<OrderBy>;
  awardId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type AwardEditionVarSampFields = {
  __typename?: "AwardEditionVarSampFields";
  awardEditionId?: Maybe<Scalars["Float"]["output"]>;
  awardId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varSamp() on columns of table "award_edition" */
export type AwardEditionVarSampOrderBy = {
  awardEditionId?: InputMaybe<OrderBy>;
  awardId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type AwardEditionVarianceFields = {
  __typename?: "AwardEditionVarianceFields";
  awardEditionId?: Maybe<Scalars["Float"]["output"]>;
  awardId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "award_edition" */
export type AwardEditionVarianceOrderBy = {
  awardEditionId?: InputMaybe<OrderBy>;
  awardId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
};

/** input type for incrementing numeric columns in table "award" */
export type AwardIncInput = {
  awardId?: InputMaybe<Scalars["bigint"]["input"]>;
  awardValue?: InputMaybe<Scalars["float8"]["input"]>;
  categoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  imageFileId?: InputMaybe<Scalars["bigint"]["input"]>;
  maxUsages?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "award" */
export type AwardInsertInput = {
  awardEditions?: InputMaybe<AwardEditionArrRelInsertInput>;
  awardId?: InputMaybe<Scalars["bigint"]["input"]>;
  awardName?: InputMaybe<Scalars["String"]["input"]>;
  awardType?: InputMaybe<Scalars["String"]["input"]>;
  awardValue?: InputMaybe<Scalars["float8"]["input"]>;
  bonuses?: InputMaybe<BonusesArrRelInsertInput>;
  category?: InputMaybe<CategoriesObjRelInsertInput>;
  categoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  chestAwards?: InputMaybe<ChestAwardArrRelInsertInput>;
  file?: InputMaybe<FilesObjRelInsertInput>;
  imageFileId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  maxUsages?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate max on columns */
export type AwardMaxFields = {
  __typename?: "AwardMaxFields";
  awardId?: Maybe<Scalars["bigint"]["output"]>;
  awardName?: Maybe<Scalars["String"]["output"]>;
  awardType?: Maybe<Scalars["String"]["output"]>;
  awardValue?: Maybe<Scalars["float8"]["output"]>;
  categoryId?: Maybe<Scalars["bigint"]["output"]>;
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  maxUsages?: Maybe<Scalars["Int"]["output"]>;
};

/** order by max() on columns of table "award" */
export type AwardMaxOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  awardName?: InputMaybe<OrderBy>;
  awardType?: InputMaybe<OrderBy>;
  awardValue?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  maxUsages?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AwardMinFields = {
  __typename?: "AwardMinFields";
  awardId?: Maybe<Scalars["bigint"]["output"]>;
  awardName?: Maybe<Scalars["String"]["output"]>;
  awardType?: Maybe<Scalars["String"]["output"]>;
  awardValue?: Maybe<Scalars["float8"]["output"]>;
  categoryId?: Maybe<Scalars["bigint"]["output"]>;
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  maxUsages?: Maybe<Scalars["Int"]["output"]>;
};

/** order by min() on columns of table "award" */
export type AwardMinOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  awardName?: InputMaybe<OrderBy>;
  awardType?: InputMaybe<OrderBy>;
  awardValue?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  maxUsages?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "award" */
export type AwardMutationResponse = {
  __typename?: "AwardMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Award>;
};

/** input type for inserting object relation for remote table "award" */
export type AwardObjRelInsertInput = {
  data: AwardInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<AwardOnConflict>;
};

/** on_conflict condition type for table "award" */
export type AwardOnConflict = {
  constraint: AwardConstraint;
  updateColumns?: Array<AwardUpdateColumn>;
  where?: InputMaybe<AwardBoolExp>;
};

/** Ordering options when selecting data from "award". */
export type AwardOrderBy = {
  awardEditionsAggregate?: InputMaybe<AwardEditionAggregateOrderBy>;
  awardId?: InputMaybe<OrderBy>;
  awardName?: InputMaybe<OrderBy>;
  awardType?: InputMaybe<OrderBy>;
  awardValue?: InputMaybe<OrderBy>;
  bonusesAggregate?: InputMaybe<BonusesAggregateOrderBy>;
  category?: InputMaybe<CategoriesOrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  chestAwardsAggregate?: InputMaybe<ChestAwardAggregateOrderBy>;
  file?: InputMaybe<FilesOrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  maxUsages?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: award */
export type AwardPkColumnsInput = {
  awardId: Scalars["bigint"]["input"];
};

/** select columns of table "award" */
export enum AwardSelectColumn {
  /** column name */
  AwardId = "awardId",
  /** column name */
  AwardName = "awardName",
  /** column name */
  AwardType = "awardType",
  /** column name */
  AwardValue = "awardValue",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  ImageFileId = "imageFileId",
  /** column name */
  Label = "label",
  /** column name */
  MaxUsages = "maxUsages",
}

/** select "awardAggregateBoolExpAvgArgumentsColumns" columns of table "award" */
export enum AwardSelectColumnAwardAggregateBoolExpAvgArgumentsColumns {
  /** column name */
  AwardValue = "awardValue",
}

/** select "awardAggregateBoolExpCorrArgumentsColumns" columns of table "award" */
export enum AwardSelectColumnAwardAggregateBoolExpCorrArgumentsColumns {
  /** column name */
  AwardValue = "awardValue",
}

/** select "awardAggregateBoolExpCovar_sampArgumentsColumns" columns of table "award" */
export enum AwardSelectColumnAwardAggregateBoolExpCovar_SampArgumentsColumns {
  /** column name */
  AwardValue = "awardValue",
}

/** select "awardAggregateBoolExpMaxArgumentsColumns" columns of table "award" */
export enum AwardSelectColumnAwardAggregateBoolExpMaxArgumentsColumns {
  /** column name */
  AwardValue = "awardValue",
}

/** select "awardAggregateBoolExpMinArgumentsColumns" columns of table "award" */
export enum AwardSelectColumnAwardAggregateBoolExpMinArgumentsColumns {
  /** column name */
  AwardValue = "awardValue",
}

/** select "awardAggregateBoolExpStddev_sampArgumentsColumns" columns of table "award" */
export enum AwardSelectColumnAwardAggregateBoolExpStddev_SampArgumentsColumns {
  /** column name */
  AwardValue = "awardValue",
}

/** select "awardAggregateBoolExpSumArgumentsColumns" columns of table "award" */
export enum AwardSelectColumnAwardAggregateBoolExpSumArgumentsColumns {
  /** column name */
  AwardValue = "awardValue",
}

/** select "awardAggregateBoolExpVar_sampArgumentsColumns" columns of table "award" */
export enum AwardSelectColumnAwardAggregateBoolExpVar_SampArgumentsColumns {
  /** column name */
  AwardValue = "awardValue",
}

/** input type for updating data in table "award" */
export type AwardSetInput = {
  awardId?: InputMaybe<Scalars["bigint"]["input"]>;
  awardName?: InputMaybe<Scalars["String"]["input"]>;
  awardType?: InputMaybe<Scalars["String"]["input"]>;
  awardValue?: InputMaybe<Scalars["float8"]["input"]>;
  categoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  imageFileId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  maxUsages?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate stddev on columns */
export type AwardStddevFields = {
  __typename?: "AwardStddevFields";
  awardId?: Maybe<Scalars["Float"]["output"]>;
  awardValue?: Maybe<Scalars["Float"]["output"]>;
  categoryId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  maxUsages?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "award" */
export type AwardStddevOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  awardValue?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  maxUsages?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type AwardStddevPopFields = {
  __typename?: "AwardStddevPopFields";
  awardId?: Maybe<Scalars["Float"]["output"]>;
  awardValue?: Maybe<Scalars["Float"]["output"]>;
  categoryId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  maxUsages?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevPop() on columns of table "award" */
export type AwardStddevPopOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  awardValue?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  maxUsages?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type AwardStddevSampFields = {
  __typename?: "AwardStddevSampFields";
  awardId?: Maybe<Scalars["Float"]["output"]>;
  awardValue?: Maybe<Scalars["Float"]["output"]>;
  categoryId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  maxUsages?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevSamp() on columns of table "award" */
export type AwardStddevSampOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  awardValue?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  maxUsages?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "award" */
export type AwardStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AwardStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AwardStreamCursorValueInput = {
  awardId?: InputMaybe<Scalars["bigint"]["input"]>;
  awardName?: InputMaybe<Scalars["String"]["input"]>;
  awardType?: InputMaybe<Scalars["String"]["input"]>;
  awardValue?: InputMaybe<Scalars["float8"]["input"]>;
  categoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  imageFileId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  maxUsages?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate sum on columns */
export type AwardSumFields = {
  __typename?: "AwardSumFields";
  awardId?: Maybe<Scalars["bigint"]["output"]>;
  awardValue?: Maybe<Scalars["float8"]["output"]>;
  categoryId?: Maybe<Scalars["bigint"]["output"]>;
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  maxUsages?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "award" */
export type AwardSumOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  awardValue?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  maxUsages?: InputMaybe<OrderBy>;
};

export type AwardType = {
  __typename?: "AwardType";
  awardEditions?: Maybe<Array<Maybe<AwardEditionType>>>;
  awardId: Scalars["ID"]["output"];
  awardName: Scalars["String"]["output"];
  awardType: AwardTypeType;
  awardValue: Scalars["Float"]["output"];
  category?: Maybe<CategoryType>;
  imageFile?: Maybe<FileType>;
  label: Scalars["String"]["output"];
  maxUsages: Scalars["Int"]["output"];
};

export enum AwardTypeType {
  Additive = "ADDITIVE",
  AdditiveNext = "ADDITIVE_NEXT",
  AdditivePrev = "ADDITIVE_PREV",
  Multiplicative = "MULTIPLICATIVE",
}

/** update columns of table "award" */
export enum AwardUpdateColumn {
  /** column name */
  AwardId = "awardId",
  /** column name */
  AwardName = "awardName",
  /** column name */
  AwardType = "awardType",
  /** column name */
  AwardValue = "awardValue",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  ImageFileId = "imageFileId",
  /** column name */
  Label = "label",
  /** column name */
  MaxUsages = "maxUsages",
}

export type AwardUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AwardIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AwardSetInput>;
  /** filter the rows which have to be updated */
  where: AwardBoolExp;
};

/** aggregate varPop on columns */
export type AwardVarPopFields = {
  __typename?: "AwardVarPopFields";
  awardId?: Maybe<Scalars["Float"]["output"]>;
  awardValue?: Maybe<Scalars["Float"]["output"]>;
  categoryId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  maxUsages?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varPop() on columns of table "award" */
export type AwardVarPopOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  awardValue?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  maxUsages?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type AwardVarSampFields = {
  __typename?: "AwardVarSampFields";
  awardId?: Maybe<Scalars["Float"]["output"]>;
  awardValue?: Maybe<Scalars["Float"]["output"]>;
  categoryId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  maxUsages?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varSamp() on columns of table "award" */
export type AwardVarSampOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  awardValue?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  maxUsages?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type AwardVarianceFields = {
  __typename?: "AwardVarianceFields";
  awardId?: Maybe<Scalars["Float"]["output"]>;
  awardValue?: Maybe<Scalars["Float"]["output"]>;
  categoryId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  maxUsages?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "award" */
export type AwardVarianceOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  awardValue?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  maxUsages?: InputMaybe<OrderBy>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _eq?: InputMaybe<Scalars["bigint"]["input"]>;
  _gt?: InputMaybe<Scalars["bigint"]["input"]>;
  _gte?: InputMaybe<Scalars["bigint"]["input"]>;
  _in?: InputMaybe<Array<Scalars["bigint"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["bigint"]["input"]>;
  _lte?: InputMaybe<Scalars["bigint"]["input"]>;
  _neq?: InputMaybe<Scalars["bigint"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["bigint"]["input"]>>;
};

export type BonusType = {
  __typename?: "BonusType";
  award: AwardType;
  bonusId: Scalars["ID"]["output"];
  chestHistory: ChestHistoryType;
  createdAt: Scalars["String"]["output"];
  label: Scalars["String"]["output"];
  points: PointType;
  updatedAt: Scalars["String"]["output"];
};

/** columns and relationships of "bonuses" */
export type Bonuses = {
  __typename?: "Bonuses";
  /** An object relationship */
  award: Award;
  awardId: Scalars["bigint"]["output"];
  bonusId: Scalars["bigint"]["output"];
  /** An object relationship */
  chestHistory?: Maybe<ChestHistory>;
  chestHistoryId?: Maybe<Scalars["bigint"]["output"]>;
  createdAt: Scalars["timestamp"]["output"];
  label: Scalars["String"]["output"];
  /** An object relationship */
  point: Points;
  pointsId: Scalars["bigint"]["output"];
  updatedAt: Scalars["timestamp"]["output"];
};

/** aggregated selection of "bonuses" */
export type BonusesAggregate = {
  __typename?: "BonusesAggregate";
  aggregate?: Maybe<BonusesAggregateFields>;
  nodes: Array<Bonuses>;
};

export type BonusesAggregateBoolExp = {
  count?: InputMaybe<BonusesAggregateBoolExpCount>;
};

/** aggregate fields of "bonuses" */
export type BonusesAggregateFields = {
  __typename?: "BonusesAggregateFields";
  avg?: Maybe<BonusesAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<BonusesMaxFields>;
  min?: Maybe<BonusesMinFields>;
  stddev?: Maybe<BonusesStddevFields>;
  stddevPop?: Maybe<BonusesStddevPopFields>;
  stddevSamp?: Maybe<BonusesStddevSampFields>;
  sum?: Maybe<BonusesSumFields>;
  varPop?: Maybe<BonusesVarPopFields>;
  varSamp?: Maybe<BonusesVarSampFields>;
  variance?: Maybe<BonusesVarianceFields>;
};

/** aggregate fields of "bonuses" */
export type BonusesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<BonusesSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "bonuses" */
export type BonusesAggregateOrderBy = {
  avg?: InputMaybe<BonusesAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<BonusesMaxOrderBy>;
  min?: InputMaybe<BonusesMinOrderBy>;
  stddev?: InputMaybe<BonusesStddevOrderBy>;
  stddevPop?: InputMaybe<BonusesStddevPopOrderBy>;
  stddevSamp?: InputMaybe<BonusesStddevSampOrderBy>;
  sum?: InputMaybe<BonusesSumOrderBy>;
  varPop?: InputMaybe<BonusesVarPopOrderBy>;
  varSamp?: InputMaybe<BonusesVarSampOrderBy>;
  variance?: InputMaybe<BonusesVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "bonuses" */
export type BonusesArrRelInsertInput = {
  data: Array<BonusesInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<BonusesOnConflict>;
};

/** aggregate avg on columns */
export type BonusesAvgFields = {
  __typename?: "BonusesAvgFields";
  awardId?: Maybe<Scalars["Float"]["output"]>;
  bonusId?: Maybe<Scalars["Float"]["output"]>;
  chestHistoryId?: Maybe<Scalars["Float"]["output"]>;
  pointsId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "bonuses" */
export type BonusesAvgOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  bonusId?: InputMaybe<OrderBy>;
  chestHistoryId?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "bonuses". All fields are combined with a logical 'AND'. */
export type BonusesBoolExp = {
  _and?: InputMaybe<Array<BonusesBoolExp>>;
  _not?: InputMaybe<BonusesBoolExp>;
  _or?: InputMaybe<Array<BonusesBoolExp>>;
  award?: InputMaybe<AwardBoolExp>;
  awardId?: InputMaybe<BigintComparisonExp>;
  bonusId?: InputMaybe<BigintComparisonExp>;
  chestHistory?: InputMaybe<ChestHistoryBoolExp>;
  chestHistoryId?: InputMaybe<BigintComparisonExp>;
  createdAt?: InputMaybe<TimestampComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
  point?: InputMaybe<PointsBoolExp>;
  pointsId?: InputMaybe<BigintComparisonExp>;
  updatedAt?: InputMaybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "bonuses" */
export enum BonusesConstraint {
  /** unique or primary key constraint on columns "bonus_id" */
  BonusesPkey = "bonuses_pkey",
  /** unique or primary key constraint on columns "chest_history_id" */
  UkB9g0m7a50nte8ovqr4qmr2ush = "uk_b9g0m7a50nte8ovqr4qmr2ush",
}

/** input type for incrementing numeric columns in table "bonuses" */
export type BonusesIncInput = {
  awardId?: InputMaybe<Scalars["bigint"]["input"]>;
  bonusId?: InputMaybe<Scalars["bigint"]["input"]>;
  chestHistoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  pointsId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "bonuses" */
export type BonusesInsertInput = {
  award?: InputMaybe<AwardObjRelInsertInput>;
  awardId?: InputMaybe<Scalars["bigint"]["input"]>;
  bonusId?: InputMaybe<Scalars["bigint"]["input"]>;
  chestHistory?: InputMaybe<ChestHistoryObjRelInsertInput>;
  chestHistoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  point?: InputMaybe<PointsObjRelInsertInput>;
  pointsId?: InputMaybe<Scalars["bigint"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamp"]["input"]>;
};

/** aggregate max on columns */
export type BonusesMaxFields = {
  __typename?: "BonusesMaxFields";
  awardId?: Maybe<Scalars["bigint"]["output"]>;
  bonusId?: Maybe<Scalars["bigint"]["output"]>;
  chestHistoryId?: Maybe<Scalars["bigint"]["output"]>;
  createdAt?: Maybe<Scalars["timestamp"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  pointsId?: Maybe<Scalars["bigint"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamp"]["output"]>;
};

/** order by max() on columns of table "bonuses" */
export type BonusesMaxOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  bonusId?: InputMaybe<OrderBy>;
  chestHistoryId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type BonusesMinFields = {
  __typename?: "BonusesMinFields";
  awardId?: Maybe<Scalars["bigint"]["output"]>;
  bonusId?: Maybe<Scalars["bigint"]["output"]>;
  chestHistoryId?: Maybe<Scalars["bigint"]["output"]>;
  createdAt?: Maybe<Scalars["timestamp"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  pointsId?: Maybe<Scalars["bigint"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamp"]["output"]>;
};

/** order by min() on columns of table "bonuses" */
export type BonusesMinOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  bonusId?: InputMaybe<OrderBy>;
  chestHistoryId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "bonuses" */
export type BonusesMutationResponse = {
  __typename?: "BonusesMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Bonuses>;
};

/** input type for inserting object relation for remote table "bonuses" */
export type BonusesObjRelInsertInput = {
  data: BonusesInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<BonusesOnConflict>;
};

/** on_conflict condition type for table "bonuses" */
export type BonusesOnConflict = {
  constraint: BonusesConstraint;
  updateColumns?: Array<BonusesUpdateColumn>;
  where?: InputMaybe<BonusesBoolExp>;
};

/** Ordering options when selecting data from "bonuses". */
export type BonusesOrderBy = {
  award?: InputMaybe<AwardOrderBy>;
  awardId?: InputMaybe<OrderBy>;
  bonusId?: InputMaybe<OrderBy>;
  chestHistory?: InputMaybe<ChestHistoryOrderBy>;
  chestHistoryId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  point?: InputMaybe<PointsOrderBy>;
  pointsId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: bonuses */
export type BonusesPkColumnsInput = {
  bonusId: Scalars["bigint"]["input"];
};

/** select columns of table "bonuses" */
export enum BonusesSelectColumn {
  /** column name */
  AwardId = "awardId",
  /** column name */
  BonusId = "bonusId",
  /** column name */
  ChestHistoryId = "chestHistoryId",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Label = "label",
  /** column name */
  PointsId = "pointsId",
  /** column name */
  UpdatedAt = "updatedAt",
}

/** input type for updating data in table "bonuses" */
export type BonusesSetInput = {
  awardId?: InputMaybe<Scalars["bigint"]["input"]>;
  bonusId?: InputMaybe<Scalars["bigint"]["input"]>;
  chestHistoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  pointsId?: InputMaybe<Scalars["bigint"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamp"]["input"]>;
};

/** aggregate stddev on columns */
export type BonusesStddevFields = {
  __typename?: "BonusesStddevFields";
  awardId?: Maybe<Scalars["Float"]["output"]>;
  bonusId?: Maybe<Scalars["Float"]["output"]>;
  chestHistoryId?: Maybe<Scalars["Float"]["output"]>;
  pointsId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "bonuses" */
export type BonusesStddevOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  bonusId?: InputMaybe<OrderBy>;
  chestHistoryId?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type BonusesStddevPopFields = {
  __typename?: "BonusesStddevPopFields";
  awardId?: Maybe<Scalars["Float"]["output"]>;
  bonusId?: Maybe<Scalars["Float"]["output"]>;
  chestHistoryId?: Maybe<Scalars["Float"]["output"]>;
  pointsId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevPop() on columns of table "bonuses" */
export type BonusesStddevPopOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  bonusId?: InputMaybe<OrderBy>;
  chestHistoryId?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type BonusesStddevSampFields = {
  __typename?: "BonusesStddevSampFields";
  awardId?: Maybe<Scalars["Float"]["output"]>;
  bonusId?: Maybe<Scalars["Float"]["output"]>;
  chestHistoryId?: Maybe<Scalars["Float"]["output"]>;
  pointsId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevSamp() on columns of table "bonuses" */
export type BonusesStddevSampOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  bonusId?: InputMaybe<OrderBy>;
  chestHistoryId?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "bonuses" */
export type BonusesStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: BonusesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type BonusesStreamCursorValueInput = {
  awardId?: InputMaybe<Scalars["bigint"]["input"]>;
  bonusId?: InputMaybe<Scalars["bigint"]["input"]>;
  chestHistoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  pointsId?: InputMaybe<Scalars["bigint"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamp"]["input"]>;
};

/** aggregate sum on columns */
export type BonusesSumFields = {
  __typename?: "BonusesSumFields";
  awardId?: Maybe<Scalars["bigint"]["output"]>;
  bonusId?: Maybe<Scalars["bigint"]["output"]>;
  chestHistoryId?: Maybe<Scalars["bigint"]["output"]>;
  pointsId?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by sum() on columns of table "bonuses" */
export type BonusesSumOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  bonusId?: InputMaybe<OrderBy>;
  chestHistoryId?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
};

/** update columns of table "bonuses" */
export enum BonusesUpdateColumn {
  /** column name */
  AwardId = "awardId",
  /** column name */
  BonusId = "bonusId",
  /** column name */
  ChestHistoryId = "chestHistoryId",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Label = "label",
  /** column name */
  PointsId = "pointsId",
  /** column name */
  UpdatedAt = "updatedAt",
}

export type BonusesUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<BonusesIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<BonusesSetInput>;
  /** filter the rows which have to be updated */
  where: BonusesBoolExp;
};

/** aggregate varPop on columns */
export type BonusesVarPopFields = {
  __typename?: "BonusesVarPopFields";
  awardId?: Maybe<Scalars["Float"]["output"]>;
  bonusId?: Maybe<Scalars["Float"]["output"]>;
  chestHistoryId?: Maybe<Scalars["Float"]["output"]>;
  pointsId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varPop() on columns of table "bonuses" */
export type BonusesVarPopOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  bonusId?: InputMaybe<OrderBy>;
  chestHistoryId?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type BonusesVarSampFields = {
  __typename?: "BonusesVarSampFields";
  awardId?: Maybe<Scalars["Float"]["output"]>;
  bonusId?: Maybe<Scalars["Float"]["output"]>;
  chestHistoryId?: Maybe<Scalars["Float"]["output"]>;
  pointsId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varSamp() on columns of table "bonuses" */
export type BonusesVarSampOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  bonusId?: InputMaybe<OrderBy>;
  chestHistoryId?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type BonusesVarianceFields = {
  __typename?: "BonusesVarianceFields";
  awardId?: Maybe<Scalars["Float"]["output"]>;
  bonusId?: Maybe<Scalars["Float"]["output"]>;
  chestHistoryId?: Maybe<Scalars["Float"]["output"]>;
  pointsId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "bonuses" */
export type BonusesVarianceOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  bonusId?: InputMaybe<OrderBy>;
  chestHistoryId?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: "Categories";
  /** An array relationship */
  awards: Array<Award>;
  /** An aggregate relationship */
  awardsAggregate: AwardAggregate;
  canAddPoints: Scalars["Boolean"]["output"];
  /** An array relationship */
  categoryEditions: Array<CategoryEdition>;
  /** An aggregate relationship */
  categoryEditionsAggregate: CategoryEditionAggregate;
  categoryId: Scalars["bigint"]["output"];
  categoryName: Scalars["String"]["output"];
  label: Scalars["String"]["output"];
  /** An array relationship */
  subcategories: Array<Subcategories>;
  /** An aggregate relationship */
  subcategoriesAggregate: SubcategoriesAggregate;
};

/** columns and relationships of "categories" */
export type CategoriesAwardsArgs = {
  distinctOn?: InputMaybe<Array<AwardSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<AwardOrderBy>>;
  where?: InputMaybe<AwardBoolExp>;
};

/** columns and relationships of "categories" */
export type CategoriesAwardsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AwardSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<AwardOrderBy>>;
  where?: InputMaybe<AwardBoolExp>;
};

/** columns and relationships of "categories" */
export type CategoriesCategoryEditionsArgs = {
  distinctOn?: InputMaybe<Array<CategoryEditionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoryEditionOrderBy>>;
  where?: InputMaybe<CategoryEditionBoolExp>;
};

/** columns and relationships of "categories" */
export type CategoriesCategoryEditionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CategoryEditionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoryEditionOrderBy>>;
  where?: InputMaybe<CategoryEditionBoolExp>;
};

/** columns and relationships of "categories" */
export type CategoriesSubcategoriesArgs = {
  distinctOn?: InputMaybe<Array<SubcategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<SubcategoriesOrderBy>>;
  where?: InputMaybe<SubcategoriesBoolExp>;
};

/** columns and relationships of "categories" */
export type CategoriesSubcategoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<SubcategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<SubcategoriesOrderBy>>;
  where?: InputMaybe<SubcategoriesBoolExp>;
};

/** aggregated selection of "categories" */
export type CategoriesAggregate = {
  __typename?: "CategoriesAggregate";
  aggregate?: Maybe<CategoriesAggregateFields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type CategoriesAggregateFields = {
  __typename?: "CategoriesAggregateFields";
  avg?: Maybe<CategoriesAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<CategoriesMaxFields>;
  min?: Maybe<CategoriesMinFields>;
  stddev?: Maybe<CategoriesStddevFields>;
  stddevPop?: Maybe<CategoriesStddevPopFields>;
  stddevSamp?: Maybe<CategoriesStddevSampFields>;
  sum?: Maybe<CategoriesSumFields>;
  varPop?: Maybe<CategoriesVarPopFields>;
  varSamp?: Maybe<CategoriesVarSampFields>;
  variance?: Maybe<CategoriesVarianceFields>;
};

/** aggregate fields of "categories" */
export type CategoriesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CategoriesSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type CategoriesAvgFields = {
  __typename?: "CategoriesAvgFields";
  categoryId?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type CategoriesBoolExp = {
  _and?: InputMaybe<Array<CategoriesBoolExp>>;
  _not?: InputMaybe<CategoriesBoolExp>;
  _or?: InputMaybe<Array<CategoriesBoolExp>>;
  awards?: InputMaybe<AwardBoolExp>;
  awardsAggregate?: InputMaybe<AwardAggregateBoolExp>;
  canAddPoints?: InputMaybe<BooleanComparisonExp>;
  categoryEditions?: InputMaybe<CategoryEditionBoolExp>;
  categoryEditionsAggregate?: InputMaybe<CategoryEditionAggregateBoolExp>;
  categoryId?: InputMaybe<BigintComparisonExp>;
  categoryName?: InputMaybe<StringComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
  subcategories?: InputMaybe<SubcategoriesBoolExp>;
  subcategoriesAggregate?: InputMaybe<SubcategoriesAggregateBoolExp>;
};

/** unique or primary key constraints on table "categories" */
export enum CategoriesConstraint {
  /** unique or primary key constraint on columns "category_id" */
  CategoriesPkey = "categories_pkey",
}

/** input type for incrementing numeric columns in table "categories" */
export type CategoriesIncInput = {
  categoryId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "categories" */
export type CategoriesInsertInput = {
  awards?: InputMaybe<AwardArrRelInsertInput>;
  canAddPoints?: InputMaybe<Scalars["Boolean"]["input"]>;
  categoryEditions?: InputMaybe<CategoryEditionArrRelInsertInput>;
  categoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  categoryName?: InputMaybe<Scalars["String"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  subcategories?: InputMaybe<SubcategoriesArrRelInsertInput>;
};

/** aggregate max on columns */
export type CategoriesMaxFields = {
  __typename?: "CategoriesMaxFields";
  categoryId?: Maybe<Scalars["bigint"]["output"]>;
  categoryName?: Maybe<Scalars["String"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type CategoriesMinFields = {
  __typename?: "CategoriesMinFields";
  categoryId?: Maybe<Scalars["bigint"]["output"]>;
  categoryName?: Maybe<Scalars["String"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "categories" */
export type CategoriesMutationResponse = {
  __typename?: "CategoriesMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type CategoriesObjRelInsertInput = {
  data: CategoriesInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<CategoriesOnConflict>;
};

/** on_conflict condition type for table "categories" */
export type CategoriesOnConflict = {
  constraint: CategoriesConstraint;
  updateColumns?: Array<CategoriesUpdateColumn>;
  where?: InputMaybe<CategoriesBoolExp>;
};

/** Ordering options when selecting data from "categories". */
export type CategoriesOrderBy = {
  awardsAggregate?: InputMaybe<AwardAggregateOrderBy>;
  canAddPoints?: InputMaybe<OrderBy>;
  categoryEditionsAggregate?: InputMaybe<CategoryEditionAggregateOrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  categoryName?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  subcategoriesAggregate?: InputMaybe<SubcategoriesAggregateOrderBy>;
};

/** primary key columns input for table: categories */
export type CategoriesPkColumnsInput = {
  categoryId: Scalars["bigint"]["input"];
};

/** select columns of table "categories" */
export enum CategoriesSelectColumn {
  /** column name */
  CanAddPoints = "canAddPoints",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  CategoryName = "categoryName",
  /** column name */
  Label = "label",
}

/** input type for updating data in table "categories" */
export type CategoriesSetInput = {
  canAddPoints?: InputMaybe<Scalars["Boolean"]["input"]>;
  categoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  categoryName?: InputMaybe<Scalars["String"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type CategoriesStddevFields = {
  __typename?: "CategoriesStddevFields";
  categoryId?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddevPop on columns */
export type CategoriesStddevPopFields = {
  __typename?: "CategoriesStddevPopFields";
  categoryId?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddevSamp on columns */
export type CategoriesStddevSampFields = {
  __typename?: "CategoriesStddevSampFields";
  categoryId?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "categories" */
export type CategoriesStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CategoriesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CategoriesStreamCursorValueInput = {
  canAddPoints?: InputMaybe<Scalars["Boolean"]["input"]>;
  categoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  categoryName?: InputMaybe<Scalars["String"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type CategoriesSumFields = {
  __typename?: "CategoriesSumFields";
  categoryId?: Maybe<Scalars["bigint"]["output"]>;
};

/** update columns of table "categories" */
export enum CategoriesUpdateColumn {
  /** column name */
  CanAddPoints = "canAddPoints",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  CategoryName = "categoryName",
  /** column name */
  Label = "label",
}

export type CategoriesUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<CategoriesIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CategoriesSetInput>;
  /** filter the rows which have to be updated */
  where: CategoriesBoolExp;
};

/** aggregate varPop on columns */
export type CategoriesVarPopFields = {
  __typename?: "CategoriesVarPopFields";
  categoryId?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate varSamp on columns */
export type CategoriesVarSampFields = {
  __typename?: "CategoriesVarSampFields";
  categoryId?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type CategoriesVarianceFields = {
  __typename?: "CategoriesVarianceFields";
  categoryId?: Maybe<Scalars["Float"]["output"]>;
};

export type CategoryAggregate = {
  __typename?: "CategoryAggregate";
  category: CategoryType;
  sumOfAll: Scalars["Float"]["output"];
  sumOfBonuses: Scalars["Float"]["output"];
  sumOfPurePoints: Scalars["Float"]["output"];
};

/** columns and relationships of "category_edition" */
export type CategoryEdition = {
  __typename?: "CategoryEdition";
  /** An object relationship */
  category: Categories;
  categoryEditionId: Scalars["bigint"]["output"];
  categoryId: Scalars["bigint"]["output"];
  /** An object relationship */
  edition: Edition;
  editionId: Scalars["bigint"]["output"];
  label: Scalars["String"]["output"];
};

/** aggregated selection of "category_edition" */
export type CategoryEditionAggregate = {
  __typename?: "CategoryEditionAggregate";
  aggregate?: Maybe<CategoryEditionAggregateFields>;
  nodes: Array<CategoryEdition>;
};

export type CategoryEditionAggregateBoolExp = {
  count?: InputMaybe<CategoryEditionAggregateBoolExpCount>;
};

/** aggregate fields of "category_edition" */
export type CategoryEditionAggregateFields = {
  __typename?: "CategoryEditionAggregateFields";
  avg?: Maybe<CategoryEditionAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<CategoryEditionMaxFields>;
  min?: Maybe<CategoryEditionMinFields>;
  stddev?: Maybe<CategoryEditionStddevFields>;
  stddevPop?: Maybe<CategoryEditionStddevPopFields>;
  stddevSamp?: Maybe<CategoryEditionStddevSampFields>;
  sum?: Maybe<CategoryEditionSumFields>;
  varPop?: Maybe<CategoryEditionVarPopFields>;
  varSamp?: Maybe<CategoryEditionVarSampFields>;
  variance?: Maybe<CategoryEditionVarianceFields>;
};

/** aggregate fields of "category_edition" */
export type CategoryEditionAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CategoryEditionSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "category_edition" */
export type CategoryEditionAggregateOrderBy = {
  avg?: InputMaybe<CategoryEditionAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CategoryEditionMaxOrderBy>;
  min?: InputMaybe<CategoryEditionMinOrderBy>;
  stddev?: InputMaybe<CategoryEditionStddevOrderBy>;
  stddevPop?: InputMaybe<CategoryEditionStddevPopOrderBy>;
  stddevSamp?: InputMaybe<CategoryEditionStddevSampOrderBy>;
  sum?: InputMaybe<CategoryEditionSumOrderBy>;
  varPop?: InputMaybe<CategoryEditionVarPopOrderBy>;
  varSamp?: InputMaybe<CategoryEditionVarSampOrderBy>;
  variance?: InputMaybe<CategoryEditionVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "category_edition" */
export type CategoryEditionArrRelInsertInput = {
  data: Array<CategoryEditionInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<CategoryEditionOnConflict>;
};

/** aggregate avg on columns */
export type CategoryEditionAvgFields = {
  __typename?: "CategoryEditionAvgFields";
  categoryEditionId?: Maybe<Scalars["Float"]["output"]>;
  categoryId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "category_edition" */
export type CategoryEditionAvgOrderBy = {
  categoryEditionId?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "category_edition". All fields are combined with a logical 'AND'. */
export type CategoryEditionBoolExp = {
  _and?: InputMaybe<Array<CategoryEditionBoolExp>>;
  _not?: InputMaybe<CategoryEditionBoolExp>;
  _or?: InputMaybe<Array<CategoryEditionBoolExp>>;
  category?: InputMaybe<CategoriesBoolExp>;
  categoryEditionId?: InputMaybe<BigintComparisonExp>;
  categoryId?: InputMaybe<BigintComparisonExp>;
  edition?: InputMaybe<EditionBoolExp>;
  editionId?: InputMaybe<BigintComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "category_edition" */
export enum CategoryEditionConstraint {
  /** unique or primary key constraint on columns "edition_id", "category_id" */
  CategoryEditionPkey = "category_edition_pkey",
  /** unique or primary key constraint on columns "edition_id", "category_id" */
  UniqueCategoryEdition = "unique_category_edition",
}

/** input type for incrementing numeric columns in table "category_edition" */
export type CategoryEditionIncInput = {
  categoryEditionId?: InputMaybe<Scalars["bigint"]["input"]>;
  categoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "category_edition" */
export type CategoryEditionInsertInput = {
  category?: InputMaybe<CategoriesObjRelInsertInput>;
  categoryEditionId?: InputMaybe<Scalars["bigint"]["input"]>;
  categoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  edition?: InputMaybe<EditionObjRelInsertInput>;
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type CategoryEditionMaxFields = {
  __typename?: "CategoryEditionMaxFields";
  categoryEditionId?: Maybe<Scalars["bigint"]["output"]>;
  categoryId?: Maybe<Scalars["bigint"]["output"]>;
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "category_edition" */
export type CategoryEditionMaxOrderBy = {
  categoryEditionId?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CategoryEditionMinFields = {
  __typename?: "CategoryEditionMinFields";
  categoryEditionId?: Maybe<Scalars["bigint"]["output"]>;
  categoryId?: Maybe<Scalars["bigint"]["output"]>;
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "category_edition" */
export type CategoryEditionMinOrderBy = {
  categoryEditionId?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "category_edition" */
export type CategoryEditionMutationResponse = {
  __typename?: "CategoryEditionMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<CategoryEdition>;
};

/** on_conflict condition type for table "category_edition" */
export type CategoryEditionOnConflict = {
  constraint: CategoryEditionConstraint;
  updateColumns?: Array<CategoryEditionUpdateColumn>;
  where?: InputMaybe<CategoryEditionBoolExp>;
};

/** Ordering options when selecting data from "category_edition". */
export type CategoryEditionOrderBy = {
  category?: InputMaybe<CategoriesOrderBy>;
  categoryEditionId?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  edition?: InputMaybe<EditionOrderBy>;
  editionId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: category_edition */
export type CategoryEditionPkColumnsInput = {
  categoryId: Scalars["bigint"]["input"];
  editionId: Scalars["bigint"]["input"];
};

/** select columns of table "category_edition" */
export enum CategoryEditionSelectColumn {
  /** column name */
  CategoryEditionId = "categoryEditionId",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  EditionId = "editionId",
  /** column name */
  Label = "label",
}

/** input type for updating data in table "category_edition" */
export type CategoryEditionSetInput = {
  categoryEditionId?: InputMaybe<Scalars["bigint"]["input"]>;
  categoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type CategoryEditionStddevFields = {
  __typename?: "CategoryEditionStddevFields";
  categoryEditionId?: Maybe<Scalars["Float"]["output"]>;
  categoryId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "category_edition" */
export type CategoryEditionStddevOrderBy = {
  categoryEditionId?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type CategoryEditionStddevPopFields = {
  __typename?: "CategoryEditionStddevPopFields";
  categoryEditionId?: Maybe<Scalars["Float"]["output"]>;
  categoryId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevPop() on columns of table "category_edition" */
export type CategoryEditionStddevPopOrderBy = {
  categoryEditionId?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type CategoryEditionStddevSampFields = {
  __typename?: "CategoryEditionStddevSampFields";
  categoryEditionId?: Maybe<Scalars["Float"]["output"]>;
  categoryId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevSamp() on columns of table "category_edition" */
export type CategoryEditionStddevSampOrderBy = {
  categoryEditionId?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "category_edition" */
export type CategoryEditionStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CategoryEditionStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CategoryEditionStreamCursorValueInput = {
  categoryEditionId?: InputMaybe<Scalars["bigint"]["input"]>;
  categoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type CategoryEditionSumFields = {
  __typename?: "CategoryEditionSumFields";
  categoryEditionId?: Maybe<Scalars["bigint"]["output"]>;
  categoryId?: Maybe<Scalars["bigint"]["output"]>;
  editionId?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by sum() on columns of table "category_edition" */
export type CategoryEditionSumOrderBy = {
  categoryEditionId?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
};

export type CategoryEditionType = {
  __typename?: "CategoryEditionType";
  category: CategoryType;
  categoryEditionId: Scalars["ID"]["output"];
  edition: EditionType;
  label: Scalars["String"]["output"];
};

/** update columns of table "category_edition" */
export enum CategoryEditionUpdateColumn {
  /** column name */
  CategoryEditionId = "categoryEditionId",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  EditionId = "editionId",
  /** column name */
  Label = "label",
}

export type CategoryEditionUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<CategoryEditionIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CategoryEditionSetInput>;
  /** filter the rows which have to be updated */
  where: CategoryEditionBoolExp;
};

/** aggregate varPop on columns */
export type CategoryEditionVarPopFields = {
  __typename?: "CategoryEditionVarPopFields";
  categoryEditionId?: Maybe<Scalars["Float"]["output"]>;
  categoryId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varPop() on columns of table "category_edition" */
export type CategoryEditionVarPopOrderBy = {
  categoryEditionId?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type CategoryEditionVarSampFields = {
  __typename?: "CategoryEditionVarSampFields";
  categoryEditionId?: Maybe<Scalars["Float"]["output"]>;
  categoryId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varSamp() on columns of table "category_edition" */
export type CategoryEditionVarSampOrderBy = {
  categoryEditionId?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type CategoryEditionVarianceFields = {
  __typename?: "CategoryEditionVarianceFields";
  categoryEditionId?: Maybe<Scalars["Float"]["output"]>;
  categoryId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "category_edition" */
export type CategoryEditionVarianceOrderBy = {
  categoryEditionId?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
};

export type CategoryPointsSumType = {
  __typename?: "CategoryPointsSumType";
  category: CategoryType;
  maxPoints: Scalars["Float"]["output"];
  sumOfAll: Scalars["Float"]["output"];
  sumOfBonuses: Scalars["Float"]["output"];
  sumOfPurePoints: Scalars["Float"]["output"];
};

export type CategoryPointsType = {
  __typename?: "CategoryPointsType";
  aggregate: CategoryAggregate;
  category: CategoryType;
  subcategoryPoints: Array<SubcategoryPointsType>;
};

export type CategoryType = {
  __typename?: "CategoryType";
  canAddPoints: Scalars["Boolean"]["output"];
  categoryEdition: Array<Maybe<CategoryEditionType>>;
  categoryId: Scalars["ID"]["output"];
  categoryName: Scalars["String"]["output"];
  label: Scalars["String"]["output"];
};

/** columns and relationships of "chest_award" */
export type ChestAward = {
  __typename?: "ChestAward";
  /** An object relationship */
  award: Award;
  awardId: Scalars["bigint"]["output"];
  /** An object relationship */
  chest: Chests;
  chestAwardId: Scalars["bigint"]["output"];
  chestId: Scalars["bigint"]["output"];
  label: Scalars["String"]["output"];
};

/** aggregated selection of "chest_award" */
export type ChestAwardAggregate = {
  __typename?: "ChestAwardAggregate";
  aggregate?: Maybe<ChestAwardAggregateFields>;
  nodes: Array<ChestAward>;
};

export type ChestAwardAggregateBoolExp = {
  count?: InputMaybe<ChestAwardAggregateBoolExpCount>;
};

/** aggregate fields of "chest_award" */
export type ChestAwardAggregateFields = {
  __typename?: "ChestAwardAggregateFields";
  avg?: Maybe<ChestAwardAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<ChestAwardMaxFields>;
  min?: Maybe<ChestAwardMinFields>;
  stddev?: Maybe<ChestAwardStddevFields>;
  stddevPop?: Maybe<ChestAwardStddevPopFields>;
  stddevSamp?: Maybe<ChestAwardStddevSampFields>;
  sum?: Maybe<ChestAwardSumFields>;
  varPop?: Maybe<ChestAwardVarPopFields>;
  varSamp?: Maybe<ChestAwardVarSampFields>;
  variance?: Maybe<ChestAwardVarianceFields>;
};

/** aggregate fields of "chest_award" */
export type ChestAwardAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ChestAwardSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "chest_award" */
export type ChestAwardAggregateOrderBy = {
  avg?: InputMaybe<ChestAwardAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ChestAwardMaxOrderBy>;
  min?: InputMaybe<ChestAwardMinOrderBy>;
  stddev?: InputMaybe<ChestAwardStddevOrderBy>;
  stddevPop?: InputMaybe<ChestAwardStddevPopOrderBy>;
  stddevSamp?: InputMaybe<ChestAwardStddevSampOrderBy>;
  sum?: InputMaybe<ChestAwardSumOrderBy>;
  varPop?: InputMaybe<ChestAwardVarPopOrderBy>;
  varSamp?: InputMaybe<ChestAwardVarSampOrderBy>;
  variance?: InputMaybe<ChestAwardVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "chest_award" */
export type ChestAwardArrRelInsertInput = {
  data: Array<ChestAwardInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ChestAwardOnConflict>;
};

/** aggregate avg on columns */
export type ChestAwardAvgFields = {
  __typename?: "ChestAwardAvgFields";
  awardId?: Maybe<Scalars["Float"]["output"]>;
  chestAwardId?: Maybe<Scalars["Float"]["output"]>;
  chestId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "chest_award" */
export type ChestAwardAvgOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  chestAwardId?: InputMaybe<OrderBy>;
  chestId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "chest_award". All fields are combined with a logical 'AND'. */
export type ChestAwardBoolExp = {
  _and?: InputMaybe<Array<ChestAwardBoolExp>>;
  _not?: InputMaybe<ChestAwardBoolExp>;
  _or?: InputMaybe<Array<ChestAwardBoolExp>>;
  award?: InputMaybe<AwardBoolExp>;
  awardId?: InputMaybe<BigintComparisonExp>;
  chest?: InputMaybe<ChestsBoolExp>;
  chestAwardId?: InputMaybe<BigintComparisonExp>;
  chestId?: InputMaybe<BigintComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "chest_award" */
export enum ChestAwardConstraint {
  /** unique or primary key constraint on columns "chest_award_id" */
  ChestAwardPkey = "chest_award_pkey",
}

/** input type for incrementing numeric columns in table "chest_award" */
export type ChestAwardIncInput = {
  awardId?: InputMaybe<Scalars["bigint"]["input"]>;
  chestAwardId?: InputMaybe<Scalars["bigint"]["input"]>;
  chestId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "chest_award" */
export type ChestAwardInsertInput = {
  award?: InputMaybe<AwardObjRelInsertInput>;
  awardId?: InputMaybe<Scalars["bigint"]["input"]>;
  chest?: InputMaybe<ChestsObjRelInsertInput>;
  chestAwardId?: InputMaybe<Scalars["bigint"]["input"]>;
  chestId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type ChestAwardMaxFields = {
  __typename?: "ChestAwardMaxFields";
  awardId?: Maybe<Scalars["bigint"]["output"]>;
  chestAwardId?: Maybe<Scalars["bigint"]["output"]>;
  chestId?: Maybe<Scalars["bigint"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "chest_award" */
export type ChestAwardMaxOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  chestAwardId?: InputMaybe<OrderBy>;
  chestId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ChestAwardMinFields = {
  __typename?: "ChestAwardMinFields";
  awardId?: Maybe<Scalars["bigint"]["output"]>;
  chestAwardId?: Maybe<Scalars["bigint"]["output"]>;
  chestId?: Maybe<Scalars["bigint"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "chest_award" */
export type ChestAwardMinOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  chestAwardId?: InputMaybe<OrderBy>;
  chestId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "chest_award" */
export type ChestAwardMutationResponse = {
  __typename?: "ChestAwardMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<ChestAward>;
};

/** on_conflict condition type for table "chest_award" */
export type ChestAwardOnConflict = {
  constraint: ChestAwardConstraint;
  updateColumns?: Array<ChestAwardUpdateColumn>;
  where?: InputMaybe<ChestAwardBoolExp>;
};

/** Ordering options when selecting data from "chest_award". */
export type ChestAwardOrderBy = {
  award?: InputMaybe<AwardOrderBy>;
  awardId?: InputMaybe<OrderBy>;
  chest?: InputMaybe<ChestsOrderBy>;
  chestAwardId?: InputMaybe<OrderBy>;
  chestId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: chest_award */
export type ChestAwardPkColumnsInput = {
  chestAwardId: Scalars["bigint"]["input"];
};

/** select columns of table "chest_award" */
export enum ChestAwardSelectColumn {
  /** column name */
  AwardId = "awardId",
  /** column name */
  ChestAwardId = "chestAwardId",
  /** column name */
  ChestId = "chestId",
  /** column name */
  Label = "label",
}

/** input type for updating data in table "chest_award" */
export type ChestAwardSetInput = {
  awardId?: InputMaybe<Scalars["bigint"]["input"]>;
  chestAwardId?: InputMaybe<Scalars["bigint"]["input"]>;
  chestId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type ChestAwardStddevFields = {
  __typename?: "ChestAwardStddevFields";
  awardId?: Maybe<Scalars["Float"]["output"]>;
  chestAwardId?: Maybe<Scalars["Float"]["output"]>;
  chestId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "chest_award" */
export type ChestAwardStddevOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  chestAwardId?: InputMaybe<OrderBy>;
  chestId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type ChestAwardStddevPopFields = {
  __typename?: "ChestAwardStddevPopFields";
  awardId?: Maybe<Scalars["Float"]["output"]>;
  chestAwardId?: Maybe<Scalars["Float"]["output"]>;
  chestId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevPop() on columns of table "chest_award" */
export type ChestAwardStddevPopOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  chestAwardId?: InputMaybe<OrderBy>;
  chestId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type ChestAwardStddevSampFields = {
  __typename?: "ChestAwardStddevSampFields";
  awardId?: Maybe<Scalars["Float"]["output"]>;
  chestAwardId?: Maybe<Scalars["Float"]["output"]>;
  chestId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevSamp() on columns of table "chest_award" */
export type ChestAwardStddevSampOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  chestAwardId?: InputMaybe<OrderBy>;
  chestId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "chest_award" */
export type ChestAwardStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ChestAwardStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ChestAwardStreamCursorValueInput = {
  awardId?: InputMaybe<Scalars["bigint"]["input"]>;
  chestAwardId?: InputMaybe<Scalars["bigint"]["input"]>;
  chestId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type ChestAwardSumFields = {
  __typename?: "ChestAwardSumFields";
  awardId?: Maybe<Scalars["bigint"]["output"]>;
  chestAwardId?: Maybe<Scalars["bigint"]["output"]>;
  chestId?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by sum() on columns of table "chest_award" */
export type ChestAwardSumOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  chestAwardId?: InputMaybe<OrderBy>;
  chestId?: InputMaybe<OrderBy>;
};

/** update columns of table "chest_award" */
export enum ChestAwardUpdateColumn {
  /** column name */
  AwardId = "awardId",
  /** column name */
  ChestAwardId = "chestAwardId",
  /** column name */
  ChestId = "chestId",
  /** column name */
  Label = "label",
}

export type ChestAwardUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ChestAwardIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ChestAwardSetInput>;
  /** filter the rows which have to be updated */
  where: ChestAwardBoolExp;
};

/** aggregate varPop on columns */
export type ChestAwardVarPopFields = {
  __typename?: "ChestAwardVarPopFields";
  awardId?: Maybe<Scalars["Float"]["output"]>;
  chestAwardId?: Maybe<Scalars["Float"]["output"]>;
  chestId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varPop() on columns of table "chest_award" */
export type ChestAwardVarPopOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  chestAwardId?: InputMaybe<OrderBy>;
  chestId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type ChestAwardVarSampFields = {
  __typename?: "ChestAwardVarSampFields";
  awardId?: Maybe<Scalars["Float"]["output"]>;
  chestAwardId?: Maybe<Scalars["Float"]["output"]>;
  chestId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varSamp() on columns of table "chest_award" */
export type ChestAwardVarSampOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  chestAwardId?: InputMaybe<OrderBy>;
  chestId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type ChestAwardVarianceFields = {
  __typename?: "ChestAwardVarianceFields";
  awardId?: Maybe<Scalars["Float"]["output"]>;
  chestAwardId?: Maybe<Scalars["Float"]["output"]>;
  chestId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "chest_award" */
export type ChestAwardVarianceOrderBy = {
  awardId?: InputMaybe<OrderBy>;
  chestAwardId?: InputMaybe<OrderBy>;
  chestId?: InputMaybe<OrderBy>;
};

/** columns and relationships of "chest_history" */
export type ChestHistory = {
  __typename?: "ChestHistory";
  /** An object relationship */
  bonus?: Maybe<Bonuses>;
  /** An object relationship */
  chest: Chests;
  chestHistoryId: Scalars["bigint"]["output"];
  chestId: Scalars["bigint"]["output"];
  createdAt: Scalars["timestamp"]["output"];
  label: Scalars["String"]["output"];
  opened: Scalars["Boolean"]["output"];
  /** An object relationship */
  subcategory: Subcategories;
  subcategoryId: Scalars["bigint"]["output"];
  teacherId: Scalars["bigint"]["output"];
  updatedAt: Scalars["timestamp"]["output"];
  /** An object relationship */
  user: Users;
  /** An object relationship */
  userByTeacherId: Users;
  userId: Scalars["bigint"]["output"];
};

/** aggregated selection of "chest_history" */
export type ChestHistoryAggregate = {
  __typename?: "ChestHistoryAggregate";
  aggregate?: Maybe<ChestHistoryAggregateFields>;
  nodes: Array<ChestHistory>;
};

export type ChestHistoryAggregateBoolExp = {
  bool_and?: InputMaybe<ChestHistoryAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<ChestHistoryAggregateBoolExpBool_Or>;
  count?: InputMaybe<ChestHistoryAggregateBoolExpCount>;
};

/** aggregate fields of "chest_history" */
export type ChestHistoryAggregateFields = {
  __typename?: "ChestHistoryAggregateFields";
  avg?: Maybe<ChestHistoryAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<ChestHistoryMaxFields>;
  min?: Maybe<ChestHistoryMinFields>;
  stddev?: Maybe<ChestHistoryStddevFields>;
  stddevPop?: Maybe<ChestHistoryStddevPopFields>;
  stddevSamp?: Maybe<ChestHistoryStddevSampFields>;
  sum?: Maybe<ChestHistorySumFields>;
  varPop?: Maybe<ChestHistoryVarPopFields>;
  varSamp?: Maybe<ChestHistoryVarSampFields>;
  variance?: Maybe<ChestHistoryVarianceFields>;
};

/** aggregate fields of "chest_history" */
export type ChestHistoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ChestHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "chest_history" */
export type ChestHistoryAggregateOrderBy = {
  avg?: InputMaybe<ChestHistoryAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ChestHistoryMaxOrderBy>;
  min?: InputMaybe<ChestHistoryMinOrderBy>;
  stddev?: InputMaybe<ChestHistoryStddevOrderBy>;
  stddevPop?: InputMaybe<ChestHistoryStddevPopOrderBy>;
  stddevSamp?: InputMaybe<ChestHistoryStddevSampOrderBy>;
  sum?: InputMaybe<ChestHistorySumOrderBy>;
  varPop?: InputMaybe<ChestHistoryVarPopOrderBy>;
  varSamp?: InputMaybe<ChestHistoryVarSampOrderBy>;
  variance?: InputMaybe<ChestHistoryVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "chest_history" */
export type ChestHistoryArrRelInsertInput = {
  data: Array<ChestHistoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ChestHistoryOnConflict>;
};

/** aggregate avg on columns */
export type ChestHistoryAvgFields = {
  __typename?: "ChestHistoryAvgFields";
  chestHistoryId?: Maybe<Scalars["Float"]["output"]>;
  chestId?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "chest_history" */
export type ChestHistoryAvgOrderBy = {
  chestHistoryId?: InputMaybe<OrderBy>;
  chestId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "chest_history". All fields are combined with a logical 'AND'. */
export type ChestHistoryBoolExp = {
  _and?: InputMaybe<Array<ChestHistoryBoolExp>>;
  _not?: InputMaybe<ChestHistoryBoolExp>;
  _or?: InputMaybe<Array<ChestHistoryBoolExp>>;
  bonus?: InputMaybe<BonusesBoolExp>;
  chest?: InputMaybe<ChestsBoolExp>;
  chestHistoryId?: InputMaybe<BigintComparisonExp>;
  chestId?: InputMaybe<BigintComparisonExp>;
  createdAt?: InputMaybe<TimestampComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
  opened?: InputMaybe<BooleanComparisonExp>;
  subcategory?: InputMaybe<SubcategoriesBoolExp>;
  subcategoryId?: InputMaybe<BigintComparisonExp>;
  teacherId?: InputMaybe<BigintComparisonExp>;
  updatedAt?: InputMaybe<TimestampComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userByTeacherId?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<BigintComparisonExp>;
};

/** unique or primary key constraints on table "chest_history" */
export enum ChestHistoryConstraint {
  /** unique or primary key constraint on columns "chest_history_id" */
  ChestHistoryPkey = "chest_history_pkey",
}

/** input type for incrementing numeric columns in table "chest_history" */
export type ChestHistoryIncInput = {
  chestHistoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  chestId?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  teacherId?: InputMaybe<Scalars["bigint"]["input"]>;
  userId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "chest_history" */
export type ChestHistoryInsertInput = {
  bonus?: InputMaybe<BonusesObjRelInsertInput>;
  chest?: InputMaybe<ChestsObjRelInsertInput>;
  chestHistoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  chestId?: InputMaybe<Scalars["bigint"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  opened?: InputMaybe<Scalars["Boolean"]["input"]>;
  subcategory?: InputMaybe<SubcategoriesObjRelInsertInput>;
  subcategoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  teacherId?: InputMaybe<Scalars["bigint"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userByTeacherId?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate max on columns */
export type ChestHistoryMaxFields = {
  __typename?: "ChestHistoryMaxFields";
  chestHistoryId?: Maybe<Scalars["bigint"]["output"]>;
  chestId?: Maybe<Scalars["bigint"]["output"]>;
  createdAt?: Maybe<Scalars["timestamp"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  subcategoryId?: Maybe<Scalars["bigint"]["output"]>;
  teacherId?: Maybe<Scalars["bigint"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamp"]["output"]>;
  userId?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by max() on columns of table "chest_history" */
export type ChestHistoryMaxOrderBy = {
  chestHistoryId?: InputMaybe<OrderBy>;
  chestId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ChestHistoryMinFields = {
  __typename?: "ChestHistoryMinFields";
  chestHistoryId?: Maybe<Scalars["bigint"]["output"]>;
  chestId?: Maybe<Scalars["bigint"]["output"]>;
  createdAt?: Maybe<Scalars["timestamp"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  subcategoryId?: Maybe<Scalars["bigint"]["output"]>;
  teacherId?: Maybe<Scalars["bigint"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamp"]["output"]>;
  userId?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by min() on columns of table "chest_history" */
export type ChestHistoryMinOrderBy = {
  chestHistoryId?: InputMaybe<OrderBy>;
  chestId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "chest_history" */
export type ChestHistoryMutationResponse = {
  __typename?: "ChestHistoryMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<ChestHistory>;
};

/** input type for inserting object relation for remote table "chest_history" */
export type ChestHistoryObjRelInsertInput = {
  data: ChestHistoryInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ChestHistoryOnConflict>;
};

/** on_conflict condition type for table "chest_history" */
export type ChestHistoryOnConflict = {
  constraint: ChestHistoryConstraint;
  updateColumns?: Array<ChestHistoryUpdateColumn>;
  where?: InputMaybe<ChestHistoryBoolExp>;
};

/** Ordering options when selecting data from "chest_history". */
export type ChestHistoryOrderBy = {
  bonus?: InputMaybe<BonusesOrderBy>;
  chest?: InputMaybe<ChestsOrderBy>;
  chestHistoryId?: InputMaybe<OrderBy>;
  chestId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  opened?: InputMaybe<OrderBy>;
  subcategory?: InputMaybe<SubcategoriesOrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userByTeacherId?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: chest_history */
export type ChestHistoryPkColumnsInput = {
  chestHistoryId: Scalars["bigint"]["input"];
};

/** select columns of table "chest_history" */
export enum ChestHistorySelectColumn {
  /** column name */
  ChestHistoryId = "chestHistoryId",
  /** column name */
  ChestId = "chestId",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Label = "label",
  /** column name */
  Opened = "opened",
  /** column name */
  SubcategoryId = "subcategoryId",
  /** column name */
  TeacherId = "teacherId",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UserId = "userId",
}

/** select "chestHistoryAggregateBoolExpBool_andArgumentsColumns" columns of table "chest_history" */
export enum ChestHistorySelectColumnChestHistoryAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  Opened = "opened",
}

/** select "chestHistoryAggregateBoolExpBool_orArgumentsColumns" columns of table "chest_history" */
export enum ChestHistorySelectColumnChestHistoryAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  Opened = "opened",
}

/** input type for updating data in table "chest_history" */
export type ChestHistorySetInput = {
  chestHistoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  chestId?: InputMaybe<Scalars["bigint"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  opened?: InputMaybe<Scalars["Boolean"]["input"]>;
  subcategoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  teacherId?: InputMaybe<Scalars["bigint"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  userId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate stddev on columns */
export type ChestHistoryStddevFields = {
  __typename?: "ChestHistoryStddevFields";
  chestHistoryId?: Maybe<Scalars["Float"]["output"]>;
  chestId?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "chest_history" */
export type ChestHistoryStddevOrderBy = {
  chestHistoryId?: InputMaybe<OrderBy>;
  chestId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type ChestHistoryStddevPopFields = {
  __typename?: "ChestHistoryStddevPopFields";
  chestHistoryId?: Maybe<Scalars["Float"]["output"]>;
  chestId?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevPop() on columns of table "chest_history" */
export type ChestHistoryStddevPopOrderBy = {
  chestHistoryId?: InputMaybe<OrderBy>;
  chestId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type ChestHistoryStddevSampFields = {
  __typename?: "ChestHistoryStddevSampFields";
  chestHistoryId?: Maybe<Scalars["Float"]["output"]>;
  chestId?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevSamp() on columns of table "chest_history" */
export type ChestHistoryStddevSampOrderBy = {
  chestHistoryId?: InputMaybe<OrderBy>;
  chestId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "chest_history" */
export type ChestHistoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ChestHistoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ChestHistoryStreamCursorValueInput = {
  chestHistoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  chestId?: InputMaybe<Scalars["bigint"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  opened?: InputMaybe<Scalars["Boolean"]["input"]>;
  subcategoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  teacherId?: InputMaybe<Scalars["bigint"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  userId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate sum on columns */
export type ChestHistorySumFields = {
  __typename?: "ChestHistorySumFields";
  chestHistoryId?: Maybe<Scalars["bigint"]["output"]>;
  chestId?: Maybe<Scalars["bigint"]["output"]>;
  subcategoryId?: Maybe<Scalars["bigint"]["output"]>;
  teacherId?: Maybe<Scalars["bigint"]["output"]>;
  userId?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by sum() on columns of table "chest_history" */
export type ChestHistorySumOrderBy = {
  chestHistoryId?: InputMaybe<OrderBy>;
  chestId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

export type ChestHistoryType = {
  __typename?: "ChestHistoryType";
  chest: ChestType;
  chestHistoryId: Scalars["ID"]["output"];
  createdAt: Scalars["String"]["output"];
  label: Scalars["String"]["output"];
  opened: Scalars["Boolean"]["output"];
  subcategory: SubcategoryType;
  teacher: UserType;
  updatedAt: Scalars["String"]["output"];
  user: UserType;
};

/** update columns of table "chest_history" */
export enum ChestHistoryUpdateColumn {
  /** column name */
  ChestHistoryId = "chestHistoryId",
  /** column name */
  ChestId = "chestId",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Label = "label",
  /** column name */
  Opened = "opened",
  /** column name */
  SubcategoryId = "subcategoryId",
  /** column name */
  TeacherId = "teacherId",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UserId = "userId",
}

export type ChestHistoryUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ChestHistoryIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ChestHistorySetInput>;
  /** filter the rows which have to be updated */
  where: ChestHistoryBoolExp;
};

/** aggregate varPop on columns */
export type ChestHistoryVarPopFields = {
  __typename?: "ChestHistoryVarPopFields";
  chestHistoryId?: Maybe<Scalars["Float"]["output"]>;
  chestId?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varPop() on columns of table "chest_history" */
export type ChestHistoryVarPopOrderBy = {
  chestHistoryId?: InputMaybe<OrderBy>;
  chestId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type ChestHistoryVarSampFields = {
  __typename?: "ChestHistoryVarSampFields";
  chestHistoryId?: Maybe<Scalars["Float"]["output"]>;
  chestId?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varSamp() on columns of table "chest_history" */
export type ChestHistoryVarSampOrderBy = {
  chestHistoryId?: InputMaybe<OrderBy>;
  chestId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type ChestHistoryVarianceFields = {
  __typename?: "ChestHistoryVarianceFields";
  chestHistoryId?: Maybe<Scalars["Float"]["output"]>;
  chestId?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "chest_history" */
export type ChestHistoryVarianceOrderBy = {
  chestHistoryId?: InputMaybe<OrderBy>;
  chestId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

export type ChestType = {
  __typename?: "ChestType";
  chestId: Scalars["ID"]["output"];
  chestType: Scalars["String"]["output"];
  edition: EditionType;
  imageFile?: Maybe<FileType>;
  label: Scalars["String"]["output"];
};

/** columns and relationships of "chests" */
export type Chests = {
  __typename?: "Chests";
  /** An array relationship */
  chestAwards: Array<ChestAward>;
  /** An aggregate relationship */
  chestAwardsAggregate: ChestAwardAggregate;
  /** An array relationship */
  chestHistories: Array<ChestHistory>;
  /** An aggregate relationship */
  chestHistoriesAggregate: ChestHistoryAggregate;
  chestId: Scalars["bigint"]["output"];
  /** An object relationship */
  edition: Edition;
  editionId: Scalars["bigint"]["output"];
  /** An object relationship */
  file?: Maybe<Files>;
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  label: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

/** columns and relationships of "chests" */
export type ChestsChestAwardsArgs = {
  distinctOn?: InputMaybe<Array<ChestAwardSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestAwardOrderBy>>;
  where?: InputMaybe<ChestAwardBoolExp>;
};

/** columns and relationships of "chests" */
export type ChestsChestAwardsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChestAwardSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestAwardOrderBy>>;
  where?: InputMaybe<ChestAwardBoolExp>;
};

/** columns and relationships of "chests" */
export type ChestsChestHistoriesArgs = {
  distinctOn?: InputMaybe<Array<ChestHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestHistoryOrderBy>>;
  where?: InputMaybe<ChestHistoryBoolExp>;
};

/** columns and relationships of "chests" */
export type ChestsChestHistoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChestHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestHistoryOrderBy>>;
  where?: InputMaybe<ChestHistoryBoolExp>;
};

/** aggregated selection of "chests" */
export type ChestsAggregate = {
  __typename?: "ChestsAggregate";
  aggregate?: Maybe<ChestsAggregateFields>;
  nodes: Array<Chests>;
};

export type ChestsAggregateBoolExp = {
  count?: InputMaybe<ChestsAggregateBoolExpCount>;
};

/** aggregate fields of "chests" */
export type ChestsAggregateFields = {
  __typename?: "ChestsAggregateFields";
  avg?: Maybe<ChestsAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<ChestsMaxFields>;
  min?: Maybe<ChestsMinFields>;
  stddev?: Maybe<ChestsStddevFields>;
  stddevPop?: Maybe<ChestsStddevPopFields>;
  stddevSamp?: Maybe<ChestsStddevSampFields>;
  sum?: Maybe<ChestsSumFields>;
  varPop?: Maybe<ChestsVarPopFields>;
  varSamp?: Maybe<ChestsVarSampFields>;
  variance?: Maybe<ChestsVarianceFields>;
};

/** aggregate fields of "chests" */
export type ChestsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ChestsSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "chests" */
export type ChestsAggregateOrderBy = {
  avg?: InputMaybe<ChestsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ChestsMaxOrderBy>;
  min?: InputMaybe<ChestsMinOrderBy>;
  stddev?: InputMaybe<ChestsStddevOrderBy>;
  stddevPop?: InputMaybe<ChestsStddevPopOrderBy>;
  stddevSamp?: InputMaybe<ChestsStddevSampOrderBy>;
  sum?: InputMaybe<ChestsSumOrderBy>;
  varPop?: InputMaybe<ChestsVarPopOrderBy>;
  varSamp?: InputMaybe<ChestsVarSampOrderBy>;
  variance?: InputMaybe<ChestsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "chests" */
export type ChestsArrRelInsertInput = {
  data: Array<ChestsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ChestsOnConflict>;
};

/** aggregate avg on columns */
export type ChestsAvgFields = {
  __typename?: "ChestsAvgFields";
  chestId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "chests" */
export type ChestsAvgOrderBy = {
  chestId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "chests". All fields are combined with a logical 'AND'. */
export type ChestsBoolExp = {
  _and?: InputMaybe<Array<ChestsBoolExp>>;
  _not?: InputMaybe<ChestsBoolExp>;
  _or?: InputMaybe<Array<ChestsBoolExp>>;
  chestAwards?: InputMaybe<ChestAwardBoolExp>;
  chestAwardsAggregate?: InputMaybe<ChestAwardAggregateBoolExp>;
  chestHistories?: InputMaybe<ChestHistoryBoolExp>;
  chestHistoriesAggregate?: InputMaybe<ChestHistoryAggregateBoolExp>;
  chestId?: InputMaybe<BigintComparisonExp>;
  edition?: InputMaybe<EditionBoolExp>;
  editionId?: InputMaybe<BigintComparisonExp>;
  file?: InputMaybe<FilesBoolExp>;
  imageFileId?: InputMaybe<BigintComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "chests" */
export enum ChestsConstraint {
  /** unique or primary key constraint on columns "chest_id" */
  ChestsPkey = "chests_pkey",
}

/** input type for incrementing numeric columns in table "chests" */
export type ChestsIncInput = {
  chestId?: InputMaybe<Scalars["bigint"]["input"]>;
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  imageFileId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "chests" */
export type ChestsInsertInput = {
  chestAwards?: InputMaybe<ChestAwardArrRelInsertInput>;
  chestHistories?: InputMaybe<ChestHistoryArrRelInsertInput>;
  chestId?: InputMaybe<Scalars["bigint"]["input"]>;
  edition?: InputMaybe<EditionObjRelInsertInput>;
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  file?: InputMaybe<FilesObjRelInsertInput>;
  imageFileId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type ChestsMaxFields = {
  __typename?: "ChestsMaxFields";
  chestId?: Maybe<Scalars["bigint"]["output"]>;
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "chests" */
export type ChestsMaxOrderBy = {
  chestId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ChestsMinFields = {
  __typename?: "ChestsMinFields";
  chestId?: Maybe<Scalars["bigint"]["output"]>;
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "chests" */
export type ChestsMinOrderBy = {
  chestId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "chests" */
export type ChestsMutationResponse = {
  __typename?: "ChestsMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Chests>;
};

/** input type for inserting object relation for remote table "chests" */
export type ChestsObjRelInsertInput = {
  data: ChestsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ChestsOnConflict>;
};

/** on_conflict condition type for table "chests" */
export type ChestsOnConflict = {
  constraint: ChestsConstraint;
  updateColumns?: Array<ChestsUpdateColumn>;
  where?: InputMaybe<ChestsBoolExp>;
};

/** Ordering options when selecting data from "chests". */
export type ChestsOrderBy = {
  chestAwardsAggregate?: InputMaybe<ChestAwardAggregateOrderBy>;
  chestHistoriesAggregate?: InputMaybe<ChestHistoryAggregateOrderBy>;
  chestId?: InputMaybe<OrderBy>;
  edition?: InputMaybe<EditionOrderBy>;
  editionId?: InputMaybe<OrderBy>;
  file?: InputMaybe<FilesOrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: chests */
export type ChestsPkColumnsInput = {
  chestId: Scalars["bigint"]["input"];
};

/** select columns of table "chests" */
export enum ChestsSelectColumn {
  /** column name */
  ChestId = "chestId",
  /** column name */
  EditionId = "editionId",
  /** column name */
  ImageFileId = "imageFileId",
  /** column name */
  Label = "label",
  /** column name */
  Type = "type",
}

/** input type for updating data in table "chests" */
export type ChestsSetInput = {
  chestId?: InputMaybe<Scalars["bigint"]["input"]>;
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  imageFileId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type ChestsStddevFields = {
  __typename?: "ChestsStddevFields";
  chestId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "chests" */
export type ChestsStddevOrderBy = {
  chestId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type ChestsStddevPopFields = {
  __typename?: "ChestsStddevPopFields";
  chestId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevPop() on columns of table "chests" */
export type ChestsStddevPopOrderBy = {
  chestId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type ChestsStddevSampFields = {
  __typename?: "ChestsStddevSampFields";
  chestId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevSamp() on columns of table "chests" */
export type ChestsStddevSampOrderBy = {
  chestId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "chests" */
export type ChestsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ChestsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ChestsStreamCursorValueInput = {
  chestId?: InputMaybe<Scalars["bigint"]["input"]>;
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  imageFileId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type ChestsSumFields = {
  __typename?: "ChestsSumFields";
  chestId?: Maybe<Scalars["bigint"]["output"]>;
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by sum() on columns of table "chests" */
export type ChestsSumOrderBy = {
  chestId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
};

/** update columns of table "chests" */
export enum ChestsUpdateColumn {
  /** column name */
  ChestId = "chestId",
  /** column name */
  EditionId = "editionId",
  /** column name */
  ImageFileId = "imageFileId",
  /** column name */
  Label = "label",
  /** column name */
  Type = "type",
}

export type ChestsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ChestsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ChestsSetInput>;
  /** filter the rows which have to be updated */
  where: ChestsBoolExp;
};

/** aggregate varPop on columns */
export type ChestsVarPopFields = {
  __typename?: "ChestsVarPopFields";
  chestId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varPop() on columns of table "chests" */
export type ChestsVarPopOrderBy = {
  chestId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type ChestsVarSampFields = {
  __typename?: "ChestsVarSampFields";
  chestId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varSamp() on columns of table "chests" */
export type ChestsVarSampOrderBy = {
  chestId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type ChestsVarianceFields = {
  __typename?: "ChestsVarianceFields";
  chestId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "chests" */
export type ChestsVarianceOrderBy = {
  chestId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type DateComparisonExp = {
  _eq?: InputMaybe<Scalars["date"]["input"]>;
  _gt?: InputMaybe<Scalars["date"]["input"]>;
  _gte?: InputMaybe<Scalars["date"]["input"]>;
  _in?: InputMaybe<Array<Scalars["date"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["date"]["input"]>;
  _lte?: InputMaybe<Scalars["date"]["input"]>;
  _neq?: InputMaybe<Scalars["date"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["date"]["input"]>>;
};

/** columns and relationships of "edition" */
export type Edition = {
  __typename?: "Edition";
  /** An array relationship */
  awardEditions: Array<AwardEdition>;
  /** An aggregate relationship */
  awardEditionsAggregate: AwardEditionAggregate;
  /** An array relationship */
  categoryEditions: Array<CategoryEdition>;
  /** An aggregate relationship */
  categoryEditionsAggregate: CategoryEditionAggregate;
  /** An array relationship */
  chests: Array<Chests>;
  /** An aggregate relationship */
  chestsAggregate: ChestsAggregate;
  editionId: Scalars["bigint"]["output"];
  editionYear: Scalars["Int"]["output"];
  endDate: Scalars["date"]["output"];
  /** An array relationship */
  groups: Array<Groups>;
  /** An aggregate relationship */
  groupsAggregate: GroupsAggregate;
  label: Scalars["String"]["output"];
  /** An array relationship */
  levels: Array<Levels>;
  /** An aggregate relationship */
  levelsAggregate: LevelsAggregate;
  name: Scalars["String"]["output"];
  startDate: Scalars["date"]["output"];
  /** An array relationship */
  subcategories: Array<Subcategories>;
  /** An aggregate relationship */
  subcategoriesAggregate: SubcategoriesAggregate;
  /** An array relationship */
  userLevels: Array<UserLevel>;
  /** An aggregate relationship */
  userLevelsAggregate: UserLevelAggregate;
};

/** columns and relationships of "edition" */
export type EditionAwardEditionsArgs = {
  distinctOn?: InputMaybe<Array<AwardEditionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<AwardEditionOrderBy>>;
  where?: InputMaybe<AwardEditionBoolExp>;
};

/** columns and relationships of "edition" */
export type EditionAwardEditionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AwardEditionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<AwardEditionOrderBy>>;
  where?: InputMaybe<AwardEditionBoolExp>;
};

/** columns and relationships of "edition" */
export type EditionCategoryEditionsArgs = {
  distinctOn?: InputMaybe<Array<CategoryEditionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoryEditionOrderBy>>;
  where?: InputMaybe<CategoryEditionBoolExp>;
};

/** columns and relationships of "edition" */
export type EditionCategoryEditionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CategoryEditionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoryEditionOrderBy>>;
  where?: InputMaybe<CategoryEditionBoolExp>;
};

/** columns and relationships of "edition" */
export type EditionChestsArgs = {
  distinctOn?: InputMaybe<Array<ChestsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestsOrderBy>>;
  where?: InputMaybe<ChestsBoolExp>;
};

/** columns and relationships of "edition" */
export type EditionChestsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChestsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestsOrderBy>>;
  where?: InputMaybe<ChestsBoolExp>;
};

/** columns and relationships of "edition" */
export type EditionGroupsArgs = {
  distinctOn?: InputMaybe<Array<GroupsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupsOrderBy>>;
  where?: InputMaybe<GroupsBoolExp>;
};

/** columns and relationships of "edition" */
export type EditionGroupsAggregateArgs = {
  distinctOn?: InputMaybe<Array<GroupsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupsOrderBy>>;
  where?: InputMaybe<GroupsBoolExp>;
};

/** columns and relationships of "edition" */
export type EditionLevelsArgs = {
  distinctOn?: InputMaybe<Array<LevelsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<LevelsOrderBy>>;
  where?: InputMaybe<LevelsBoolExp>;
};

/** columns and relationships of "edition" */
export type EditionLevelsAggregateArgs = {
  distinctOn?: InputMaybe<Array<LevelsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<LevelsOrderBy>>;
  where?: InputMaybe<LevelsBoolExp>;
};

/** columns and relationships of "edition" */
export type EditionSubcategoriesArgs = {
  distinctOn?: InputMaybe<Array<SubcategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<SubcategoriesOrderBy>>;
  where?: InputMaybe<SubcategoriesBoolExp>;
};

/** columns and relationships of "edition" */
export type EditionSubcategoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<SubcategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<SubcategoriesOrderBy>>;
  where?: InputMaybe<SubcategoriesBoolExp>;
};

/** columns and relationships of "edition" */
export type EditionUserLevelsArgs = {
  distinctOn?: InputMaybe<Array<UserLevelSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserLevelOrderBy>>;
  where?: InputMaybe<UserLevelBoolExp>;
};

/** columns and relationships of "edition" */
export type EditionUserLevelsAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserLevelSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserLevelOrderBy>>;
  where?: InputMaybe<UserLevelBoolExp>;
};

/** aggregated selection of "edition" */
export type EditionAggregate = {
  __typename?: "EditionAggregate";
  aggregate?: Maybe<EditionAggregateFields>;
  nodes: Array<Edition>;
};

/** aggregate fields of "edition" */
export type EditionAggregateFields = {
  __typename?: "EditionAggregateFields";
  avg?: Maybe<EditionAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<EditionMaxFields>;
  min?: Maybe<EditionMinFields>;
  stddev?: Maybe<EditionStddevFields>;
  stddevPop?: Maybe<EditionStddevPopFields>;
  stddevSamp?: Maybe<EditionStddevSampFields>;
  sum?: Maybe<EditionSumFields>;
  varPop?: Maybe<EditionVarPopFields>;
  varSamp?: Maybe<EditionVarSampFields>;
  variance?: Maybe<EditionVarianceFields>;
};

/** aggregate fields of "edition" */
export type EditionAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<EditionSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type EditionAvgFields = {
  __typename?: "EditionAvgFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  editionYear?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "edition". All fields are combined with a logical 'AND'. */
export type EditionBoolExp = {
  _and?: InputMaybe<Array<EditionBoolExp>>;
  _not?: InputMaybe<EditionBoolExp>;
  _or?: InputMaybe<Array<EditionBoolExp>>;
  awardEditions?: InputMaybe<AwardEditionBoolExp>;
  awardEditionsAggregate?: InputMaybe<AwardEditionAggregateBoolExp>;
  categoryEditions?: InputMaybe<CategoryEditionBoolExp>;
  categoryEditionsAggregate?: InputMaybe<CategoryEditionAggregateBoolExp>;
  chests?: InputMaybe<ChestsBoolExp>;
  chestsAggregate?: InputMaybe<ChestsAggregateBoolExp>;
  editionId?: InputMaybe<BigintComparisonExp>;
  editionYear?: InputMaybe<IntComparisonExp>;
  endDate?: InputMaybe<DateComparisonExp>;
  groups?: InputMaybe<GroupsBoolExp>;
  groupsAggregate?: InputMaybe<GroupsAggregateBoolExp>;
  label?: InputMaybe<StringComparisonExp>;
  levels?: InputMaybe<LevelsBoolExp>;
  levelsAggregate?: InputMaybe<LevelsAggregateBoolExp>;
  name?: InputMaybe<StringComparisonExp>;
  startDate?: InputMaybe<DateComparisonExp>;
  subcategories?: InputMaybe<SubcategoriesBoolExp>;
  subcategoriesAggregate?: InputMaybe<SubcategoriesAggregateBoolExp>;
  userLevels?: InputMaybe<UserLevelBoolExp>;
  userLevelsAggregate?: InputMaybe<UserLevelAggregateBoolExp>;
};

/** unique or primary key constraints on table "edition" */
export enum EditionConstraint {
  /** unique or primary key constraint on columns "edition_id" */
  EditionPkey = "edition_pkey",
}

/** input type for incrementing numeric columns in table "edition" */
export type EditionIncInput = {
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  editionYear?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "edition" */
export type EditionInsertInput = {
  awardEditions?: InputMaybe<AwardEditionArrRelInsertInput>;
  categoryEditions?: InputMaybe<CategoryEditionArrRelInsertInput>;
  chests?: InputMaybe<ChestsArrRelInsertInput>;
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  editionYear?: InputMaybe<Scalars["Int"]["input"]>;
  endDate?: InputMaybe<Scalars["date"]["input"]>;
  groups?: InputMaybe<GroupsArrRelInsertInput>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  levels?: InputMaybe<LevelsArrRelInsertInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  startDate?: InputMaybe<Scalars["date"]["input"]>;
  subcategories?: InputMaybe<SubcategoriesArrRelInsertInput>;
  userLevels?: InputMaybe<UserLevelArrRelInsertInput>;
};

/** aggregate max on columns */
export type EditionMaxFields = {
  __typename?: "EditionMaxFields";
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  editionYear?: Maybe<Scalars["Int"]["output"]>;
  endDate?: Maybe<Scalars["date"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  startDate?: Maybe<Scalars["date"]["output"]>;
};

/** aggregate min on columns */
export type EditionMinFields = {
  __typename?: "EditionMinFields";
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  editionYear?: Maybe<Scalars["Int"]["output"]>;
  endDate?: Maybe<Scalars["date"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  startDate?: Maybe<Scalars["date"]["output"]>;
};

/** response of any mutation on the table "edition" */
export type EditionMutationResponse = {
  __typename?: "EditionMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Edition>;
};

/** input type for inserting object relation for remote table "edition" */
export type EditionObjRelInsertInput = {
  data: EditionInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<EditionOnConflict>;
};

/** on_conflict condition type for table "edition" */
export type EditionOnConflict = {
  constraint: EditionConstraint;
  updateColumns?: Array<EditionUpdateColumn>;
  where?: InputMaybe<EditionBoolExp>;
};

/** Ordering options when selecting data from "edition". */
export type EditionOrderBy = {
  awardEditionsAggregate?: InputMaybe<AwardEditionAggregateOrderBy>;
  categoryEditionsAggregate?: InputMaybe<CategoryEditionAggregateOrderBy>;
  chestsAggregate?: InputMaybe<ChestsAggregateOrderBy>;
  editionId?: InputMaybe<OrderBy>;
  editionYear?: InputMaybe<OrderBy>;
  endDate?: InputMaybe<OrderBy>;
  groupsAggregate?: InputMaybe<GroupsAggregateOrderBy>;
  label?: InputMaybe<OrderBy>;
  levelsAggregate?: InputMaybe<LevelsAggregateOrderBy>;
  name?: InputMaybe<OrderBy>;
  startDate?: InputMaybe<OrderBy>;
  subcategoriesAggregate?: InputMaybe<SubcategoriesAggregateOrderBy>;
  userLevelsAggregate?: InputMaybe<UserLevelAggregateOrderBy>;
};

/** primary key columns input for table: edition */
export type EditionPkColumnsInput = {
  editionId: Scalars["bigint"]["input"];
};

/** select columns of table "edition" */
export enum EditionSelectColumn {
  /** column name */
  EditionId = "editionId",
  /** column name */
  EditionYear = "editionYear",
  /** column name */
  EndDate = "endDate",
  /** column name */
  Label = "label",
  /** column name */
  Name = "name",
  /** column name */
  StartDate = "startDate",
}

/** input type for updating data in table "edition" */
export type EditionSetInput = {
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  editionYear?: InputMaybe<Scalars["Int"]["input"]>;
  endDate?: InputMaybe<Scalars["date"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  startDate?: InputMaybe<Scalars["date"]["input"]>;
};

/** aggregate stddev on columns */
export type EditionStddevFields = {
  __typename?: "EditionStddevFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  editionYear?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddevPop on columns */
export type EditionStddevPopFields = {
  __typename?: "EditionStddevPopFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  editionYear?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddevSamp on columns */
export type EditionStddevSampFields = {
  __typename?: "EditionStddevSampFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  editionYear?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "edition" */
export type EditionStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: EditionStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type EditionStreamCursorValueInput = {
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  editionYear?: InputMaybe<Scalars["Int"]["input"]>;
  endDate?: InputMaybe<Scalars["date"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  startDate?: InputMaybe<Scalars["date"]["input"]>;
};

/** aggregate sum on columns */
export type EditionSumFields = {
  __typename?: "EditionSumFields";
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  editionYear?: Maybe<Scalars["Int"]["output"]>;
};

export type EditionType = {
  __typename?: "EditionType";
  editionId: Scalars["ID"]["output"];
  editionName: Scalars["String"]["output"];
  editionYear: Scalars["Int"]["output"];
  endDate: Scalars["String"]["output"];
  label: Scalars["String"]["output"];
  startDate: Scalars["String"]["output"];
};

/** update columns of table "edition" */
export enum EditionUpdateColumn {
  /** column name */
  EditionId = "editionId",
  /** column name */
  EditionYear = "editionYear",
  /** column name */
  EndDate = "endDate",
  /** column name */
  Label = "label",
  /** column name */
  Name = "name",
  /** column name */
  StartDate = "startDate",
}

export type EditionUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<EditionIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<EditionSetInput>;
  /** filter the rows which have to be updated */
  where: EditionBoolExp;
};

/** aggregate varPop on columns */
export type EditionVarPopFields = {
  __typename?: "EditionVarPopFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  editionYear?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate varSamp on columns */
export type EditionVarSampFields = {
  __typename?: "EditionVarSampFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  editionYear?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type EditionVarianceFields = {
  __typename?: "EditionVarianceFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  editionYear?: Maybe<Scalars["Float"]["output"]>;
};

export type FileType = {
  __typename?: "FileType";
  fileId: Scalars["ID"]["output"];
  fileName: Scalars["String"]["output"];
  fileType: Scalars["String"]["output"];
  label: Scalars["String"]["output"];
  pathToFile: Scalars["String"]["output"];
};

/** columns and relationships of "files" */
export type Files = {
  __typename?: "Files";
  /** An array relationship */
  awards: Array<Award>;
  /** An aggregate relationship */
  awardsAggregate: AwardAggregate;
  /** An array relationship */
  chests: Array<Chests>;
  /** An aggregate relationship */
  chestsAggregate: ChestsAggregate;
  fileId: Scalars["bigint"]["output"];
  fileName: Scalars["String"]["output"];
  fileType: Scalars["String"]["output"];
  /** An array relationship */
  groups: Array<Groups>;
  /** An aggregate relationship */
  groupsAggregate: GroupsAggregate;
  label: Scalars["String"]["output"];
  /** An array relationship */
  levels: Array<Levels>;
  /** An aggregate relationship */
  levelsAggregate: LevelsAggregate;
  pathToFile: Scalars["String"]["output"];
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  usersAggregate: UsersAggregate;
};

/** columns and relationships of "files" */
export type FilesAwardsArgs = {
  distinctOn?: InputMaybe<Array<AwardSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<AwardOrderBy>>;
  where?: InputMaybe<AwardBoolExp>;
};

/** columns and relationships of "files" */
export type FilesAwardsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AwardSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<AwardOrderBy>>;
  where?: InputMaybe<AwardBoolExp>;
};

/** columns and relationships of "files" */
export type FilesChestsArgs = {
  distinctOn?: InputMaybe<Array<ChestsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestsOrderBy>>;
  where?: InputMaybe<ChestsBoolExp>;
};

/** columns and relationships of "files" */
export type FilesChestsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChestsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestsOrderBy>>;
  where?: InputMaybe<ChestsBoolExp>;
};

/** columns and relationships of "files" */
export type FilesGroupsArgs = {
  distinctOn?: InputMaybe<Array<GroupsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupsOrderBy>>;
  where?: InputMaybe<GroupsBoolExp>;
};

/** columns and relationships of "files" */
export type FilesGroupsAggregateArgs = {
  distinctOn?: InputMaybe<Array<GroupsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupsOrderBy>>;
  where?: InputMaybe<GroupsBoolExp>;
};

/** columns and relationships of "files" */
export type FilesLevelsArgs = {
  distinctOn?: InputMaybe<Array<LevelsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<LevelsOrderBy>>;
  where?: InputMaybe<LevelsBoolExp>;
};

/** columns and relationships of "files" */
export type FilesLevelsAggregateArgs = {
  distinctOn?: InputMaybe<Array<LevelsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<LevelsOrderBy>>;
  where?: InputMaybe<LevelsBoolExp>;
};

/** columns and relationships of "files" */
export type FilesUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

/** columns and relationships of "files" */
export type FilesUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

/** aggregated selection of "files" */
export type FilesAggregate = {
  __typename?: "FilesAggregate";
  aggregate?: Maybe<FilesAggregateFields>;
  nodes: Array<Files>;
};

/** aggregate fields of "files" */
export type FilesAggregateFields = {
  __typename?: "FilesAggregateFields";
  avg?: Maybe<FilesAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<FilesMaxFields>;
  min?: Maybe<FilesMinFields>;
  stddev?: Maybe<FilesStddevFields>;
  stddevPop?: Maybe<FilesStddevPopFields>;
  stddevSamp?: Maybe<FilesStddevSampFields>;
  sum?: Maybe<FilesSumFields>;
  varPop?: Maybe<FilesVarPopFields>;
  varSamp?: Maybe<FilesVarSampFields>;
  variance?: Maybe<FilesVarianceFields>;
};

/** aggregate fields of "files" */
export type FilesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FilesSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type FilesAvgFields = {
  __typename?: "FilesAvgFields";
  fileId?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "files". All fields are combined with a logical 'AND'. */
export type FilesBoolExp = {
  _and?: InputMaybe<Array<FilesBoolExp>>;
  _not?: InputMaybe<FilesBoolExp>;
  _or?: InputMaybe<Array<FilesBoolExp>>;
  awards?: InputMaybe<AwardBoolExp>;
  awardsAggregate?: InputMaybe<AwardAggregateBoolExp>;
  chests?: InputMaybe<ChestsBoolExp>;
  chestsAggregate?: InputMaybe<ChestsAggregateBoolExp>;
  fileId?: InputMaybe<BigintComparisonExp>;
  fileName?: InputMaybe<StringComparisonExp>;
  fileType?: InputMaybe<StringComparisonExp>;
  groups?: InputMaybe<GroupsBoolExp>;
  groupsAggregate?: InputMaybe<GroupsAggregateBoolExp>;
  label?: InputMaybe<StringComparisonExp>;
  levels?: InputMaybe<LevelsBoolExp>;
  levelsAggregate?: InputMaybe<LevelsAggregateBoolExp>;
  pathToFile?: InputMaybe<StringComparisonExp>;
  users?: InputMaybe<UsersBoolExp>;
  usersAggregate?: InputMaybe<UsersAggregateBoolExp>;
};

/** unique or primary key constraints on table "files" */
export enum FilesConstraint {
  /** unique or primary key constraint on columns "file_id" */
  FilesPkey = "files_pkey",
}

/** input type for incrementing numeric columns in table "files" */
export type FilesIncInput = {
  fileId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "files" */
export type FilesInsertInput = {
  awards?: InputMaybe<AwardArrRelInsertInput>;
  chests?: InputMaybe<ChestsArrRelInsertInput>;
  fileId?: InputMaybe<Scalars["bigint"]["input"]>;
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  fileType?: InputMaybe<Scalars["String"]["input"]>;
  groups?: InputMaybe<GroupsArrRelInsertInput>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  levels?: InputMaybe<LevelsArrRelInsertInput>;
  pathToFile?: InputMaybe<Scalars["String"]["input"]>;
  users?: InputMaybe<UsersArrRelInsertInput>;
};

/** aggregate max on columns */
export type FilesMaxFields = {
  __typename?: "FilesMaxFields";
  fileId?: Maybe<Scalars["bigint"]["output"]>;
  fileName?: Maybe<Scalars["String"]["output"]>;
  fileType?: Maybe<Scalars["String"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  pathToFile?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type FilesMinFields = {
  __typename?: "FilesMinFields";
  fileId?: Maybe<Scalars["bigint"]["output"]>;
  fileName?: Maybe<Scalars["String"]["output"]>;
  fileType?: Maybe<Scalars["String"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  pathToFile?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "files" */
export type FilesMutationResponse = {
  __typename?: "FilesMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** input type for inserting object relation for remote table "files" */
export type FilesObjRelInsertInput = {
  data: FilesInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<FilesOnConflict>;
};

/** on_conflict condition type for table "files" */
export type FilesOnConflict = {
  constraint: FilesConstraint;
  updateColumns?: Array<FilesUpdateColumn>;
  where?: InputMaybe<FilesBoolExp>;
};

/** Ordering options when selecting data from "files". */
export type FilesOrderBy = {
  awardsAggregate?: InputMaybe<AwardAggregateOrderBy>;
  chestsAggregate?: InputMaybe<ChestsAggregateOrderBy>;
  fileId?: InputMaybe<OrderBy>;
  fileName?: InputMaybe<OrderBy>;
  fileType?: InputMaybe<OrderBy>;
  groupsAggregate?: InputMaybe<GroupsAggregateOrderBy>;
  label?: InputMaybe<OrderBy>;
  levelsAggregate?: InputMaybe<LevelsAggregateOrderBy>;
  pathToFile?: InputMaybe<OrderBy>;
  usersAggregate?: InputMaybe<UsersAggregateOrderBy>;
};

/** primary key columns input for table: files */
export type FilesPkColumnsInput = {
  fileId: Scalars["bigint"]["input"];
};

/** select columns of table "files" */
export enum FilesSelectColumn {
  /** column name */
  FileId = "fileId",
  /** column name */
  FileName = "fileName",
  /** column name */
  FileType = "fileType",
  /** column name */
  Label = "label",
  /** column name */
  PathToFile = "pathToFile",
}

/** input type for updating data in table "files" */
export type FilesSetInput = {
  fileId?: InputMaybe<Scalars["bigint"]["input"]>;
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  fileType?: InputMaybe<Scalars["String"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  pathToFile?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type FilesStddevFields = {
  __typename?: "FilesStddevFields";
  fileId?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddevPop on columns */
export type FilesStddevPopFields = {
  __typename?: "FilesStddevPopFields";
  fileId?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddevSamp on columns */
export type FilesStddevSampFields = {
  __typename?: "FilesStddevSampFields";
  fileId?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "files" */
export type FilesStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: FilesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type FilesStreamCursorValueInput = {
  fileId?: InputMaybe<Scalars["bigint"]["input"]>;
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  fileType?: InputMaybe<Scalars["String"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  pathToFile?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type FilesSumFields = {
  __typename?: "FilesSumFields";
  fileId?: Maybe<Scalars["bigint"]["output"]>;
};

/** update columns of table "files" */
export enum FilesUpdateColumn {
  /** column name */
  FileId = "fileId",
  /** column name */
  FileName = "fileName",
  /** column name */
  FileType = "fileType",
  /** column name */
  Label = "label",
  /** column name */
  PathToFile = "pathToFile",
}

export type FilesUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FilesIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FilesSetInput>;
  /** filter the rows which have to be updated */
  where: FilesBoolExp;
};

/** aggregate varPop on columns */
export type FilesVarPopFields = {
  __typename?: "FilesVarPopFields";
  fileId?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate varSamp on columns */
export type FilesVarSampFields = {
  __typename?: "FilesVarSampFields";
  fileId?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type FilesVarianceFields = {
  __typename?: "FilesVarianceFields";
  fileId?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8ComparisonExp = {
  _eq?: InputMaybe<Scalars["float8"]["input"]>;
  _gt?: InputMaybe<Scalars["float8"]["input"]>;
  _gte?: InputMaybe<Scalars["float8"]["input"]>;
  _in?: InputMaybe<Array<Scalars["float8"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["float8"]["input"]>;
  _lte?: InputMaybe<Scalars["float8"]["input"]>;
  _neq?: InputMaybe<Scalars["float8"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["float8"]["input"]>>;
};

/** columns and relationships of "flyway_schema_history" */
export type FlywaySchemaHistory = {
  __typename?: "FlywaySchemaHistory";
  checksum?: Maybe<Scalars["Int"]["output"]>;
  description: Scalars["String"]["output"];
  executionTime: Scalars["Int"]["output"];
  installedBy: Scalars["String"]["output"];
  installedOn: Scalars["timestamp"]["output"];
  installedRank: Scalars["Int"]["output"];
  script: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
  type: Scalars["String"]["output"];
  version?: Maybe<Scalars["String"]["output"]>;
};

/** aggregated selection of "flyway_schema_history" */
export type FlywaySchemaHistoryAggregate = {
  __typename?: "FlywaySchemaHistoryAggregate";
  aggregate?: Maybe<FlywaySchemaHistoryAggregateFields>;
  nodes: Array<FlywaySchemaHistory>;
};

/** aggregate fields of "flyway_schema_history" */
export type FlywaySchemaHistoryAggregateFields = {
  __typename?: "FlywaySchemaHistoryAggregateFields";
  avg?: Maybe<FlywaySchemaHistoryAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<FlywaySchemaHistoryMaxFields>;
  min?: Maybe<FlywaySchemaHistoryMinFields>;
  stddev?: Maybe<FlywaySchemaHistoryStddevFields>;
  stddevPop?: Maybe<FlywaySchemaHistoryStddevPopFields>;
  stddevSamp?: Maybe<FlywaySchemaHistoryStddevSampFields>;
  sum?: Maybe<FlywaySchemaHistorySumFields>;
  varPop?: Maybe<FlywaySchemaHistoryVarPopFields>;
  varSamp?: Maybe<FlywaySchemaHistoryVarSampFields>;
  variance?: Maybe<FlywaySchemaHistoryVarianceFields>;
};

/** aggregate fields of "flyway_schema_history" */
export type FlywaySchemaHistoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FlywaySchemaHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type FlywaySchemaHistoryAvgFields = {
  __typename?: "FlywaySchemaHistoryAvgFields";
  checksum?: Maybe<Scalars["Float"]["output"]>;
  executionTime?: Maybe<Scalars["Float"]["output"]>;
  installedRank?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "flyway_schema_history". All fields are combined with a logical 'AND'. */
export type FlywaySchemaHistoryBoolExp = {
  _and?: InputMaybe<Array<FlywaySchemaHistoryBoolExp>>;
  _not?: InputMaybe<FlywaySchemaHistoryBoolExp>;
  _or?: InputMaybe<Array<FlywaySchemaHistoryBoolExp>>;
  checksum?: InputMaybe<IntComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  executionTime?: InputMaybe<IntComparisonExp>;
  installedBy?: InputMaybe<StringComparisonExp>;
  installedOn?: InputMaybe<TimestampComparisonExp>;
  installedRank?: InputMaybe<IntComparisonExp>;
  script?: InputMaybe<StringComparisonExp>;
  success?: InputMaybe<BooleanComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
  version?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "flyway_schema_history" */
export enum FlywaySchemaHistoryConstraint {
  /** unique or primary key constraint on columns "installed_rank" */
  FlywaySchemaHistoryPk = "flyway_schema_history_pk",
}

/** input type for incrementing numeric columns in table "flyway_schema_history" */
export type FlywaySchemaHistoryIncInput = {
  checksum?: InputMaybe<Scalars["Int"]["input"]>;
  executionTime?: InputMaybe<Scalars["Int"]["input"]>;
  installedRank?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "flyway_schema_history" */
export type FlywaySchemaHistoryInsertInput = {
  checksum?: InputMaybe<Scalars["Int"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  executionTime?: InputMaybe<Scalars["Int"]["input"]>;
  installedBy?: InputMaybe<Scalars["String"]["input"]>;
  installedOn?: InputMaybe<Scalars["timestamp"]["input"]>;
  installedRank?: InputMaybe<Scalars["Int"]["input"]>;
  script?: InputMaybe<Scalars["String"]["input"]>;
  success?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  version?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type FlywaySchemaHistoryMaxFields = {
  __typename?: "FlywaySchemaHistoryMaxFields";
  checksum?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  executionTime?: Maybe<Scalars["Int"]["output"]>;
  installedBy?: Maybe<Scalars["String"]["output"]>;
  installedOn?: Maybe<Scalars["timestamp"]["output"]>;
  installedRank?: Maybe<Scalars["Int"]["output"]>;
  script?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  version?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type FlywaySchemaHistoryMinFields = {
  __typename?: "FlywaySchemaHistoryMinFields";
  checksum?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  executionTime?: Maybe<Scalars["Int"]["output"]>;
  installedBy?: Maybe<Scalars["String"]["output"]>;
  installedOn?: Maybe<Scalars["timestamp"]["output"]>;
  installedRank?: Maybe<Scalars["Int"]["output"]>;
  script?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  version?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "flyway_schema_history" */
export type FlywaySchemaHistoryMutationResponse = {
  __typename?: "FlywaySchemaHistoryMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<FlywaySchemaHistory>;
};

/** on_conflict condition type for table "flyway_schema_history" */
export type FlywaySchemaHistoryOnConflict = {
  constraint: FlywaySchemaHistoryConstraint;
  updateColumns?: Array<FlywaySchemaHistoryUpdateColumn>;
  where?: InputMaybe<FlywaySchemaHistoryBoolExp>;
};

/** Ordering options when selecting data from "flyway_schema_history". */
export type FlywaySchemaHistoryOrderBy = {
  checksum?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  executionTime?: InputMaybe<OrderBy>;
  installedBy?: InputMaybe<OrderBy>;
  installedOn?: InputMaybe<OrderBy>;
  installedRank?: InputMaybe<OrderBy>;
  script?: InputMaybe<OrderBy>;
  success?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  version?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: flyway_schema_history */
export type FlywaySchemaHistoryPkColumnsInput = {
  installedRank: Scalars["Int"]["input"];
};

/** select columns of table "flyway_schema_history" */
export enum FlywaySchemaHistorySelectColumn {
  /** column name */
  Checksum = "checksum",
  /** column name */
  Description = "description",
  /** column name */
  ExecutionTime = "executionTime",
  /** column name */
  InstalledBy = "installedBy",
  /** column name */
  InstalledOn = "installedOn",
  /** column name */
  InstalledRank = "installedRank",
  /** column name */
  Script = "script",
  /** column name */
  Success = "success",
  /** column name */
  Type = "type",
  /** column name */
  Version = "version",
}

/** input type for updating data in table "flyway_schema_history" */
export type FlywaySchemaHistorySetInput = {
  checksum?: InputMaybe<Scalars["Int"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  executionTime?: InputMaybe<Scalars["Int"]["input"]>;
  installedBy?: InputMaybe<Scalars["String"]["input"]>;
  installedOn?: InputMaybe<Scalars["timestamp"]["input"]>;
  installedRank?: InputMaybe<Scalars["Int"]["input"]>;
  script?: InputMaybe<Scalars["String"]["input"]>;
  success?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  version?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type FlywaySchemaHistoryStddevFields = {
  __typename?: "FlywaySchemaHistoryStddevFields";
  checksum?: Maybe<Scalars["Float"]["output"]>;
  executionTime?: Maybe<Scalars["Float"]["output"]>;
  installedRank?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddevPop on columns */
export type FlywaySchemaHistoryStddevPopFields = {
  __typename?: "FlywaySchemaHistoryStddevPopFields";
  checksum?: Maybe<Scalars["Float"]["output"]>;
  executionTime?: Maybe<Scalars["Float"]["output"]>;
  installedRank?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddevSamp on columns */
export type FlywaySchemaHistoryStddevSampFields = {
  __typename?: "FlywaySchemaHistoryStddevSampFields";
  checksum?: Maybe<Scalars["Float"]["output"]>;
  executionTime?: Maybe<Scalars["Float"]["output"]>;
  installedRank?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "flyway_schema_history" */
export type FlywaySchemaHistoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: FlywaySchemaHistoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type FlywaySchemaHistoryStreamCursorValueInput = {
  checksum?: InputMaybe<Scalars["Int"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  executionTime?: InputMaybe<Scalars["Int"]["input"]>;
  installedBy?: InputMaybe<Scalars["String"]["input"]>;
  installedOn?: InputMaybe<Scalars["timestamp"]["input"]>;
  installedRank?: InputMaybe<Scalars["Int"]["input"]>;
  script?: InputMaybe<Scalars["String"]["input"]>;
  success?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  version?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type FlywaySchemaHistorySumFields = {
  __typename?: "FlywaySchemaHistorySumFields";
  checksum?: Maybe<Scalars["Int"]["output"]>;
  executionTime?: Maybe<Scalars["Int"]["output"]>;
  installedRank?: Maybe<Scalars["Int"]["output"]>;
};

/** update columns of table "flyway_schema_history" */
export enum FlywaySchemaHistoryUpdateColumn {
  /** column name */
  Checksum = "checksum",
  /** column name */
  Description = "description",
  /** column name */
  ExecutionTime = "executionTime",
  /** column name */
  InstalledBy = "installedBy",
  /** column name */
  InstalledOn = "installedOn",
  /** column name */
  InstalledRank = "installedRank",
  /** column name */
  Script = "script",
  /** column name */
  Success = "success",
  /** column name */
  Type = "type",
  /** column name */
  Version = "version",
}

export type FlywaySchemaHistoryUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FlywaySchemaHistoryIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FlywaySchemaHistorySetInput>;
  /** filter the rows which have to be updated */
  where: FlywaySchemaHistoryBoolExp;
};

/** aggregate varPop on columns */
export type FlywaySchemaHistoryVarPopFields = {
  __typename?: "FlywaySchemaHistoryVarPopFields";
  checksum?: Maybe<Scalars["Float"]["output"]>;
  executionTime?: Maybe<Scalars["Float"]["output"]>;
  installedRank?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate varSamp on columns */
export type FlywaySchemaHistoryVarSampFields = {
  __typename?: "FlywaySchemaHistoryVarSampFields";
  checksum?: Maybe<Scalars["Float"]["output"]>;
  executionTime?: Maybe<Scalars["Float"]["output"]>;
  installedRank?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type FlywaySchemaHistoryVarianceFields = {
  __typename?: "FlywaySchemaHistoryVarianceFields";
  checksum?: Maybe<Scalars["Float"]["output"]>;
  executionTime?: Maybe<Scalars["Float"]["output"]>;
  installedRank?: Maybe<Scalars["Float"]["output"]>;
};

export type GroupDateType = {
  __typename?: "GroupDateType";
  endTime: Scalars["String"]["output"];
  startTime: Scalars["String"]["output"];
  weekday: WeekdayType;
};

export type GroupType = {
  __typename?: "GroupType";
  edition: EditionType;
  endTime: Scalars["String"]["output"];
  groupName: Scalars["String"]["output"];
  groupsId: Scalars["ID"]["output"];
  imageFile?: Maybe<FileType>;
  label?: Maybe<Scalars["String"]["output"]>;
  startTime: Scalars["String"]["output"];
  teacher?: Maybe<UserType>;
  userGroups: Array<Maybe<UserGroupType>>;
  weekday: WeekdayType;
};

/** columns and relationships of "groups" */
export type Groups = {
  __typename?: "Groups";
  /** An object relationship */
  edition: Edition;
  editionId: Scalars["bigint"]["output"];
  endTime: Scalars["time"]["output"];
  /** An object relationship */
  file?: Maybe<Files>;
  groupName: Scalars["String"]["output"];
  groupsId: Scalars["bigint"]["output"];
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  startTime: Scalars["time"]["output"];
  teacherId?: Maybe<Scalars["bigint"]["output"]>;
  /** An object relationship */
  user?: Maybe<Users>;
  /** An object relationship */
  userByTeacherId?: Maybe<Users>;
  /** An array relationship */
  userGroups: Array<UserGroups>;
  /** An aggregate relationship */
  userGroupsAggregate: UserGroupsAggregate;
  /** An object relationship */
  weekday: Weekdays;
  weekdayId: Scalars["bigint"]["output"];
};

/** columns and relationships of "groups" */
export type GroupsUserGroupsArgs = {
  distinctOn?: InputMaybe<Array<UserGroupsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserGroupsOrderBy>>;
  where?: InputMaybe<UserGroupsBoolExp>;
};

/** columns and relationships of "groups" */
export type GroupsUserGroupsAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserGroupsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserGroupsOrderBy>>;
  where?: InputMaybe<UserGroupsBoolExp>;
};

/** aggregated selection of "groups" */
export type GroupsAggregate = {
  __typename?: "GroupsAggregate";
  aggregate?: Maybe<GroupsAggregateFields>;
  nodes: Array<Groups>;
};

export type GroupsAggregateBoolExp = {
  count?: InputMaybe<GroupsAggregateBoolExpCount>;
};

/** aggregate fields of "groups" */
export type GroupsAggregateFields = {
  __typename?: "GroupsAggregateFields";
  avg?: Maybe<GroupsAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<GroupsMaxFields>;
  min?: Maybe<GroupsMinFields>;
  stddev?: Maybe<GroupsStddevFields>;
  stddevPop?: Maybe<GroupsStddevPopFields>;
  stddevSamp?: Maybe<GroupsStddevSampFields>;
  sum?: Maybe<GroupsSumFields>;
  varPop?: Maybe<GroupsVarPopFields>;
  varSamp?: Maybe<GroupsVarSampFields>;
  variance?: Maybe<GroupsVarianceFields>;
};

/** aggregate fields of "groups" */
export type GroupsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<GroupsSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "groups" */
export type GroupsAggregateOrderBy = {
  avg?: InputMaybe<GroupsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<GroupsMaxOrderBy>;
  min?: InputMaybe<GroupsMinOrderBy>;
  stddev?: InputMaybe<GroupsStddevOrderBy>;
  stddevPop?: InputMaybe<GroupsStddevPopOrderBy>;
  stddevSamp?: InputMaybe<GroupsStddevSampOrderBy>;
  sum?: InputMaybe<GroupsSumOrderBy>;
  varPop?: InputMaybe<GroupsVarPopOrderBy>;
  varSamp?: InputMaybe<GroupsVarSampOrderBy>;
  variance?: InputMaybe<GroupsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "groups" */
export type GroupsArrRelInsertInput = {
  data: Array<GroupsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<GroupsOnConflict>;
};

/** aggregate avg on columns */
export type GroupsAvgFields = {
  __typename?: "GroupsAvgFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  groupsId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  weekdayId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "groups" */
export type GroupsAvgOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  groupsId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  weekdayId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "groups". All fields are combined with a logical 'AND'. */
export type GroupsBoolExp = {
  _and?: InputMaybe<Array<GroupsBoolExp>>;
  _not?: InputMaybe<GroupsBoolExp>;
  _or?: InputMaybe<Array<GroupsBoolExp>>;
  edition?: InputMaybe<EditionBoolExp>;
  editionId?: InputMaybe<BigintComparisonExp>;
  endTime?: InputMaybe<TimeComparisonExp>;
  file?: InputMaybe<FilesBoolExp>;
  groupName?: InputMaybe<StringComparisonExp>;
  groupsId?: InputMaybe<BigintComparisonExp>;
  imageFileId?: InputMaybe<BigintComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
  startTime?: InputMaybe<TimeComparisonExp>;
  teacherId?: InputMaybe<BigintComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userByTeacherId?: InputMaybe<UsersBoolExp>;
  userGroups?: InputMaybe<UserGroupsBoolExp>;
  userGroupsAggregate?: InputMaybe<UserGroupsAggregateBoolExp>;
  weekday?: InputMaybe<WeekdaysBoolExp>;
  weekdayId?: InputMaybe<BigintComparisonExp>;
};

/** unique or primary key constraints on table "groups" */
export enum GroupsConstraint {
  /** unique or primary key constraint on columns "groups_id" */
  GroupsPkey = "groups_pkey",
}

/** input type for incrementing numeric columns in table "groups" */
export type GroupsIncInput = {
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  groupsId?: InputMaybe<Scalars["bigint"]["input"]>;
  imageFileId?: InputMaybe<Scalars["bigint"]["input"]>;
  teacherId?: InputMaybe<Scalars["bigint"]["input"]>;
  weekdayId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "groups" */
export type GroupsInsertInput = {
  edition?: InputMaybe<EditionObjRelInsertInput>;
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  endTime?: InputMaybe<Scalars["time"]["input"]>;
  file?: InputMaybe<FilesObjRelInsertInput>;
  groupName?: InputMaybe<Scalars["String"]["input"]>;
  groupsId?: InputMaybe<Scalars["bigint"]["input"]>;
  imageFileId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  startTime?: InputMaybe<Scalars["time"]["input"]>;
  teacherId?: InputMaybe<Scalars["bigint"]["input"]>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userByTeacherId?: InputMaybe<UsersObjRelInsertInput>;
  userGroups?: InputMaybe<UserGroupsArrRelInsertInput>;
  weekday?: InputMaybe<WeekdaysObjRelInsertInput>;
  weekdayId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate max on columns */
export type GroupsMaxFields = {
  __typename?: "GroupsMaxFields";
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  groupName?: Maybe<Scalars["String"]["output"]>;
  groupsId?: Maybe<Scalars["bigint"]["output"]>;
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  teacherId?: Maybe<Scalars["bigint"]["output"]>;
  weekdayId?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by max() on columns of table "groups" */
export type GroupsMaxOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  groupName?: InputMaybe<OrderBy>;
  groupsId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  weekdayId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type GroupsMinFields = {
  __typename?: "GroupsMinFields";
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  groupName?: Maybe<Scalars["String"]["output"]>;
  groupsId?: Maybe<Scalars["bigint"]["output"]>;
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  teacherId?: Maybe<Scalars["bigint"]["output"]>;
  weekdayId?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by min() on columns of table "groups" */
export type GroupsMinOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  groupName?: InputMaybe<OrderBy>;
  groupsId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  weekdayId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "groups" */
export type GroupsMutationResponse = {
  __typename?: "GroupsMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Groups>;
};

/** input type for inserting object relation for remote table "groups" */
export type GroupsObjRelInsertInput = {
  data: GroupsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<GroupsOnConflict>;
};

/** on_conflict condition type for table "groups" */
export type GroupsOnConflict = {
  constraint: GroupsConstraint;
  updateColumns?: Array<GroupsUpdateColumn>;
  where?: InputMaybe<GroupsBoolExp>;
};

/** Ordering options when selecting data from "groups". */
export type GroupsOrderBy = {
  edition?: InputMaybe<EditionOrderBy>;
  editionId?: InputMaybe<OrderBy>;
  endTime?: InputMaybe<OrderBy>;
  file?: InputMaybe<FilesOrderBy>;
  groupName?: InputMaybe<OrderBy>;
  groupsId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  startTime?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userByTeacherId?: InputMaybe<UsersOrderBy>;
  userGroupsAggregate?: InputMaybe<UserGroupsAggregateOrderBy>;
  weekday?: InputMaybe<WeekdaysOrderBy>;
  weekdayId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: groups */
export type GroupsPkColumnsInput = {
  groupsId: Scalars["bigint"]["input"];
};

/** select columns of table "groups" */
export enum GroupsSelectColumn {
  /** column name */
  EditionId = "editionId",
  /** column name */
  EndTime = "endTime",
  /** column name */
  GroupName = "groupName",
  /** column name */
  GroupsId = "groupsId",
  /** column name */
  ImageFileId = "imageFileId",
  /** column name */
  Label = "label",
  /** column name */
  StartTime = "startTime",
  /** column name */
  TeacherId = "teacherId",
  /** column name */
  WeekdayId = "weekdayId",
}

/** input type for updating data in table "groups" */
export type GroupsSetInput = {
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  endTime?: InputMaybe<Scalars["time"]["input"]>;
  groupName?: InputMaybe<Scalars["String"]["input"]>;
  groupsId?: InputMaybe<Scalars["bigint"]["input"]>;
  imageFileId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  startTime?: InputMaybe<Scalars["time"]["input"]>;
  teacherId?: InputMaybe<Scalars["bigint"]["input"]>;
  weekdayId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate stddev on columns */
export type GroupsStddevFields = {
  __typename?: "GroupsStddevFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  groupsId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  weekdayId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "groups" */
export type GroupsStddevOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  groupsId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  weekdayId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type GroupsStddevPopFields = {
  __typename?: "GroupsStddevPopFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  groupsId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  weekdayId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevPop() on columns of table "groups" */
export type GroupsStddevPopOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  groupsId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  weekdayId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type GroupsStddevSampFields = {
  __typename?: "GroupsStddevSampFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  groupsId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  weekdayId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevSamp() on columns of table "groups" */
export type GroupsStddevSampOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  groupsId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  weekdayId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "groups" */
export type GroupsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: GroupsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type GroupsStreamCursorValueInput = {
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  endTime?: InputMaybe<Scalars["time"]["input"]>;
  groupName?: InputMaybe<Scalars["String"]["input"]>;
  groupsId?: InputMaybe<Scalars["bigint"]["input"]>;
  imageFileId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  startTime?: InputMaybe<Scalars["time"]["input"]>;
  teacherId?: InputMaybe<Scalars["bigint"]["input"]>;
  weekdayId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate sum on columns */
export type GroupsSumFields = {
  __typename?: "GroupsSumFields";
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  groupsId?: Maybe<Scalars["bigint"]["output"]>;
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  teacherId?: Maybe<Scalars["bigint"]["output"]>;
  weekdayId?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by sum() on columns of table "groups" */
export type GroupsSumOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  groupsId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  weekdayId?: InputMaybe<OrderBy>;
};

/** update columns of table "groups" */
export enum GroupsUpdateColumn {
  /** column name */
  EditionId = "editionId",
  /** column name */
  EndTime = "endTime",
  /** column name */
  GroupName = "groupName",
  /** column name */
  GroupsId = "groupsId",
  /** column name */
  ImageFileId = "imageFileId",
  /** column name */
  Label = "label",
  /** column name */
  StartTime = "startTime",
  /** column name */
  TeacherId = "teacherId",
  /** column name */
  WeekdayId = "weekdayId",
}

export type GroupsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<GroupsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GroupsSetInput>;
  /** filter the rows which have to be updated */
  where: GroupsBoolExp;
};

/** aggregate varPop on columns */
export type GroupsVarPopFields = {
  __typename?: "GroupsVarPopFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  groupsId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  weekdayId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varPop() on columns of table "groups" */
export type GroupsVarPopOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  groupsId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  weekdayId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type GroupsVarSampFields = {
  __typename?: "GroupsVarSampFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  groupsId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  weekdayId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varSamp() on columns of table "groups" */
export type GroupsVarSampOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  groupsId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  weekdayId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type GroupsVarianceFields = {
  __typename?: "GroupsVarianceFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  groupsId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  weekdayId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "groups" */
export type GroupsVarianceOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  groupsId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  weekdayId?: InputMaybe<OrderBy>;
};

/** columns and relationships of "hall_of_fame" */
export type HallOfFame = {
  __typename?: "HallOfFame";
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  groupName?: Maybe<Scalars["String"]["output"]>;
  groupsId?: Maybe<Scalars["bigint"]["output"]>;
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  levelId?: Maybe<Scalars["bigint"]["output"]>;
  levelName?: Maybe<Scalars["String"]["output"]>;
  nick?: Maybe<Scalars["String"]["output"]>;
  sumOfPoints?: Maybe<Scalars["float8"]["output"]>;
  userId?: Maybe<Scalars["bigint"]["output"]>;
};

/** aggregated selection of "hall_of_fame" */
export type HallOfFameAggregate = {
  __typename?: "HallOfFameAggregate";
  aggregate?: Maybe<HallOfFameAggregateFields>;
  nodes: Array<HallOfFame>;
};

/** aggregate fields of "hall_of_fame" */
export type HallOfFameAggregateFields = {
  __typename?: "HallOfFameAggregateFields";
  avg?: Maybe<HallOfFameAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<HallOfFameMaxFields>;
  min?: Maybe<HallOfFameMinFields>;
  stddev?: Maybe<HallOfFameStddevFields>;
  stddevPop?: Maybe<HallOfFameStddevPopFields>;
  stddevSamp?: Maybe<HallOfFameStddevSampFields>;
  sum?: Maybe<HallOfFameSumFields>;
  varPop?: Maybe<HallOfFameVarPopFields>;
  varSamp?: Maybe<HallOfFameVarSampFields>;
  variance?: Maybe<HallOfFameVarianceFields>;
};

/** aggregate fields of "hall_of_fame" */
export type HallOfFameAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HallOfFameSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type HallOfFameAvgFields = {
  __typename?: "HallOfFameAvgFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  groupsId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  levelId?: Maybe<Scalars["Float"]["output"]>;
  sumOfPoints?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "hall_of_fame". All fields are combined with a logical 'AND'. */
export type HallOfFameBoolExp = {
  _and?: InputMaybe<Array<HallOfFameBoolExp>>;
  _not?: InputMaybe<HallOfFameBoolExp>;
  _or?: InputMaybe<Array<HallOfFameBoolExp>>;
  editionId?: InputMaybe<BigintComparisonExp>;
  groupName?: InputMaybe<StringComparisonExp>;
  groupsId?: InputMaybe<BigintComparisonExp>;
  imageFileId?: InputMaybe<BigintComparisonExp>;
  levelId?: InputMaybe<BigintComparisonExp>;
  levelName?: InputMaybe<StringComparisonExp>;
  nick?: InputMaybe<StringComparisonExp>;
  sumOfPoints?: InputMaybe<Float8ComparisonExp>;
  userId?: InputMaybe<BigintComparisonExp>;
};

/** aggregate max on columns */
export type HallOfFameMaxFields = {
  __typename?: "HallOfFameMaxFields";
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  groupName?: Maybe<Scalars["String"]["output"]>;
  groupsId?: Maybe<Scalars["bigint"]["output"]>;
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  levelId?: Maybe<Scalars["bigint"]["output"]>;
  levelName?: Maybe<Scalars["String"]["output"]>;
  nick?: Maybe<Scalars["String"]["output"]>;
  sumOfPoints?: Maybe<Scalars["float8"]["output"]>;
  userId?: Maybe<Scalars["bigint"]["output"]>;
};

/** aggregate min on columns */
export type HallOfFameMinFields = {
  __typename?: "HallOfFameMinFields";
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  groupName?: Maybe<Scalars["String"]["output"]>;
  groupsId?: Maybe<Scalars["bigint"]["output"]>;
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  levelId?: Maybe<Scalars["bigint"]["output"]>;
  levelName?: Maybe<Scalars["String"]["output"]>;
  nick?: Maybe<Scalars["String"]["output"]>;
  sumOfPoints?: Maybe<Scalars["float8"]["output"]>;
  userId?: Maybe<Scalars["bigint"]["output"]>;
};

/** Ordering options when selecting data from "hall_of_fame". */
export type HallOfFameOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  groupName?: InputMaybe<OrderBy>;
  groupsId?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  levelId?: InputMaybe<OrderBy>;
  levelName?: InputMaybe<OrderBy>;
  nick?: InputMaybe<OrderBy>;
  sumOfPoints?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** select columns of table "hall_of_fame" */
export enum HallOfFameSelectColumn {
  /** column name */
  EditionId = "editionId",
  /** column name */
  GroupName = "groupName",
  /** column name */
  GroupsId = "groupsId",
  /** column name */
  ImageFileId = "imageFileId",
  /** column name */
  LevelId = "levelId",
  /** column name */
  LevelName = "levelName",
  /** column name */
  Nick = "nick",
  /** column name */
  SumOfPoints = "sumOfPoints",
  /** column name */
  UserId = "userId",
}

/** aggregate stddev on columns */
export type HallOfFameStddevFields = {
  __typename?: "HallOfFameStddevFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  groupsId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  levelId?: Maybe<Scalars["Float"]["output"]>;
  sumOfPoints?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddevPop on columns */
export type HallOfFameStddevPopFields = {
  __typename?: "HallOfFameStddevPopFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  groupsId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  levelId?: Maybe<Scalars["Float"]["output"]>;
  sumOfPoints?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddevSamp on columns */
export type HallOfFameStddevSampFields = {
  __typename?: "HallOfFameStddevSampFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  groupsId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  levelId?: Maybe<Scalars["Float"]["output"]>;
  sumOfPoints?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "hall_of_fame" */
export type HallOfFameStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HallOfFameStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HallOfFameStreamCursorValueInput = {
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  groupName?: InputMaybe<Scalars["String"]["input"]>;
  groupsId?: InputMaybe<Scalars["bigint"]["input"]>;
  imageFileId?: InputMaybe<Scalars["bigint"]["input"]>;
  levelId?: InputMaybe<Scalars["bigint"]["input"]>;
  levelName?: InputMaybe<Scalars["String"]["input"]>;
  nick?: InputMaybe<Scalars["String"]["input"]>;
  sumOfPoints?: InputMaybe<Scalars["float8"]["input"]>;
  userId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate sum on columns */
export type HallOfFameSumFields = {
  __typename?: "HallOfFameSumFields";
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  groupsId?: Maybe<Scalars["bigint"]["output"]>;
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  levelId?: Maybe<Scalars["bigint"]["output"]>;
  sumOfPoints?: Maybe<Scalars["float8"]["output"]>;
  userId?: Maybe<Scalars["bigint"]["output"]>;
};

/** aggregate varPop on columns */
export type HallOfFameVarPopFields = {
  __typename?: "HallOfFameVarPopFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  groupsId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  levelId?: Maybe<Scalars["Float"]["output"]>;
  sumOfPoints?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate varSamp on columns */
export type HallOfFameVarSampFields = {
  __typename?: "HallOfFameVarSampFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  groupsId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  levelId?: Maybe<Scalars["Float"]["output"]>;
  sumOfPoints?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type HallOfFameVarianceFields = {
  __typename?: "HallOfFameVarianceFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  groupsId?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  levelId?: Maybe<Scalars["Float"]["output"]>;
  sumOfPoints?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type LevelType = {
  __typename?: "LevelType";
  edition: EditionType;
  grade: Scalars["Float"]["output"];
  highest: Scalars["Boolean"]["output"];
  imageFile?: Maybe<FileType>;
  label: Scalars["String"]["output"];
  levelId: Scalars["ID"]["output"];
  levelName: Scalars["String"]["output"];
  maximumPoints: Scalars["Float"]["output"];
  minimumPoints: Scalars["Float"]["output"];
  ordinalNumber: Scalars["Int"]["output"];
  userLevels?: Maybe<Array<Maybe<UserLevelType>>>;
};

/** columns and relationships of "levels" */
export type Levels = {
  __typename?: "Levels";
  /** An object relationship */
  edition: Edition;
  editionId: Scalars["bigint"]["output"];
  /** An object relationship */
  file?: Maybe<Files>;
  grade: Scalars["float8"]["output"];
  highest: Scalars["Boolean"]["output"];
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  label: Scalars["String"]["output"];
  levelId: Scalars["bigint"]["output"];
  maximumPoints: Scalars["float8"]["output"];
  minimumPoints: Scalars["float8"]["output"];
  name: Scalars["String"]["output"];
  ordinalNumber: Scalars["Int"]["output"];
  /** An array relationship */
  userLevels: Array<UserLevel>;
  /** An aggregate relationship */
  userLevelsAggregate: UserLevelAggregate;
};

/** columns and relationships of "levels" */
export type LevelsUserLevelsArgs = {
  distinctOn?: InputMaybe<Array<UserLevelSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserLevelOrderBy>>;
  where?: InputMaybe<UserLevelBoolExp>;
};

/** columns and relationships of "levels" */
export type LevelsUserLevelsAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserLevelSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserLevelOrderBy>>;
  where?: InputMaybe<UserLevelBoolExp>;
};

/** aggregated selection of "levels" */
export type LevelsAggregate = {
  __typename?: "LevelsAggregate";
  aggregate?: Maybe<LevelsAggregateFields>;
  nodes: Array<Levels>;
};

export type LevelsAggregateBoolExp = {
  avg?: InputMaybe<LevelsAggregateBoolExpAvg>;
  bool_and?: InputMaybe<LevelsAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<LevelsAggregateBoolExpBool_Or>;
  corr?: InputMaybe<LevelsAggregateBoolExpCorr>;
  count?: InputMaybe<LevelsAggregateBoolExpCount>;
  covar_samp?: InputMaybe<LevelsAggregateBoolExpCovar_Samp>;
  max?: InputMaybe<LevelsAggregateBoolExpMax>;
  min?: InputMaybe<LevelsAggregateBoolExpMin>;
  stddev_samp?: InputMaybe<LevelsAggregateBoolExpStddev_Samp>;
  sum?: InputMaybe<LevelsAggregateBoolExpSum>;
  var_samp?: InputMaybe<LevelsAggregateBoolExpVar_Samp>;
};

/** aggregate fields of "levels" */
export type LevelsAggregateFields = {
  __typename?: "LevelsAggregateFields";
  avg?: Maybe<LevelsAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<LevelsMaxFields>;
  min?: Maybe<LevelsMinFields>;
  stddev?: Maybe<LevelsStddevFields>;
  stddevPop?: Maybe<LevelsStddevPopFields>;
  stddevSamp?: Maybe<LevelsStddevSampFields>;
  sum?: Maybe<LevelsSumFields>;
  varPop?: Maybe<LevelsVarPopFields>;
  varSamp?: Maybe<LevelsVarSampFields>;
  variance?: Maybe<LevelsVarianceFields>;
};

/** aggregate fields of "levels" */
export type LevelsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<LevelsSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "levels" */
export type LevelsAggregateOrderBy = {
  avg?: InputMaybe<LevelsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<LevelsMaxOrderBy>;
  min?: InputMaybe<LevelsMinOrderBy>;
  stddev?: InputMaybe<LevelsStddevOrderBy>;
  stddevPop?: InputMaybe<LevelsStddevPopOrderBy>;
  stddevSamp?: InputMaybe<LevelsStddevSampOrderBy>;
  sum?: InputMaybe<LevelsSumOrderBy>;
  varPop?: InputMaybe<LevelsVarPopOrderBy>;
  varSamp?: InputMaybe<LevelsVarSampOrderBy>;
  variance?: InputMaybe<LevelsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "levels" */
export type LevelsArrRelInsertInput = {
  data: Array<LevelsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<LevelsOnConflict>;
};

/** aggregate avg on columns */
export type LevelsAvgFields = {
  __typename?: "LevelsAvgFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  grade?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  levelId?: Maybe<Scalars["Float"]["output"]>;
  maximumPoints?: Maybe<Scalars["Float"]["output"]>;
  minimumPoints?: Maybe<Scalars["Float"]["output"]>;
  ordinalNumber?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "levels" */
export type LevelsAvgOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  grade?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  levelId?: InputMaybe<OrderBy>;
  maximumPoints?: InputMaybe<OrderBy>;
  minimumPoints?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "levels". All fields are combined with a logical 'AND'. */
export type LevelsBoolExp = {
  _and?: InputMaybe<Array<LevelsBoolExp>>;
  _not?: InputMaybe<LevelsBoolExp>;
  _or?: InputMaybe<Array<LevelsBoolExp>>;
  edition?: InputMaybe<EditionBoolExp>;
  editionId?: InputMaybe<BigintComparisonExp>;
  file?: InputMaybe<FilesBoolExp>;
  grade?: InputMaybe<Float8ComparisonExp>;
  highest?: InputMaybe<BooleanComparisonExp>;
  imageFileId?: InputMaybe<BigintComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
  levelId?: InputMaybe<BigintComparisonExp>;
  maximumPoints?: InputMaybe<Float8ComparisonExp>;
  minimumPoints?: InputMaybe<Float8ComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  ordinalNumber?: InputMaybe<IntComparisonExp>;
  userLevels?: InputMaybe<UserLevelBoolExp>;
  userLevelsAggregate?: InputMaybe<UserLevelAggregateBoolExp>;
};

/** unique or primary key constraints on table "levels" */
export enum LevelsConstraint {
  /** unique or primary key constraint on columns "level_id" */
  LevelsPkey = "levels_pkey",
}

/** input type for incrementing numeric columns in table "levels" */
export type LevelsIncInput = {
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  grade?: InputMaybe<Scalars["float8"]["input"]>;
  imageFileId?: InputMaybe<Scalars["bigint"]["input"]>;
  levelId?: InputMaybe<Scalars["bigint"]["input"]>;
  maximumPoints?: InputMaybe<Scalars["float8"]["input"]>;
  minimumPoints?: InputMaybe<Scalars["float8"]["input"]>;
  ordinalNumber?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "levels" */
export type LevelsInsertInput = {
  edition?: InputMaybe<EditionObjRelInsertInput>;
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  file?: InputMaybe<FilesObjRelInsertInput>;
  grade?: InputMaybe<Scalars["float8"]["input"]>;
  highest?: InputMaybe<Scalars["Boolean"]["input"]>;
  imageFileId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  levelId?: InputMaybe<Scalars["bigint"]["input"]>;
  maximumPoints?: InputMaybe<Scalars["float8"]["input"]>;
  minimumPoints?: InputMaybe<Scalars["float8"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  ordinalNumber?: InputMaybe<Scalars["Int"]["input"]>;
  userLevels?: InputMaybe<UserLevelArrRelInsertInput>;
};

/** aggregate max on columns */
export type LevelsMaxFields = {
  __typename?: "LevelsMaxFields";
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  grade?: Maybe<Scalars["float8"]["output"]>;
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  levelId?: Maybe<Scalars["bigint"]["output"]>;
  maximumPoints?: Maybe<Scalars["float8"]["output"]>;
  minimumPoints?: Maybe<Scalars["float8"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  ordinalNumber?: Maybe<Scalars["Int"]["output"]>;
};

/** order by max() on columns of table "levels" */
export type LevelsMaxOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  grade?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  levelId?: InputMaybe<OrderBy>;
  maximumPoints?: InputMaybe<OrderBy>;
  minimumPoints?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type LevelsMinFields = {
  __typename?: "LevelsMinFields";
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  grade?: Maybe<Scalars["float8"]["output"]>;
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  levelId?: Maybe<Scalars["bigint"]["output"]>;
  maximumPoints?: Maybe<Scalars["float8"]["output"]>;
  minimumPoints?: Maybe<Scalars["float8"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  ordinalNumber?: Maybe<Scalars["Int"]["output"]>;
};

/** order by min() on columns of table "levels" */
export type LevelsMinOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  grade?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  levelId?: InputMaybe<OrderBy>;
  maximumPoints?: InputMaybe<OrderBy>;
  minimumPoints?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "levels" */
export type LevelsMutationResponse = {
  __typename?: "LevelsMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Levels>;
};

/** input type for inserting object relation for remote table "levels" */
export type LevelsObjRelInsertInput = {
  data: LevelsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<LevelsOnConflict>;
};

/** on_conflict condition type for table "levels" */
export type LevelsOnConflict = {
  constraint: LevelsConstraint;
  updateColumns?: Array<LevelsUpdateColumn>;
  where?: InputMaybe<LevelsBoolExp>;
};

/** Ordering options when selecting data from "levels". */
export type LevelsOrderBy = {
  edition?: InputMaybe<EditionOrderBy>;
  editionId?: InputMaybe<OrderBy>;
  file?: InputMaybe<FilesOrderBy>;
  grade?: InputMaybe<OrderBy>;
  highest?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  levelId?: InputMaybe<OrderBy>;
  maximumPoints?: InputMaybe<OrderBy>;
  minimumPoints?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
  userLevelsAggregate?: InputMaybe<UserLevelAggregateOrderBy>;
};

/** primary key columns input for table: levels */
export type LevelsPkColumnsInput = {
  levelId: Scalars["bigint"]["input"];
};

/** select columns of table "levels" */
export enum LevelsSelectColumn {
  /** column name */
  EditionId = "editionId",
  /** column name */
  Grade = "grade",
  /** column name */
  Highest = "highest",
  /** column name */
  ImageFileId = "imageFileId",
  /** column name */
  Label = "label",
  /** column name */
  LevelId = "levelId",
  /** column name */
  MaximumPoints = "maximumPoints",
  /** column name */
  MinimumPoints = "minimumPoints",
  /** column name */
  Name = "name",
  /** column name */
  OrdinalNumber = "ordinalNumber",
}

/** select "levelsAggregateBoolExpAvgArgumentsColumns" columns of table "levels" */
export enum LevelsSelectColumnLevelsAggregateBoolExpAvgArgumentsColumns {
  /** column name */
  Grade = "grade",
  /** column name */
  MaximumPoints = "maximumPoints",
  /** column name */
  MinimumPoints = "minimumPoints",
}

/** select "levelsAggregateBoolExpBool_andArgumentsColumns" columns of table "levels" */
export enum LevelsSelectColumnLevelsAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  Highest = "highest",
}

/** select "levelsAggregateBoolExpBool_orArgumentsColumns" columns of table "levels" */
export enum LevelsSelectColumnLevelsAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  Highest = "highest",
}

/** select "levelsAggregateBoolExpCorrArgumentsColumns" columns of table "levels" */
export enum LevelsSelectColumnLevelsAggregateBoolExpCorrArgumentsColumns {
  /** column name */
  Grade = "grade",
  /** column name */
  MaximumPoints = "maximumPoints",
  /** column name */
  MinimumPoints = "minimumPoints",
}

/** select "levelsAggregateBoolExpCovar_sampArgumentsColumns" columns of table "levels" */
export enum LevelsSelectColumnLevelsAggregateBoolExpCovar_SampArgumentsColumns {
  /** column name */
  Grade = "grade",
  /** column name */
  MaximumPoints = "maximumPoints",
  /** column name */
  MinimumPoints = "minimumPoints",
}

/** select "levelsAggregateBoolExpMaxArgumentsColumns" columns of table "levels" */
export enum LevelsSelectColumnLevelsAggregateBoolExpMaxArgumentsColumns {
  /** column name */
  Grade = "grade",
  /** column name */
  MaximumPoints = "maximumPoints",
  /** column name */
  MinimumPoints = "minimumPoints",
}

/** select "levelsAggregateBoolExpMinArgumentsColumns" columns of table "levels" */
export enum LevelsSelectColumnLevelsAggregateBoolExpMinArgumentsColumns {
  /** column name */
  Grade = "grade",
  /** column name */
  MaximumPoints = "maximumPoints",
  /** column name */
  MinimumPoints = "minimumPoints",
}

/** select "levelsAggregateBoolExpStddev_sampArgumentsColumns" columns of table "levels" */
export enum LevelsSelectColumnLevelsAggregateBoolExpStddev_SampArgumentsColumns {
  /** column name */
  Grade = "grade",
  /** column name */
  MaximumPoints = "maximumPoints",
  /** column name */
  MinimumPoints = "minimumPoints",
}

/** select "levelsAggregateBoolExpSumArgumentsColumns" columns of table "levels" */
export enum LevelsSelectColumnLevelsAggregateBoolExpSumArgumentsColumns {
  /** column name */
  Grade = "grade",
  /** column name */
  MaximumPoints = "maximumPoints",
  /** column name */
  MinimumPoints = "minimumPoints",
}

/** select "levelsAggregateBoolExpVar_sampArgumentsColumns" columns of table "levels" */
export enum LevelsSelectColumnLevelsAggregateBoolExpVar_SampArgumentsColumns {
  /** column name */
  Grade = "grade",
  /** column name */
  MaximumPoints = "maximumPoints",
  /** column name */
  MinimumPoints = "minimumPoints",
}

/** input type for updating data in table "levels" */
export type LevelsSetInput = {
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  grade?: InputMaybe<Scalars["float8"]["input"]>;
  highest?: InputMaybe<Scalars["Boolean"]["input"]>;
  imageFileId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  levelId?: InputMaybe<Scalars["bigint"]["input"]>;
  maximumPoints?: InputMaybe<Scalars["float8"]["input"]>;
  minimumPoints?: InputMaybe<Scalars["float8"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  ordinalNumber?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate stddev on columns */
export type LevelsStddevFields = {
  __typename?: "LevelsStddevFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  grade?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  levelId?: Maybe<Scalars["Float"]["output"]>;
  maximumPoints?: Maybe<Scalars["Float"]["output"]>;
  minimumPoints?: Maybe<Scalars["Float"]["output"]>;
  ordinalNumber?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "levels" */
export type LevelsStddevOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  grade?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  levelId?: InputMaybe<OrderBy>;
  maximumPoints?: InputMaybe<OrderBy>;
  minimumPoints?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type LevelsStddevPopFields = {
  __typename?: "LevelsStddevPopFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  grade?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  levelId?: Maybe<Scalars["Float"]["output"]>;
  maximumPoints?: Maybe<Scalars["Float"]["output"]>;
  minimumPoints?: Maybe<Scalars["Float"]["output"]>;
  ordinalNumber?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevPop() on columns of table "levels" */
export type LevelsStddevPopOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  grade?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  levelId?: InputMaybe<OrderBy>;
  maximumPoints?: InputMaybe<OrderBy>;
  minimumPoints?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type LevelsStddevSampFields = {
  __typename?: "LevelsStddevSampFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  grade?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  levelId?: Maybe<Scalars["Float"]["output"]>;
  maximumPoints?: Maybe<Scalars["Float"]["output"]>;
  minimumPoints?: Maybe<Scalars["Float"]["output"]>;
  ordinalNumber?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevSamp() on columns of table "levels" */
export type LevelsStddevSampOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  grade?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  levelId?: InputMaybe<OrderBy>;
  maximumPoints?: InputMaybe<OrderBy>;
  minimumPoints?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "levels" */
export type LevelsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: LevelsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type LevelsStreamCursorValueInput = {
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  grade?: InputMaybe<Scalars["float8"]["input"]>;
  highest?: InputMaybe<Scalars["Boolean"]["input"]>;
  imageFileId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  levelId?: InputMaybe<Scalars["bigint"]["input"]>;
  maximumPoints?: InputMaybe<Scalars["float8"]["input"]>;
  minimumPoints?: InputMaybe<Scalars["float8"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  ordinalNumber?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate sum on columns */
export type LevelsSumFields = {
  __typename?: "LevelsSumFields";
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  grade?: Maybe<Scalars["float8"]["output"]>;
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  levelId?: Maybe<Scalars["bigint"]["output"]>;
  maximumPoints?: Maybe<Scalars["float8"]["output"]>;
  minimumPoints?: Maybe<Scalars["float8"]["output"]>;
  ordinalNumber?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "levels" */
export type LevelsSumOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  grade?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  levelId?: InputMaybe<OrderBy>;
  maximumPoints?: InputMaybe<OrderBy>;
  minimumPoints?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
};

/** update columns of table "levels" */
export enum LevelsUpdateColumn {
  /** column name */
  EditionId = "editionId",
  /** column name */
  Grade = "grade",
  /** column name */
  Highest = "highest",
  /** column name */
  ImageFileId = "imageFileId",
  /** column name */
  Label = "label",
  /** column name */
  LevelId = "levelId",
  /** column name */
  MaximumPoints = "maximumPoints",
  /** column name */
  MinimumPoints = "minimumPoints",
  /** column name */
  Name = "name",
  /** column name */
  OrdinalNumber = "ordinalNumber",
}

export type LevelsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<LevelsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<LevelsSetInput>;
  /** filter the rows which have to be updated */
  where: LevelsBoolExp;
};

/** aggregate varPop on columns */
export type LevelsVarPopFields = {
  __typename?: "LevelsVarPopFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  grade?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  levelId?: Maybe<Scalars["Float"]["output"]>;
  maximumPoints?: Maybe<Scalars["Float"]["output"]>;
  minimumPoints?: Maybe<Scalars["Float"]["output"]>;
  ordinalNumber?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varPop() on columns of table "levels" */
export type LevelsVarPopOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  grade?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  levelId?: InputMaybe<OrderBy>;
  maximumPoints?: InputMaybe<OrderBy>;
  minimumPoints?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type LevelsVarSampFields = {
  __typename?: "LevelsVarSampFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  grade?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  levelId?: Maybe<Scalars["Float"]["output"]>;
  maximumPoints?: Maybe<Scalars["Float"]["output"]>;
  minimumPoints?: Maybe<Scalars["Float"]["output"]>;
  ordinalNumber?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varSamp() on columns of table "levels" */
export type LevelsVarSampOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  grade?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  levelId?: InputMaybe<OrderBy>;
  maximumPoints?: InputMaybe<OrderBy>;
  minimumPoints?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type LevelsVarianceFields = {
  __typename?: "LevelsVarianceFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  grade?: Maybe<Scalars["Float"]["output"]>;
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  levelId?: Maybe<Scalars["Float"]["output"]>;
  maximumPoints?: Maybe<Scalars["Float"]["output"]>;
  minimumPoints?: Maybe<Scalars["Float"]["output"]>;
  ordinalNumber?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "levels" */
export type LevelsVarianceOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  grade?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  levelId?: InputMaybe<OrderBy>;
  maximumPoints?: InputMaybe<OrderBy>;
  minimumPoints?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
};

export type NeighboringLevelsType = {
  __typename?: "NeighboringLevelsType";
  currLevel: LevelType;
  nextLevel?: Maybe<LevelType>;
  prevLevel?: Maybe<LevelType>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = "ASC",
  /** in ascending order, nulls first */
  AscNullsFirst = "ASC_NULLS_FIRST",
  /** in ascending order, nulls last */
  AscNullsLast = "ASC_NULLS_LAST",
  /** in descending order, nulls first */
  Desc = "DESC",
  /** in descending order, nulls first */
  DescNullsFirst = "DESC_NULLS_FIRST",
  /** in descending order, nulls last */
  DescNullsLast = "DESC_NULLS_LAST",
}

export type PartialBonusType = {
  __typename?: "PartialBonusType";
  bonuses: BonusType;
  partialValue: Scalars["Float"]["output"];
};

export type PointType = {
  __typename?: "PointType";
  createdAt: Scalars["String"]["output"];
  label: Scalars["String"]["output"];
  pointsId: Scalars["ID"]["output"];
  student: UserType;
  subcategory: SubcategoryType;
  teacher: UserType;
  updatedAt: Scalars["String"]["output"];
  updatedBy: UserType;
  value: Scalars["Float"]["output"];
};

/** columns and relationships of "points" */
export type Points = {
  __typename?: "Points";
  /** An array relationship */
  bonuses: Array<Bonuses>;
  /** An aggregate relationship */
  bonusesAggregate: BonusesAggregate;
  createdAt: Scalars["timestamp"]["output"];
  label: Scalars["String"]["output"];
  pointsId: Scalars["bigint"]["output"];
  studentId: Scalars["bigint"]["output"];
  /** An object relationship */
  subcategory: Subcategories;
  subcategoryId: Scalars["bigint"]["output"];
  teacherId: Scalars["bigint"]["output"];
  updatedAt: Scalars["timestamp"]["output"];
  updatedBy: Scalars["bigint"]["output"];
  /** An object relationship */
  user: Users;
  /** An object relationship */
  userByTeacherId: Users;
  /** An object relationship */
  userByUpdatedBy: Users;
  value: Scalars["float8"]["output"];
};

/** columns and relationships of "points" */
export type PointsBonusesArgs = {
  distinctOn?: InputMaybe<Array<BonusesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<BonusesOrderBy>>;
  where?: InputMaybe<BonusesBoolExp>;
};

/** columns and relationships of "points" */
export type PointsBonusesAggregateArgs = {
  distinctOn?: InputMaybe<Array<BonusesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<BonusesOrderBy>>;
  where?: InputMaybe<BonusesBoolExp>;
};

/** aggregated selection of "points" */
export type PointsAggregate = {
  __typename?: "PointsAggregate";
  aggregate?: Maybe<PointsAggregateFields>;
  nodes: Array<Points>;
};

export type PointsAggregateBoolExp = {
  avg?: InputMaybe<PointsAggregateBoolExpAvg>;
  corr?: InputMaybe<PointsAggregateBoolExpCorr>;
  count?: InputMaybe<PointsAggregateBoolExpCount>;
  covar_samp?: InputMaybe<PointsAggregateBoolExpCovar_Samp>;
  max?: InputMaybe<PointsAggregateBoolExpMax>;
  min?: InputMaybe<PointsAggregateBoolExpMin>;
  stddev_samp?: InputMaybe<PointsAggregateBoolExpStddev_Samp>;
  sum?: InputMaybe<PointsAggregateBoolExpSum>;
  var_samp?: InputMaybe<PointsAggregateBoolExpVar_Samp>;
};

/** aggregate fields of "points" */
export type PointsAggregateFields = {
  __typename?: "PointsAggregateFields";
  avg?: Maybe<PointsAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<PointsMaxFields>;
  min?: Maybe<PointsMinFields>;
  stddev?: Maybe<PointsStddevFields>;
  stddevPop?: Maybe<PointsStddevPopFields>;
  stddevSamp?: Maybe<PointsStddevSampFields>;
  sum?: Maybe<PointsSumFields>;
  varPop?: Maybe<PointsVarPopFields>;
  varSamp?: Maybe<PointsVarSampFields>;
  variance?: Maybe<PointsVarianceFields>;
};

/** aggregate fields of "points" */
export type PointsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PointsSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "points" */
export type PointsAggregateOrderBy = {
  avg?: InputMaybe<PointsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PointsMaxOrderBy>;
  min?: InputMaybe<PointsMinOrderBy>;
  stddev?: InputMaybe<PointsStddevOrderBy>;
  stddevPop?: InputMaybe<PointsStddevPopOrderBy>;
  stddevSamp?: InputMaybe<PointsStddevSampOrderBy>;
  sum?: InputMaybe<PointsSumOrderBy>;
  varPop?: InputMaybe<PointsVarPopOrderBy>;
  varSamp?: InputMaybe<PointsVarSampOrderBy>;
  variance?: InputMaybe<PointsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "points" */
export type PointsArrRelInsertInput = {
  data: Array<PointsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<PointsOnConflict>;
};

/** aggregate avg on columns */
export type PointsAvgFields = {
  __typename?: "PointsAvgFields";
  pointsId?: Maybe<Scalars["Float"]["output"]>;
  studentId?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  updatedBy?: Maybe<Scalars["Float"]["output"]>;
  value?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "points" */
export type PointsAvgOrderBy = {
  pointsId?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "points". All fields are combined with a logical 'AND'. */
export type PointsBoolExp = {
  _and?: InputMaybe<Array<PointsBoolExp>>;
  _not?: InputMaybe<PointsBoolExp>;
  _or?: InputMaybe<Array<PointsBoolExp>>;
  bonuses?: InputMaybe<BonusesBoolExp>;
  bonusesAggregate?: InputMaybe<BonusesAggregateBoolExp>;
  createdAt?: InputMaybe<TimestampComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
  pointsId?: InputMaybe<BigintComparisonExp>;
  studentId?: InputMaybe<BigintComparisonExp>;
  subcategory?: InputMaybe<SubcategoriesBoolExp>;
  subcategoryId?: InputMaybe<BigintComparisonExp>;
  teacherId?: InputMaybe<BigintComparisonExp>;
  updatedAt?: InputMaybe<TimestampComparisonExp>;
  updatedBy?: InputMaybe<BigintComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userByTeacherId?: InputMaybe<UsersBoolExp>;
  userByUpdatedBy?: InputMaybe<UsersBoolExp>;
  value?: InputMaybe<Float8ComparisonExp>;
};

/** unique or primary key constraints on table "points" */
export enum PointsConstraint {
  /** unique or primary key constraint on columns "points_id" */
  PointsPkey = "points_pkey",
}

/** columns and relationships of "points_history" */
export type PointsHistory = {
  __typename?: "PointsHistory";
  copiedAt: Scalars["timestamp"]["output"];
  createdAt: Scalars["timestamp"]["output"];
  label: Scalars["String"]["output"];
  /** An object relationship */
  points?: Maybe<Points>;
  pointsHistoryId: Scalars["bigint"]["output"];
  pointsId: Scalars["bigint"]["output"];
  studentId: Scalars["bigint"]["output"];
  /** An object relationship */
  subcategory: Subcategories;
  subcategoryId: Scalars["bigint"]["output"];
  teacherId: Scalars["bigint"]["output"];
  updatedAt: Scalars["timestamp"]["output"];
  updatedBy: Scalars["bigint"]["output"];
  /** An object relationship */
  user: Users;
  /** An object relationship */
  userByTeacherId: Users;
  value: Scalars["float8"]["output"];
};

/** aggregated selection of "points_history" */
export type PointsHistoryAggregate = {
  __typename?: "PointsHistoryAggregate";
  aggregate?: Maybe<PointsHistoryAggregateFields>;
  nodes: Array<PointsHistory>;
};

export type PointsHistoryAggregateBoolExp = {
  avg?: InputMaybe<PointsHistoryAggregateBoolExpAvg>;
  corr?: InputMaybe<PointsHistoryAggregateBoolExpCorr>;
  count?: InputMaybe<PointsHistoryAggregateBoolExpCount>;
  covar_samp?: InputMaybe<PointsHistoryAggregateBoolExpCovar_Samp>;
  max?: InputMaybe<PointsHistoryAggregateBoolExpMax>;
  min?: InputMaybe<PointsHistoryAggregateBoolExpMin>;
  stddev_samp?: InputMaybe<PointsHistoryAggregateBoolExpStddev_Samp>;
  sum?: InputMaybe<PointsHistoryAggregateBoolExpSum>;
  var_samp?: InputMaybe<PointsHistoryAggregateBoolExpVar_Samp>;
};

/** aggregate fields of "points_history" */
export type PointsHistoryAggregateFields = {
  __typename?: "PointsHistoryAggregateFields";
  avg?: Maybe<PointsHistoryAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<PointsHistoryMaxFields>;
  min?: Maybe<PointsHistoryMinFields>;
  stddev?: Maybe<PointsHistoryStddevFields>;
  stddevPop?: Maybe<PointsHistoryStddevPopFields>;
  stddevSamp?: Maybe<PointsHistoryStddevSampFields>;
  sum?: Maybe<PointsHistorySumFields>;
  varPop?: Maybe<PointsHistoryVarPopFields>;
  varSamp?: Maybe<PointsHistoryVarSampFields>;
  variance?: Maybe<PointsHistoryVarianceFields>;
};

/** aggregate fields of "points_history" */
export type PointsHistoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PointsHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "points_history" */
export type PointsHistoryAggregateOrderBy = {
  avg?: InputMaybe<PointsHistoryAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PointsHistoryMaxOrderBy>;
  min?: InputMaybe<PointsHistoryMinOrderBy>;
  stddev?: InputMaybe<PointsHistoryStddevOrderBy>;
  stddevPop?: InputMaybe<PointsHistoryStddevPopOrderBy>;
  stddevSamp?: InputMaybe<PointsHistoryStddevSampOrderBy>;
  sum?: InputMaybe<PointsHistorySumOrderBy>;
  varPop?: InputMaybe<PointsHistoryVarPopOrderBy>;
  varSamp?: InputMaybe<PointsHistoryVarSampOrderBy>;
  variance?: InputMaybe<PointsHistoryVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "points_history" */
export type PointsHistoryArrRelInsertInput = {
  data: Array<PointsHistoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<PointsHistoryOnConflict>;
};

/** aggregate avg on columns */
export type PointsHistoryAvgFields = {
  __typename?: "PointsHistoryAvgFields";
  pointsHistoryId?: Maybe<Scalars["Float"]["output"]>;
  pointsId?: Maybe<Scalars["Float"]["output"]>;
  studentId?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  updatedBy?: Maybe<Scalars["Float"]["output"]>;
  value?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "points_history" */
export type PointsHistoryAvgOrderBy = {
  pointsHistoryId?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "points_history". All fields are combined with a logical 'AND'. */
export type PointsHistoryBoolExp = {
  _and?: InputMaybe<Array<PointsHistoryBoolExp>>;
  _not?: InputMaybe<PointsHistoryBoolExp>;
  _or?: InputMaybe<Array<PointsHistoryBoolExp>>;
  copiedAt?: InputMaybe<TimestampComparisonExp>;
  createdAt?: InputMaybe<TimestampComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
  points?: InputMaybe<PointsBoolExp>;
  pointsHistoryId?: InputMaybe<BigintComparisonExp>;
  pointsId?: InputMaybe<BigintComparisonExp>;
  studentId?: InputMaybe<BigintComparisonExp>;
  subcategory?: InputMaybe<SubcategoriesBoolExp>;
  subcategoryId?: InputMaybe<BigintComparisonExp>;
  teacherId?: InputMaybe<BigintComparisonExp>;
  updatedAt?: InputMaybe<TimestampComparisonExp>;
  updatedBy?: InputMaybe<BigintComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userByTeacherId?: InputMaybe<UsersBoolExp>;
  value?: InputMaybe<Float8ComparisonExp>;
};

/** unique or primary key constraints on table "points_history" */
export enum PointsHistoryConstraint {
  /** unique or primary key constraint on columns "points_history_id" */
  PointsHistoryPkey = "points_history_pkey",
}

/** input type for incrementing numeric columns in table "points_history" */
export type PointsHistoryIncInput = {
  pointsHistoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  pointsId?: InputMaybe<Scalars["bigint"]["input"]>;
  studentId?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  teacherId?: InputMaybe<Scalars["bigint"]["input"]>;
  updatedBy?: InputMaybe<Scalars["bigint"]["input"]>;
  value?: InputMaybe<Scalars["float8"]["input"]>;
};

/** input type for inserting data into table "points_history" */
export type PointsHistoryInsertInput = {
  copiedAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  points?: InputMaybe<PointsObjRelInsertInput>;
  pointsHistoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  pointsId?: InputMaybe<Scalars["bigint"]["input"]>;
  studentId?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategory?: InputMaybe<SubcategoriesObjRelInsertInput>;
  subcategoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  teacherId?: InputMaybe<Scalars["bigint"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  updatedBy?: InputMaybe<Scalars["bigint"]["input"]>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userByTeacherId?: InputMaybe<UsersObjRelInsertInput>;
  value?: InputMaybe<Scalars["float8"]["input"]>;
};

/** aggregate max on columns */
export type PointsHistoryMaxFields = {
  __typename?: "PointsHistoryMaxFields";
  copiedAt?: Maybe<Scalars["timestamp"]["output"]>;
  createdAt?: Maybe<Scalars["timestamp"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  pointsHistoryId?: Maybe<Scalars["bigint"]["output"]>;
  pointsId?: Maybe<Scalars["bigint"]["output"]>;
  studentId?: Maybe<Scalars["bigint"]["output"]>;
  subcategoryId?: Maybe<Scalars["bigint"]["output"]>;
  teacherId?: Maybe<Scalars["bigint"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamp"]["output"]>;
  updatedBy?: Maybe<Scalars["bigint"]["output"]>;
  value?: Maybe<Scalars["float8"]["output"]>;
};

/** order by max() on columns of table "points_history" */
export type PointsHistoryMaxOrderBy = {
  copiedAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  pointsHistoryId?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type PointsHistoryMinFields = {
  __typename?: "PointsHistoryMinFields";
  copiedAt?: Maybe<Scalars["timestamp"]["output"]>;
  createdAt?: Maybe<Scalars["timestamp"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  pointsHistoryId?: Maybe<Scalars["bigint"]["output"]>;
  pointsId?: Maybe<Scalars["bigint"]["output"]>;
  studentId?: Maybe<Scalars["bigint"]["output"]>;
  subcategoryId?: Maybe<Scalars["bigint"]["output"]>;
  teacherId?: Maybe<Scalars["bigint"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamp"]["output"]>;
  updatedBy?: Maybe<Scalars["bigint"]["output"]>;
  value?: Maybe<Scalars["float8"]["output"]>;
};

/** order by min() on columns of table "points_history" */
export type PointsHistoryMinOrderBy = {
  copiedAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  pointsHistoryId?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "points_history" */
export type PointsHistoryMutationResponse = {
  __typename?: "PointsHistoryMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<PointsHistory>;
};

/** on_conflict condition type for table "points_history" */
export type PointsHistoryOnConflict = {
  constraint: PointsHistoryConstraint;
  updateColumns?: Array<PointsHistoryUpdateColumn>;
  where?: InputMaybe<PointsHistoryBoolExp>;
};

/** Ordering options when selecting data from "points_history". */
export type PointsHistoryOrderBy = {
  copiedAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  points?: InputMaybe<PointsOrderBy>;
  pointsHistoryId?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  subcategory?: InputMaybe<SubcategoriesOrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userByTeacherId?: InputMaybe<UsersOrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: points_history */
export type PointsHistoryPkColumnsInput = {
  pointsHistoryId: Scalars["bigint"]["input"];
};

/** select columns of table "points_history" */
export enum PointsHistorySelectColumn {
  /** column name */
  CopiedAt = "copiedAt",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Label = "label",
  /** column name */
  PointsHistoryId = "pointsHistoryId",
  /** column name */
  PointsId = "pointsId",
  /** column name */
  StudentId = "studentId",
  /** column name */
  SubcategoryId = "subcategoryId",
  /** column name */
  TeacherId = "teacherId",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UpdatedBy = "updatedBy",
  /** column name */
  Value = "value",
}

/** select "pointsHistoryAggregateBoolExpAvgArgumentsColumns" columns of table "points_history" */
export enum PointsHistorySelectColumnPointsHistoryAggregateBoolExpAvgArgumentsColumns {
  /** column name */
  Value = "value",
}

/** select "pointsHistoryAggregateBoolExpCorrArgumentsColumns" columns of table "points_history" */
export enum PointsHistorySelectColumnPointsHistoryAggregateBoolExpCorrArgumentsColumns {
  /** column name */
  Value = "value",
}

/** select "pointsHistoryAggregateBoolExpCovar_sampArgumentsColumns" columns of table "points_history" */
export enum PointsHistorySelectColumnPointsHistoryAggregateBoolExpCovar_SampArgumentsColumns {
  /** column name */
  Value = "value",
}

/** select "pointsHistoryAggregateBoolExpMaxArgumentsColumns" columns of table "points_history" */
export enum PointsHistorySelectColumnPointsHistoryAggregateBoolExpMaxArgumentsColumns {
  /** column name */
  Value = "value",
}

/** select "pointsHistoryAggregateBoolExpMinArgumentsColumns" columns of table "points_history" */
export enum PointsHistorySelectColumnPointsHistoryAggregateBoolExpMinArgumentsColumns {
  /** column name */
  Value = "value",
}

/** select "pointsHistoryAggregateBoolExpStddev_sampArgumentsColumns" columns of table "points_history" */
export enum PointsHistorySelectColumnPointsHistoryAggregateBoolExpStddev_SampArgumentsColumns {
  /** column name */
  Value = "value",
}

/** select "pointsHistoryAggregateBoolExpSumArgumentsColumns" columns of table "points_history" */
export enum PointsHistorySelectColumnPointsHistoryAggregateBoolExpSumArgumentsColumns {
  /** column name */
  Value = "value",
}

/** select "pointsHistoryAggregateBoolExpVar_sampArgumentsColumns" columns of table "points_history" */
export enum PointsHistorySelectColumnPointsHistoryAggregateBoolExpVar_SampArgumentsColumns {
  /** column name */
  Value = "value",
}

/** input type for updating data in table "points_history" */
export type PointsHistorySetInput = {
  copiedAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  pointsHistoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  pointsId?: InputMaybe<Scalars["bigint"]["input"]>;
  studentId?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  teacherId?: InputMaybe<Scalars["bigint"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  updatedBy?: InputMaybe<Scalars["bigint"]["input"]>;
  value?: InputMaybe<Scalars["float8"]["input"]>;
};

/** aggregate stddev on columns */
export type PointsHistoryStddevFields = {
  __typename?: "PointsHistoryStddevFields";
  pointsHistoryId?: Maybe<Scalars["Float"]["output"]>;
  pointsId?: Maybe<Scalars["Float"]["output"]>;
  studentId?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  updatedBy?: Maybe<Scalars["Float"]["output"]>;
  value?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "points_history" */
export type PointsHistoryStddevOrderBy = {
  pointsHistoryId?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type PointsHistoryStddevPopFields = {
  __typename?: "PointsHistoryStddevPopFields";
  pointsHistoryId?: Maybe<Scalars["Float"]["output"]>;
  pointsId?: Maybe<Scalars["Float"]["output"]>;
  studentId?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  updatedBy?: Maybe<Scalars["Float"]["output"]>;
  value?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevPop() on columns of table "points_history" */
export type PointsHistoryStddevPopOrderBy = {
  pointsHistoryId?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type PointsHistoryStddevSampFields = {
  __typename?: "PointsHistoryStddevSampFields";
  pointsHistoryId?: Maybe<Scalars["Float"]["output"]>;
  pointsId?: Maybe<Scalars["Float"]["output"]>;
  studentId?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  updatedBy?: Maybe<Scalars["Float"]["output"]>;
  value?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevSamp() on columns of table "points_history" */
export type PointsHistoryStddevSampOrderBy = {
  pointsHistoryId?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "points_history" */
export type PointsHistoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PointsHistoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PointsHistoryStreamCursorValueInput = {
  copiedAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  pointsHistoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  pointsId?: InputMaybe<Scalars["bigint"]["input"]>;
  studentId?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  teacherId?: InputMaybe<Scalars["bigint"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  updatedBy?: InputMaybe<Scalars["bigint"]["input"]>;
  value?: InputMaybe<Scalars["float8"]["input"]>;
};

/** aggregate sum on columns */
export type PointsHistorySumFields = {
  __typename?: "PointsHistorySumFields";
  pointsHistoryId?: Maybe<Scalars["bigint"]["output"]>;
  pointsId?: Maybe<Scalars["bigint"]["output"]>;
  studentId?: Maybe<Scalars["bigint"]["output"]>;
  subcategoryId?: Maybe<Scalars["bigint"]["output"]>;
  teacherId?: Maybe<Scalars["bigint"]["output"]>;
  updatedBy?: Maybe<Scalars["bigint"]["output"]>;
  value?: Maybe<Scalars["float8"]["output"]>;
};

/** order by sum() on columns of table "points_history" */
export type PointsHistorySumOrderBy = {
  pointsHistoryId?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** update columns of table "points_history" */
export enum PointsHistoryUpdateColumn {
  /** column name */
  CopiedAt = "copiedAt",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Label = "label",
  /** column name */
  PointsHistoryId = "pointsHistoryId",
  /** column name */
  PointsId = "pointsId",
  /** column name */
  StudentId = "studentId",
  /** column name */
  SubcategoryId = "subcategoryId",
  /** column name */
  TeacherId = "teacherId",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UpdatedBy = "updatedBy",
  /** column name */
  Value = "value",
}

export type PointsHistoryUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PointsHistoryIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PointsHistorySetInput>;
  /** filter the rows which have to be updated */
  where: PointsHistoryBoolExp;
};

/** aggregate varPop on columns */
export type PointsHistoryVarPopFields = {
  __typename?: "PointsHistoryVarPopFields";
  pointsHistoryId?: Maybe<Scalars["Float"]["output"]>;
  pointsId?: Maybe<Scalars["Float"]["output"]>;
  studentId?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  updatedBy?: Maybe<Scalars["Float"]["output"]>;
  value?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varPop() on columns of table "points_history" */
export type PointsHistoryVarPopOrderBy = {
  pointsHistoryId?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type PointsHistoryVarSampFields = {
  __typename?: "PointsHistoryVarSampFields";
  pointsHistoryId?: Maybe<Scalars["Float"]["output"]>;
  pointsId?: Maybe<Scalars["Float"]["output"]>;
  studentId?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  updatedBy?: Maybe<Scalars["Float"]["output"]>;
  value?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varSamp() on columns of table "points_history" */
export type PointsHistoryVarSampOrderBy = {
  pointsHistoryId?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type PointsHistoryVarianceFields = {
  __typename?: "PointsHistoryVarianceFields";
  pointsHistoryId?: Maybe<Scalars["Float"]["output"]>;
  pointsId?: Maybe<Scalars["Float"]["output"]>;
  studentId?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  updatedBy?: Maybe<Scalars["Float"]["output"]>;
  value?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "points_history" */
export type PointsHistoryVarianceOrderBy = {
  pointsHistoryId?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** input type for incrementing numeric columns in table "points" */
export type PointsIncInput = {
  pointsId?: InputMaybe<Scalars["bigint"]["input"]>;
  studentId?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  teacherId?: InputMaybe<Scalars["bigint"]["input"]>;
  updatedBy?: InputMaybe<Scalars["bigint"]["input"]>;
  value?: InputMaybe<Scalars["float8"]["input"]>;
};

/** input type for inserting data into table "points" */
export type PointsInsertInput = {
  bonuses?: InputMaybe<BonusesArrRelInsertInput>;
  createdAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  pointsId?: InputMaybe<Scalars["bigint"]["input"]>;
  studentId?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategory?: InputMaybe<SubcategoriesObjRelInsertInput>;
  subcategoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  teacherId?: InputMaybe<Scalars["bigint"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  updatedBy?: InputMaybe<Scalars["bigint"]["input"]>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userByTeacherId?: InputMaybe<UsersObjRelInsertInput>;
  userByUpdatedBy?: InputMaybe<UsersObjRelInsertInput>;
  value?: InputMaybe<Scalars["float8"]["input"]>;
};

/** aggregate max on columns */
export type PointsMaxFields = {
  __typename?: "PointsMaxFields";
  createdAt?: Maybe<Scalars["timestamp"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  pointsId?: Maybe<Scalars["bigint"]["output"]>;
  studentId?: Maybe<Scalars["bigint"]["output"]>;
  subcategoryId?: Maybe<Scalars["bigint"]["output"]>;
  teacherId?: Maybe<Scalars["bigint"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamp"]["output"]>;
  updatedBy?: Maybe<Scalars["bigint"]["output"]>;
  value?: Maybe<Scalars["float8"]["output"]>;
};

/** order by max() on columns of table "points" */
export type PointsMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type PointsMinFields = {
  __typename?: "PointsMinFields";
  createdAt?: Maybe<Scalars["timestamp"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  pointsId?: Maybe<Scalars["bigint"]["output"]>;
  studentId?: Maybe<Scalars["bigint"]["output"]>;
  subcategoryId?: Maybe<Scalars["bigint"]["output"]>;
  teacherId?: Maybe<Scalars["bigint"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamp"]["output"]>;
  updatedBy?: Maybe<Scalars["bigint"]["output"]>;
  value?: Maybe<Scalars["float8"]["output"]>;
};

/** order by min() on columns of table "points" */
export type PointsMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "points" */
export type PointsMutationResponse = {
  __typename?: "PointsMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Points>;
};

/** input type for inserting object relation for remote table "points" */
export type PointsObjRelInsertInput = {
  data: PointsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<PointsOnConflict>;
};

/** on_conflict condition type for table "points" */
export type PointsOnConflict = {
  constraint: PointsConstraint;
  updateColumns?: Array<PointsUpdateColumn>;
  where?: InputMaybe<PointsBoolExp>;
};

/** Ordering options when selecting data from "points". */
export type PointsOrderBy = {
  bonusesAggregate?: InputMaybe<BonusesAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  pointsId?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  subcategory?: InputMaybe<SubcategoriesOrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userByTeacherId?: InputMaybe<UsersOrderBy>;
  userByUpdatedBy?: InputMaybe<UsersOrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: points */
export type PointsPkColumnsInput = {
  pointsId: Scalars["bigint"]["input"];
};

/** select columns of table "points" */
export enum PointsSelectColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Label = "label",
  /** column name */
  PointsId = "pointsId",
  /** column name */
  StudentId = "studentId",
  /** column name */
  SubcategoryId = "subcategoryId",
  /** column name */
  TeacherId = "teacherId",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UpdatedBy = "updatedBy",
  /** column name */
  Value = "value",
}

/** select "pointsAggregateBoolExpAvgArgumentsColumns" columns of table "points" */
export enum PointsSelectColumnPointsAggregateBoolExpAvgArgumentsColumns {
  /** column name */
  Value = "value",
}

/** select "pointsAggregateBoolExpCorrArgumentsColumns" columns of table "points" */
export enum PointsSelectColumnPointsAggregateBoolExpCorrArgumentsColumns {
  /** column name */
  Value = "value",
}

/** select "pointsAggregateBoolExpCovar_sampArgumentsColumns" columns of table "points" */
export enum PointsSelectColumnPointsAggregateBoolExpCovar_SampArgumentsColumns {
  /** column name */
  Value = "value",
}

/** select "pointsAggregateBoolExpMaxArgumentsColumns" columns of table "points" */
export enum PointsSelectColumnPointsAggregateBoolExpMaxArgumentsColumns {
  /** column name */
  Value = "value",
}

/** select "pointsAggregateBoolExpMinArgumentsColumns" columns of table "points" */
export enum PointsSelectColumnPointsAggregateBoolExpMinArgumentsColumns {
  /** column name */
  Value = "value",
}

/** select "pointsAggregateBoolExpStddev_sampArgumentsColumns" columns of table "points" */
export enum PointsSelectColumnPointsAggregateBoolExpStddev_SampArgumentsColumns {
  /** column name */
  Value = "value",
}

/** select "pointsAggregateBoolExpSumArgumentsColumns" columns of table "points" */
export enum PointsSelectColumnPointsAggregateBoolExpSumArgumentsColumns {
  /** column name */
  Value = "value",
}

/** select "pointsAggregateBoolExpVar_sampArgumentsColumns" columns of table "points" */
export enum PointsSelectColumnPointsAggregateBoolExpVar_SampArgumentsColumns {
  /** column name */
  Value = "value",
}

/** input type for updating data in table "points" */
export type PointsSetInput = {
  createdAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  pointsId?: InputMaybe<Scalars["bigint"]["input"]>;
  studentId?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  teacherId?: InputMaybe<Scalars["bigint"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  updatedBy?: InputMaybe<Scalars["bigint"]["input"]>;
  value?: InputMaybe<Scalars["float8"]["input"]>;
};

/** aggregate stddev on columns */
export type PointsStddevFields = {
  __typename?: "PointsStddevFields";
  pointsId?: Maybe<Scalars["Float"]["output"]>;
  studentId?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  updatedBy?: Maybe<Scalars["Float"]["output"]>;
  value?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "points" */
export type PointsStddevOrderBy = {
  pointsId?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type PointsStddevPopFields = {
  __typename?: "PointsStddevPopFields";
  pointsId?: Maybe<Scalars["Float"]["output"]>;
  studentId?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  updatedBy?: Maybe<Scalars["Float"]["output"]>;
  value?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevPop() on columns of table "points" */
export type PointsStddevPopOrderBy = {
  pointsId?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type PointsStddevSampFields = {
  __typename?: "PointsStddevSampFields";
  pointsId?: Maybe<Scalars["Float"]["output"]>;
  studentId?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  updatedBy?: Maybe<Scalars["Float"]["output"]>;
  value?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevSamp() on columns of table "points" */
export type PointsStddevSampOrderBy = {
  pointsId?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "points" */
export type PointsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PointsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PointsStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  pointsId?: InputMaybe<Scalars["bigint"]["input"]>;
  studentId?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  teacherId?: InputMaybe<Scalars["bigint"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamp"]["input"]>;
  updatedBy?: InputMaybe<Scalars["bigint"]["input"]>;
  value?: InputMaybe<Scalars["float8"]["input"]>;
};

/** aggregate sum on columns */
export type PointsSumFields = {
  __typename?: "PointsSumFields";
  pointsId?: Maybe<Scalars["bigint"]["output"]>;
  studentId?: Maybe<Scalars["bigint"]["output"]>;
  subcategoryId?: Maybe<Scalars["bigint"]["output"]>;
  teacherId?: Maybe<Scalars["bigint"]["output"]>;
  updatedBy?: Maybe<Scalars["bigint"]["output"]>;
  value?: Maybe<Scalars["float8"]["output"]>;
};

/** order by sum() on columns of table "points" */
export type PointsSumOrderBy = {
  pointsId?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** update columns of table "points" */
export enum PointsUpdateColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Label = "label",
  /** column name */
  PointsId = "pointsId",
  /** column name */
  StudentId = "studentId",
  /** column name */
  SubcategoryId = "subcategoryId",
  /** column name */
  TeacherId = "teacherId",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UpdatedBy = "updatedBy",
  /** column name */
  Value = "value",
}

export type PointsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PointsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PointsSetInput>;
  /** filter the rows which have to be updated */
  where: PointsBoolExp;
};

/** aggregate varPop on columns */
export type PointsVarPopFields = {
  __typename?: "PointsVarPopFields";
  pointsId?: Maybe<Scalars["Float"]["output"]>;
  studentId?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  updatedBy?: Maybe<Scalars["Float"]["output"]>;
  value?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varPop() on columns of table "points" */
export type PointsVarPopOrderBy = {
  pointsId?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type PointsVarSampFields = {
  __typename?: "PointsVarSampFields";
  pointsId?: Maybe<Scalars["Float"]["output"]>;
  studentId?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  updatedBy?: Maybe<Scalars["Float"]["output"]>;
  value?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varSamp() on columns of table "points" */
export type PointsVarSampOrderBy = {
  pointsId?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type PointsVarianceFields = {
  __typename?: "PointsVarianceFields";
  pointsId?: Maybe<Scalars["Float"]["output"]>;
  studentId?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
  teacherId?: Maybe<Scalars["Float"]["output"]>;
  updatedBy?: Maybe<Scalars["Float"]["output"]>;
  value?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "points" */
export type PointsVarianceOrderBy = {
  pointsId?: InputMaybe<OrderBy>;
  studentId?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  teacherId?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

export type PurePointsType = {
  __typename?: "PurePointsType";
  partialBonusType: Array<Maybe<PartialBonusType>>;
  purePoints?: Maybe<PointType>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

export type StudentPointsType = {
  __typename?: "StudentPointsType";
  level?: Maybe<LevelType>;
  subcategoryPoints: Array<Maybe<SubcategoryPointsType>>;
  sumOfAll: Scalars["Float"]["output"];
  sumOfBonuses: Scalars["Float"]["output"];
  sumOfPurePoints: Scalars["Float"]["output"];
  user: UserType;
};

/** columns and relationships of "subcategories" */
export type Subcategories = {
  __typename?: "Subcategories";
  /** An object relationship */
  category: Categories;
  categoryId: Scalars["bigint"]["output"];
  /** An array relationship */
  chestHistories: Array<ChestHistory>;
  /** An aggregate relationship */
  chestHistoriesAggregate: ChestHistoryAggregate;
  /** An object relationship */
  edition: Edition;
  editionId: Scalars["bigint"]["output"];
  label: Scalars["String"]["output"];
  maxPoints: Scalars["float8"]["output"];
  ordinalNumber: Scalars["Int"]["output"];
  /** An array relationship */
  points: Array<Points>;
  /** An aggregate relationship */
  pointsAggregate: PointsAggregate;
  /** An array relationship */
  pointsHistories: Array<PointsHistory>;
  /** An aggregate relationship */
  pointsHistoriesAggregate: PointsHistoryAggregate;
  subcategoryId: Scalars["bigint"]["output"];
  subcategoryName: Scalars["String"]["output"];
};

/** columns and relationships of "subcategories" */
export type SubcategoriesChestHistoriesArgs = {
  distinctOn?: InputMaybe<Array<ChestHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestHistoryOrderBy>>;
  where?: InputMaybe<ChestHistoryBoolExp>;
};

/** columns and relationships of "subcategories" */
export type SubcategoriesChestHistoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChestHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestHistoryOrderBy>>;
  where?: InputMaybe<ChestHistoryBoolExp>;
};

/** columns and relationships of "subcategories" */
export type SubcategoriesPointsArgs = {
  distinctOn?: InputMaybe<Array<PointsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PointsOrderBy>>;
  where?: InputMaybe<PointsBoolExp>;
};

/** columns and relationships of "subcategories" */
export type SubcategoriesPointsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PointsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PointsOrderBy>>;
  where?: InputMaybe<PointsBoolExp>;
};

/** columns and relationships of "subcategories" */
export type SubcategoriesPointsHistoriesArgs = {
  distinctOn?: InputMaybe<Array<PointsHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PointsHistoryOrderBy>>;
  where?: InputMaybe<PointsHistoryBoolExp>;
};

/** columns and relationships of "subcategories" */
export type SubcategoriesPointsHistoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<PointsHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PointsHistoryOrderBy>>;
  where?: InputMaybe<PointsHistoryBoolExp>;
};

/** aggregated selection of "subcategories" */
export type SubcategoriesAggregate = {
  __typename?: "SubcategoriesAggregate";
  aggregate?: Maybe<SubcategoriesAggregateFields>;
  nodes: Array<Subcategories>;
};

export type SubcategoriesAggregateBoolExp = {
  avg?: InputMaybe<SubcategoriesAggregateBoolExpAvg>;
  corr?: InputMaybe<SubcategoriesAggregateBoolExpCorr>;
  count?: InputMaybe<SubcategoriesAggregateBoolExpCount>;
  covar_samp?: InputMaybe<SubcategoriesAggregateBoolExpCovar_Samp>;
  max?: InputMaybe<SubcategoriesAggregateBoolExpMax>;
  min?: InputMaybe<SubcategoriesAggregateBoolExpMin>;
  stddev_samp?: InputMaybe<SubcategoriesAggregateBoolExpStddev_Samp>;
  sum?: InputMaybe<SubcategoriesAggregateBoolExpSum>;
  var_samp?: InputMaybe<SubcategoriesAggregateBoolExpVar_Samp>;
};

/** aggregate fields of "subcategories" */
export type SubcategoriesAggregateFields = {
  __typename?: "SubcategoriesAggregateFields";
  avg?: Maybe<SubcategoriesAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<SubcategoriesMaxFields>;
  min?: Maybe<SubcategoriesMinFields>;
  stddev?: Maybe<SubcategoriesStddevFields>;
  stddevPop?: Maybe<SubcategoriesStddevPopFields>;
  stddevSamp?: Maybe<SubcategoriesStddevSampFields>;
  sum?: Maybe<SubcategoriesSumFields>;
  varPop?: Maybe<SubcategoriesVarPopFields>;
  varSamp?: Maybe<SubcategoriesVarSampFields>;
  variance?: Maybe<SubcategoriesVarianceFields>;
};

/** aggregate fields of "subcategories" */
export type SubcategoriesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<SubcategoriesSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "subcategories" */
export type SubcategoriesAggregateOrderBy = {
  avg?: InputMaybe<SubcategoriesAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<SubcategoriesMaxOrderBy>;
  min?: InputMaybe<SubcategoriesMinOrderBy>;
  stddev?: InputMaybe<SubcategoriesStddevOrderBy>;
  stddevPop?: InputMaybe<SubcategoriesStddevPopOrderBy>;
  stddevSamp?: InputMaybe<SubcategoriesStddevSampOrderBy>;
  sum?: InputMaybe<SubcategoriesSumOrderBy>;
  varPop?: InputMaybe<SubcategoriesVarPopOrderBy>;
  varSamp?: InputMaybe<SubcategoriesVarSampOrderBy>;
  variance?: InputMaybe<SubcategoriesVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "subcategories" */
export type SubcategoriesArrRelInsertInput = {
  data: Array<SubcategoriesInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<SubcategoriesOnConflict>;
};

/** aggregate avg on columns */
export type SubcategoriesAvgFields = {
  __typename?: "SubcategoriesAvgFields";
  categoryId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
  maxPoints?: Maybe<Scalars["Float"]["output"]>;
  ordinalNumber?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "subcategories" */
export type SubcategoriesAvgOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  maxPoints?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "subcategories". All fields are combined with a logical 'AND'. */
export type SubcategoriesBoolExp = {
  _and?: InputMaybe<Array<SubcategoriesBoolExp>>;
  _not?: InputMaybe<SubcategoriesBoolExp>;
  _or?: InputMaybe<Array<SubcategoriesBoolExp>>;
  category?: InputMaybe<CategoriesBoolExp>;
  categoryId?: InputMaybe<BigintComparisonExp>;
  chestHistories?: InputMaybe<ChestHistoryBoolExp>;
  chestHistoriesAggregate?: InputMaybe<ChestHistoryAggregateBoolExp>;
  edition?: InputMaybe<EditionBoolExp>;
  editionId?: InputMaybe<BigintComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
  maxPoints?: InputMaybe<Float8ComparisonExp>;
  ordinalNumber?: InputMaybe<IntComparisonExp>;
  points?: InputMaybe<PointsBoolExp>;
  pointsAggregate?: InputMaybe<PointsAggregateBoolExp>;
  pointsHistories?: InputMaybe<PointsHistoryBoolExp>;
  pointsHistoriesAggregate?: InputMaybe<PointsHistoryAggregateBoolExp>;
  subcategoryId?: InputMaybe<BigintComparisonExp>;
  subcategoryName?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "subcategories" */
export enum SubcategoriesConstraint {
  /** unique or primary key constraint on columns "subcategory_id" */
  SubcategoriesPkey = "subcategories_pkey",
}

/** input type for incrementing numeric columns in table "subcategories" */
export type SubcategoriesIncInput = {
  categoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  maxPoints?: InputMaybe<Scalars["float8"]["input"]>;
  ordinalNumber?: InputMaybe<Scalars["Int"]["input"]>;
  subcategoryId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "subcategories" */
export type SubcategoriesInsertInput = {
  category?: InputMaybe<CategoriesObjRelInsertInput>;
  categoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  chestHistories?: InputMaybe<ChestHistoryArrRelInsertInput>;
  edition?: InputMaybe<EditionObjRelInsertInput>;
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  maxPoints?: InputMaybe<Scalars["float8"]["input"]>;
  ordinalNumber?: InputMaybe<Scalars["Int"]["input"]>;
  points?: InputMaybe<PointsArrRelInsertInput>;
  pointsHistories?: InputMaybe<PointsHistoryArrRelInsertInput>;
  subcategoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategoryName?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type SubcategoriesMaxFields = {
  __typename?: "SubcategoriesMaxFields";
  categoryId?: Maybe<Scalars["bigint"]["output"]>;
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  maxPoints?: Maybe<Scalars["float8"]["output"]>;
  ordinalNumber?: Maybe<Scalars["Int"]["output"]>;
  subcategoryId?: Maybe<Scalars["bigint"]["output"]>;
  subcategoryName?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "subcategories" */
export type SubcategoriesMaxOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  maxPoints?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  subcategoryName?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type SubcategoriesMinFields = {
  __typename?: "SubcategoriesMinFields";
  categoryId?: Maybe<Scalars["bigint"]["output"]>;
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  maxPoints?: Maybe<Scalars["float8"]["output"]>;
  ordinalNumber?: Maybe<Scalars["Int"]["output"]>;
  subcategoryId?: Maybe<Scalars["bigint"]["output"]>;
  subcategoryName?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "subcategories" */
export type SubcategoriesMinOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  maxPoints?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  subcategoryName?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "subcategories" */
export type SubcategoriesMutationResponse = {
  __typename?: "SubcategoriesMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Subcategories>;
};

/** input type for inserting object relation for remote table "subcategories" */
export type SubcategoriesObjRelInsertInput = {
  data: SubcategoriesInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<SubcategoriesOnConflict>;
};

/** on_conflict condition type for table "subcategories" */
export type SubcategoriesOnConflict = {
  constraint: SubcategoriesConstraint;
  updateColumns?: Array<SubcategoriesUpdateColumn>;
  where?: InputMaybe<SubcategoriesBoolExp>;
};

/** Ordering options when selecting data from "subcategories". */
export type SubcategoriesOrderBy = {
  category?: InputMaybe<CategoriesOrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  chestHistoriesAggregate?: InputMaybe<ChestHistoryAggregateOrderBy>;
  edition?: InputMaybe<EditionOrderBy>;
  editionId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  maxPoints?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
  pointsAggregate?: InputMaybe<PointsAggregateOrderBy>;
  pointsHistoriesAggregate?: InputMaybe<PointsHistoryAggregateOrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
  subcategoryName?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: subcategories */
export type SubcategoriesPkColumnsInput = {
  subcategoryId: Scalars["bigint"]["input"];
};

/** select columns of table "subcategories" */
export enum SubcategoriesSelectColumn {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  EditionId = "editionId",
  /** column name */
  Label = "label",
  /** column name */
  MaxPoints = "maxPoints",
  /** column name */
  OrdinalNumber = "ordinalNumber",
  /** column name */
  SubcategoryId = "subcategoryId",
  /** column name */
  SubcategoryName = "subcategoryName",
}

/** select "subcategoriesAggregateBoolExpAvgArgumentsColumns" columns of table "subcategories" */
export enum SubcategoriesSelectColumnSubcategoriesAggregateBoolExpAvgArgumentsColumns {
  /** column name */
  MaxPoints = "maxPoints",
}

/** select "subcategoriesAggregateBoolExpCorrArgumentsColumns" columns of table "subcategories" */
export enum SubcategoriesSelectColumnSubcategoriesAggregateBoolExpCorrArgumentsColumns {
  /** column name */
  MaxPoints = "maxPoints",
}

/** select "subcategoriesAggregateBoolExpCovar_sampArgumentsColumns" columns of table "subcategories" */
export enum SubcategoriesSelectColumnSubcategoriesAggregateBoolExpCovar_SampArgumentsColumns {
  /** column name */
  MaxPoints = "maxPoints",
}

/** select "subcategoriesAggregateBoolExpMaxArgumentsColumns" columns of table "subcategories" */
export enum SubcategoriesSelectColumnSubcategoriesAggregateBoolExpMaxArgumentsColumns {
  /** column name */
  MaxPoints = "maxPoints",
}

/** select "subcategoriesAggregateBoolExpMinArgumentsColumns" columns of table "subcategories" */
export enum SubcategoriesSelectColumnSubcategoriesAggregateBoolExpMinArgumentsColumns {
  /** column name */
  MaxPoints = "maxPoints",
}

/** select "subcategoriesAggregateBoolExpStddev_sampArgumentsColumns" columns of table "subcategories" */
export enum SubcategoriesSelectColumnSubcategoriesAggregateBoolExpStddev_SampArgumentsColumns {
  /** column name */
  MaxPoints = "maxPoints",
}

/** select "subcategoriesAggregateBoolExpSumArgumentsColumns" columns of table "subcategories" */
export enum SubcategoriesSelectColumnSubcategoriesAggregateBoolExpSumArgumentsColumns {
  /** column name */
  MaxPoints = "maxPoints",
}

/** select "subcategoriesAggregateBoolExpVar_sampArgumentsColumns" columns of table "subcategories" */
export enum SubcategoriesSelectColumnSubcategoriesAggregateBoolExpVar_SampArgumentsColumns {
  /** column name */
  MaxPoints = "maxPoints",
}

/** input type for updating data in table "subcategories" */
export type SubcategoriesSetInput = {
  categoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  maxPoints?: InputMaybe<Scalars["float8"]["input"]>;
  ordinalNumber?: InputMaybe<Scalars["Int"]["input"]>;
  subcategoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategoryName?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type SubcategoriesStddevFields = {
  __typename?: "SubcategoriesStddevFields";
  categoryId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
  maxPoints?: Maybe<Scalars["Float"]["output"]>;
  ordinalNumber?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "subcategories" */
export type SubcategoriesStddevOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  maxPoints?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type SubcategoriesStddevPopFields = {
  __typename?: "SubcategoriesStddevPopFields";
  categoryId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
  maxPoints?: Maybe<Scalars["Float"]["output"]>;
  ordinalNumber?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevPop() on columns of table "subcategories" */
export type SubcategoriesStddevPopOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  maxPoints?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type SubcategoriesStddevSampFields = {
  __typename?: "SubcategoriesStddevSampFields";
  categoryId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
  maxPoints?: Maybe<Scalars["Float"]["output"]>;
  ordinalNumber?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevSamp() on columns of table "subcategories" */
export type SubcategoriesStddevSampOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  maxPoints?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "subcategories" */
export type SubcategoriesStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: SubcategoriesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type SubcategoriesStreamCursorValueInput = {
  categoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  maxPoints?: InputMaybe<Scalars["float8"]["input"]>;
  ordinalNumber?: InputMaybe<Scalars["Int"]["input"]>;
  subcategoryId?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategoryName?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type SubcategoriesSumFields = {
  __typename?: "SubcategoriesSumFields";
  categoryId?: Maybe<Scalars["bigint"]["output"]>;
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  maxPoints?: Maybe<Scalars["float8"]["output"]>;
  ordinalNumber?: Maybe<Scalars["Int"]["output"]>;
  subcategoryId?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by sum() on columns of table "subcategories" */
export type SubcategoriesSumOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  maxPoints?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
};

/** update columns of table "subcategories" */
export enum SubcategoriesUpdateColumn {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  EditionId = "editionId",
  /** column name */
  Label = "label",
  /** column name */
  MaxPoints = "maxPoints",
  /** column name */
  OrdinalNumber = "ordinalNumber",
  /** column name */
  SubcategoryId = "subcategoryId",
  /** column name */
  SubcategoryName = "subcategoryName",
}

export type SubcategoriesUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<SubcategoriesIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<SubcategoriesSetInput>;
  /** filter the rows which have to be updated */
  where: SubcategoriesBoolExp;
};

/** aggregate varPop on columns */
export type SubcategoriesVarPopFields = {
  __typename?: "SubcategoriesVarPopFields";
  categoryId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
  maxPoints?: Maybe<Scalars["Float"]["output"]>;
  ordinalNumber?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varPop() on columns of table "subcategories" */
export type SubcategoriesVarPopOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  maxPoints?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type SubcategoriesVarSampFields = {
  __typename?: "SubcategoriesVarSampFields";
  categoryId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
  maxPoints?: Maybe<Scalars["Float"]["output"]>;
  ordinalNumber?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varSamp() on columns of table "subcategories" */
export type SubcategoriesVarSampOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  maxPoints?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type SubcategoriesVarianceFields = {
  __typename?: "SubcategoriesVarianceFields";
  categoryId?: Maybe<Scalars["Float"]["output"]>;
  editionId?: Maybe<Scalars["Float"]["output"]>;
  maxPoints?: Maybe<Scalars["Float"]["output"]>;
  ordinalNumber?: Maybe<Scalars["Float"]["output"]>;
  subcategoryId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "subcategories" */
export type SubcategoriesVarianceOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  editionId?: InputMaybe<OrderBy>;
  maxPoints?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
  subcategoryId?: InputMaybe<OrderBy>;
};

export type SubcategoryPointsType = {
  __typename?: "SubcategoryPointsType";
  points: PurePointsType;
  subcategory: SubcategoryType;
};

export type SubcategoryType = {
  __typename?: "SubcategoryType";
  category: CategoryType;
  edition: EditionType;
  label: Scalars["String"]["output"];
  maxPoints: Scalars["Float"]["output"];
  ordinalNumber: Scalars["Int"]["output"];
  subcategoryId: Scalars["ID"]["output"];
  subcategoryName: Scalars["String"]["output"];
};

/** Boolean expression to compare columns of type "time". All fields are combined with logical 'AND'. */
export type TimeComparisonExp = {
  _eq?: InputMaybe<Scalars["time"]["input"]>;
  _gt?: InputMaybe<Scalars["time"]["input"]>;
  _gte?: InputMaybe<Scalars["time"]["input"]>;
  _in?: InputMaybe<Array<Scalars["time"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["time"]["input"]>;
  _lte?: InputMaybe<Scalars["time"]["input"]>;
  _neq?: InputMaybe<Scalars["time"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["time"]["input"]>>;
};

export type TimeSpansType = {
  __typename?: "TimeSpansType";
  endTime: Scalars["String"]["output"];
  startTime: Scalars["String"]["output"];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type TimestampComparisonExp = {
  _eq?: InputMaybe<Scalars["timestamp"]["input"]>;
  _gt?: InputMaybe<Scalars["timestamp"]["input"]>;
  _gte?: InputMaybe<Scalars["timestamp"]["input"]>;
  _in?: InputMaybe<Array<Scalars["timestamp"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["timestamp"]["input"]>;
  _lte?: InputMaybe<Scalars["timestamp"]["input"]>;
  _neq?: InputMaybe<Scalars["timestamp"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["timestamp"]["input"]>>;
};

export type UserGroupType = {
  __typename?: "UserGroupType";
  group: GroupType;
  user: UserType;
  userGroupsId: Scalars["ID"]["output"];
};

/** columns and relationships of "user_groups" */
export type UserGroups = {
  __typename?: "UserGroups";
  /** An object relationship */
  group: Groups;
  groupId: Scalars["bigint"]["output"];
  /** An object relationship */
  user: Users;
  userId: Scalars["bigint"]["output"];
};

/** aggregated selection of "user_groups" */
export type UserGroupsAggregate = {
  __typename?: "UserGroupsAggregate";
  aggregate?: Maybe<UserGroupsAggregateFields>;
  nodes: Array<UserGroups>;
};

export type UserGroupsAggregateBoolExp = {
  count?: InputMaybe<UserGroupsAggregateBoolExpCount>;
};

/** aggregate fields of "user_groups" */
export type UserGroupsAggregateFields = {
  __typename?: "UserGroupsAggregateFields";
  avg?: Maybe<UserGroupsAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<UserGroupsMaxFields>;
  min?: Maybe<UserGroupsMinFields>;
  stddev?: Maybe<UserGroupsStddevFields>;
  stddevPop?: Maybe<UserGroupsStddevPopFields>;
  stddevSamp?: Maybe<UserGroupsStddevSampFields>;
  sum?: Maybe<UserGroupsSumFields>;
  varPop?: Maybe<UserGroupsVarPopFields>;
  varSamp?: Maybe<UserGroupsVarSampFields>;
  variance?: Maybe<UserGroupsVarianceFields>;
};

/** aggregate fields of "user_groups" */
export type UserGroupsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserGroupsSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "user_groups" */
export type UserGroupsAggregateOrderBy = {
  avg?: InputMaybe<UserGroupsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UserGroupsMaxOrderBy>;
  min?: InputMaybe<UserGroupsMinOrderBy>;
  stddev?: InputMaybe<UserGroupsStddevOrderBy>;
  stddevPop?: InputMaybe<UserGroupsStddevPopOrderBy>;
  stddevSamp?: InputMaybe<UserGroupsStddevSampOrderBy>;
  sum?: InputMaybe<UserGroupsSumOrderBy>;
  varPop?: InputMaybe<UserGroupsVarPopOrderBy>;
  varSamp?: InputMaybe<UserGroupsVarSampOrderBy>;
  variance?: InputMaybe<UserGroupsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "user_groups" */
export type UserGroupsArrRelInsertInput = {
  data: Array<UserGroupsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<UserGroupsOnConflict>;
};

/** aggregate avg on columns */
export type UserGroupsAvgFields = {
  __typename?: "UserGroupsAvgFields";
  groupId?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "user_groups" */
export type UserGroupsAvgOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "user_groups". All fields are combined with a logical 'AND'. */
export type UserGroupsBoolExp = {
  _and?: InputMaybe<Array<UserGroupsBoolExp>>;
  _not?: InputMaybe<UserGroupsBoolExp>;
  _or?: InputMaybe<Array<UserGroupsBoolExp>>;
  group?: InputMaybe<GroupsBoolExp>;
  groupId?: InputMaybe<BigintComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<BigintComparisonExp>;
};

/** unique or primary key constraints on table "user_groups" */
export enum UserGroupsConstraint {
  /** unique or primary key constraint on columns "user_id", "group_id" */
  UserGroupsPkey = "user_groups_pkey",
}

/** input type for incrementing numeric columns in table "user_groups" */
export type UserGroupsIncInput = {
  groupId?: InputMaybe<Scalars["bigint"]["input"]>;
  userId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "user_groups" */
export type UserGroupsInsertInput = {
  group?: InputMaybe<GroupsObjRelInsertInput>;
  groupId?: InputMaybe<Scalars["bigint"]["input"]>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate max on columns */
export type UserGroupsMaxFields = {
  __typename?: "UserGroupsMaxFields";
  groupId?: Maybe<Scalars["bigint"]["output"]>;
  userId?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by max() on columns of table "user_groups" */
export type UserGroupsMaxOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UserGroupsMinFields = {
  __typename?: "UserGroupsMinFields";
  groupId?: Maybe<Scalars["bigint"]["output"]>;
  userId?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by min() on columns of table "user_groups" */
export type UserGroupsMinOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "user_groups" */
export type UserGroupsMutationResponse = {
  __typename?: "UserGroupsMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<UserGroups>;
};

/** on_conflict condition type for table "user_groups" */
export type UserGroupsOnConflict = {
  constraint: UserGroupsConstraint;
  updateColumns?: Array<UserGroupsUpdateColumn>;
  where?: InputMaybe<UserGroupsBoolExp>;
};

/** Ordering options when selecting data from "user_groups". */
export type UserGroupsOrderBy = {
  group?: InputMaybe<GroupsOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user_groups */
export type UserGroupsPkColumnsInput = {
  groupId: Scalars["bigint"]["input"];
  userId: Scalars["bigint"]["input"];
};

/** select columns of table "user_groups" */
export enum UserGroupsSelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "user_groups" */
export type UserGroupsSetInput = {
  groupId?: InputMaybe<Scalars["bigint"]["input"]>;
  userId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate stddev on columns */
export type UserGroupsStddevFields = {
  __typename?: "UserGroupsStddevFields";
  groupId?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "user_groups" */
export type UserGroupsStddevOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type UserGroupsStddevPopFields = {
  __typename?: "UserGroupsStddevPopFields";
  groupId?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevPop() on columns of table "user_groups" */
export type UserGroupsStddevPopOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type UserGroupsStddevSampFields = {
  __typename?: "UserGroupsStddevSampFields";
  groupId?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevSamp() on columns of table "user_groups" */
export type UserGroupsStddevSampOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "user_groups" */
export type UserGroupsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UserGroupsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserGroupsStreamCursorValueInput = {
  groupId?: InputMaybe<Scalars["bigint"]["input"]>;
  userId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate sum on columns */
export type UserGroupsSumFields = {
  __typename?: "UserGroupsSumFields";
  groupId?: Maybe<Scalars["bigint"]["output"]>;
  userId?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by sum() on columns of table "user_groups" */
export type UserGroupsSumOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** update columns of table "user_groups" */
export enum UserGroupsUpdateColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  UserId = "userId",
}

export type UserGroupsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UserGroupsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserGroupsSetInput>;
  /** filter the rows which have to be updated */
  where: UserGroupsBoolExp;
};

/** aggregate varPop on columns */
export type UserGroupsVarPopFields = {
  __typename?: "UserGroupsVarPopFields";
  groupId?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varPop() on columns of table "user_groups" */
export type UserGroupsVarPopOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type UserGroupsVarSampFields = {
  __typename?: "UserGroupsVarSampFields";
  groupId?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varSamp() on columns of table "user_groups" */
export type UserGroupsVarSampOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type UserGroupsVarianceFields = {
  __typename?: "UserGroupsVarianceFields";
  groupId?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "user_groups" */
export type UserGroupsVarianceOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** columns and relationships of "user_level" */
export type UserLevel = {
  __typename?: "UserLevel";
  /** An object relationship */
  edition: Edition;
  editionId: Scalars["bigint"]["output"];
  label: Scalars["String"]["output"];
  /** An object relationship */
  level: Levels;
  levelId: Scalars["bigint"]["output"];
  /** An object relationship */
  user: Users;
  userId: Scalars["bigint"]["output"];
  userLevelId: Scalars["bigint"]["output"];
};

/** aggregated selection of "user_level" */
export type UserLevelAggregate = {
  __typename?: "UserLevelAggregate";
  aggregate?: Maybe<UserLevelAggregateFields>;
  nodes: Array<UserLevel>;
};

export type UserLevelAggregateBoolExp = {
  count?: InputMaybe<UserLevelAggregateBoolExpCount>;
};

/** aggregate fields of "user_level" */
export type UserLevelAggregateFields = {
  __typename?: "UserLevelAggregateFields";
  avg?: Maybe<UserLevelAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<UserLevelMaxFields>;
  min?: Maybe<UserLevelMinFields>;
  stddev?: Maybe<UserLevelStddevFields>;
  stddevPop?: Maybe<UserLevelStddevPopFields>;
  stddevSamp?: Maybe<UserLevelStddevSampFields>;
  sum?: Maybe<UserLevelSumFields>;
  varPop?: Maybe<UserLevelVarPopFields>;
  varSamp?: Maybe<UserLevelVarSampFields>;
  variance?: Maybe<UserLevelVarianceFields>;
};

/** aggregate fields of "user_level" */
export type UserLevelAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserLevelSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "user_level" */
export type UserLevelAggregateOrderBy = {
  avg?: InputMaybe<UserLevelAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UserLevelMaxOrderBy>;
  min?: InputMaybe<UserLevelMinOrderBy>;
  stddev?: InputMaybe<UserLevelStddevOrderBy>;
  stddevPop?: InputMaybe<UserLevelStddevPopOrderBy>;
  stddevSamp?: InputMaybe<UserLevelStddevSampOrderBy>;
  sum?: InputMaybe<UserLevelSumOrderBy>;
  varPop?: InputMaybe<UserLevelVarPopOrderBy>;
  varSamp?: InputMaybe<UserLevelVarSampOrderBy>;
  variance?: InputMaybe<UserLevelVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "user_level" */
export type UserLevelArrRelInsertInput = {
  data: Array<UserLevelInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<UserLevelOnConflict>;
};

/** aggregate avg on columns */
export type UserLevelAvgFields = {
  __typename?: "UserLevelAvgFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  levelId?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
  userLevelId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "user_level" */
export type UserLevelAvgOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  levelId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
  userLevelId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "user_level". All fields are combined with a logical 'AND'. */
export type UserLevelBoolExp = {
  _and?: InputMaybe<Array<UserLevelBoolExp>>;
  _not?: InputMaybe<UserLevelBoolExp>;
  _or?: InputMaybe<Array<UserLevelBoolExp>>;
  edition?: InputMaybe<EditionBoolExp>;
  editionId?: InputMaybe<BigintComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
  level?: InputMaybe<LevelsBoolExp>;
  levelId?: InputMaybe<BigintComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<BigintComparisonExp>;
  userLevelId?: InputMaybe<BigintComparisonExp>;
};

/** unique or primary key constraints on table "user_level" */
export enum UserLevelConstraint {
  /** unique or primary key constraint on columns "user_id", "edition_id" */
  UniqueUserEdition = "unique_user_edition",
  /** unique or primary key constraint on columns "user_id", "level_id" */
  UserLevelPkey = "user_level_pkey",
}

/** input type for incrementing numeric columns in table "user_level" */
export type UserLevelIncInput = {
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  levelId?: InputMaybe<Scalars["bigint"]["input"]>;
  userId?: InputMaybe<Scalars["bigint"]["input"]>;
  userLevelId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "user_level" */
export type UserLevelInsertInput = {
  edition?: InputMaybe<EditionObjRelInsertInput>;
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  level?: InputMaybe<LevelsObjRelInsertInput>;
  levelId?: InputMaybe<Scalars["bigint"]["input"]>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars["bigint"]["input"]>;
  userLevelId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate max on columns */
export type UserLevelMaxFields = {
  __typename?: "UserLevelMaxFields";
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  levelId?: Maybe<Scalars["bigint"]["output"]>;
  userId?: Maybe<Scalars["bigint"]["output"]>;
  userLevelId?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by max() on columns of table "user_level" */
export type UserLevelMaxOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  levelId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
  userLevelId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UserLevelMinFields = {
  __typename?: "UserLevelMinFields";
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  levelId?: Maybe<Scalars["bigint"]["output"]>;
  userId?: Maybe<Scalars["bigint"]["output"]>;
  userLevelId?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by min() on columns of table "user_level" */
export type UserLevelMinOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  levelId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
  userLevelId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "user_level" */
export type UserLevelMutationResponse = {
  __typename?: "UserLevelMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<UserLevel>;
};

/** on_conflict condition type for table "user_level" */
export type UserLevelOnConflict = {
  constraint: UserLevelConstraint;
  updateColumns?: Array<UserLevelUpdateColumn>;
  where?: InputMaybe<UserLevelBoolExp>;
};

/** Ordering options when selecting data from "user_level". */
export type UserLevelOrderBy = {
  edition?: InputMaybe<EditionOrderBy>;
  editionId?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  level?: InputMaybe<LevelsOrderBy>;
  levelId?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
  userLevelId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user_level */
export type UserLevelPkColumnsInput = {
  levelId: Scalars["bigint"]["input"];
  userId: Scalars["bigint"]["input"];
};

/** select columns of table "user_level" */
export enum UserLevelSelectColumn {
  /** column name */
  EditionId = "editionId",
  /** column name */
  Label = "label",
  /** column name */
  LevelId = "levelId",
  /** column name */
  UserId = "userId",
  /** column name */
  UserLevelId = "userLevelId",
}

/** input type for updating data in table "user_level" */
export type UserLevelSetInput = {
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  levelId?: InputMaybe<Scalars["bigint"]["input"]>;
  userId?: InputMaybe<Scalars["bigint"]["input"]>;
  userLevelId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate stddev on columns */
export type UserLevelStddevFields = {
  __typename?: "UserLevelStddevFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  levelId?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
  userLevelId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "user_level" */
export type UserLevelStddevOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  levelId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
  userLevelId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type UserLevelStddevPopFields = {
  __typename?: "UserLevelStddevPopFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  levelId?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
  userLevelId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevPop() on columns of table "user_level" */
export type UserLevelStddevPopOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  levelId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
  userLevelId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type UserLevelStddevSampFields = {
  __typename?: "UserLevelStddevSampFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  levelId?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
  userLevelId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevSamp() on columns of table "user_level" */
export type UserLevelStddevSampOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  levelId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
  userLevelId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "user_level" */
export type UserLevelStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UserLevelStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserLevelStreamCursorValueInput = {
  editionId?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  levelId?: InputMaybe<Scalars["bigint"]["input"]>;
  userId?: InputMaybe<Scalars["bigint"]["input"]>;
  userLevelId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate sum on columns */
export type UserLevelSumFields = {
  __typename?: "UserLevelSumFields";
  editionId?: Maybe<Scalars["bigint"]["output"]>;
  levelId?: Maybe<Scalars["bigint"]["output"]>;
  userId?: Maybe<Scalars["bigint"]["output"]>;
  userLevelId?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by sum() on columns of table "user_level" */
export type UserLevelSumOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  levelId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
  userLevelId?: InputMaybe<OrderBy>;
};

export type UserLevelType = {
  __typename?: "UserLevelType";
  edition: EditionType;
  label: Scalars["String"]["output"];
  level: LevelType;
  user: UserType;
  userLevelId: Scalars["ID"]["output"];
};

/** update columns of table "user_level" */
export enum UserLevelUpdateColumn {
  /** column name */
  EditionId = "editionId",
  /** column name */
  Label = "label",
  /** column name */
  LevelId = "levelId",
  /** column name */
  UserId = "userId",
  /** column name */
  UserLevelId = "userLevelId",
}

export type UserLevelUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UserLevelIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserLevelSetInput>;
  /** filter the rows which have to be updated */
  where: UserLevelBoolExp;
};

/** aggregate varPop on columns */
export type UserLevelVarPopFields = {
  __typename?: "UserLevelVarPopFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  levelId?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
  userLevelId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varPop() on columns of table "user_level" */
export type UserLevelVarPopOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  levelId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
  userLevelId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type UserLevelVarSampFields = {
  __typename?: "UserLevelVarSampFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  levelId?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
  userLevelId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varSamp() on columns of table "user_level" */
export type UserLevelVarSampOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  levelId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
  userLevelId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type UserLevelVarianceFields = {
  __typename?: "UserLevelVarianceFields";
  editionId?: Maybe<Scalars["Float"]["output"]>;
  levelId?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
  userLevelId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "user_level" */
export type UserLevelVarianceOrderBy = {
  editionId?: InputMaybe<OrderBy>;
  levelId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
  userLevelId?: InputMaybe<OrderBy>;
};

export type UserPointsType = {
  __typename?: "UserPointsType";
  categoriesPoints: Array<CategoryPointsType>;
  user: UserType;
};

export type UserType = {
  __typename?: "UserType";
  firstName: Scalars["String"]["output"];
  imageFile?: Maybe<FileType>;
  indexNumber: Scalars["Int"]["output"];
  label: Scalars["String"]["output"];
  nick: Scalars["String"]["output"];
  role: UsersRolesType;
  secondName: Scalars["String"]["output"];
  userGroups: Array<Maybe<UserGroupType>>;
  userId: Scalars["ID"]["output"];
  userLevels: Array<Maybe<UserLevelType>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: "Users";
  /** An array relationship */
  chestHistories: Array<ChestHistory>;
  /** An aggregate relationship */
  chestHistoriesAggregate: ChestHistoryAggregate;
  /** An array relationship */
  chestHistoriesByTeacherId: Array<ChestHistory>;
  /** An aggregate relationship */
  chestHistoriesByTeacherIdAggregate: ChestHistoryAggregate;
  /** An object relationship */
  file?: Maybe<Files>;
  firstName: Scalars["String"]["output"];
  /** A computed field, executes function "users_fullname" */
  fullName?: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  groups: Array<Groups>;
  /** An aggregate relationship */
  groupsAggregate: GroupsAggregate;
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  indexNumber: Scalars["Int"]["output"];
  label: Scalars["String"]["output"];
  nick: Scalars["String"]["output"];
  /** An array relationship */
  points: Array<Points>;
  /** An aggregate relationship */
  pointsAggregate: PointsAggregate;
  /** An array relationship */
  pointsByTeacherId: Array<Points>;
  /** An aggregate relationship */
  pointsByTeacherIdAggregate: PointsAggregate;
  /** An array relationship */
  pointsByUpdatedBy: Array<Points>;
  /** An aggregate relationship */
  pointsByUpdatedByAggregate: PointsAggregate;
  /** An array relationship */
  pointsHistories: Array<PointsHistory>;
  /** An aggregate relationship */
  pointsHistoriesAggregate: PointsHistoryAggregate;
  /** An array relationship */
  pointsHistoriesByTeacherId: Array<PointsHistory>;
  /** An aggregate relationship */
  pointsHistoriesByTeacherIdAggregate: PointsHistoryAggregate;
  role: Scalars["String"]["output"];
  secondName: Scalars["String"]["output"];
  /** An array relationship */
  userGroups: Array<UserGroups>;
  /** An aggregate relationship */
  userGroupsAggregate: UserGroupsAggregate;
  userId: Scalars["bigint"]["output"];
  /** An array relationship */
  userLevels: Array<UserLevel>;
  /** An aggregate relationship */
  userLevelsAggregate: UserLevelAggregate;
};

/** columns and relationships of "users" */
export type UsersChestHistoriesArgs = {
  distinctOn?: InputMaybe<Array<ChestHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestHistoryOrderBy>>;
  where?: InputMaybe<ChestHistoryBoolExp>;
};

/** columns and relationships of "users" */
export type UsersChestHistoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChestHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestHistoryOrderBy>>;
  where?: InputMaybe<ChestHistoryBoolExp>;
};

/** columns and relationships of "users" */
export type UsersChestHistoriesByTeacherIdArgs = {
  distinctOn?: InputMaybe<Array<ChestHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestHistoryOrderBy>>;
  where?: InputMaybe<ChestHistoryBoolExp>;
};

/** columns and relationships of "users" */
export type UsersChestHistoriesByTeacherIdAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChestHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestHistoryOrderBy>>;
  where?: InputMaybe<ChestHistoryBoolExp>;
};

/** columns and relationships of "users" */
export type UsersGroupsArgs = {
  distinctOn?: InputMaybe<Array<GroupsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupsOrderBy>>;
  where?: InputMaybe<GroupsBoolExp>;
};

/** columns and relationships of "users" */
export type UsersGroupsAggregateArgs = {
  distinctOn?: InputMaybe<Array<GroupsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupsOrderBy>>;
  where?: InputMaybe<GroupsBoolExp>;
};

/** columns and relationships of "users" */
export type UsersPointsArgs = {
  distinctOn?: InputMaybe<Array<PointsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PointsOrderBy>>;
  where?: InputMaybe<PointsBoolExp>;
};

/** columns and relationships of "users" */
export type UsersPointsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PointsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PointsOrderBy>>;
  where?: InputMaybe<PointsBoolExp>;
};

/** columns and relationships of "users" */
export type UsersPointsByTeacherIdArgs = {
  distinctOn?: InputMaybe<Array<PointsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PointsOrderBy>>;
  where?: InputMaybe<PointsBoolExp>;
};

/** columns and relationships of "users" */
export type UsersPointsByTeacherIdAggregateArgs = {
  distinctOn?: InputMaybe<Array<PointsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PointsOrderBy>>;
  where?: InputMaybe<PointsBoolExp>;
};

/** columns and relationships of "users" */
export type UsersPointsByUpdatedByArgs = {
  distinctOn?: InputMaybe<Array<PointsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PointsOrderBy>>;
  where?: InputMaybe<PointsBoolExp>;
};

/** columns and relationships of "users" */
export type UsersPointsByUpdatedByAggregateArgs = {
  distinctOn?: InputMaybe<Array<PointsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PointsOrderBy>>;
  where?: InputMaybe<PointsBoolExp>;
};

/** columns and relationships of "users" */
export type UsersPointsHistoriesArgs = {
  distinctOn?: InputMaybe<Array<PointsHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PointsHistoryOrderBy>>;
  where?: InputMaybe<PointsHistoryBoolExp>;
};

/** columns and relationships of "users" */
export type UsersPointsHistoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<PointsHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PointsHistoryOrderBy>>;
  where?: InputMaybe<PointsHistoryBoolExp>;
};

/** columns and relationships of "users" */
export type UsersPointsHistoriesByTeacherIdArgs = {
  distinctOn?: InputMaybe<Array<PointsHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PointsHistoryOrderBy>>;
  where?: InputMaybe<PointsHistoryBoolExp>;
};

/** columns and relationships of "users" */
export type UsersPointsHistoriesByTeacherIdAggregateArgs = {
  distinctOn?: InputMaybe<Array<PointsHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PointsHistoryOrderBy>>;
  where?: InputMaybe<PointsHistoryBoolExp>;
};

/** columns and relationships of "users" */
export type UsersUserGroupsArgs = {
  distinctOn?: InputMaybe<Array<UserGroupsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserGroupsOrderBy>>;
  where?: InputMaybe<UserGroupsBoolExp>;
};

/** columns and relationships of "users" */
export type UsersUserGroupsAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserGroupsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserGroupsOrderBy>>;
  where?: InputMaybe<UserGroupsBoolExp>;
};

/** columns and relationships of "users" */
export type UsersUserLevelsArgs = {
  distinctOn?: InputMaybe<Array<UserLevelSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserLevelOrderBy>>;
  where?: InputMaybe<UserLevelBoolExp>;
};

/** columns and relationships of "users" */
export type UsersUserLevelsAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserLevelSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserLevelOrderBy>>;
  where?: InputMaybe<UserLevelBoolExp>;
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: "UsersAggregate";
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

export type UsersAggregateBoolExp = {
  count?: InputMaybe<UsersAggregateBoolExpCount>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: "UsersAggregateFields";
  avg?: Maybe<UsersAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
  stddev?: Maybe<UsersStddevFields>;
  stddevPop?: Maybe<UsersStddevPopFields>;
  stddevSamp?: Maybe<UsersStddevSampFields>;
  sum?: Maybe<UsersSumFields>;
  varPop?: Maybe<UsersVarPopFields>;
  varSamp?: Maybe<UsersVarSampFields>;
  variance?: Maybe<UsersVarianceFields>;
};

/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "users" */
export type UsersAggregateOrderBy = {
  avg?: InputMaybe<UsersAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UsersMaxOrderBy>;
  min?: InputMaybe<UsersMinOrderBy>;
  stddev?: InputMaybe<UsersStddevOrderBy>;
  stddevPop?: InputMaybe<UsersStddevPopOrderBy>;
  stddevSamp?: InputMaybe<UsersStddevSampOrderBy>;
  sum?: InputMaybe<UsersSumOrderBy>;
  varPop?: InputMaybe<UsersVarPopOrderBy>;
  varSamp?: InputMaybe<UsersVarSampOrderBy>;
  variance?: InputMaybe<UsersVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "users" */
export type UsersArrRelInsertInput = {
  data: Array<UsersInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<UsersOnConflict>;
};

/** aggregate avg on columns */
export type UsersAvgFields = {
  __typename?: "UsersAvgFields";
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  indexNumber?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "users" */
export type UsersAvgOrderBy = {
  imageFileId?: InputMaybe<OrderBy>;
  indexNumber?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  chestHistories?: InputMaybe<ChestHistoryBoolExp>;
  chestHistoriesAggregate?: InputMaybe<ChestHistoryAggregateBoolExp>;
  chestHistoriesByTeacherId?: InputMaybe<ChestHistoryBoolExp>;
  chestHistoriesByTeacherIdAggregate?: InputMaybe<ChestHistoryAggregateBoolExp>;
  file?: InputMaybe<FilesBoolExp>;
  firstName?: InputMaybe<StringComparisonExp>;
  fullName?: InputMaybe<StringComparisonExp>;
  groups?: InputMaybe<GroupsBoolExp>;
  groupsAggregate?: InputMaybe<GroupsAggregateBoolExp>;
  imageFileId?: InputMaybe<BigintComparisonExp>;
  indexNumber?: InputMaybe<IntComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
  nick?: InputMaybe<StringComparisonExp>;
  points?: InputMaybe<PointsBoolExp>;
  pointsAggregate?: InputMaybe<PointsAggregateBoolExp>;
  pointsByTeacherId?: InputMaybe<PointsBoolExp>;
  pointsByTeacherIdAggregate?: InputMaybe<PointsAggregateBoolExp>;
  pointsByUpdatedBy?: InputMaybe<PointsBoolExp>;
  pointsByUpdatedByAggregate?: InputMaybe<PointsAggregateBoolExp>;
  pointsHistories?: InputMaybe<PointsHistoryBoolExp>;
  pointsHistoriesAggregate?: InputMaybe<PointsHistoryAggregateBoolExp>;
  pointsHistoriesByTeacherId?: InputMaybe<PointsHistoryBoolExp>;
  pointsHistoriesByTeacherIdAggregate?: InputMaybe<PointsHistoryAggregateBoolExp>;
  role?: InputMaybe<StringComparisonExp>;
  secondName?: InputMaybe<StringComparisonExp>;
  userGroups?: InputMaybe<UserGroupsBoolExp>;
  userGroupsAggregate?: InputMaybe<UserGroupsAggregateBoolExp>;
  userId?: InputMaybe<BigintComparisonExp>;
  userLevels?: InputMaybe<UserLevelBoolExp>;
  userLevelsAggregate?: InputMaybe<UserLevelAggregateBoolExp>;
};

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint on columns "index_number" */
  Uka0sjysw3ars20ri1eg8vilw2r = "uka0sjysw3ars20ri1eg8vilw2r",
  /** unique or primary key constraint on columns "index_number" */
  UniqueIndexNumber = "unique_index_number",
  /** unique or primary key constraint on columns "user_id" */
  UsersPkey = "users_pkey",
}

/** input type for incrementing numeric columns in table "users" */
export type UsersIncInput = {
  imageFileId?: InputMaybe<Scalars["bigint"]["input"]>;
  indexNumber?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  chestHistories?: InputMaybe<ChestHistoryArrRelInsertInput>;
  chestHistoriesByTeacherId?: InputMaybe<ChestHistoryArrRelInsertInput>;
  file?: InputMaybe<FilesObjRelInsertInput>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  groups?: InputMaybe<GroupsArrRelInsertInput>;
  imageFileId?: InputMaybe<Scalars["bigint"]["input"]>;
  indexNumber?: InputMaybe<Scalars["Int"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  nick?: InputMaybe<Scalars["String"]["input"]>;
  points?: InputMaybe<PointsArrRelInsertInput>;
  pointsByTeacherId?: InputMaybe<PointsArrRelInsertInput>;
  pointsByUpdatedBy?: InputMaybe<PointsArrRelInsertInput>;
  pointsHistories?: InputMaybe<PointsHistoryArrRelInsertInput>;
  pointsHistoriesByTeacherId?: InputMaybe<PointsHistoryArrRelInsertInput>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  secondName?: InputMaybe<Scalars["String"]["input"]>;
  userGroups?: InputMaybe<UserGroupsArrRelInsertInput>;
  userId?: InputMaybe<Scalars["bigint"]["input"]>;
  userLevels?: InputMaybe<UserLevelArrRelInsertInput>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: "UsersMaxFields";
  firstName?: Maybe<Scalars["String"]["output"]>;
  /** A computed field, executes function "users_fullname" */
  fullName?: Maybe<Scalars["String"]["output"]>;
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  indexNumber?: Maybe<Scalars["Int"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  nick?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  secondName?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by max() on columns of table "users" */
export type UsersMaxOrderBy = {
  firstName?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  indexNumber?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  nick?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  secondName?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: "UsersMinFields";
  firstName?: Maybe<Scalars["String"]["output"]>;
  /** A computed field, executes function "users_fullname" */
  fullName?: Maybe<Scalars["String"]["output"]>;
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  indexNumber?: Maybe<Scalars["Int"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  nick?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  secondName?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by min() on columns of table "users" */
export type UsersMinOrderBy = {
  firstName?: InputMaybe<OrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  indexNumber?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  nick?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  secondName?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: "UsersMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<UsersOnConflict>;
};

/** on_conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  updateColumns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  chestHistoriesAggregate?: InputMaybe<ChestHistoryAggregateOrderBy>;
  chestHistoriesByTeacherIdAggregate?: InputMaybe<ChestHistoryAggregateOrderBy>;
  file?: InputMaybe<FilesOrderBy>;
  firstName?: InputMaybe<OrderBy>;
  fullName?: InputMaybe<OrderBy>;
  groupsAggregate?: InputMaybe<GroupsAggregateOrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  indexNumber?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  nick?: InputMaybe<OrderBy>;
  pointsAggregate?: InputMaybe<PointsAggregateOrderBy>;
  pointsByTeacherIdAggregate?: InputMaybe<PointsAggregateOrderBy>;
  pointsByUpdatedByAggregate?: InputMaybe<PointsAggregateOrderBy>;
  pointsHistoriesAggregate?: InputMaybe<PointsHistoryAggregateOrderBy>;
  pointsHistoriesByTeacherIdAggregate?: InputMaybe<PointsHistoryAggregateOrderBy>;
  role?: InputMaybe<OrderBy>;
  secondName?: InputMaybe<OrderBy>;
  userGroupsAggregate?: InputMaybe<UserGroupsAggregateOrderBy>;
  userId?: InputMaybe<OrderBy>;
  userLevelsAggregate?: InputMaybe<UserLevelAggregateOrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  userId: Scalars["bigint"]["input"];
};

export enum UsersRolesType {
  Coordinator = "COORDINATOR",
  Student = "STUDENT",
  Teacher = "TEACHER",
}

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  FirstName = "firstName",
  /** column name */
  ImageFileId = "imageFileId",
  /** column name */
  IndexNumber = "indexNumber",
  /** column name */
  Label = "label",
  /** column name */
  Nick = "nick",
  /** column name */
  Role = "role",
  /** column name */
  SecondName = "secondName",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  imageFileId?: InputMaybe<Scalars["bigint"]["input"]>;
  indexNumber?: InputMaybe<Scalars["Int"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  nick?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  secondName?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate stddev on columns */
export type UsersStddevFields = {
  __typename?: "UsersStddevFields";
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  indexNumber?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "users" */
export type UsersStddevOrderBy = {
  imageFileId?: InputMaybe<OrderBy>;
  indexNumber?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type UsersStddevPopFields = {
  __typename?: "UsersStddevPopFields";
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  indexNumber?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevPop() on columns of table "users" */
export type UsersStddevPopOrderBy = {
  imageFileId?: InputMaybe<OrderBy>;
  indexNumber?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type UsersStddevSampFields = {
  __typename?: "UsersStddevSampFields";
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  indexNumber?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevSamp() on columns of table "users" */
export type UsersStddevSampOrderBy = {
  imageFileId?: InputMaybe<OrderBy>;
  indexNumber?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "users" */
export type UsersStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UsersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UsersStreamCursorValueInput = {
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  imageFileId?: InputMaybe<Scalars["bigint"]["input"]>;
  indexNumber?: InputMaybe<Scalars["Int"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  nick?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  secondName?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate sum on columns */
export type UsersSumFields = {
  __typename?: "UsersSumFields";
  imageFileId?: Maybe<Scalars["bigint"]["output"]>;
  indexNumber?: Maybe<Scalars["Int"]["output"]>;
  userId?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by sum() on columns of table "users" */
export type UsersSumOrderBy = {
  imageFileId?: InputMaybe<OrderBy>;
  indexNumber?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  FirstName = "firstName",
  /** column name */
  ImageFileId = "imageFileId",
  /** column name */
  IndexNumber = "indexNumber",
  /** column name */
  Label = "label",
  /** column name */
  Nick = "nick",
  /** column name */
  Role = "role",
  /** column name */
  SecondName = "secondName",
  /** column name */
  UserId = "userId",
}

export type UsersUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UsersIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersSetInput>;
  /** filter the rows which have to be updated */
  where: UsersBoolExp;
};

/** aggregate varPop on columns */
export type UsersVarPopFields = {
  __typename?: "UsersVarPopFields";
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  indexNumber?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varPop() on columns of table "users" */
export type UsersVarPopOrderBy = {
  imageFileId?: InputMaybe<OrderBy>;
  indexNumber?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type UsersVarSampFields = {
  __typename?: "UsersVarSampFields";
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  indexNumber?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varSamp() on columns of table "users" */
export type UsersVarSampOrderBy = {
  imageFileId?: InputMaybe<OrderBy>;
  indexNumber?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type UsersVarianceFields = {
  __typename?: "UsersVarianceFields";
  imageFileId?: Maybe<Scalars["Float"]["output"]>;
  indexNumber?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "users" */
export type UsersVarianceOrderBy = {
  imageFileId?: InputMaybe<OrderBy>;
  indexNumber?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

export type WeekdayType = {
  __typename?: "WeekdayType";
  label: Scalars["String"]["output"];
  ordinalNumber: Scalars["Int"]["output"];
  weekdayAbbr: Scalars["String"]["output"];
  weekdayId: Scalars["ID"]["output"];
  weekdayName: Scalars["String"]["output"];
};

/** columns and relationships of "weekdays" */
export type Weekdays = {
  __typename?: "Weekdays";
  /** An array relationship */
  groups: Array<Groups>;
  /** An aggregate relationship */
  groupsAggregate: GroupsAggregate;
  label: Scalars["String"]["output"];
  ordinalNumber: Scalars["Int"]["output"];
  weekdayAbbr: Scalars["String"]["output"];
  weekdayId: Scalars["bigint"]["output"];
  weekdayName: Scalars["String"]["output"];
};

/** columns and relationships of "weekdays" */
export type WeekdaysGroupsArgs = {
  distinctOn?: InputMaybe<Array<GroupsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupsOrderBy>>;
  where?: InputMaybe<GroupsBoolExp>;
};

/** columns and relationships of "weekdays" */
export type WeekdaysGroupsAggregateArgs = {
  distinctOn?: InputMaybe<Array<GroupsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupsOrderBy>>;
  where?: InputMaybe<GroupsBoolExp>;
};

/** aggregated selection of "weekdays" */
export type WeekdaysAggregate = {
  __typename?: "WeekdaysAggregate";
  aggregate?: Maybe<WeekdaysAggregateFields>;
  nodes: Array<Weekdays>;
};

/** aggregate fields of "weekdays" */
export type WeekdaysAggregateFields = {
  __typename?: "WeekdaysAggregateFields";
  avg?: Maybe<WeekdaysAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<WeekdaysMaxFields>;
  min?: Maybe<WeekdaysMinFields>;
  stddev?: Maybe<WeekdaysStddevFields>;
  stddevPop?: Maybe<WeekdaysStddevPopFields>;
  stddevSamp?: Maybe<WeekdaysStddevSampFields>;
  sum?: Maybe<WeekdaysSumFields>;
  varPop?: Maybe<WeekdaysVarPopFields>;
  varSamp?: Maybe<WeekdaysVarSampFields>;
  variance?: Maybe<WeekdaysVarianceFields>;
};

/** aggregate fields of "weekdays" */
export type WeekdaysAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<WeekdaysSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type WeekdaysAvgFields = {
  __typename?: "WeekdaysAvgFields";
  ordinalNumber?: Maybe<Scalars["Float"]["output"]>;
  weekdayId?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "weekdays". All fields are combined with a logical 'AND'. */
export type WeekdaysBoolExp = {
  _and?: InputMaybe<Array<WeekdaysBoolExp>>;
  _not?: InputMaybe<WeekdaysBoolExp>;
  _or?: InputMaybe<Array<WeekdaysBoolExp>>;
  groups?: InputMaybe<GroupsBoolExp>;
  groupsAggregate?: InputMaybe<GroupsAggregateBoolExp>;
  label?: InputMaybe<StringComparisonExp>;
  ordinalNumber?: InputMaybe<IntComparisonExp>;
  weekdayAbbr?: InputMaybe<StringComparisonExp>;
  weekdayId?: InputMaybe<BigintComparisonExp>;
  weekdayName?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "weekdays" */
export enum WeekdaysConstraint {
  /** unique or primary key constraint on columns "weekday_id" */
  WeekdaysPkey = "weekdays_pkey",
}

/** input type for incrementing numeric columns in table "weekdays" */
export type WeekdaysIncInput = {
  ordinalNumber?: InputMaybe<Scalars["Int"]["input"]>;
  weekdayId?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "weekdays" */
export type WeekdaysInsertInput = {
  groups?: InputMaybe<GroupsArrRelInsertInput>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  ordinalNumber?: InputMaybe<Scalars["Int"]["input"]>;
  weekdayAbbr?: InputMaybe<Scalars["String"]["input"]>;
  weekdayId?: InputMaybe<Scalars["bigint"]["input"]>;
  weekdayName?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type WeekdaysMaxFields = {
  __typename?: "WeekdaysMaxFields";
  label?: Maybe<Scalars["String"]["output"]>;
  ordinalNumber?: Maybe<Scalars["Int"]["output"]>;
  weekdayAbbr?: Maybe<Scalars["String"]["output"]>;
  weekdayId?: Maybe<Scalars["bigint"]["output"]>;
  weekdayName?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type WeekdaysMinFields = {
  __typename?: "WeekdaysMinFields";
  label?: Maybe<Scalars["String"]["output"]>;
  ordinalNumber?: Maybe<Scalars["Int"]["output"]>;
  weekdayAbbr?: Maybe<Scalars["String"]["output"]>;
  weekdayId?: Maybe<Scalars["bigint"]["output"]>;
  weekdayName?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "weekdays" */
export type WeekdaysMutationResponse = {
  __typename?: "WeekdaysMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Weekdays>;
};

/** input type for inserting object relation for remote table "weekdays" */
export type WeekdaysObjRelInsertInput = {
  data: WeekdaysInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<WeekdaysOnConflict>;
};

/** on_conflict condition type for table "weekdays" */
export type WeekdaysOnConflict = {
  constraint: WeekdaysConstraint;
  updateColumns?: Array<WeekdaysUpdateColumn>;
  where?: InputMaybe<WeekdaysBoolExp>;
};

/** Ordering options when selecting data from "weekdays". */
export type WeekdaysOrderBy = {
  groupsAggregate?: InputMaybe<GroupsAggregateOrderBy>;
  label?: InputMaybe<OrderBy>;
  ordinalNumber?: InputMaybe<OrderBy>;
  weekdayAbbr?: InputMaybe<OrderBy>;
  weekdayId?: InputMaybe<OrderBy>;
  weekdayName?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: weekdays */
export type WeekdaysPkColumnsInput = {
  weekdayId: Scalars["bigint"]["input"];
};

/** select columns of table "weekdays" */
export enum WeekdaysSelectColumn {
  /** column name */
  Label = "label",
  /** column name */
  OrdinalNumber = "ordinalNumber",
  /** column name */
  WeekdayAbbr = "weekdayAbbr",
  /** column name */
  WeekdayId = "weekdayId",
  /** column name */
  WeekdayName = "weekdayName",
}

/** input type for updating data in table "weekdays" */
export type WeekdaysSetInput = {
  label?: InputMaybe<Scalars["String"]["input"]>;
  ordinalNumber?: InputMaybe<Scalars["Int"]["input"]>;
  weekdayAbbr?: InputMaybe<Scalars["String"]["input"]>;
  weekdayId?: InputMaybe<Scalars["bigint"]["input"]>;
  weekdayName?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type WeekdaysStddevFields = {
  __typename?: "WeekdaysStddevFields";
  ordinalNumber?: Maybe<Scalars["Float"]["output"]>;
  weekdayId?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddevPop on columns */
export type WeekdaysStddevPopFields = {
  __typename?: "WeekdaysStddevPopFields";
  ordinalNumber?: Maybe<Scalars["Float"]["output"]>;
  weekdayId?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddevSamp on columns */
export type WeekdaysStddevSampFields = {
  __typename?: "WeekdaysStddevSampFields";
  ordinalNumber?: Maybe<Scalars["Float"]["output"]>;
  weekdayId?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "weekdays" */
export type WeekdaysStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: WeekdaysStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type WeekdaysStreamCursorValueInput = {
  label?: InputMaybe<Scalars["String"]["input"]>;
  ordinalNumber?: InputMaybe<Scalars["Int"]["input"]>;
  weekdayAbbr?: InputMaybe<Scalars["String"]["input"]>;
  weekdayId?: InputMaybe<Scalars["bigint"]["input"]>;
  weekdayName?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type WeekdaysSumFields = {
  __typename?: "WeekdaysSumFields";
  ordinalNumber?: Maybe<Scalars["Int"]["output"]>;
  weekdayId?: Maybe<Scalars["bigint"]["output"]>;
};

/** update columns of table "weekdays" */
export enum WeekdaysUpdateColumn {
  /** column name */
  Label = "label",
  /** column name */
  OrdinalNumber = "ordinalNumber",
  /** column name */
  WeekdayAbbr = "weekdayAbbr",
  /** column name */
  WeekdayId = "weekdayId",
  /** column name */
  WeekdayName = "weekdayName",
}

export type WeekdaysUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<WeekdaysIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<WeekdaysSetInput>;
  /** filter the rows which have to be updated */
  where: WeekdaysBoolExp;
};

/** aggregate varPop on columns */
export type WeekdaysVarPopFields = {
  __typename?: "WeekdaysVarPopFields";
  ordinalNumber?: Maybe<Scalars["Float"]["output"]>;
  weekdayId?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate varSamp on columns */
export type WeekdaysVarSampFields = {
  __typename?: "WeekdaysVarSampFields";
  ordinalNumber?: Maybe<Scalars["Float"]["output"]>;
  weekdayId?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type WeekdaysVarianceFields = {
  __typename?: "WeekdaysVarianceFields";
  ordinalNumber?: Maybe<Scalars["Float"]["output"]>;
  weekdayId?: Maybe<Scalars["Float"]["output"]>;
};

export type _Service = {
  __typename?: "_Service";
  sdl: Scalars["String"]["output"];
};

export type AwardAggregateBoolExpAvg = {
  arguments: AwardSelectColumnAwardAggregateBoolExpAvgArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<AwardBoolExp>;
  predicate: Float8ComparisonExp;
};

export type AwardAggregateBoolExpCorr = {
  arguments: AwardAggregateBoolExpCorrArguments;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<AwardBoolExp>;
  predicate: Float8ComparisonExp;
};

export type AwardAggregateBoolExpCorrArguments = {
  X: AwardSelectColumnAwardAggregateBoolExpCorrArgumentsColumns;
  Y: AwardSelectColumnAwardAggregateBoolExpCorrArgumentsColumns;
};

export type AwardAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<AwardSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<AwardBoolExp>;
  predicate: IntComparisonExp;
};

export type AwardAggregateBoolExpCovar_Samp = {
  arguments: AwardAggregateBoolExpCovar_SampArguments;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<AwardBoolExp>;
  predicate: Float8ComparisonExp;
};

export type AwardAggregateBoolExpCovar_SampArguments = {
  X: AwardSelectColumnAwardAggregateBoolExpCovar_SampArgumentsColumns;
  Y: AwardSelectColumnAwardAggregateBoolExpCovar_SampArgumentsColumns;
};

export type AwardAggregateBoolExpMax = {
  arguments: AwardSelectColumnAwardAggregateBoolExpMaxArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<AwardBoolExp>;
  predicate: Float8ComparisonExp;
};

export type AwardAggregateBoolExpMin = {
  arguments: AwardSelectColumnAwardAggregateBoolExpMinArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<AwardBoolExp>;
  predicate: Float8ComparisonExp;
};

export type AwardAggregateBoolExpStddev_Samp = {
  arguments: AwardSelectColumnAwardAggregateBoolExpStddev_SampArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<AwardBoolExp>;
  predicate: Float8ComparisonExp;
};

export type AwardAggregateBoolExpSum = {
  arguments: AwardSelectColumnAwardAggregateBoolExpSumArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<AwardBoolExp>;
  predicate: Float8ComparisonExp;
};

export type AwardAggregateBoolExpVar_Samp = {
  arguments: AwardSelectColumnAwardAggregateBoolExpVar_SampArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<AwardBoolExp>;
  predicate: Float8ComparisonExp;
};

export type AwardEditionAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<AwardEditionSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<AwardEditionBoolExp>;
  predicate: IntComparisonExp;
};

export type BonusesAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<BonusesSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<BonusesBoolExp>;
  predicate: IntComparisonExp;
};

export type CategoryEditionAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<CategoryEditionSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<CategoryEditionBoolExp>;
  predicate: IntComparisonExp;
};

export type ChestAwardAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ChestAwardSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<ChestAwardBoolExp>;
  predicate: IntComparisonExp;
};

export type ChestHistoryAggregateBoolExpBool_And = {
  arguments: ChestHistorySelectColumnChestHistoryAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<ChestHistoryBoolExp>;
  predicate: BooleanComparisonExp;
};

export type ChestHistoryAggregateBoolExpBool_Or = {
  arguments: ChestHistorySelectColumnChestHistoryAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<ChestHistoryBoolExp>;
  predicate: BooleanComparisonExp;
};

export type ChestHistoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ChestHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<ChestHistoryBoolExp>;
  predicate: IntComparisonExp;
};

export type ChestsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ChestsSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<ChestsBoolExp>;
  predicate: IntComparisonExp;
};

export type GroupsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<GroupsSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<GroupsBoolExp>;
  predicate: IntComparisonExp;
};

export type LevelsAggregateBoolExpAvg = {
  arguments: LevelsSelectColumnLevelsAggregateBoolExpAvgArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<LevelsBoolExp>;
  predicate: Float8ComparisonExp;
};

export type LevelsAggregateBoolExpBool_And = {
  arguments: LevelsSelectColumnLevelsAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<LevelsBoolExp>;
  predicate: BooleanComparisonExp;
};

export type LevelsAggregateBoolExpBool_Or = {
  arguments: LevelsSelectColumnLevelsAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<LevelsBoolExp>;
  predicate: BooleanComparisonExp;
};

export type LevelsAggregateBoolExpCorr = {
  arguments: LevelsAggregateBoolExpCorrArguments;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<LevelsBoolExp>;
  predicate: Float8ComparisonExp;
};

export type LevelsAggregateBoolExpCorrArguments = {
  X: LevelsSelectColumnLevelsAggregateBoolExpCorrArgumentsColumns;
  Y: LevelsSelectColumnLevelsAggregateBoolExpCorrArgumentsColumns;
};

export type LevelsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<LevelsSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<LevelsBoolExp>;
  predicate: IntComparisonExp;
};

export type LevelsAggregateBoolExpCovar_Samp = {
  arguments: LevelsAggregateBoolExpCovar_SampArguments;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<LevelsBoolExp>;
  predicate: Float8ComparisonExp;
};

export type LevelsAggregateBoolExpCovar_SampArguments = {
  X: LevelsSelectColumnLevelsAggregateBoolExpCovar_SampArgumentsColumns;
  Y: LevelsSelectColumnLevelsAggregateBoolExpCovar_SampArgumentsColumns;
};

export type LevelsAggregateBoolExpMax = {
  arguments: LevelsSelectColumnLevelsAggregateBoolExpMaxArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<LevelsBoolExp>;
  predicate: Float8ComparisonExp;
};

export type LevelsAggregateBoolExpMin = {
  arguments: LevelsSelectColumnLevelsAggregateBoolExpMinArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<LevelsBoolExp>;
  predicate: Float8ComparisonExp;
};

export type LevelsAggregateBoolExpStddev_Samp = {
  arguments: LevelsSelectColumnLevelsAggregateBoolExpStddev_SampArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<LevelsBoolExp>;
  predicate: Float8ComparisonExp;
};

export type LevelsAggregateBoolExpSum = {
  arguments: LevelsSelectColumnLevelsAggregateBoolExpSumArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<LevelsBoolExp>;
  predicate: Float8ComparisonExp;
};

export type LevelsAggregateBoolExpVar_Samp = {
  arguments: LevelsSelectColumnLevelsAggregateBoolExpVar_SampArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<LevelsBoolExp>;
  predicate: Float8ComparisonExp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  addAward?: Maybe<AwardType>;
  addAwardToEdition?: Maybe<AwardEditionType>;
  addBonusMutation?: Maybe<AddBonusReturnType>;
  addCategory?: Maybe<CategoryType>;
  addCategoryToEdition?: Maybe<CategoryEditionType>;
  addChest?: Maybe<ChestType>;
  addChestToUser?: Maybe<ChestHistoryType>;
  addEdition?: Maybe<EditionType>;
  addGroup?: Maybe<GroupType>;
  addLevel?: Maybe<LevelType>;
  addPointsMutation?: Maybe<PointType>;
  addSubcategory?: Maybe<SubcategoryType>;
  addUser?: Maybe<UserType>;
  assignPhotoToAward?: Maybe<Scalars["Boolean"]["output"]>;
  assignPhotoToChest?: Maybe<Scalars["Boolean"]["output"]>;
  assignPhotoToLevel?: Maybe<Scalars["Boolean"]["output"]>;
  assignPhotoToUser?: Maybe<Scalars["Boolean"]["output"]>;
  assignPhotosToGroups?: Maybe<Scalars["Boolean"]["output"]>;
  /** delete data from the table: "award" */
  deleteAward?: Maybe<AwardMutationResponse>;
  /** delete single row from the table: "award" */
  deleteAwardByPk?: Maybe<Award>;
  /** delete data from the table: "award_edition" */
  deleteAwardEdition?: Maybe<AwardEditionMutationResponse>;
  /** delete single row from the table: "award_edition" */
  deleteAwardEditionByPk?: Maybe<AwardEdition>;
  /** delete data from the table: "bonuses" */
  deleteBonuses?: Maybe<BonusesMutationResponse>;
  /** delete single row from the table: "bonuses" */
  deleteBonusesByPk?: Maybe<Bonuses>;
  /** delete data from the table: "categories" */
  deleteCategories?: Maybe<CategoriesMutationResponse>;
  /** delete single row from the table: "categories" */
  deleteCategoriesByPk?: Maybe<Categories>;
  /** delete data from the table: "category_edition" */
  deleteCategoryEdition?: Maybe<CategoryEditionMutationResponse>;
  /** delete single row from the table: "category_edition" */
  deleteCategoryEditionByPk?: Maybe<CategoryEdition>;
  /** delete data from the table: "chest_award" */
  deleteChestAward?: Maybe<ChestAwardMutationResponse>;
  /** delete single row from the table: "chest_award" */
  deleteChestAwardByPk?: Maybe<ChestAward>;
  /** delete data from the table: "chest_history" */
  deleteChestHistory?: Maybe<ChestHistoryMutationResponse>;
  /** delete single row from the table: "chest_history" */
  deleteChestHistoryByPk?: Maybe<ChestHistory>;
  /** delete data from the table: "chests" */
  deleteChests?: Maybe<ChestsMutationResponse>;
  /** delete single row from the table: "chests" */
  deleteChestsByPk?: Maybe<Chests>;
  /** delete data from the table: "edition" */
  deleteEdition?: Maybe<EditionMutationResponse>;
  /** delete single row from the table: "edition" */
  deleteEditionByPk?: Maybe<Edition>;
  /** delete data from the table: "files" */
  deleteFiles?: Maybe<FilesMutationResponse>;
  /** delete single row from the table: "files" */
  deleteFilesByPk?: Maybe<Files>;
  /** delete data from the table: "flyway_schema_history" */
  deleteFlywaySchemaHistory?: Maybe<FlywaySchemaHistoryMutationResponse>;
  /** delete single row from the table: "flyway_schema_history" */
  deleteFlywaySchemaHistoryByPk?: Maybe<FlywaySchemaHistory>;
  /** delete data from the table: "groups" */
  deleteGroups?: Maybe<GroupsMutationResponse>;
  /** delete single row from the table: "groups" */
  deleteGroupsByPk?: Maybe<Groups>;
  /** delete data from the table: "levels" */
  deleteLevels?: Maybe<LevelsMutationResponse>;
  /** delete single row from the table: "levels" */
  deleteLevelsByPk?: Maybe<Levels>;
  /** delete data from the table: "points" */
  deletePoints?: Maybe<PointsMutationResponse>;
  /** delete single row from the table: "points" */
  deletePointsByPk?: Maybe<Points>;
  /** delete data from the table: "points_history" */
  deletePointsHistory?: Maybe<PointsHistoryMutationResponse>;
  /** delete single row from the table: "points_history" */
  deletePointsHistoryByPk?: Maybe<PointsHistory>;
  /** delete data from the table: "subcategories" */
  deleteSubcategories?: Maybe<SubcategoriesMutationResponse>;
  /** delete single row from the table: "subcategories" */
  deleteSubcategoriesByPk?: Maybe<Subcategories>;
  /** delete data from the table: "user_groups" */
  deleteUserGroups?: Maybe<UserGroupsMutationResponse>;
  /** delete single row from the table: "user_groups" */
  deleteUserGroupsByPk?: Maybe<UserGroups>;
  /** delete data from the table: "user_level" */
  deleteUserLevel?: Maybe<UserLevelMutationResponse>;
  /** delete single row from the table: "user_level" */
  deleteUserLevelByPk?: Maybe<UserLevel>;
  /** delete data from the table: "users" */
  deleteUsers?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  deleteUsersByPk?: Maybe<Users>;
  /** delete data from the table: "weekdays" */
  deleteWeekdays?: Maybe<WeekdaysMutationResponse>;
  /** delete single row from the table: "weekdays" */
  deleteWeekdaysByPk?: Maybe<Weekdays>;
  generateSubcategories?: Maybe<Array<Maybe<SubcategoryType>>>;
  /** insert data into the table: "award" */
  insertAward?: Maybe<AwardMutationResponse>;
  /** insert data into the table: "award_edition" */
  insertAwardEdition?: Maybe<AwardEditionMutationResponse>;
  /** insert a single row into the table: "award_edition" */
  insertAwardEditionOne?: Maybe<AwardEdition>;
  /** insert a single row into the table: "award" */
  insertAwardOne?: Maybe<Award>;
  /** insert data into the table: "bonuses" */
  insertBonuses?: Maybe<BonusesMutationResponse>;
  /** insert a single row into the table: "bonuses" */
  insertBonusesOne?: Maybe<Bonuses>;
  /** insert data into the table: "categories" */
  insertCategories?: Maybe<CategoriesMutationResponse>;
  /** insert a single row into the table: "categories" */
  insertCategoriesOne?: Maybe<Categories>;
  /** insert data into the table: "category_edition" */
  insertCategoryEdition?: Maybe<CategoryEditionMutationResponse>;
  /** insert a single row into the table: "category_edition" */
  insertCategoryEditionOne?: Maybe<CategoryEdition>;
  /** insert data into the table: "chest_award" */
  insertChestAward?: Maybe<ChestAwardMutationResponse>;
  /** insert a single row into the table: "chest_award" */
  insertChestAwardOne?: Maybe<ChestAward>;
  /** insert data into the table: "chest_history" */
  insertChestHistory?: Maybe<ChestHistoryMutationResponse>;
  /** insert a single row into the table: "chest_history" */
  insertChestHistoryOne?: Maybe<ChestHistory>;
  /** insert data into the table: "chests" */
  insertChests?: Maybe<ChestsMutationResponse>;
  /** insert a single row into the table: "chests" */
  insertChestsOne?: Maybe<Chests>;
  /** insert data into the table: "edition" */
  insertEdition?: Maybe<EditionMutationResponse>;
  /** insert a single row into the table: "edition" */
  insertEditionOne?: Maybe<Edition>;
  /** insert data into the table: "files" */
  insertFiles?: Maybe<FilesMutationResponse>;
  /** insert a single row into the table: "files" */
  insertFilesOne?: Maybe<Files>;
  /** insert data into the table: "flyway_schema_history" */
  insertFlywaySchemaHistory?: Maybe<FlywaySchemaHistoryMutationResponse>;
  /** insert a single row into the table: "flyway_schema_history" */
  insertFlywaySchemaHistoryOne?: Maybe<FlywaySchemaHistory>;
  /** insert data into the table: "groups" */
  insertGroups?: Maybe<GroupsMutationResponse>;
  /** insert a single row into the table: "groups" */
  insertGroupsOne?: Maybe<Groups>;
  /** insert data into the table: "levels" */
  insertLevels?: Maybe<LevelsMutationResponse>;
  /** insert a single row into the table: "levels" */
  insertLevelsOne?: Maybe<Levels>;
  /** insert data into the table: "points" */
  insertPoints?: Maybe<PointsMutationResponse>;
  /** insert data into the table: "points_history" */
  insertPointsHistory?: Maybe<PointsHistoryMutationResponse>;
  /** insert a single row into the table: "points_history" */
  insertPointsHistoryOne?: Maybe<PointsHistory>;
  /** insert a single row into the table: "points" */
  insertPointsOne?: Maybe<Points>;
  /** insert data into the table: "subcategories" */
  insertSubcategories?: Maybe<SubcategoriesMutationResponse>;
  /** insert a single row into the table: "subcategories" */
  insertSubcategoriesOne?: Maybe<Subcategories>;
  /** insert data into the table: "user_groups" */
  insertUserGroups?: Maybe<UserGroupsMutationResponse>;
  /** insert a single row into the table: "user_groups" */
  insertUserGroupsOne?: Maybe<UserGroups>;
  /** insert data into the table: "user_level" */
  insertUserLevel?: Maybe<UserLevelMutationResponse>;
  /** insert a single row into the table: "user_level" */
  insertUserLevelOne?: Maybe<UserLevel>;
  /** insert data into the table: "users" */
  insertUsers?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insertUsersOne?: Maybe<Users>;
  /** insert data into the table: "weekdays" */
  insertWeekdays?: Maybe<WeekdaysMutationResponse>;
  /** insert a single row into the table: "weekdays" */
  insertWeekdaysOne?: Maybe<Weekdays>;
  /** update data of the table: "award" */
  updateAward?: Maybe<AwardMutationResponse>;
  /** update single row of the table: "award" */
  updateAwardByPk?: Maybe<Award>;
  /** update data of the table: "award_edition" */
  updateAwardEdition?: Maybe<AwardEditionMutationResponse>;
  /** update single row of the table: "award_edition" */
  updateAwardEditionByPk?: Maybe<AwardEdition>;
  /** update multiples rows of table: "award_edition" */
  updateAwardEditionMany?: Maybe<Array<Maybe<AwardEditionMutationResponse>>>;
  /** update multiples rows of table: "award" */
  updateAwardMany?: Maybe<Array<Maybe<AwardMutationResponse>>>;
  /** update data of the table: "bonuses" */
  updateBonuses?: Maybe<BonusesMutationResponse>;
  /** update single row of the table: "bonuses" */
  updateBonusesByPk?: Maybe<Bonuses>;
  /** update multiples rows of table: "bonuses" */
  updateBonusesMany?: Maybe<Array<Maybe<BonusesMutationResponse>>>;
  /** update data of the table: "categories" */
  updateCategories?: Maybe<CategoriesMutationResponse>;
  /** update single row of the table: "categories" */
  updateCategoriesByPk?: Maybe<Categories>;
  /** update multiples rows of table: "categories" */
  updateCategoriesMany?: Maybe<Array<Maybe<CategoriesMutationResponse>>>;
  /** update data of the table: "category_edition" */
  updateCategoryEdition?: Maybe<CategoryEditionMutationResponse>;
  /** update single row of the table: "category_edition" */
  updateCategoryEditionByPk?: Maybe<CategoryEdition>;
  /** update multiples rows of table: "category_edition" */
  updateCategoryEditionMany?: Maybe<
    Array<Maybe<CategoryEditionMutationResponse>>
  >;
  /** update data of the table: "chest_award" */
  updateChestAward?: Maybe<ChestAwardMutationResponse>;
  /** update single row of the table: "chest_award" */
  updateChestAwardByPk?: Maybe<ChestAward>;
  /** update multiples rows of table: "chest_award" */
  updateChestAwardMany?: Maybe<Array<Maybe<ChestAwardMutationResponse>>>;
  /** update data of the table: "chest_history" */
  updateChestHistory?: Maybe<ChestHistoryMutationResponse>;
  /** update single row of the table: "chest_history" */
  updateChestHistoryByPk?: Maybe<ChestHistory>;
  /** update multiples rows of table: "chest_history" */
  updateChestHistoryMany?: Maybe<Array<Maybe<ChestHistoryMutationResponse>>>;
  /** update data of the table: "chests" */
  updateChests?: Maybe<ChestsMutationResponse>;
  /** update single row of the table: "chests" */
  updateChestsByPk?: Maybe<Chests>;
  /** update multiples rows of table: "chests" */
  updateChestsMany?: Maybe<Array<Maybe<ChestsMutationResponse>>>;
  /** update data of the table: "edition" */
  updateEdition?: Maybe<EditionMutationResponse>;
  /** update single row of the table: "edition" */
  updateEditionByPk?: Maybe<Edition>;
  /** update multiples rows of table: "edition" */
  updateEditionMany?: Maybe<Array<Maybe<EditionMutationResponse>>>;
  /** update data of the table: "files" */
  updateFiles?: Maybe<FilesMutationResponse>;
  /** update single row of the table: "files" */
  updateFilesByPk?: Maybe<Files>;
  /** update multiples rows of table: "files" */
  updateFilesMany?: Maybe<Array<Maybe<FilesMutationResponse>>>;
  /** update data of the table: "flyway_schema_history" */
  updateFlywaySchemaHistory?: Maybe<FlywaySchemaHistoryMutationResponse>;
  /** update single row of the table: "flyway_schema_history" */
  updateFlywaySchemaHistoryByPk?: Maybe<FlywaySchemaHistory>;
  /** update multiples rows of table: "flyway_schema_history" */
  updateFlywaySchemaHistoryMany?: Maybe<
    Array<Maybe<FlywaySchemaHistoryMutationResponse>>
  >;
  /** update data of the table: "groups" */
  updateGroups?: Maybe<GroupsMutationResponse>;
  /** update single row of the table: "groups" */
  updateGroupsByPk?: Maybe<Groups>;
  /** update multiples rows of table: "groups" */
  updateGroupsMany?: Maybe<Array<Maybe<GroupsMutationResponse>>>;
  /** update data of the table: "levels" */
  updateLevels?: Maybe<LevelsMutationResponse>;
  /** update single row of the table: "levels" */
  updateLevelsByPk?: Maybe<Levels>;
  /** update multiples rows of table: "levels" */
  updateLevelsMany?: Maybe<Array<Maybe<LevelsMutationResponse>>>;
  /** update data of the table: "points" */
  updatePoints?: Maybe<PointsMutationResponse>;
  /** update single row of the table: "points" */
  updatePointsByPk?: Maybe<Points>;
  /** update data of the table: "points_history" */
  updatePointsHistory?: Maybe<PointsHistoryMutationResponse>;
  /** update single row of the table: "points_history" */
  updatePointsHistoryByPk?: Maybe<PointsHistory>;
  /** update multiples rows of table: "points_history" */
  updatePointsHistoryMany?: Maybe<Array<Maybe<PointsHistoryMutationResponse>>>;
  /** update multiples rows of table: "points" */
  updatePointsMany?: Maybe<Array<Maybe<PointsMutationResponse>>>;
  /** update data of the table: "subcategories" */
  updateSubcategories?: Maybe<SubcategoriesMutationResponse>;
  /** update single row of the table: "subcategories" */
  updateSubcategoriesByPk?: Maybe<Subcategories>;
  /** update multiples rows of table: "subcategories" */
  updateSubcategoriesMany?: Maybe<Array<Maybe<SubcategoriesMutationResponse>>>;
  /** update data of the table: "user_groups" */
  updateUserGroups?: Maybe<UserGroupsMutationResponse>;
  /** update single row of the table: "user_groups" */
  updateUserGroupsByPk?: Maybe<UserGroups>;
  /** update multiples rows of table: "user_groups" */
  updateUserGroupsMany?: Maybe<Array<Maybe<UserGroupsMutationResponse>>>;
  /** update data of the table: "user_level" */
  updateUserLevel?: Maybe<UserLevelMutationResponse>;
  /** update single row of the table: "user_level" */
  updateUserLevelByPk?: Maybe<UserLevel>;
  /** update multiples rows of table: "user_level" */
  updateUserLevelMany?: Maybe<Array<Maybe<UserLevelMutationResponse>>>;
  /** update data of the table: "users" */
  updateUsers?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  updateUsersByPk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  updateUsersMany?: Maybe<Array<Maybe<UsersMutationResponse>>>;
  /** update data of the table: "weekdays" */
  updateWeekdays?: Maybe<WeekdaysMutationResponse>;
  /** update single row of the table: "weekdays" */
  updateWeekdaysByPk?: Maybe<Weekdays>;
  /** update multiples rows of table: "weekdays" */
  updateWeekdaysMany?: Maybe<Array<Maybe<WeekdaysMutationResponse>>>;
};

/** mutation root */
export type Mutation_RootAddAwardArgs = {
  awardName: Scalars["String"]["input"];
  awardType: Scalars["String"]["input"];
  awardValue: Scalars["Float"]["input"];
  categoryId: Scalars["Int"]["input"];
  label?: InputMaybe<Scalars["String"]["input"]>;
  maxUsages?: InputMaybe<Scalars["Int"]["input"]>;
};

/** mutation root */
export type Mutation_RootAddAwardToEditionArgs = {
  awardId: Scalars["Int"]["input"];
  editionId: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootAddBonusMutationArgs = {
  awardId: Scalars["Int"]["input"];
  checkDates?: InputMaybe<Scalars["Boolean"]["input"]>;
  chestHistoryId: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootAddCategoryArgs = {
  canAddPoints: Scalars["Boolean"]["input"];
  categoryName: Scalars["String"]["input"];
  label?: InputMaybe<Scalars["String"]["input"]>;
};

/** mutation root */
export type Mutation_RootAddCategoryToEditionArgs = {
  categoryId: Scalars["Int"]["input"];
  editionId: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootAddChestArgs = {
  chestType: Scalars["String"]["input"];
  editionId: Scalars["Int"]["input"];
  label?: InputMaybe<Scalars["String"]["input"]>;
};

/** mutation root */
export type Mutation_RootAddChestToUserArgs = {
  chestId: Scalars["Int"]["input"];
  subcategoryId: Scalars["Int"]["input"];
  teacherId: Scalars["Int"]["input"];
  userId: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootAddEditionArgs = {
  editionName: Scalars["String"]["input"];
  editionYear: Scalars["Int"]["input"];
  label?: InputMaybe<Scalars["String"]["input"]>;
};

/** mutation root */
export type Mutation_RootAddGroupArgs = {
  editionId: Scalars["Int"]["input"];
  endTime: Scalars["String"]["input"];
  groupName: Scalars["String"]["input"];
  label?: InputMaybe<Scalars["String"]["input"]>;
  startTime: Scalars["String"]["input"];
  teacherId: Scalars["Int"]["input"];
  weekdayId: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootAddLevelArgs = {
  editionId: Scalars["Int"]["input"];
  grade: Scalars["Float"]["input"];
  imageFileId?: InputMaybe<Scalars["Int"]["input"]>;
  maximumPoints: Scalars["Float"]["input"];
  name: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootAddPointsMutationArgs = {
  checkDates?: InputMaybe<Scalars["Boolean"]["input"]>;
  studentId: Scalars["Int"]["input"];
  subcategoryId: Scalars["Int"]["input"];
  teacherId: Scalars["Int"]["input"];
  value: Scalars["Float"]["input"];
};

/** mutation root */
export type Mutation_RootAddSubcategoryArgs = {
  categoryId: Scalars["Int"]["input"];
  editionId: Scalars["Int"]["input"];
  label?: InputMaybe<Scalars["String"]["input"]>;
  maxPoints: Scalars["Float"]["input"];
  ordinalNumber: Scalars["Int"]["input"];
  subcategoryName: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootAddUserArgs = {
  firstName: Scalars["String"]["input"];
  indexNumber: Scalars["Int"]["input"];
  label?: InputMaybe<Scalars["String"]["input"]>;
  nick: Scalars["String"]["input"];
  role: Scalars["String"]["input"];
  secondName: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootAssignPhotoToAwardArgs = {
  awardId: Scalars["Int"]["input"];
  fileId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** mutation root */
export type Mutation_RootAssignPhotoToChestArgs = {
  chestId: Scalars["Int"]["input"];
  fileId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** mutation root */
export type Mutation_RootAssignPhotoToLevelArgs = {
  fileId?: InputMaybe<Scalars["Int"]["input"]>;
  levelId: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootAssignPhotoToUserArgs = {
  fileId?: InputMaybe<Scalars["Int"]["input"]>;
  userId: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootAssignPhotosToGroupsArgs = {
  editionId: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteAwardArgs = {
  where: AwardBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteAwardByPkArgs = {
  awardId: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteAwardEditionArgs = {
  where: AwardEditionBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteAwardEditionByPkArgs = {
  awardId: Scalars["bigint"]["input"];
  editionId: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteBonusesArgs = {
  where: BonusesBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteBonusesByPkArgs = {
  bonusId: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteCategoriesArgs = {
  where: CategoriesBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteCategoriesByPkArgs = {
  categoryId: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteCategoryEditionArgs = {
  where: CategoryEditionBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteCategoryEditionByPkArgs = {
  categoryId: Scalars["bigint"]["input"];
  editionId: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteChestAwardArgs = {
  where: ChestAwardBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteChestAwardByPkArgs = {
  chestAwardId: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteChestHistoryArgs = {
  where: ChestHistoryBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteChestHistoryByPkArgs = {
  chestHistoryId: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteChestsArgs = {
  where: ChestsBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteChestsByPkArgs = {
  chestId: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteEditionArgs = {
  where: EditionBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteEditionByPkArgs = {
  editionId: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: FilesBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteFilesByPkArgs = {
  fileId: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteFlywaySchemaHistoryArgs = {
  where: FlywaySchemaHistoryBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteFlywaySchemaHistoryByPkArgs = {
  installedRank: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteGroupsArgs = {
  where: GroupsBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteGroupsByPkArgs = {
  groupsId: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteLevelsArgs = {
  where: LevelsBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteLevelsByPkArgs = {
  levelId: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDeletePointsArgs = {
  where: PointsBoolExp;
};

/** mutation root */
export type Mutation_RootDeletePointsByPkArgs = {
  pointsId: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDeletePointsHistoryArgs = {
  where: PointsHistoryBoolExp;
};

/** mutation root */
export type Mutation_RootDeletePointsHistoryByPkArgs = {
  pointsHistoryId: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteSubcategoriesArgs = {
  where: SubcategoriesBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteSubcategoriesByPkArgs = {
  subcategoryId: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteUserGroupsArgs = {
  where: UserGroupsBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteUserGroupsByPkArgs = {
  groupId: Scalars["bigint"]["input"];
  userId: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteUserLevelArgs = {
  where: UserLevelBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteUserLevelByPkArgs = {
  levelId: Scalars["bigint"]["input"];
  userId: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: UsersBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteUsersByPkArgs = {
  userId: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteWeekdaysArgs = {
  where: WeekdaysBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteWeekdaysByPkArgs = {
  weekdayId: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootGenerateSubcategoriesArgs = {
  categoryId: Scalars["Int"]["input"];
  editionId: Scalars["Int"]["input"];
  maxPoints: Scalars["Float"]["input"];
  subcategoryCount: Scalars["Int"]["input"];
  subcategoryPrefix: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootInsertAwardArgs = {
  objects: Array<AwardInsertInput>;
  onConflict?: InputMaybe<AwardOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertAwardEditionArgs = {
  objects: Array<AwardEditionInsertInput>;
  onConflict?: InputMaybe<AwardEditionOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertAwardEditionOneArgs = {
  object: AwardEditionInsertInput;
  onConflict?: InputMaybe<AwardEditionOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertAwardOneArgs = {
  object: AwardInsertInput;
  onConflict?: InputMaybe<AwardOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertBonusesArgs = {
  objects: Array<BonusesInsertInput>;
  onConflict?: InputMaybe<BonusesOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertBonusesOneArgs = {
  object: BonusesInsertInput;
  onConflict?: InputMaybe<BonusesOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertCategoriesArgs = {
  objects: Array<CategoriesInsertInput>;
  onConflict?: InputMaybe<CategoriesOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertCategoriesOneArgs = {
  object: CategoriesInsertInput;
  onConflict?: InputMaybe<CategoriesOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertCategoryEditionArgs = {
  objects: Array<CategoryEditionInsertInput>;
  onConflict?: InputMaybe<CategoryEditionOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertCategoryEditionOneArgs = {
  object: CategoryEditionInsertInput;
  onConflict?: InputMaybe<CategoryEditionOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertChestAwardArgs = {
  objects: Array<ChestAwardInsertInput>;
  onConflict?: InputMaybe<ChestAwardOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertChestAwardOneArgs = {
  object: ChestAwardInsertInput;
  onConflict?: InputMaybe<ChestAwardOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertChestHistoryArgs = {
  objects: Array<ChestHistoryInsertInput>;
  onConflict?: InputMaybe<ChestHistoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertChestHistoryOneArgs = {
  object: ChestHistoryInsertInput;
  onConflict?: InputMaybe<ChestHistoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertChestsArgs = {
  objects: Array<ChestsInsertInput>;
  onConflict?: InputMaybe<ChestsOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertChestsOneArgs = {
  object: ChestsInsertInput;
  onConflict?: InputMaybe<ChestsOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertEditionArgs = {
  objects: Array<EditionInsertInput>;
  onConflict?: InputMaybe<EditionOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertEditionOneArgs = {
  object: EditionInsertInput;
  onConflict?: InputMaybe<EditionOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<FilesInsertInput>;
  onConflict?: InputMaybe<FilesOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertFilesOneArgs = {
  object: FilesInsertInput;
  onConflict?: InputMaybe<FilesOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertFlywaySchemaHistoryArgs = {
  objects: Array<FlywaySchemaHistoryInsertInput>;
  onConflict?: InputMaybe<FlywaySchemaHistoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertFlywaySchemaHistoryOneArgs = {
  object: FlywaySchemaHistoryInsertInput;
  onConflict?: InputMaybe<FlywaySchemaHistoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertGroupsArgs = {
  objects: Array<GroupsInsertInput>;
  onConflict?: InputMaybe<GroupsOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertGroupsOneArgs = {
  object: GroupsInsertInput;
  onConflict?: InputMaybe<GroupsOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertLevelsArgs = {
  objects: Array<LevelsInsertInput>;
  onConflict?: InputMaybe<LevelsOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertLevelsOneArgs = {
  object: LevelsInsertInput;
  onConflict?: InputMaybe<LevelsOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPointsArgs = {
  objects: Array<PointsInsertInput>;
  onConflict?: InputMaybe<PointsOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPointsHistoryArgs = {
  objects: Array<PointsHistoryInsertInput>;
  onConflict?: InputMaybe<PointsHistoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPointsHistoryOneArgs = {
  object: PointsHistoryInsertInput;
  onConflict?: InputMaybe<PointsHistoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertPointsOneArgs = {
  object: PointsInsertInput;
  onConflict?: InputMaybe<PointsOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertSubcategoriesArgs = {
  objects: Array<SubcategoriesInsertInput>;
  onConflict?: InputMaybe<SubcategoriesOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertSubcategoriesOneArgs = {
  object: SubcategoriesInsertInput;
  onConflict?: InputMaybe<SubcategoriesOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertUserGroupsArgs = {
  objects: Array<UserGroupsInsertInput>;
  onConflict?: InputMaybe<UserGroupsOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertUserGroupsOneArgs = {
  object: UserGroupsInsertInput;
  onConflict?: InputMaybe<UserGroupsOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertUserLevelArgs = {
  objects: Array<UserLevelInsertInput>;
  onConflict?: InputMaybe<UserLevelOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertUserLevelOneArgs = {
  object: UserLevelInsertInput;
  onConflict?: InputMaybe<UserLevelOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  onConflict?: InputMaybe<UsersOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertUsersOneArgs = {
  object: UsersInsertInput;
  onConflict?: InputMaybe<UsersOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertWeekdaysArgs = {
  objects: Array<WeekdaysInsertInput>;
  onConflict?: InputMaybe<WeekdaysOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertWeekdaysOneArgs = {
  object: WeekdaysInsertInput;
  onConflict?: InputMaybe<WeekdaysOnConflict>;
};

/** mutation root */
export type Mutation_RootUpdateAwardArgs = {
  _inc?: InputMaybe<AwardIncInput>;
  _set?: InputMaybe<AwardSetInput>;
  where: AwardBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateAwardByPkArgs = {
  _inc?: InputMaybe<AwardIncInput>;
  _set?: InputMaybe<AwardSetInput>;
  pkColumns: AwardPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateAwardEditionArgs = {
  _inc?: InputMaybe<AwardEditionIncInput>;
  _set?: InputMaybe<AwardEditionSetInput>;
  where: AwardEditionBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateAwardEditionByPkArgs = {
  _inc?: InputMaybe<AwardEditionIncInput>;
  _set?: InputMaybe<AwardEditionSetInput>;
  pkColumns: AwardEditionPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateAwardEditionManyArgs = {
  updates: Array<AwardEditionUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateAwardManyArgs = {
  updates: Array<AwardUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateBonusesArgs = {
  _inc?: InputMaybe<BonusesIncInput>;
  _set?: InputMaybe<BonusesSetInput>;
  where: BonusesBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateBonusesByPkArgs = {
  _inc?: InputMaybe<BonusesIncInput>;
  _set?: InputMaybe<BonusesSetInput>;
  pkColumns: BonusesPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateBonusesManyArgs = {
  updates: Array<BonusesUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateCategoriesArgs = {
  _inc?: InputMaybe<CategoriesIncInput>;
  _set?: InputMaybe<CategoriesSetInput>;
  where: CategoriesBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateCategoriesByPkArgs = {
  _inc?: InputMaybe<CategoriesIncInput>;
  _set?: InputMaybe<CategoriesSetInput>;
  pkColumns: CategoriesPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateCategoriesManyArgs = {
  updates: Array<CategoriesUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateCategoryEditionArgs = {
  _inc?: InputMaybe<CategoryEditionIncInput>;
  _set?: InputMaybe<CategoryEditionSetInput>;
  where: CategoryEditionBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateCategoryEditionByPkArgs = {
  _inc?: InputMaybe<CategoryEditionIncInput>;
  _set?: InputMaybe<CategoryEditionSetInput>;
  pkColumns: CategoryEditionPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateCategoryEditionManyArgs = {
  updates: Array<CategoryEditionUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateChestAwardArgs = {
  _inc?: InputMaybe<ChestAwardIncInput>;
  _set?: InputMaybe<ChestAwardSetInput>;
  where: ChestAwardBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateChestAwardByPkArgs = {
  _inc?: InputMaybe<ChestAwardIncInput>;
  _set?: InputMaybe<ChestAwardSetInput>;
  pkColumns: ChestAwardPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateChestAwardManyArgs = {
  updates: Array<ChestAwardUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateChestHistoryArgs = {
  _inc?: InputMaybe<ChestHistoryIncInput>;
  _set?: InputMaybe<ChestHistorySetInput>;
  where: ChestHistoryBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateChestHistoryByPkArgs = {
  _inc?: InputMaybe<ChestHistoryIncInput>;
  _set?: InputMaybe<ChestHistorySetInput>;
  pkColumns: ChestHistoryPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateChestHistoryManyArgs = {
  updates: Array<ChestHistoryUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateChestsArgs = {
  _inc?: InputMaybe<ChestsIncInput>;
  _set?: InputMaybe<ChestsSetInput>;
  where: ChestsBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateChestsByPkArgs = {
  _inc?: InputMaybe<ChestsIncInput>;
  _set?: InputMaybe<ChestsSetInput>;
  pkColumns: ChestsPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateChestsManyArgs = {
  updates: Array<ChestsUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateEditionArgs = {
  _inc?: InputMaybe<EditionIncInput>;
  _set?: InputMaybe<EditionSetInput>;
  where: EditionBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateEditionByPkArgs = {
  _inc?: InputMaybe<EditionIncInput>;
  _set?: InputMaybe<EditionSetInput>;
  pkColumns: EditionPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateEditionManyArgs = {
  updates: Array<EditionUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _inc?: InputMaybe<FilesIncInput>;
  _set?: InputMaybe<FilesSetInput>;
  where: FilesBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateFilesByPkArgs = {
  _inc?: InputMaybe<FilesIncInput>;
  _set?: InputMaybe<FilesSetInput>;
  pkColumns: FilesPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateFilesManyArgs = {
  updates: Array<FilesUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateFlywaySchemaHistoryArgs = {
  _inc?: InputMaybe<FlywaySchemaHistoryIncInput>;
  _set?: InputMaybe<FlywaySchemaHistorySetInput>;
  where: FlywaySchemaHistoryBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateFlywaySchemaHistoryByPkArgs = {
  _inc?: InputMaybe<FlywaySchemaHistoryIncInput>;
  _set?: InputMaybe<FlywaySchemaHistorySetInput>;
  pkColumns: FlywaySchemaHistoryPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateFlywaySchemaHistoryManyArgs = {
  updates: Array<FlywaySchemaHistoryUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateGroupsArgs = {
  _inc?: InputMaybe<GroupsIncInput>;
  _set?: InputMaybe<GroupsSetInput>;
  where: GroupsBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateGroupsByPkArgs = {
  _inc?: InputMaybe<GroupsIncInput>;
  _set?: InputMaybe<GroupsSetInput>;
  pkColumns: GroupsPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateGroupsManyArgs = {
  updates: Array<GroupsUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateLevelsArgs = {
  _inc?: InputMaybe<LevelsIncInput>;
  _set?: InputMaybe<LevelsSetInput>;
  where: LevelsBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateLevelsByPkArgs = {
  _inc?: InputMaybe<LevelsIncInput>;
  _set?: InputMaybe<LevelsSetInput>;
  pkColumns: LevelsPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateLevelsManyArgs = {
  updates: Array<LevelsUpdates>;
};

/** mutation root */
export type Mutation_RootUpdatePointsArgs = {
  _inc?: InputMaybe<PointsIncInput>;
  _set?: InputMaybe<PointsSetInput>;
  where: PointsBoolExp;
};

/** mutation root */
export type Mutation_RootUpdatePointsByPkArgs = {
  _inc?: InputMaybe<PointsIncInput>;
  _set?: InputMaybe<PointsSetInput>;
  pkColumns: PointsPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdatePointsHistoryArgs = {
  _inc?: InputMaybe<PointsHistoryIncInput>;
  _set?: InputMaybe<PointsHistorySetInput>;
  where: PointsHistoryBoolExp;
};

/** mutation root */
export type Mutation_RootUpdatePointsHistoryByPkArgs = {
  _inc?: InputMaybe<PointsHistoryIncInput>;
  _set?: InputMaybe<PointsHistorySetInput>;
  pkColumns: PointsHistoryPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdatePointsHistoryManyArgs = {
  updates: Array<PointsHistoryUpdates>;
};

/** mutation root */
export type Mutation_RootUpdatePointsManyArgs = {
  updates: Array<PointsUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateSubcategoriesArgs = {
  _inc?: InputMaybe<SubcategoriesIncInput>;
  _set?: InputMaybe<SubcategoriesSetInput>;
  where: SubcategoriesBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateSubcategoriesByPkArgs = {
  _inc?: InputMaybe<SubcategoriesIncInput>;
  _set?: InputMaybe<SubcategoriesSetInput>;
  pkColumns: SubcategoriesPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateSubcategoriesManyArgs = {
  updates: Array<SubcategoriesUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateUserGroupsArgs = {
  _inc?: InputMaybe<UserGroupsIncInput>;
  _set?: InputMaybe<UserGroupsSetInput>;
  where: UserGroupsBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateUserGroupsByPkArgs = {
  _inc?: InputMaybe<UserGroupsIncInput>;
  _set?: InputMaybe<UserGroupsSetInput>;
  pkColumns: UserGroupsPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateUserGroupsManyArgs = {
  updates: Array<UserGroupsUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateUserLevelArgs = {
  _inc?: InputMaybe<UserLevelIncInput>;
  _set?: InputMaybe<UserLevelSetInput>;
  where: UserLevelBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateUserLevelByPkArgs = {
  _inc?: InputMaybe<UserLevelIncInput>;
  _set?: InputMaybe<UserLevelSetInput>;
  pkColumns: UserLevelPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateUserLevelManyArgs = {
  updates: Array<UserLevelUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _inc?: InputMaybe<UsersIncInput>;
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateUsersByPkArgs = {
  _inc?: InputMaybe<UsersIncInput>;
  _set?: InputMaybe<UsersSetInput>;
  pkColumns: UsersPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateUsersManyArgs = {
  updates: Array<UsersUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateWeekdaysArgs = {
  _inc?: InputMaybe<WeekdaysIncInput>;
  _set?: InputMaybe<WeekdaysSetInput>;
  where: WeekdaysBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateWeekdaysByPkArgs = {
  _inc?: InputMaybe<WeekdaysIncInput>;
  _set?: InputMaybe<WeekdaysSetInput>;
  pkColumns: WeekdaysPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateWeekdaysManyArgs = {
  updates: Array<WeekdaysUpdates>;
};

export type PointsAggregateBoolExpAvg = {
  arguments: PointsSelectColumnPointsAggregateBoolExpAvgArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<PointsBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PointsAggregateBoolExpCorr = {
  arguments: PointsAggregateBoolExpCorrArguments;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<PointsBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PointsAggregateBoolExpCorrArguments = {
  X: PointsSelectColumnPointsAggregateBoolExpCorrArgumentsColumns;
  Y: PointsSelectColumnPointsAggregateBoolExpCorrArgumentsColumns;
};

export type PointsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<PointsSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<PointsBoolExp>;
  predicate: IntComparisonExp;
};

export type PointsAggregateBoolExpCovar_Samp = {
  arguments: PointsAggregateBoolExpCovar_SampArguments;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<PointsBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PointsAggregateBoolExpCovar_SampArguments = {
  X: PointsSelectColumnPointsAggregateBoolExpCovar_SampArgumentsColumns;
  Y: PointsSelectColumnPointsAggregateBoolExpCovar_SampArgumentsColumns;
};

export type PointsAggregateBoolExpMax = {
  arguments: PointsSelectColumnPointsAggregateBoolExpMaxArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<PointsBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PointsAggregateBoolExpMin = {
  arguments: PointsSelectColumnPointsAggregateBoolExpMinArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<PointsBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PointsAggregateBoolExpStddev_Samp = {
  arguments: PointsSelectColumnPointsAggregateBoolExpStddev_SampArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<PointsBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PointsAggregateBoolExpSum = {
  arguments: PointsSelectColumnPointsAggregateBoolExpSumArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<PointsBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PointsAggregateBoolExpVar_Samp = {
  arguments: PointsSelectColumnPointsAggregateBoolExpVar_SampArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<PointsBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PointsHistoryAggregateBoolExpAvg = {
  arguments: PointsHistorySelectColumnPointsHistoryAggregateBoolExpAvgArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<PointsHistoryBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PointsHistoryAggregateBoolExpCorr = {
  arguments: PointsHistoryAggregateBoolExpCorrArguments;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<PointsHistoryBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PointsHistoryAggregateBoolExpCorrArguments = {
  X: PointsHistorySelectColumnPointsHistoryAggregateBoolExpCorrArgumentsColumns;
  Y: PointsHistorySelectColumnPointsHistoryAggregateBoolExpCorrArgumentsColumns;
};

export type PointsHistoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<PointsHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<PointsHistoryBoolExp>;
  predicate: IntComparisonExp;
};

export type PointsHistoryAggregateBoolExpCovar_Samp = {
  arguments: PointsHistoryAggregateBoolExpCovar_SampArguments;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<PointsHistoryBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PointsHistoryAggregateBoolExpCovar_SampArguments = {
  X: PointsHistorySelectColumnPointsHistoryAggregateBoolExpCovar_SampArgumentsColumns;
  Y: PointsHistorySelectColumnPointsHistoryAggregateBoolExpCovar_SampArgumentsColumns;
};

export type PointsHistoryAggregateBoolExpMax = {
  arguments: PointsHistorySelectColumnPointsHistoryAggregateBoolExpMaxArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<PointsHistoryBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PointsHistoryAggregateBoolExpMin = {
  arguments: PointsHistorySelectColumnPointsHistoryAggregateBoolExpMinArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<PointsHistoryBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PointsHistoryAggregateBoolExpStddev_Samp = {
  arguments: PointsHistorySelectColumnPointsHistoryAggregateBoolExpStddev_SampArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<PointsHistoryBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PointsHistoryAggregateBoolExpSum = {
  arguments: PointsHistorySelectColumnPointsHistoryAggregateBoolExpSumArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<PointsHistoryBoolExp>;
  predicate: Float8ComparisonExp;
};

export type PointsHistoryAggregateBoolExpVar_Samp = {
  arguments: PointsHistorySelectColumnPointsHistoryAggregateBoolExpVar_SampArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<PointsHistoryBoolExp>;
  predicate: Float8ComparisonExp;
};

export type Query_Root = {
  __typename?: "query_root";
  _service: _Service;
  /** fetch data from the table: "award" */
  award: Array<Award>;
  /** fetch aggregated fields from the table: "award" */
  awardAggregate: AwardAggregate;
  /** fetch data from the table: "award" using primary key columns */
  awardByPk?: Maybe<Award>;
  /** fetch data from the table: "award_edition" */
  awardEdition: Array<AwardEdition>;
  /** fetch aggregated fields from the table: "award_edition" */
  awardEditionAggregate: AwardEditionAggregate;
  /** fetch data from the table: "award_edition" using primary key columns */
  awardEditionByPk?: Maybe<AwardEdition>;
  /** An array relationship */
  bonuses: Array<Bonuses>;
  /** An aggregate relationship */
  bonusesAggregate: BonusesAggregate;
  /** fetch data from the table: "bonuses" using primary key columns */
  bonusesByPk?: Maybe<Bonuses>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categoriesAggregate: CategoriesAggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categoriesByPk?: Maybe<Categories>;
  /** fetch data from the table: "category_edition" */
  categoryEdition: Array<CategoryEdition>;
  /** fetch aggregated fields from the table: "category_edition" */
  categoryEditionAggregate: CategoryEditionAggregate;
  /** fetch data from the table: "category_edition" using primary key columns */
  categoryEditionByPk?: Maybe<CategoryEdition>;
  /** fetch data from the table: "chest_award" */
  chestAward: Array<ChestAward>;
  /** fetch aggregated fields from the table: "chest_award" */
  chestAwardAggregate: ChestAwardAggregate;
  /** fetch data from the table: "chest_award" using primary key columns */
  chestAwardByPk?: Maybe<ChestAward>;
  /** fetch data from the table: "chest_history" */
  chestHistory: Array<ChestHistory>;
  /** fetch aggregated fields from the table: "chest_history" */
  chestHistoryAggregate: ChestHistoryAggregate;
  /** fetch data from the table: "chest_history" using primary key columns */
  chestHistoryByPk?: Maybe<ChestHistory>;
  /** An array relationship */
  chests: Array<Chests>;
  /** An aggregate relationship */
  chestsAggregate: ChestsAggregate;
  /** fetch data from the table: "chests" using primary key columns */
  chestsByPk?: Maybe<Chests>;
  /** fetch data from the table: "edition" */
  edition: Array<Edition>;
  /** fetch aggregated fields from the table: "edition" */
  editionAggregate: EditionAggregate;
  /** fetch data from the table: "edition" using primary key columns */
  editionByPk?: Maybe<Edition>;
  /** fetch data from the table: "files" */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "files" */
  filesAggregate: FilesAggregate;
  /** fetch data from the table: "files" using primary key columns */
  filesByPk?: Maybe<Files>;
  /** fetch data from the table: "flyway_schema_history" */
  flywaySchemaHistory: Array<FlywaySchemaHistory>;
  /** fetch aggregated fields from the table: "flyway_schema_history" */
  flywaySchemaHistoryAggregate: FlywaySchemaHistoryAggregate;
  /** fetch data from the table: "flyway_schema_history" using primary key columns */
  flywaySchemaHistoryByPk?: Maybe<FlywaySchemaHistory>;
  getNeighboringLevels: NeighboringLevelsType;
  getPossibleGroupDates: Array<GroupDateType>;
  getPossibleGroupsTimeSpans: Array<TimeSpansType>;
  getPossibleGroupsWeekdays: Array<WeekdayType>;
  getStudentPoints: StudentPointsType;
  getSumOfPointsForStudentByCategory: Array<CategoryPointsSumType>;
  getUsersInGroupWithPoints: Array<Maybe<UserPointsType>>;
  /** An array relationship */
  groups: Array<Groups>;
  /** An aggregate relationship */
  groupsAggregate: GroupsAggregate;
  /** fetch data from the table: "groups" using primary key columns */
  groupsByPk?: Maybe<Groups>;
  /** fetch data from the table: "hall_of_fame" */
  hallOfFame: Array<HallOfFame>;
  /** fetch aggregated fields from the table: "hall_of_fame" */
  hallOfFameAggregate: HallOfFameAggregate;
  /** An array relationship */
  levels: Array<Levels>;
  /** An aggregate relationship */
  levelsAggregate: LevelsAggregate;
  /** fetch data from the table: "levels" using primary key columns */
  levelsByPk?: Maybe<Levels>;
  /** An array relationship */
  points: Array<Points>;
  /** An aggregate relationship */
  pointsAggregate: PointsAggregate;
  /** fetch data from the table: "points" using primary key columns */
  pointsByPk?: Maybe<Points>;
  /** fetch data from the table: "points_history" */
  pointsHistory: Array<PointsHistory>;
  /** fetch aggregated fields from the table: "points_history" */
  pointsHistoryAggregate: PointsHistoryAggregate;
  /** fetch data from the table: "points_history" using primary key columns */
  pointsHistoryByPk?: Maybe<PointsHistory>;
  /** An array relationship */
  subcategories: Array<Subcategories>;
  /** An aggregate relationship */
  subcategoriesAggregate: SubcategoriesAggregate;
  /** fetch data from the table: "subcategories" using primary key columns */
  subcategoriesByPk?: Maybe<Subcategories>;
  /** An array relationship */
  userGroups: Array<UserGroups>;
  /** An aggregate relationship */
  userGroupsAggregate: UserGroupsAggregate;
  /** fetch data from the table: "user_groups" using primary key columns */
  userGroupsByPk?: Maybe<UserGroups>;
  /** fetch data from the table: "user_level" */
  userLevel: Array<UserLevel>;
  /** fetch aggregated fields from the table: "user_level" */
  userLevelAggregate: UserLevelAggregate;
  /** fetch data from the table: "user_level" using primary key columns */
  userLevelByPk?: Maybe<UserLevel>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  usersAggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  usersByPk?: Maybe<Users>;
  /** fetch data from the table: "weekdays" */
  weekdays: Array<Weekdays>;
  /** fetch aggregated fields from the table: "weekdays" */
  weekdaysAggregate: WeekdaysAggregate;
  /** fetch data from the table: "weekdays" using primary key columns */
  weekdaysByPk?: Maybe<Weekdays>;
};

export type Query_RootAwardArgs = {
  distinctOn?: InputMaybe<Array<AwardSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<AwardOrderBy>>;
  where?: InputMaybe<AwardBoolExp>;
};

export type Query_RootAwardAggregateArgs = {
  distinctOn?: InputMaybe<Array<AwardSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<AwardOrderBy>>;
  where?: InputMaybe<AwardBoolExp>;
};

export type Query_RootAwardByPkArgs = {
  awardId: Scalars["bigint"]["input"];
};

export type Query_RootAwardEditionArgs = {
  distinctOn?: InputMaybe<Array<AwardEditionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<AwardEditionOrderBy>>;
  where?: InputMaybe<AwardEditionBoolExp>;
};

export type Query_RootAwardEditionAggregateArgs = {
  distinctOn?: InputMaybe<Array<AwardEditionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<AwardEditionOrderBy>>;
  where?: InputMaybe<AwardEditionBoolExp>;
};

export type Query_RootAwardEditionByPkArgs = {
  awardId: Scalars["bigint"]["input"];
  editionId: Scalars["bigint"]["input"];
};

export type Query_RootBonusesArgs = {
  distinctOn?: InputMaybe<Array<BonusesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<BonusesOrderBy>>;
  where?: InputMaybe<BonusesBoolExp>;
};

export type Query_RootBonusesAggregateArgs = {
  distinctOn?: InputMaybe<Array<BonusesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<BonusesOrderBy>>;
  where?: InputMaybe<BonusesBoolExp>;
};

export type Query_RootBonusesByPkArgs = {
  bonusId: Scalars["bigint"]["input"];
};

export type Query_RootCategoriesArgs = {
  distinctOn?: InputMaybe<Array<CategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
  where?: InputMaybe<CategoriesBoolExp>;
};

export type Query_RootCategoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<CategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
  where?: InputMaybe<CategoriesBoolExp>;
};

export type Query_RootCategoriesByPkArgs = {
  categoryId: Scalars["bigint"]["input"];
};

export type Query_RootCategoryEditionArgs = {
  distinctOn?: InputMaybe<Array<CategoryEditionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoryEditionOrderBy>>;
  where?: InputMaybe<CategoryEditionBoolExp>;
};

export type Query_RootCategoryEditionAggregateArgs = {
  distinctOn?: InputMaybe<Array<CategoryEditionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoryEditionOrderBy>>;
  where?: InputMaybe<CategoryEditionBoolExp>;
};

export type Query_RootCategoryEditionByPkArgs = {
  categoryId: Scalars["bigint"]["input"];
  editionId: Scalars["bigint"]["input"];
};

export type Query_RootChestAwardArgs = {
  distinctOn?: InputMaybe<Array<ChestAwardSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestAwardOrderBy>>;
  where?: InputMaybe<ChestAwardBoolExp>;
};

export type Query_RootChestAwardAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChestAwardSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestAwardOrderBy>>;
  where?: InputMaybe<ChestAwardBoolExp>;
};

export type Query_RootChestAwardByPkArgs = {
  chestAwardId: Scalars["bigint"]["input"];
};

export type Query_RootChestHistoryArgs = {
  distinctOn?: InputMaybe<Array<ChestHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestHistoryOrderBy>>;
  where?: InputMaybe<ChestHistoryBoolExp>;
};

export type Query_RootChestHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChestHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestHistoryOrderBy>>;
  where?: InputMaybe<ChestHistoryBoolExp>;
};

export type Query_RootChestHistoryByPkArgs = {
  chestHistoryId: Scalars["bigint"]["input"];
};

export type Query_RootChestsArgs = {
  distinctOn?: InputMaybe<Array<ChestsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestsOrderBy>>;
  where?: InputMaybe<ChestsBoolExp>;
};

export type Query_RootChestsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChestsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestsOrderBy>>;
  where?: InputMaybe<ChestsBoolExp>;
};

export type Query_RootChestsByPkArgs = {
  chestId: Scalars["bigint"]["input"];
};

export type Query_RootEditionArgs = {
  distinctOn?: InputMaybe<Array<EditionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<EditionOrderBy>>;
  where?: InputMaybe<EditionBoolExp>;
};

export type Query_RootEditionAggregateArgs = {
  distinctOn?: InputMaybe<Array<EditionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<EditionOrderBy>>;
  where?: InputMaybe<EditionBoolExp>;
};

export type Query_RootEditionByPkArgs = {
  editionId: Scalars["bigint"]["input"];
};

export type Query_RootFilesArgs = {
  distinctOn?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};

export type Query_RootFilesAggregateArgs = {
  distinctOn?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};

export type Query_RootFilesByPkArgs = {
  fileId: Scalars["bigint"]["input"];
};

export type Query_RootFlywaySchemaHistoryArgs = {
  distinctOn?: InputMaybe<Array<FlywaySchemaHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<FlywaySchemaHistoryOrderBy>>;
  where?: InputMaybe<FlywaySchemaHistoryBoolExp>;
};

export type Query_RootFlywaySchemaHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<FlywaySchemaHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<FlywaySchemaHistoryOrderBy>>;
  where?: InputMaybe<FlywaySchemaHistoryBoolExp>;
};

export type Query_RootFlywaySchemaHistoryByPkArgs = {
  installedRank: Scalars["Int"]["input"];
};

export type Query_RootGetNeighboringLevelsArgs = {
  editionId: Scalars["Int"]["input"];
  studentId: Scalars["Int"]["input"];
};

export type Query_RootGetPossibleGroupDatesArgs = {
  editionId: Scalars["Int"]["input"];
};

export type Query_RootGetPossibleGroupsTimeSpansArgs = {
  editionId: Scalars["Int"]["input"];
};

export type Query_RootGetPossibleGroupsWeekdaysArgs = {
  editionId: Scalars["Int"]["input"];
};

export type Query_RootGetStudentPointsArgs = {
  editionId: Scalars["Int"]["input"];
  studentId: Scalars["Int"]["input"];
};

export type Query_RootGetSumOfPointsForStudentByCategoryArgs = {
  editionId: Scalars["Int"]["input"];
  studentId: Scalars["Int"]["input"];
};

export type Query_RootGetUsersInGroupWithPointsArgs = {
  groupId: Scalars["Int"]["input"];
};

export type Query_RootGroupsArgs = {
  distinctOn?: InputMaybe<Array<GroupsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupsOrderBy>>;
  where?: InputMaybe<GroupsBoolExp>;
};

export type Query_RootGroupsAggregateArgs = {
  distinctOn?: InputMaybe<Array<GroupsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupsOrderBy>>;
  where?: InputMaybe<GroupsBoolExp>;
};

export type Query_RootGroupsByPkArgs = {
  groupsId: Scalars["bigint"]["input"];
};

export type Query_RootHallOfFameArgs = {
  distinctOn?: InputMaybe<Array<HallOfFameSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<HallOfFameOrderBy>>;
  where?: InputMaybe<HallOfFameBoolExp>;
};

export type Query_RootHallOfFameAggregateArgs = {
  distinctOn?: InputMaybe<Array<HallOfFameSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<HallOfFameOrderBy>>;
  where?: InputMaybe<HallOfFameBoolExp>;
};

export type Query_RootLevelsArgs = {
  distinctOn?: InputMaybe<Array<LevelsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<LevelsOrderBy>>;
  where?: InputMaybe<LevelsBoolExp>;
};

export type Query_RootLevelsAggregateArgs = {
  distinctOn?: InputMaybe<Array<LevelsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<LevelsOrderBy>>;
  where?: InputMaybe<LevelsBoolExp>;
};

export type Query_RootLevelsByPkArgs = {
  levelId: Scalars["bigint"]["input"];
};

export type Query_RootPointsArgs = {
  distinctOn?: InputMaybe<Array<PointsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PointsOrderBy>>;
  where?: InputMaybe<PointsBoolExp>;
};

export type Query_RootPointsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PointsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PointsOrderBy>>;
  where?: InputMaybe<PointsBoolExp>;
};

export type Query_RootPointsByPkArgs = {
  pointsId: Scalars["bigint"]["input"];
};

export type Query_RootPointsHistoryArgs = {
  distinctOn?: InputMaybe<Array<PointsHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PointsHistoryOrderBy>>;
  where?: InputMaybe<PointsHistoryBoolExp>;
};

export type Query_RootPointsHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<PointsHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PointsHistoryOrderBy>>;
  where?: InputMaybe<PointsHistoryBoolExp>;
};

export type Query_RootPointsHistoryByPkArgs = {
  pointsHistoryId: Scalars["bigint"]["input"];
};

export type Query_RootSubcategoriesArgs = {
  distinctOn?: InputMaybe<Array<SubcategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<SubcategoriesOrderBy>>;
  where?: InputMaybe<SubcategoriesBoolExp>;
};

export type Query_RootSubcategoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<SubcategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<SubcategoriesOrderBy>>;
  where?: InputMaybe<SubcategoriesBoolExp>;
};

export type Query_RootSubcategoriesByPkArgs = {
  subcategoryId: Scalars["bigint"]["input"];
};

export type Query_RootUserGroupsArgs = {
  distinctOn?: InputMaybe<Array<UserGroupsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserGroupsOrderBy>>;
  where?: InputMaybe<UserGroupsBoolExp>;
};

export type Query_RootUserGroupsAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserGroupsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserGroupsOrderBy>>;
  where?: InputMaybe<UserGroupsBoolExp>;
};

export type Query_RootUserGroupsByPkArgs = {
  groupId: Scalars["bigint"]["input"];
  userId: Scalars["bigint"]["input"];
};

export type Query_RootUserLevelArgs = {
  distinctOn?: InputMaybe<Array<UserLevelSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserLevelOrderBy>>;
  where?: InputMaybe<UserLevelBoolExp>;
};

export type Query_RootUserLevelAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserLevelSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserLevelOrderBy>>;
  where?: InputMaybe<UserLevelBoolExp>;
};

export type Query_RootUserLevelByPkArgs = {
  levelId: Scalars["bigint"]["input"];
  userId: Scalars["bigint"]["input"];
};

export type Query_RootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type Query_RootUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type Query_RootUsersByPkArgs = {
  userId: Scalars["bigint"]["input"];
};

export type Query_RootWeekdaysArgs = {
  distinctOn?: InputMaybe<Array<WeekdaysSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<WeekdaysOrderBy>>;
  where?: InputMaybe<WeekdaysBoolExp>;
};

export type Query_RootWeekdaysAggregateArgs = {
  distinctOn?: InputMaybe<Array<WeekdaysSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<WeekdaysOrderBy>>;
  where?: InputMaybe<WeekdaysBoolExp>;
};

export type Query_RootWeekdaysByPkArgs = {
  weekdayId: Scalars["bigint"]["input"];
};

export type SubcategoriesAggregateBoolExpAvg = {
  arguments: SubcategoriesSelectColumnSubcategoriesAggregateBoolExpAvgArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<SubcategoriesBoolExp>;
  predicate: Float8ComparisonExp;
};

export type SubcategoriesAggregateBoolExpCorr = {
  arguments: SubcategoriesAggregateBoolExpCorrArguments;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<SubcategoriesBoolExp>;
  predicate: Float8ComparisonExp;
};

export type SubcategoriesAggregateBoolExpCorrArguments = {
  X: SubcategoriesSelectColumnSubcategoriesAggregateBoolExpCorrArgumentsColumns;
  Y: SubcategoriesSelectColumnSubcategoriesAggregateBoolExpCorrArgumentsColumns;
};

export type SubcategoriesAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<SubcategoriesSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<SubcategoriesBoolExp>;
  predicate: IntComparisonExp;
};

export type SubcategoriesAggregateBoolExpCovar_Samp = {
  arguments: SubcategoriesAggregateBoolExpCovar_SampArguments;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<SubcategoriesBoolExp>;
  predicate: Float8ComparisonExp;
};

export type SubcategoriesAggregateBoolExpCovar_SampArguments = {
  X: SubcategoriesSelectColumnSubcategoriesAggregateBoolExpCovar_SampArgumentsColumns;
  Y: SubcategoriesSelectColumnSubcategoriesAggregateBoolExpCovar_SampArgumentsColumns;
};

export type SubcategoriesAggregateBoolExpMax = {
  arguments: SubcategoriesSelectColumnSubcategoriesAggregateBoolExpMaxArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<SubcategoriesBoolExp>;
  predicate: Float8ComparisonExp;
};

export type SubcategoriesAggregateBoolExpMin = {
  arguments: SubcategoriesSelectColumnSubcategoriesAggregateBoolExpMinArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<SubcategoriesBoolExp>;
  predicate: Float8ComparisonExp;
};

export type SubcategoriesAggregateBoolExpStddev_Samp = {
  arguments: SubcategoriesSelectColumnSubcategoriesAggregateBoolExpStddev_SampArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<SubcategoriesBoolExp>;
  predicate: Float8ComparisonExp;
};

export type SubcategoriesAggregateBoolExpSum = {
  arguments: SubcategoriesSelectColumnSubcategoriesAggregateBoolExpSumArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<SubcategoriesBoolExp>;
  predicate: Float8ComparisonExp;
};

export type SubcategoriesAggregateBoolExpVar_Samp = {
  arguments: SubcategoriesSelectColumnSubcategoriesAggregateBoolExpVar_SampArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<SubcategoriesBoolExp>;
  predicate: Float8ComparisonExp;
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "award" */
  award: Array<Award>;
  /** fetch aggregated fields from the table: "award" */
  awardAggregate: AwardAggregate;
  /** fetch data from the table: "award" using primary key columns */
  awardByPk?: Maybe<Award>;
  /** fetch data from the table: "award_edition" */
  awardEdition: Array<AwardEdition>;
  /** fetch aggregated fields from the table: "award_edition" */
  awardEditionAggregate: AwardEditionAggregate;
  /** fetch data from the table: "award_edition" using primary key columns */
  awardEditionByPk?: Maybe<AwardEdition>;
  /** fetch data from the table in a streaming manner: "award_edition" */
  awardEditionStream: Array<AwardEdition>;
  /** fetch data from the table in a streaming manner: "award" */
  awardStream: Array<Award>;
  /** An array relationship */
  bonuses: Array<Bonuses>;
  /** An aggregate relationship */
  bonusesAggregate: BonusesAggregate;
  /** fetch data from the table: "bonuses" using primary key columns */
  bonusesByPk?: Maybe<Bonuses>;
  /** fetch data from the table in a streaming manner: "bonuses" */
  bonusesStream: Array<Bonuses>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categoriesAggregate: CategoriesAggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categoriesByPk?: Maybe<Categories>;
  /** fetch data from the table in a streaming manner: "categories" */
  categoriesStream: Array<Categories>;
  /** fetch data from the table: "category_edition" */
  categoryEdition: Array<CategoryEdition>;
  /** fetch aggregated fields from the table: "category_edition" */
  categoryEditionAggregate: CategoryEditionAggregate;
  /** fetch data from the table: "category_edition" using primary key columns */
  categoryEditionByPk?: Maybe<CategoryEdition>;
  /** fetch data from the table in a streaming manner: "category_edition" */
  categoryEditionStream: Array<CategoryEdition>;
  /** fetch data from the table: "chest_award" */
  chestAward: Array<ChestAward>;
  /** fetch aggregated fields from the table: "chest_award" */
  chestAwardAggregate: ChestAwardAggregate;
  /** fetch data from the table: "chest_award" using primary key columns */
  chestAwardByPk?: Maybe<ChestAward>;
  /** fetch data from the table in a streaming manner: "chest_award" */
  chestAwardStream: Array<ChestAward>;
  /** fetch data from the table: "chest_history" */
  chestHistory: Array<ChestHistory>;
  /** fetch aggregated fields from the table: "chest_history" */
  chestHistoryAggregate: ChestHistoryAggregate;
  /** fetch data from the table: "chest_history" using primary key columns */
  chestHistoryByPk?: Maybe<ChestHistory>;
  /** fetch data from the table in a streaming manner: "chest_history" */
  chestHistoryStream: Array<ChestHistory>;
  /** An array relationship */
  chests: Array<Chests>;
  /** An aggregate relationship */
  chestsAggregate: ChestsAggregate;
  /** fetch data from the table: "chests" using primary key columns */
  chestsByPk?: Maybe<Chests>;
  /** fetch data from the table in a streaming manner: "chests" */
  chestsStream: Array<Chests>;
  /** fetch data from the table: "edition" */
  edition: Array<Edition>;
  /** fetch aggregated fields from the table: "edition" */
  editionAggregate: EditionAggregate;
  /** fetch data from the table: "edition" using primary key columns */
  editionByPk?: Maybe<Edition>;
  /** fetch data from the table in a streaming manner: "edition" */
  editionStream: Array<Edition>;
  /** fetch data from the table: "files" */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "files" */
  filesAggregate: FilesAggregate;
  /** fetch data from the table: "files" using primary key columns */
  filesByPk?: Maybe<Files>;
  /** fetch data from the table in a streaming manner: "files" */
  filesStream: Array<Files>;
  /** fetch data from the table: "flyway_schema_history" */
  flywaySchemaHistory: Array<FlywaySchemaHistory>;
  /** fetch aggregated fields from the table: "flyway_schema_history" */
  flywaySchemaHistoryAggregate: FlywaySchemaHistoryAggregate;
  /** fetch data from the table: "flyway_schema_history" using primary key columns */
  flywaySchemaHistoryByPk?: Maybe<FlywaySchemaHistory>;
  /** fetch data from the table in a streaming manner: "flyway_schema_history" */
  flywaySchemaHistoryStream: Array<FlywaySchemaHistory>;
  /** An array relationship */
  groups: Array<Groups>;
  /** An aggregate relationship */
  groupsAggregate: GroupsAggregate;
  /** fetch data from the table: "groups" using primary key columns */
  groupsByPk?: Maybe<Groups>;
  /** fetch data from the table in a streaming manner: "groups" */
  groupsStream: Array<Groups>;
  /** fetch data from the table: "hall_of_fame" */
  hallOfFame: Array<HallOfFame>;
  /** fetch aggregated fields from the table: "hall_of_fame" */
  hallOfFameAggregate: HallOfFameAggregate;
  /** fetch data from the table in a streaming manner: "hall_of_fame" */
  hallOfFameStream: Array<HallOfFame>;
  /** An array relationship */
  levels: Array<Levels>;
  /** An aggregate relationship */
  levelsAggregate: LevelsAggregate;
  /** fetch data from the table: "levels" using primary key columns */
  levelsByPk?: Maybe<Levels>;
  /** fetch data from the table in a streaming manner: "levels" */
  levelsStream: Array<Levels>;
  /** An array relationship */
  points: Array<Points>;
  /** An aggregate relationship */
  pointsAggregate: PointsAggregate;
  /** fetch data from the table: "points" using primary key columns */
  pointsByPk?: Maybe<Points>;
  /** fetch data from the table: "points_history" */
  pointsHistory: Array<PointsHistory>;
  /** fetch aggregated fields from the table: "points_history" */
  pointsHistoryAggregate: PointsHistoryAggregate;
  /** fetch data from the table: "points_history" using primary key columns */
  pointsHistoryByPk?: Maybe<PointsHistory>;
  /** fetch data from the table in a streaming manner: "points_history" */
  pointsHistoryStream: Array<PointsHistory>;
  /** fetch data from the table in a streaming manner: "points" */
  pointsStream: Array<Points>;
  /** An array relationship */
  subcategories: Array<Subcategories>;
  /** An aggregate relationship */
  subcategoriesAggregate: SubcategoriesAggregate;
  /** fetch data from the table: "subcategories" using primary key columns */
  subcategoriesByPk?: Maybe<Subcategories>;
  /** fetch data from the table in a streaming manner: "subcategories" */
  subcategoriesStream: Array<Subcategories>;
  /** An array relationship */
  userGroups: Array<UserGroups>;
  /** An aggregate relationship */
  userGroupsAggregate: UserGroupsAggregate;
  /** fetch data from the table: "user_groups" using primary key columns */
  userGroupsByPk?: Maybe<UserGroups>;
  /** fetch data from the table in a streaming manner: "user_groups" */
  userGroupsStream: Array<UserGroups>;
  /** fetch data from the table: "user_level" */
  userLevel: Array<UserLevel>;
  /** fetch aggregated fields from the table: "user_level" */
  userLevelAggregate: UserLevelAggregate;
  /** fetch data from the table: "user_level" using primary key columns */
  userLevelByPk?: Maybe<UserLevel>;
  /** fetch data from the table in a streaming manner: "user_level" */
  userLevelStream: Array<UserLevel>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  usersAggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  usersByPk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  usersStream: Array<Users>;
  /** fetch data from the table: "weekdays" */
  weekdays: Array<Weekdays>;
  /** fetch aggregated fields from the table: "weekdays" */
  weekdaysAggregate: WeekdaysAggregate;
  /** fetch data from the table: "weekdays" using primary key columns */
  weekdaysByPk?: Maybe<Weekdays>;
  /** fetch data from the table in a streaming manner: "weekdays" */
  weekdaysStream: Array<Weekdays>;
};

export type Subscription_RootAwardArgs = {
  distinctOn?: InputMaybe<Array<AwardSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<AwardOrderBy>>;
  where?: InputMaybe<AwardBoolExp>;
};

export type Subscription_RootAwardAggregateArgs = {
  distinctOn?: InputMaybe<Array<AwardSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<AwardOrderBy>>;
  where?: InputMaybe<AwardBoolExp>;
};

export type Subscription_RootAwardByPkArgs = {
  awardId: Scalars["bigint"]["input"];
};

export type Subscription_RootAwardEditionArgs = {
  distinctOn?: InputMaybe<Array<AwardEditionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<AwardEditionOrderBy>>;
  where?: InputMaybe<AwardEditionBoolExp>;
};

export type Subscription_RootAwardEditionAggregateArgs = {
  distinctOn?: InputMaybe<Array<AwardEditionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<AwardEditionOrderBy>>;
  where?: InputMaybe<AwardEditionBoolExp>;
};

export type Subscription_RootAwardEditionByPkArgs = {
  awardId: Scalars["bigint"]["input"];
  editionId: Scalars["bigint"]["input"];
};

export type Subscription_RootAwardEditionStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<AwardEditionStreamCursorInput>>;
  where?: InputMaybe<AwardEditionBoolExp>;
};

export type Subscription_RootAwardStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<AwardStreamCursorInput>>;
  where?: InputMaybe<AwardBoolExp>;
};

export type Subscription_RootBonusesArgs = {
  distinctOn?: InputMaybe<Array<BonusesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<BonusesOrderBy>>;
  where?: InputMaybe<BonusesBoolExp>;
};

export type Subscription_RootBonusesAggregateArgs = {
  distinctOn?: InputMaybe<Array<BonusesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<BonusesOrderBy>>;
  where?: InputMaybe<BonusesBoolExp>;
};

export type Subscription_RootBonusesByPkArgs = {
  bonusId: Scalars["bigint"]["input"];
};

export type Subscription_RootBonusesStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<BonusesStreamCursorInput>>;
  where?: InputMaybe<BonusesBoolExp>;
};

export type Subscription_RootCategoriesArgs = {
  distinctOn?: InputMaybe<Array<CategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
  where?: InputMaybe<CategoriesBoolExp>;
};

export type Subscription_RootCategoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<CategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
  where?: InputMaybe<CategoriesBoolExp>;
};

export type Subscription_RootCategoriesByPkArgs = {
  categoryId: Scalars["bigint"]["input"];
};

export type Subscription_RootCategoriesStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<CategoriesStreamCursorInput>>;
  where?: InputMaybe<CategoriesBoolExp>;
};

export type Subscription_RootCategoryEditionArgs = {
  distinctOn?: InputMaybe<Array<CategoryEditionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoryEditionOrderBy>>;
  where?: InputMaybe<CategoryEditionBoolExp>;
};

export type Subscription_RootCategoryEditionAggregateArgs = {
  distinctOn?: InputMaybe<Array<CategoryEditionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoryEditionOrderBy>>;
  where?: InputMaybe<CategoryEditionBoolExp>;
};

export type Subscription_RootCategoryEditionByPkArgs = {
  categoryId: Scalars["bigint"]["input"];
  editionId: Scalars["bigint"]["input"];
};

export type Subscription_RootCategoryEditionStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<CategoryEditionStreamCursorInput>>;
  where?: InputMaybe<CategoryEditionBoolExp>;
};

export type Subscription_RootChestAwardArgs = {
  distinctOn?: InputMaybe<Array<ChestAwardSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestAwardOrderBy>>;
  where?: InputMaybe<ChestAwardBoolExp>;
};

export type Subscription_RootChestAwardAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChestAwardSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestAwardOrderBy>>;
  where?: InputMaybe<ChestAwardBoolExp>;
};

export type Subscription_RootChestAwardByPkArgs = {
  chestAwardId: Scalars["bigint"]["input"];
};

export type Subscription_RootChestAwardStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<ChestAwardStreamCursorInput>>;
  where?: InputMaybe<ChestAwardBoolExp>;
};

export type Subscription_RootChestHistoryArgs = {
  distinctOn?: InputMaybe<Array<ChestHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestHistoryOrderBy>>;
  where?: InputMaybe<ChestHistoryBoolExp>;
};

export type Subscription_RootChestHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChestHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestHistoryOrderBy>>;
  where?: InputMaybe<ChestHistoryBoolExp>;
};

export type Subscription_RootChestHistoryByPkArgs = {
  chestHistoryId: Scalars["bigint"]["input"];
};

export type Subscription_RootChestHistoryStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<ChestHistoryStreamCursorInput>>;
  where?: InputMaybe<ChestHistoryBoolExp>;
};

export type Subscription_RootChestsArgs = {
  distinctOn?: InputMaybe<Array<ChestsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestsOrderBy>>;
  where?: InputMaybe<ChestsBoolExp>;
};

export type Subscription_RootChestsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChestsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ChestsOrderBy>>;
  where?: InputMaybe<ChestsBoolExp>;
};

export type Subscription_RootChestsByPkArgs = {
  chestId: Scalars["bigint"]["input"];
};

export type Subscription_RootChestsStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<ChestsStreamCursorInput>>;
  where?: InputMaybe<ChestsBoolExp>;
};

export type Subscription_RootEditionArgs = {
  distinctOn?: InputMaybe<Array<EditionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<EditionOrderBy>>;
  where?: InputMaybe<EditionBoolExp>;
};

export type Subscription_RootEditionAggregateArgs = {
  distinctOn?: InputMaybe<Array<EditionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<EditionOrderBy>>;
  where?: InputMaybe<EditionBoolExp>;
};

export type Subscription_RootEditionByPkArgs = {
  editionId: Scalars["bigint"]["input"];
};

export type Subscription_RootEditionStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<EditionStreamCursorInput>>;
  where?: InputMaybe<EditionBoolExp>;
};

export type Subscription_RootFilesArgs = {
  distinctOn?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};

export type Subscription_RootFilesAggregateArgs = {
  distinctOn?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};

export type Subscription_RootFilesByPkArgs = {
  fileId: Scalars["bigint"]["input"];
};

export type Subscription_RootFilesStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<FilesStreamCursorInput>>;
  where?: InputMaybe<FilesBoolExp>;
};

export type Subscription_RootFlywaySchemaHistoryArgs = {
  distinctOn?: InputMaybe<Array<FlywaySchemaHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<FlywaySchemaHistoryOrderBy>>;
  where?: InputMaybe<FlywaySchemaHistoryBoolExp>;
};

export type Subscription_RootFlywaySchemaHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<FlywaySchemaHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<FlywaySchemaHistoryOrderBy>>;
  where?: InputMaybe<FlywaySchemaHistoryBoolExp>;
};

export type Subscription_RootFlywaySchemaHistoryByPkArgs = {
  installedRank: Scalars["Int"]["input"];
};

export type Subscription_RootFlywaySchemaHistoryStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<FlywaySchemaHistoryStreamCursorInput>>;
  where?: InputMaybe<FlywaySchemaHistoryBoolExp>;
};

export type Subscription_RootGroupsArgs = {
  distinctOn?: InputMaybe<Array<GroupsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupsOrderBy>>;
  where?: InputMaybe<GroupsBoolExp>;
};

export type Subscription_RootGroupsAggregateArgs = {
  distinctOn?: InputMaybe<Array<GroupsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupsOrderBy>>;
  where?: InputMaybe<GroupsBoolExp>;
};

export type Subscription_RootGroupsByPkArgs = {
  groupsId: Scalars["bigint"]["input"];
};

export type Subscription_RootGroupsStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<GroupsStreamCursorInput>>;
  where?: InputMaybe<GroupsBoolExp>;
};

export type Subscription_RootHallOfFameArgs = {
  distinctOn?: InputMaybe<Array<HallOfFameSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<HallOfFameOrderBy>>;
  where?: InputMaybe<HallOfFameBoolExp>;
};

export type Subscription_RootHallOfFameAggregateArgs = {
  distinctOn?: InputMaybe<Array<HallOfFameSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<HallOfFameOrderBy>>;
  where?: InputMaybe<HallOfFameBoolExp>;
};

export type Subscription_RootHallOfFameStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<HallOfFameStreamCursorInput>>;
  where?: InputMaybe<HallOfFameBoolExp>;
};

export type Subscription_RootLevelsArgs = {
  distinctOn?: InputMaybe<Array<LevelsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<LevelsOrderBy>>;
  where?: InputMaybe<LevelsBoolExp>;
};

export type Subscription_RootLevelsAggregateArgs = {
  distinctOn?: InputMaybe<Array<LevelsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<LevelsOrderBy>>;
  where?: InputMaybe<LevelsBoolExp>;
};

export type Subscription_RootLevelsByPkArgs = {
  levelId: Scalars["bigint"]["input"];
};

export type Subscription_RootLevelsStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<LevelsStreamCursorInput>>;
  where?: InputMaybe<LevelsBoolExp>;
};

export type Subscription_RootPointsArgs = {
  distinctOn?: InputMaybe<Array<PointsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PointsOrderBy>>;
  where?: InputMaybe<PointsBoolExp>;
};

export type Subscription_RootPointsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PointsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PointsOrderBy>>;
  where?: InputMaybe<PointsBoolExp>;
};

export type Subscription_RootPointsByPkArgs = {
  pointsId: Scalars["bigint"]["input"];
};

export type Subscription_RootPointsHistoryArgs = {
  distinctOn?: InputMaybe<Array<PointsHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PointsHistoryOrderBy>>;
  where?: InputMaybe<PointsHistoryBoolExp>;
};

export type Subscription_RootPointsHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<PointsHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<PointsHistoryOrderBy>>;
  where?: InputMaybe<PointsHistoryBoolExp>;
};

export type Subscription_RootPointsHistoryByPkArgs = {
  pointsHistoryId: Scalars["bigint"]["input"];
};

export type Subscription_RootPointsHistoryStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<PointsHistoryStreamCursorInput>>;
  where?: InputMaybe<PointsHistoryBoolExp>;
};

export type Subscription_RootPointsStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<PointsStreamCursorInput>>;
  where?: InputMaybe<PointsBoolExp>;
};

export type Subscription_RootSubcategoriesArgs = {
  distinctOn?: InputMaybe<Array<SubcategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<SubcategoriesOrderBy>>;
  where?: InputMaybe<SubcategoriesBoolExp>;
};

export type Subscription_RootSubcategoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<SubcategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<SubcategoriesOrderBy>>;
  where?: InputMaybe<SubcategoriesBoolExp>;
};

export type Subscription_RootSubcategoriesByPkArgs = {
  subcategoryId: Scalars["bigint"]["input"];
};

export type Subscription_RootSubcategoriesStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<SubcategoriesStreamCursorInput>>;
  where?: InputMaybe<SubcategoriesBoolExp>;
};

export type Subscription_RootUserGroupsArgs = {
  distinctOn?: InputMaybe<Array<UserGroupsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserGroupsOrderBy>>;
  where?: InputMaybe<UserGroupsBoolExp>;
};

export type Subscription_RootUserGroupsAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserGroupsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserGroupsOrderBy>>;
  where?: InputMaybe<UserGroupsBoolExp>;
};

export type Subscription_RootUserGroupsByPkArgs = {
  groupId: Scalars["bigint"]["input"];
  userId: Scalars["bigint"]["input"];
};

export type Subscription_RootUserGroupsStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<UserGroupsStreamCursorInput>>;
  where?: InputMaybe<UserGroupsBoolExp>;
};

export type Subscription_RootUserLevelArgs = {
  distinctOn?: InputMaybe<Array<UserLevelSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserLevelOrderBy>>;
  where?: InputMaybe<UserLevelBoolExp>;
};

export type Subscription_RootUserLevelAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserLevelSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserLevelOrderBy>>;
  where?: InputMaybe<UserLevelBoolExp>;
};

export type Subscription_RootUserLevelByPkArgs = {
  levelId: Scalars["bigint"]["input"];
  userId: Scalars["bigint"]["input"];
};

export type Subscription_RootUserLevelStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<UserLevelStreamCursorInput>>;
  where?: InputMaybe<UserLevelBoolExp>;
};

export type Subscription_RootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type Subscription_RootUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type Subscription_RootUsersByPkArgs = {
  userId: Scalars["bigint"]["input"];
};

export type Subscription_RootUsersStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<UsersStreamCursorInput>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type Subscription_RootWeekdaysArgs = {
  distinctOn?: InputMaybe<Array<WeekdaysSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<WeekdaysOrderBy>>;
  where?: InputMaybe<WeekdaysBoolExp>;
};

export type Subscription_RootWeekdaysAggregateArgs = {
  distinctOn?: InputMaybe<Array<WeekdaysSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<WeekdaysOrderBy>>;
  where?: InputMaybe<WeekdaysBoolExp>;
};

export type Subscription_RootWeekdaysByPkArgs = {
  weekdayId: Scalars["bigint"]["input"];
};

export type Subscription_RootWeekdaysStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<WeekdaysStreamCursorInput>>;
  where?: InputMaybe<WeekdaysBoolExp>;
};

export type UserGroupsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<UserGroupsSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<UserGroupsBoolExp>;
  predicate: IntComparisonExp;
};

export type UserLevelAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<UserLevelSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<UserLevelBoolExp>;
  predicate: IntComparisonExp;
};

export type UsersAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<UsersBoolExp>;
  predicate: IntComparisonExp;
};
