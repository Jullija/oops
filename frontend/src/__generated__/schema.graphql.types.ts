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
  float8: { input: string; output: string };
  timestamp: { input: string; output: string };
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

export type ChestAward_Kotlin = {
  __typename?: "ChestAward_kotlin";
  awardId?: Maybe<Scalars["Int"]["output"]>;
  bonus?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type CreateBonusOutput = {
  __typename?: "CreateBonusOutput";
  award: ChestAward_Kotlin;
  bonusId?: Maybe<Scalars["Int"]["output"]>;
  points: Points_Kotlin;
  subcategory: Subcategories_Kotlin;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type Points_Kotlin = {
  __typename?: "Points_kotlin";
  fromWho?: Maybe<User_Kotlin>;
  howMany?: Maybe<Scalars["Int"]["output"]>;
  pointsId?: Maybe<Scalars["Int"]["output"]>;
  subcategory?: Maybe<Subcategories_Kotlin>;
  userId?: Maybe<User_Kotlin>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
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

export type Subcategories_Kotlin = {
  __typename?: "Subcategories_kotlin";
  categoryId?: Maybe<Scalars["Int"]["output"]>;
  subcategoryId?: Maybe<Scalars["Int"]["output"]>;
  subcategoryName?: Maybe<Scalars["String"]["output"]>;
};

export type User_Kotlin = {
  __typename?: "User_kotlin";
  nick: Scalars["String"]["output"];
  role: Scalars["String"]["output"];
  userId: Scalars["Int"]["output"];
};

export type _Service = {
  __typename?: "_Service";
  sdl: Scalars["String"]["output"];
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["bigint"]["input"]>;
  _gt?: InputMaybe<Scalars["bigint"]["input"]>;
  _gte?: InputMaybe<Scalars["bigint"]["input"]>;
  _in?: InputMaybe<Array<Scalars["bigint"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["bigint"]["input"]>;
  _lte?: InputMaybe<Scalars["bigint"]["input"]>;
  _neq?: InputMaybe<Scalars["bigint"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["bigint"]["input"]>>;
};

/** columns and relationships of "bonuses" */
export type Bonuses = {
  __typename?: "bonuses";
  award_id: Scalars["bigint"]["output"];
  bonus_id: Scalars["bigint"]["output"];
  /** An object relationship */
  chest_award: Chest_Award;
  /** An object relationship */
  point: Points;
  points_id: Scalars["bigint"]["output"];
  /** An object relationship */
  subcategory: Subcategories;
  subcategory_id: Scalars["bigint"]["output"];
};

/** aggregated selection of "bonuses" */
export type Bonuses_Aggregate = {
  __typename?: "bonuses_aggregate";
  aggregate?: Maybe<Bonuses_Aggregate_Fields>;
  nodes: Array<Bonuses>;
};

export type Bonuses_Aggregate_Bool_Exp = {
  count?: InputMaybe<Bonuses_Aggregate_Bool_Exp_Count>;
};

export type Bonuses_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Bonuses_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Bonuses_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "bonuses" */
export type Bonuses_Aggregate_Fields = {
  __typename?: "bonuses_aggregate_fields";
  avg?: Maybe<Bonuses_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Bonuses_Max_Fields>;
  min?: Maybe<Bonuses_Min_Fields>;
  stddev?: Maybe<Bonuses_Stddev_Fields>;
  stddev_pop?: Maybe<Bonuses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bonuses_Stddev_Samp_Fields>;
  sum?: Maybe<Bonuses_Sum_Fields>;
  var_pop?: Maybe<Bonuses_Var_Pop_Fields>;
  var_samp?: Maybe<Bonuses_Var_Samp_Fields>;
  variance?: Maybe<Bonuses_Variance_Fields>;
};

/** aggregate fields of "bonuses" */
export type Bonuses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bonuses_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "bonuses" */
export type Bonuses_Aggregate_Order_By = {
  avg?: InputMaybe<Bonuses_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bonuses_Max_Order_By>;
  min?: InputMaybe<Bonuses_Min_Order_By>;
  stddev?: InputMaybe<Bonuses_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bonuses_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bonuses_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bonuses_Sum_Order_By>;
  var_pop?: InputMaybe<Bonuses_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bonuses_Var_Samp_Order_By>;
  variance?: InputMaybe<Bonuses_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "bonuses" */
export type Bonuses_Arr_Rel_Insert_Input = {
  data: Array<Bonuses_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Bonuses_On_Conflict>;
};

/** aggregate avg on columns */
export type Bonuses_Avg_Fields = {
  __typename?: "bonuses_avg_fields";
  award_id?: Maybe<Scalars["Float"]["output"]>;
  bonus_id?: Maybe<Scalars["Float"]["output"]>;
  points_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "bonuses" */
export type Bonuses_Avg_Order_By = {
  award_id?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  points_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "bonuses". All fields are combined with a logical 'AND'. */
export type Bonuses_Bool_Exp = {
  _and?: InputMaybe<Array<Bonuses_Bool_Exp>>;
  _not?: InputMaybe<Bonuses_Bool_Exp>;
  _or?: InputMaybe<Array<Bonuses_Bool_Exp>>;
  award_id?: InputMaybe<Bigint_Comparison_Exp>;
  bonus_id?: InputMaybe<Bigint_Comparison_Exp>;
  chest_award?: InputMaybe<Chest_Award_Bool_Exp>;
  point?: InputMaybe<Points_Bool_Exp>;
  points_id?: InputMaybe<Bigint_Comparison_Exp>;
  subcategory?: InputMaybe<Subcategories_Bool_Exp>;
  subcategory_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "bonuses" */
export enum Bonuses_Constraint {
  /** unique or primary key constraint on columns "bonus_id" */
  BonusesPkey = "bonuses_pkey",
}

/** input type for incrementing numeric columns in table "bonuses" */
export type Bonuses_Inc_Input = {
  award_id?: InputMaybe<Scalars["bigint"]["input"]>;
  bonus_id?: InputMaybe<Scalars["bigint"]["input"]>;
  points_id?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategory_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "bonuses" */
export type Bonuses_Insert_Input = {
  award_id?: InputMaybe<Scalars["bigint"]["input"]>;
  bonus_id?: InputMaybe<Scalars["bigint"]["input"]>;
  chest_award?: InputMaybe<Chest_Award_Obj_Rel_Insert_Input>;
  point?: InputMaybe<Points_Obj_Rel_Insert_Input>;
  points_id?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategory?: InputMaybe<Subcategories_Obj_Rel_Insert_Input>;
  subcategory_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate max on columns */
export type Bonuses_Max_Fields = {
  __typename?: "bonuses_max_fields";
  award_id?: Maybe<Scalars["bigint"]["output"]>;
  bonus_id?: Maybe<Scalars["bigint"]["output"]>;
  points_id?: Maybe<Scalars["bigint"]["output"]>;
  subcategory_id?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by max() on columns of table "bonuses" */
export type Bonuses_Max_Order_By = {
  award_id?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  points_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bonuses_Min_Fields = {
  __typename?: "bonuses_min_fields";
  award_id?: Maybe<Scalars["bigint"]["output"]>;
  bonus_id?: Maybe<Scalars["bigint"]["output"]>;
  points_id?: Maybe<Scalars["bigint"]["output"]>;
  subcategory_id?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by min() on columns of table "bonuses" */
export type Bonuses_Min_Order_By = {
  award_id?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  points_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "bonuses" */
export type Bonuses_Mutation_Response = {
  __typename?: "bonuses_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Bonuses>;
};

/** on_conflict condition type for table "bonuses" */
export type Bonuses_On_Conflict = {
  constraint: Bonuses_Constraint;
  update_columns?: Array<Bonuses_Update_Column>;
  where?: InputMaybe<Bonuses_Bool_Exp>;
};

/** Ordering options when selecting data from "bonuses". */
export type Bonuses_Order_By = {
  award_id?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  chest_award?: InputMaybe<Chest_Award_Order_By>;
  point?: InputMaybe<Points_Order_By>;
  points_id?: InputMaybe<Order_By>;
  subcategory?: InputMaybe<Subcategories_Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: bonuses */
export type Bonuses_Pk_Columns_Input = {
  bonus_id: Scalars["bigint"]["input"];
};

/** select columns of table "bonuses" */
export enum Bonuses_Select_Column {
  /** column name */
  AwardId = "award_id",
  /** column name */
  BonusId = "bonus_id",
  /** column name */
  PointsId = "points_id",
  /** column name */
  SubcategoryId = "subcategory_id",
}

/** input type for updating data in table "bonuses" */
export type Bonuses_Set_Input = {
  award_id?: InputMaybe<Scalars["bigint"]["input"]>;
  bonus_id?: InputMaybe<Scalars["bigint"]["input"]>;
  points_id?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategory_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate stddev on columns */
export type Bonuses_Stddev_Fields = {
  __typename?: "bonuses_stddev_fields";
  award_id?: Maybe<Scalars["Float"]["output"]>;
  bonus_id?: Maybe<Scalars["Float"]["output"]>;
  points_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "bonuses" */
export type Bonuses_Stddev_Order_By = {
  award_id?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  points_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Bonuses_Stddev_Pop_Fields = {
  __typename?: "bonuses_stddev_pop_fields";
  award_id?: Maybe<Scalars["Float"]["output"]>;
  bonus_id?: Maybe<Scalars["Float"]["output"]>;
  points_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "bonuses" */
export type Bonuses_Stddev_Pop_Order_By = {
  award_id?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  points_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Bonuses_Stddev_Samp_Fields = {
  __typename?: "bonuses_stddev_samp_fields";
  award_id?: Maybe<Scalars["Float"]["output"]>;
  bonus_id?: Maybe<Scalars["Float"]["output"]>;
  points_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "bonuses" */
export type Bonuses_Stddev_Samp_Order_By = {
  award_id?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  points_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "bonuses" */
export type Bonuses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bonuses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bonuses_Stream_Cursor_Value_Input = {
  award_id?: InputMaybe<Scalars["bigint"]["input"]>;
  bonus_id?: InputMaybe<Scalars["bigint"]["input"]>;
  points_id?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategory_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate sum on columns */
export type Bonuses_Sum_Fields = {
  __typename?: "bonuses_sum_fields";
  award_id?: Maybe<Scalars["bigint"]["output"]>;
  bonus_id?: Maybe<Scalars["bigint"]["output"]>;
  points_id?: Maybe<Scalars["bigint"]["output"]>;
  subcategory_id?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by sum() on columns of table "bonuses" */
export type Bonuses_Sum_Order_By = {
  award_id?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  points_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
};

/** update columns of table "bonuses" */
export enum Bonuses_Update_Column {
  /** column name */
  AwardId = "award_id",
  /** column name */
  BonusId = "bonus_id",
  /** column name */
  PointsId = "points_id",
  /** column name */
  SubcategoryId = "subcategory_id",
}

export type Bonuses_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Bonuses_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Bonuses_Set_Input>;
  /** filter the rows which have to be updated */
  where: Bonuses_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Bonuses_Var_Pop_Fields = {
  __typename?: "bonuses_var_pop_fields";
  award_id?: Maybe<Scalars["Float"]["output"]>;
  bonus_id?: Maybe<Scalars["Float"]["output"]>;
  points_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "bonuses" */
export type Bonuses_Var_Pop_Order_By = {
  award_id?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  points_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Bonuses_Var_Samp_Fields = {
  __typename?: "bonuses_var_samp_fields";
  award_id?: Maybe<Scalars["Float"]["output"]>;
  bonus_id?: Maybe<Scalars["Float"]["output"]>;
  points_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "bonuses" */
export type Bonuses_Var_Samp_Order_By = {
  award_id?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  points_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Bonuses_Variance_Fields = {
  __typename?: "bonuses_variance_fields";
  award_id?: Maybe<Scalars["Float"]["output"]>;
  bonus_id?: Maybe<Scalars["Float"]["output"]>;
  points_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "bonuses" */
export type Bonuses_Variance_Order_By = {
  award_id?: InputMaybe<Order_By>;
  bonus_id?: InputMaybe<Order_By>;
  points_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: "categories";
  category_id: Scalars["bigint"]["output"];
  category_name: Scalars["String"]["output"];
  /** An array relationship */
  subcategories: Array<Subcategories>;
  /** An aggregate relationship */
  subcategories_aggregate: Subcategories_Aggregate;
};

/** columns and relationships of "categories" */
export type CategoriesSubcategoriesArgs = {
  distinct_on?: InputMaybe<Array<Subcategories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Subcategories_Order_By>>;
  where?: InputMaybe<Subcategories_Bool_Exp>;
};

/** columns and relationships of "categories" */
export type CategoriesSubcategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subcategories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Subcategories_Order_By>>;
  where?: InputMaybe<Subcategories_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: "categories_aggregate";
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: "categories_aggregate_fields";
  avg?: Maybe<Categories_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
  stddev?: Maybe<Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Categories_Sum_Fields>;
  var_pop?: Maybe<Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Categories_Var_Samp_Fields>;
  variance?: Maybe<Categories_Variance_Fields>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: "categories_avg_fields";
  category_id?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  category_id?: InputMaybe<Bigint_Comparison_Exp>;
  category_name?: InputMaybe<String_Comparison_Exp>;
  subcategories?: InputMaybe<Subcategories_Bool_Exp>;
  subcategories_aggregate?: InputMaybe<Subcategories_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint on columns "category_id" */
  CategoriesPkey = "categories_pkey",
}

/** input type for incrementing numeric columns in table "categories" */
export type Categories_Inc_Input = {
  category_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  category_id?: InputMaybe<Scalars["bigint"]["input"]>;
  category_name?: InputMaybe<Scalars["String"]["input"]>;
  subcategories?: InputMaybe<Subcategories_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: "categories_max_fields";
  category_id?: Maybe<Scalars["bigint"]["output"]>;
  category_name?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: "categories_min_fields";
  category_id?: Maybe<Scalars["bigint"]["output"]>;
  category_name?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: "categories_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  category_id?: InputMaybe<Order_By>;
  category_name?: InputMaybe<Order_By>;
  subcategories_aggregate?: InputMaybe<Subcategories_Aggregate_Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  category_id: Scalars["bigint"]["input"];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  CategoryId = "category_id",
  /** column name */
  CategoryName = "category_name",
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  category_id?: InputMaybe<Scalars["bigint"]["input"]>;
  category_name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: "categories_stddev_fields";
  category_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: "categories_stddev_pop_fields";
  category_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: "categories_stddev_samp_fields";
  category_id?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  category_id?: InputMaybe<Scalars["bigint"]["input"]>;
  category_name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: "categories_sum_fields";
  category_id?: Maybe<Scalars["bigint"]["output"]>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  CategoryId = "category_id",
  /** column name */
  CategoryName = "category_name",
}

export type Categories_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Categories_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Categories_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: "categories_var_pop_fields";
  category_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: "categories_var_samp_fields";
  category_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
  __typename?: "categories_variance_fields";
  category_id?: Maybe<Scalars["Float"]["output"]>;
};

/** columns and relationships of "chest_award" */
export type Chest_Award = {
  __typename?: "chest_award";
  award_id: Scalars["bigint"]["output"];
  bonus: Scalars["bigint"]["output"];
  /** An array relationship */
  bonuses: Array<Bonuses>;
  /** An aggregate relationship */
  bonuses_aggregate: Bonuses_Aggregate;
  /** An object relationship */
  chest: Chests;
  chest_id: Scalars["bigint"]["output"];
  name: Scalars["String"]["output"];
};

/** columns and relationships of "chest_award" */
export type Chest_AwardBonusesArgs = {
  distinct_on?: InputMaybe<Array<Bonuses_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Bonuses_Order_By>>;
  where?: InputMaybe<Bonuses_Bool_Exp>;
};

/** columns and relationships of "chest_award" */
export type Chest_AwardBonuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bonuses_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Bonuses_Order_By>>;
  where?: InputMaybe<Bonuses_Bool_Exp>;
};

/** aggregated selection of "chest_award" */
export type Chest_Award_Aggregate = {
  __typename?: "chest_award_aggregate";
  aggregate?: Maybe<Chest_Award_Aggregate_Fields>;
  nodes: Array<Chest_Award>;
};

export type Chest_Award_Aggregate_Bool_Exp = {
  count?: InputMaybe<Chest_Award_Aggregate_Bool_Exp_Count>;
};

export type Chest_Award_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Chest_Award_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Chest_Award_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "chest_award" */
export type Chest_Award_Aggregate_Fields = {
  __typename?: "chest_award_aggregate_fields";
  avg?: Maybe<Chest_Award_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Chest_Award_Max_Fields>;
  min?: Maybe<Chest_Award_Min_Fields>;
  stddev?: Maybe<Chest_Award_Stddev_Fields>;
  stddev_pop?: Maybe<Chest_Award_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Chest_Award_Stddev_Samp_Fields>;
  sum?: Maybe<Chest_Award_Sum_Fields>;
  var_pop?: Maybe<Chest_Award_Var_Pop_Fields>;
  var_samp?: Maybe<Chest_Award_Var_Samp_Fields>;
  variance?: Maybe<Chest_Award_Variance_Fields>;
};

/** aggregate fields of "chest_award" */
export type Chest_Award_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Chest_Award_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "chest_award" */
export type Chest_Award_Aggregate_Order_By = {
  avg?: InputMaybe<Chest_Award_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Chest_Award_Max_Order_By>;
  min?: InputMaybe<Chest_Award_Min_Order_By>;
  stddev?: InputMaybe<Chest_Award_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Chest_Award_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Chest_Award_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Chest_Award_Sum_Order_By>;
  var_pop?: InputMaybe<Chest_Award_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Chest_Award_Var_Samp_Order_By>;
  variance?: InputMaybe<Chest_Award_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "chest_award" */
export type Chest_Award_Arr_Rel_Insert_Input = {
  data: Array<Chest_Award_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Chest_Award_On_Conflict>;
};

/** aggregate avg on columns */
export type Chest_Award_Avg_Fields = {
  __typename?: "chest_award_avg_fields";
  award_id?: Maybe<Scalars["Float"]["output"]>;
  bonus?: Maybe<Scalars["Float"]["output"]>;
  chest_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "chest_award" */
export type Chest_Award_Avg_Order_By = {
  award_id?: InputMaybe<Order_By>;
  bonus?: InputMaybe<Order_By>;
  chest_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "chest_award". All fields are combined with a logical 'AND'. */
export type Chest_Award_Bool_Exp = {
  _and?: InputMaybe<Array<Chest_Award_Bool_Exp>>;
  _not?: InputMaybe<Chest_Award_Bool_Exp>;
  _or?: InputMaybe<Array<Chest_Award_Bool_Exp>>;
  award_id?: InputMaybe<Bigint_Comparison_Exp>;
  bonus?: InputMaybe<Bigint_Comparison_Exp>;
  bonuses?: InputMaybe<Bonuses_Bool_Exp>;
  bonuses_aggregate?: InputMaybe<Bonuses_Aggregate_Bool_Exp>;
  chest?: InputMaybe<Chests_Bool_Exp>;
  chest_id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "chest_award" */
export enum Chest_Award_Constraint {
  /** unique or primary key constraint on columns "award_id" */
  ChestAwardPkey = "chest_award_pkey",
}

/** input type for incrementing numeric columns in table "chest_award" */
export type Chest_Award_Inc_Input = {
  award_id?: InputMaybe<Scalars["bigint"]["input"]>;
  bonus?: InputMaybe<Scalars["bigint"]["input"]>;
  chest_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "chest_award" */
export type Chest_Award_Insert_Input = {
  award_id?: InputMaybe<Scalars["bigint"]["input"]>;
  bonus?: InputMaybe<Scalars["bigint"]["input"]>;
  bonuses?: InputMaybe<Bonuses_Arr_Rel_Insert_Input>;
  chest?: InputMaybe<Chests_Obj_Rel_Insert_Input>;
  chest_id?: InputMaybe<Scalars["bigint"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Chest_Award_Max_Fields = {
  __typename?: "chest_award_max_fields";
  award_id?: Maybe<Scalars["bigint"]["output"]>;
  bonus?: Maybe<Scalars["bigint"]["output"]>;
  chest_id?: Maybe<Scalars["bigint"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "chest_award" */
export type Chest_Award_Max_Order_By = {
  award_id?: InputMaybe<Order_By>;
  bonus?: InputMaybe<Order_By>;
  chest_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Chest_Award_Min_Fields = {
  __typename?: "chest_award_min_fields";
  award_id?: Maybe<Scalars["bigint"]["output"]>;
  bonus?: Maybe<Scalars["bigint"]["output"]>;
  chest_id?: Maybe<Scalars["bigint"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "chest_award" */
export type Chest_Award_Min_Order_By = {
  award_id?: InputMaybe<Order_By>;
  bonus?: InputMaybe<Order_By>;
  chest_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "chest_award" */
export type Chest_Award_Mutation_Response = {
  __typename?: "chest_award_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Chest_Award>;
};

/** input type for inserting object relation for remote table "chest_award" */
export type Chest_Award_Obj_Rel_Insert_Input = {
  data: Chest_Award_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Chest_Award_On_Conflict>;
};

/** on_conflict condition type for table "chest_award" */
export type Chest_Award_On_Conflict = {
  constraint: Chest_Award_Constraint;
  update_columns?: Array<Chest_Award_Update_Column>;
  where?: InputMaybe<Chest_Award_Bool_Exp>;
};

/** Ordering options when selecting data from "chest_award". */
export type Chest_Award_Order_By = {
  award_id?: InputMaybe<Order_By>;
  bonus?: InputMaybe<Order_By>;
  bonuses_aggregate?: InputMaybe<Bonuses_Aggregate_Order_By>;
  chest?: InputMaybe<Chests_Order_By>;
  chest_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: chest_award */
export type Chest_Award_Pk_Columns_Input = {
  award_id: Scalars["bigint"]["input"];
};

/** select columns of table "chest_award" */
export enum Chest_Award_Select_Column {
  /** column name */
  AwardId = "award_id",
  /** column name */
  Bonus = "bonus",
  /** column name */
  ChestId = "chest_id",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "chest_award" */
export type Chest_Award_Set_Input = {
  award_id?: InputMaybe<Scalars["bigint"]["input"]>;
  bonus?: InputMaybe<Scalars["bigint"]["input"]>;
  chest_id?: InputMaybe<Scalars["bigint"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Chest_Award_Stddev_Fields = {
  __typename?: "chest_award_stddev_fields";
  award_id?: Maybe<Scalars["Float"]["output"]>;
  bonus?: Maybe<Scalars["Float"]["output"]>;
  chest_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "chest_award" */
export type Chest_Award_Stddev_Order_By = {
  award_id?: InputMaybe<Order_By>;
  bonus?: InputMaybe<Order_By>;
  chest_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Chest_Award_Stddev_Pop_Fields = {
  __typename?: "chest_award_stddev_pop_fields";
  award_id?: Maybe<Scalars["Float"]["output"]>;
  bonus?: Maybe<Scalars["Float"]["output"]>;
  chest_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "chest_award" */
export type Chest_Award_Stddev_Pop_Order_By = {
  award_id?: InputMaybe<Order_By>;
  bonus?: InputMaybe<Order_By>;
  chest_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Chest_Award_Stddev_Samp_Fields = {
  __typename?: "chest_award_stddev_samp_fields";
  award_id?: Maybe<Scalars["Float"]["output"]>;
  bonus?: Maybe<Scalars["Float"]["output"]>;
  chest_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "chest_award" */
export type Chest_Award_Stddev_Samp_Order_By = {
  award_id?: InputMaybe<Order_By>;
  bonus?: InputMaybe<Order_By>;
  chest_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "chest_award" */
export type Chest_Award_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Chest_Award_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Chest_Award_Stream_Cursor_Value_Input = {
  award_id?: InputMaybe<Scalars["bigint"]["input"]>;
  bonus?: InputMaybe<Scalars["bigint"]["input"]>;
  chest_id?: InputMaybe<Scalars["bigint"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Chest_Award_Sum_Fields = {
  __typename?: "chest_award_sum_fields";
  award_id?: Maybe<Scalars["bigint"]["output"]>;
  bonus?: Maybe<Scalars["bigint"]["output"]>;
  chest_id?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by sum() on columns of table "chest_award" */
export type Chest_Award_Sum_Order_By = {
  award_id?: InputMaybe<Order_By>;
  bonus?: InputMaybe<Order_By>;
  chest_id?: InputMaybe<Order_By>;
};

/** update columns of table "chest_award" */
export enum Chest_Award_Update_Column {
  /** column name */
  AwardId = "award_id",
  /** column name */
  Bonus = "bonus",
  /** column name */
  ChestId = "chest_id",
  /** column name */
  Name = "name",
}

export type Chest_Award_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Chest_Award_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Chest_Award_Set_Input>;
  /** filter the rows which have to be updated */
  where: Chest_Award_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Chest_Award_Var_Pop_Fields = {
  __typename?: "chest_award_var_pop_fields";
  award_id?: Maybe<Scalars["Float"]["output"]>;
  bonus?: Maybe<Scalars["Float"]["output"]>;
  chest_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "chest_award" */
export type Chest_Award_Var_Pop_Order_By = {
  award_id?: InputMaybe<Order_By>;
  bonus?: InputMaybe<Order_By>;
  chest_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Chest_Award_Var_Samp_Fields = {
  __typename?: "chest_award_var_samp_fields";
  award_id?: Maybe<Scalars["Float"]["output"]>;
  bonus?: Maybe<Scalars["Float"]["output"]>;
  chest_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "chest_award" */
export type Chest_Award_Var_Samp_Order_By = {
  award_id?: InputMaybe<Order_By>;
  bonus?: InputMaybe<Order_By>;
  chest_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Chest_Award_Variance_Fields = {
  __typename?: "chest_award_variance_fields";
  award_id?: Maybe<Scalars["Float"]["output"]>;
  bonus?: Maybe<Scalars["Float"]["output"]>;
  chest_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "chest_award" */
export type Chest_Award_Variance_Order_By = {
  award_id?: InputMaybe<Order_By>;
  bonus?: InputMaybe<Order_By>;
  chest_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "chest_history" */
export type Chest_History = {
  __typename?: "chest_history";
  /** An object relationship */
  chest: Chests;
  chest_history_id: Scalars["bigint"]["output"];
  chest_id: Scalars["bigint"]["output"];
  /** An object relationship */
  subcategory: Subcategories;
  subcategory_id: Scalars["bigint"]["output"];
  /** An object relationship */
  user: Users;
  user_id: Scalars["bigint"]["output"];
};

/** aggregated selection of "chest_history" */
export type Chest_History_Aggregate = {
  __typename?: "chest_history_aggregate";
  aggregate?: Maybe<Chest_History_Aggregate_Fields>;
  nodes: Array<Chest_History>;
};

export type Chest_History_Aggregate_Bool_Exp = {
  count?: InputMaybe<Chest_History_Aggregate_Bool_Exp_Count>;
};

export type Chest_History_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Chest_History_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Chest_History_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "chest_history" */
export type Chest_History_Aggregate_Fields = {
  __typename?: "chest_history_aggregate_fields";
  avg?: Maybe<Chest_History_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Chest_History_Max_Fields>;
  min?: Maybe<Chest_History_Min_Fields>;
  stddev?: Maybe<Chest_History_Stddev_Fields>;
  stddev_pop?: Maybe<Chest_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Chest_History_Stddev_Samp_Fields>;
  sum?: Maybe<Chest_History_Sum_Fields>;
  var_pop?: Maybe<Chest_History_Var_Pop_Fields>;
  var_samp?: Maybe<Chest_History_Var_Samp_Fields>;
  variance?: Maybe<Chest_History_Variance_Fields>;
};

/** aggregate fields of "chest_history" */
export type Chest_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Chest_History_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "chest_history" */
export type Chest_History_Aggregate_Order_By = {
  avg?: InputMaybe<Chest_History_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Chest_History_Max_Order_By>;
  min?: InputMaybe<Chest_History_Min_Order_By>;
  stddev?: InputMaybe<Chest_History_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Chest_History_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Chest_History_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Chest_History_Sum_Order_By>;
  var_pop?: InputMaybe<Chest_History_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Chest_History_Var_Samp_Order_By>;
  variance?: InputMaybe<Chest_History_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "chest_history" */
export type Chest_History_Arr_Rel_Insert_Input = {
  data: Array<Chest_History_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Chest_History_On_Conflict>;
};

/** aggregate avg on columns */
export type Chest_History_Avg_Fields = {
  __typename?: "chest_history_avg_fields";
  chest_history_id?: Maybe<Scalars["Float"]["output"]>;
  chest_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "chest_history" */
export type Chest_History_Avg_Order_By = {
  chest_history_id?: InputMaybe<Order_By>;
  chest_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "chest_history". All fields are combined with a logical 'AND'. */
export type Chest_History_Bool_Exp = {
  _and?: InputMaybe<Array<Chest_History_Bool_Exp>>;
  _not?: InputMaybe<Chest_History_Bool_Exp>;
  _or?: InputMaybe<Array<Chest_History_Bool_Exp>>;
  chest?: InputMaybe<Chests_Bool_Exp>;
  chest_history_id?: InputMaybe<Bigint_Comparison_Exp>;
  chest_id?: InputMaybe<Bigint_Comparison_Exp>;
  subcategory?: InputMaybe<Subcategories_Bool_Exp>;
  subcategory_id?: InputMaybe<Bigint_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "chest_history" */
export enum Chest_History_Constraint {
  /** unique or primary key constraint on columns "chest_history_id" */
  ChestHistoryPkey = "chest_history_pkey",
}

/** input type for incrementing numeric columns in table "chest_history" */
export type Chest_History_Inc_Input = {
  chest_history_id?: InputMaybe<Scalars["bigint"]["input"]>;
  chest_id?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategory_id?: InputMaybe<Scalars["bigint"]["input"]>;
  user_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "chest_history" */
export type Chest_History_Insert_Input = {
  chest?: InputMaybe<Chests_Obj_Rel_Insert_Input>;
  chest_history_id?: InputMaybe<Scalars["bigint"]["input"]>;
  chest_id?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategory?: InputMaybe<Subcategories_Obj_Rel_Insert_Input>;
  subcategory_id?: InputMaybe<Scalars["bigint"]["input"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate max on columns */
export type Chest_History_Max_Fields = {
  __typename?: "chest_history_max_fields";
  chest_history_id?: Maybe<Scalars["bigint"]["output"]>;
  chest_id?: Maybe<Scalars["bigint"]["output"]>;
  subcategory_id?: Maybe<Scalars["bigint"]["output"]>;
  user_id?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by max() on columns of table "chest_history" */
export type Chest_History_Max_Order_By = {
  chest_history_id?: InputMaybe<Order_By>;
  chest_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Chest_History_Min_Fields = {
  __typename?: "chest_history_min_fields";
  chest_history_id?: Maybe<Scalars["bigint"]["output"]>;
  chest_id?: Maybe<Scalars["bigint"]["output"]>;
  subcategory_id?: Maybe<Scalars["bigint"]["output"]>;
  user_id?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by min() on columns of table "chest_history" */
export type Chest_History_Min_Order_By = {
  chest_history_id?: InputMaybe<Order_By>;
  chest_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "chest_history" */
export type Chest_History_Mutation_Response = {
  __typename?: "chest_history_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Chest_History>;
};

/** on_conflict condition type for table "chest_history" */
export type Chest_History_On_Conflict = {
  constraint: Chest_History_Constraint;
  update_columns?: Array<Chest_History_Update_Column>;
  where?: InputMaybe<Chest_History_Bool_Exp>;
};

/** Ordering options when selecting data from "chest_history". */
export type Chest_History_Order_By = {
  chest?: InputMaybe<Chests_Order_By>;
  chest_history_id?: InputMaybe<Order_By>;
  chest_id?: InputMaybe<Order_By>;
  subcategory?: InputMaybe<Subcategories_Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: chest_history */
export type Chest_History_Pk_Columns_Input = {
  chest_history_id: Scalars["bigint"]["input"];
};

/** select columns of table "chest_history" */
export enum Chest_History_Select_Column {
  /** column name */
  ChestHistoryId = "chest_history_id",
  /** column name */
  ChestId = "chest_id",
  /** column name */
  SubcategoryId = "subcategory_id",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "chest_history" */
export type Chest_History_Set_Input = {
  chest_history_id?: InputMaybe<Scalars["bigint"]["input"]>;
  chest_id?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategory_id?: InputMaybe<Scalars["bigint"]["input"]>;
  user_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate stddev on columns */
export type Chest_History_Stddev_Fields = {
  __typename?: "chest_history_stddev_fields";
  chest_history_id?: Maybe<Scalars["Float"]["output"]>;
  chest_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "chest_history" */
export type Chest_History_Stddev_Order_By = {
  chest_history_id?: InputMaybe<Order_By>;
  chest_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Chest_History_Stddev_Pop_Fields = {
  __typename?: "chest_history_stddev_pop_fields";
  chest_history_id?: Maybe<Scalars["Float"]["output"]>;
  chest_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "chest_history" */
export type Chest_History_Stddev_Pop_Order_By = {
  chest_history_id?: InputMaybe<Order_By>;
  chest_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Chest_History_Stddev_Samp_Fields = {
  __typename?: "chest_history_stddev_samp_fields";
  chest_history_id?: Maybe<Scalars["Float"]["output"]>;
  chest_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "chest_history" */
export type Chest_History_Stddev_Samp_Order_By = {
  chest_history_id?: InputMaybe<Order_By>;
  chest_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "chest_history" */
export type Chest_History_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Chest_History_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Chest_History_Stream_Cursor_Value_Input = {
  chest_history_id?: InputMaybe<Scalars["bigint"]["input"]>;
  chest_id?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategory_id?: InputMaybe<Scalars["bigint"]["input"]>;
  user_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate sum on columns */
export type Chest_History_Sum_Fields = {
  __typename?: "chest_history_sum_fields";
  chest_history_id?: Maybe<Scalars["bigint"]["output"]>;
  chest_id?: Maybe<Scalars["bigint"]["output"]>;
  subcategory_id?: Maybe<Scalars["bigint"]["output"]>;
  user_id?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by sum() on columns of table "chest_history" */
export type Chest_History_Sum_Order_By = {
  chest_history_id?: InputMaybe<Order_By>;
  chest_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "chest_history" */
export enum Chest_History_Update_Column {
  /** column name */
  ChestHistoryId = "chest_history_id",
  /** column name */
  ChestId = "chest_id",
  /** column name */
  SubcategoryId = "subcategory_id",
  /** column name */
  UserId = "user_id",
}

export type Chest_History_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Chest_History_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Chest_History_Set_Input>;
  /** filter the rows which have to be updated */
  where: Chest_History_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Chest_History_Var_Pop_Fields = {
  __typename?: "chest_history_var_pop_fields";
  chest_history_id?: Maybe<Scalars["Float"]["output"]>;
  chest_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "chest_history" */
export type Chest_History_Var_Pop_Order_By = {
  chest_history_id?: InputMaybe<Order_By>;
  chest_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Chest_History_Var_Samp_Fields = {
  __typename?: "chest_history_var_samp_fields";
  chest_history_id?: Maybe<Scalars["Float"]["output"]>;
  chest_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "chest_history" */
export type Chest_History_Var_Samp_Order_By = {
  chest_history_id?: InputMaybe<Order_By>;
  chest_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Chest_History_Variance_Fields = {
  __typename?: "chest_history_variance_fields";
  chest_history_id?: Maybe<Scalars["Float"]["output"]>;
  chest_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "chest_history" */
export type Chest_History_Variance_Order_By = {
  chest_history_id?: InputMaybe<Order_By>;
  chest_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "chests" */
export type Chests = {
  __typename?: "chests";
  /** An array relationship */
  chest_awards: Array<Chest_Award>;
  /** An aggregate relationship */
  chest_awards_aggregate: Chest_Award_Aggregate;
  /** An array relationship */
  chest_histories: Array<Chest_History>;
  /** An aggregate relationship */
  chest_histories_aggregate: Chest_History_Aggregate;
  chest_id: Scalars["bigint"]["output"];
  type: Scalars["String"]["output"];
};

/** columns and relationships of "chests" */
export type ChestsChest_AwardsArgs = {
  distinct_on?: InputMaybe<Array<Chest_Award_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chest_Award_Order_By>>;
  where?: InputMaybe<Chest_Award_Bool_Exp>;
};

/** columns and relationships of "chests" */
export type ChestsChest_Awards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chest_Award_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chest_Award_Order_By>>;
  where?: InputMaybe<Chest_Award_Bool_Exp>;
};

/** columns and relationships of "chests" */
export type ChestsChest_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Chest_History_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chest_History_Order_By>>;
  where?: InputMaybe<Chest_History_Bool_Exp>;
};

/** columns and relationships of "chests" */
export type ChestsChest_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chest_History_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chest_History_Order_By>>;
  where?: InputMaybe<Chest_History_Bool_Exp>;
};

/** aggregated selection of "chests" */
export type Chests_Aggregate = {
  __typename?: "chests_aggregate";
  aggregate?: Maybe<Chests_Aggregate_Fields>;
  nodes: Array<Chests>;
};

/** aggregate fields of "chests" */
export type Chests_Aggregate_Fields = {
  __typename?: "chests_aggregate_fields";
  avg?: Maybe<Chests_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Chests_Max_Fields>;
  min?: Maybe<Chests_Min_Fields>;
  stddev?: Maybe<Chests_Stddev_Fields>;
  stddev_pop?: Maybe<Chests_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Chests_Stddev_Samp_Fields>;
  sum?: Maybe<Chests_Sum_Fields>;
  var_pop?: Maybe<Chests_Var_Pop_Fields>;
  var_samp?: Maybe<Chests_Var_Samp_Fields>;
  variance?: Maybe<Chests_Variance_Fields>;
};

/** aggregate fields of "chests" */
export type Chests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Chests_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Chests_Avg_Fields = {
  __typename?: "chests_avg_fields";
  chest_id?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "chests". All fields are combined with a logical 'AND'. */
export type Chests_Bool_Exp = {
  _and?: InputMaybe<Array<Chests_Bool_Exp>>;
  _not?: InputMaybe<Chests_Bool_Exp>;
  _or?: InputMaybe<Array<Chests_Bool_Exp>>;
  chest_awards?: InputMaybe<Chest_Award_Bool_Exp>;
  chest_awards_aggregate?: InputMaybe<Chest_Award_Aggregate_Bool_Exp>;
  chest_histories?: InputMaybe<Chest_History_Bool_Exp>;
  chest_histories_aggregate?: InputMaybe<Chest_History_Aggregate_Bool_Exp>;
  chest_id?: InputMaybe<Bigint_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "chests" */
export enum Chests_Constraint {
  /** unique or primary key constraint on columns "chest_id" */
  ChestsPkey = "chests_pkey",
}

/** input type for incrementing numeric columns in table "chests" */
export type Chests_Inc_Input = {
  chest_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "chests" */
export type Chests_Insert_Input = {
  chest_awards?: InputMaybe<Chest_Award_Arr_Rel_Insert_Input>;
  chest_histories?: InputMaybe<Chest_History_Arr_Rel_Insert_Input>;
  chest_id?: InputMaybe<Scalars["bigint"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Chests_Max_Fields = {
  __typename?: "chests_max_fields";
  chest_id?: Maybe<Scalars["bigint"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Chests_Min_Fields = {
  __typename?: "chests_min_fields";
  chest_id?: Maybe<Scalars["bigint"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "chests" */
export type Chests_Mutation_Response = {
  __typename?: "chests_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Chests>;
};

/** input type for inserting object relation for remote table "chests" */
export type Chests_Obj_Rel_Insert_Input = {
  data: Chests_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Chests_On_Conflict>;
};

/** on_conflict condition type for table "chests" */
export type Chests_On_Conflict = {
  constraint: Chests_Constraint;
  update_columns?: Array<Chests_Update_Column>;
  where?: InputMaybe<Chests_Bool_Exp>;
};

/** Ordering options when selecting data from "chests". */
export type Chests_Order_By = {
  chest_awards_aggregate?: InputMaybe<Chest_Award_Aggregate_Order_By>;
  chest_histories_aggregate?: InputMaybe<Chest_History_Aggregate_Order_By>;
  chest_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: chests */
export type Chests_Pk_Columns_Input = {
  chest_id: Scalars["bigint"]["input"];
};

/** select columns of table "chests" */
export enum Chests_Select_Column {
  /** column name */
  ChestId = "chest_id",
  /** column name */
  Type = "type",
}

/** input type for updating data in table "chests" */
export type Chests_Set_Input = {
  chest_id?: InputMaybe<Scalars["bigint"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Chests_Stddev_Fields = {
  __typename?: "chests_stddev_fields";
  chest_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Chests_Stddev_Pop_Fields = {
  __typename?: "chests_stddev_pop_fields";
  chest_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Chests_Stddev_Samp_Fields = {
  __typename?: "chests_stddev_samp_fields";
  chest_id?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "chests" */
export type Chests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Chests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Chests_Stream_Cursor_Value_Input = {
  chest_id?: InputMaybe<Scalars["bigint"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Chests_Sum_Fields = {
  __typename?: "chests_sum_fields";
  chest_id?: Maybe<Scalars["bigint"]["output"]>;
};

/** update columns of table "chests" */
export enum Chests_Update_Column {
  /** column name */
  ChestId = "chest_id",
  /** column name */
  Type = "type",
}

export type Chests_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Chests_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Chests_Set_Input>;
  /** filter the rows which have to be updated */
  where: Chests_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Chests_Var_Pop_Fields = {
  __typename?: "chests_var_pop_fields";
  chest_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Chests_Var_Samp_Fields = {
  __typename?: "chests_var_samp_fields";
  chest_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Chests_Variance_Fields = {
  __typename?: "chests_variance_fields";
  chest_id?: Maybe<Scalars["Float"]["output"]>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["float8"]["input"]>;
  _gt?: InputMaybe<Scalars["float8"]["input"]>;
  _gte?: InputMaybe<Scalars["float8"]["input"]>;
  _in?: InputMaybe<Array<Scalars["float8"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["float8"]["input"]>;
  _lte?: InputMaybe<Scalars["float8"]["input"]>;
  _neq?: InputMaybe<Scalars["float8"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["float8"]["input"]>>;
};

/** columns and relationships of "flyway_schema_history" */
export type Flyway_Schema_History = {
  __typename?: "flyway_schema_history";
  checksum?: Maybe<Scalars["Int"]["output"]>;
  description: Scalars["String"]["output"];
  execution_time: Scalars["Int"]["output"];
  installed_by: Scalars["String"]["output"];
  installed_on: Scalars["timestamp"]["output"];
  installed_rank: Scalars["Int"]["output"];
  script: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
  type: Scalars["String"]["output"];
  version?: Maybe<Scalars["String"]["output"]>;
};

/** aggregated selection of "flyway_schema_history" */
export type Flyway_Schema_History_Aggregate = {
  __typename?: "flyway_schema_history_aggregate";
  aggregate?: Maybe<Flyway_Schema_History_Aggregate_Fields>;
  nodes: Array<Flyway_Schema_History>;
};

/** aggregate fields of "flyway_schema_history" */
export type Flyway_Schema_History_Aggregate_Fields = {
  __typename?: "flyway_schema_history_aggregate_fields";
  avg?: Maybe<Flyway_Schema_History_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Flyway_Schema_History_Max_Fields>;
  min?: Maybe<Flyway_Schema_History_Min_Fields>;
  stddev?: Maybe<Flyway_Schema_History_Stddev_Fields>;
  stddev_pop?: Maybe<Flyway_Schema_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Flyway_Schema_History_Stddev_Samp_Fields>;
  sum?: Maybe<Flyway_Schema_History_Sum_Fields>;
  var_pop?: Maybe<Flyway_Schema_History_Var_Pop_Fields>;
  var_samp?: Maybe<Flyway_Schema_History_Var_Samp_Fields>;
  variance?: Maybe<Flyway_Schema_History_Variance_Fields>;
};

/** aggregate fields of "flyway_schema_history" */
export type Flyway_Schema_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Flyway_Schema_History_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Flyway_Schema_History_Avg_Fields = {
  __typename?: "flyway_schema_history_avg_fields";
  checksum?: Maybe<Scalars["Float"]["output"]>;
  execution_time?: Maybe<Scalars["Float"]["output"]>;
  installed_rank?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "flyway_schema_history". All fields are combined with a logical 'AND'. */
export type Flyway_Schema_History_Bool_Exp = {
  _and?: InputMaybe<Array<Flyway_Schema_History_Bool_Exp>>;
  _not?: InputMaybe<Flyway_Schema_History_Bool_Exp>;
  _or?: InputMaybe<Array<Flyway_Schema_History_Bool_Exp>>;
  checksum?: InputMaybe<Int_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  execution_time?: InputMaybe<Int_Comparison_Exp>;
  installed_by?: InputMaybe<String_Comparison_Exp>;
  installed_on?: InputMaybe<Timestamp_Comparison_Exp>;
  installed_rank?: InputMaybe<Int_Comparison_Exp>;
  script?: InputMaybe<String_Comparison_Exp>;
  success?: InputMaybe<Boolean_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  version?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "flyway_schema_history" */
export enum Flyway_Schema_History_Constraint {
  /** unique or primary key constraint on columns "installed_rank" */
  FlywaySchemaHistoryPk = "flyway_schema_history_pk",
}

/** input type for incrementing numeric columns in table "flyway_schema_history" */
export type Flyway_Schema_History_Inc_Input = {
  checksum?: InputMaybe<Scalars["Int"]["input"]>;
  execution_time?: InputMaybe<Scalars["Int"]["input"]>;
  installed_rank?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "flyway_schema_history" */
export type Flyway_Schema_History_Insert_Input = {
  checksum?: InputMaybe<Scalars["Int"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  execution_time?: InputMaybe<Scalars["Int"]["input"]>;
  installed_by?: InputMaybe<Scalars["String"]["input"]>;
  installed_on?: InputMaybe<Scalars["timestamp"]["input"]>;
  installed_rank?: InputMaybe<Scalars["Int"]["input"]>;
  script?: InputMaybe<Scalars["String"]["input"]>;
  success?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  version?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Flyway_Schema_History_Max_Fields = {
  __typename?: "flyway_schema_history_max_fields";
  checksum?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  execution_time?: Maybe<Scalars["Int"]["output"]>;
  installed_by?: Maybe<Scalars["String"]["output"]>;
  installed_on?: Maybe<Scalars["timestamp"]["output"]>;
  installed_rank?: Maybe<Scalars["Int"]["output"]>;
  script?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  version?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Flyway_Schema_History_Min_Fields = {
  __typename?: "flyway_schema_history_min_fields";
  checksum?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  execution_time?: Maybe<Scalars["Int"]["output"]>;
  installed_by?: Maybe<Scalars["String"]["output"]>;
  installed_on?: Maybe<Scalars["timestamp"]["output"]>;
  installed_rank?: Maybe<Scalars["Int"]["output"]>;
  script?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  version?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "flyway_schema_history" */
export type Flyway_Schema_History_Mutation_Response = {
  __typename?: "flyway_schema_history_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Flyway_Schema_History>;
};

/** on_conflict condition type for table "flyway_schema_history" */
export type Flyway_Schema_History_On_Conflict = {
  constraint: Flyway_Schema_History_Constraint;
  update_columns?: Array<Flyway_Schema_History_Update_Column>;
  where?: InputMaybe<Flyway_Schema_History_Bool_Exp>;
};

/** Ordering options when selecting data from "flyway_schema_history". */
export type Flyway_Schema_History_Order_By = {
  checksum?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  execution_time?: InputMaybe<Order_By>;
  installed_by?: InputMaybe<Order_By>;
  installed_on?: InputMaybe<Order_By>;
  installed_rank?: InputMaybe<Order_By>;
  script?: InputMaybe<Order_By>;
  success?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** primary key columns input for table: flyway_schema_history */
export type Flyway_Schema_History_Pk_Columns_Input = {
  installed_rank: Scalars["Int"]["input"];
};

/** select columns of table "flyway_schema_history" */
export enum Flyway_Schema_History_Select_Column {
  /** column name */
  Checksum = "checksum",
  /** column name */
  Description = "description",
  /** column name */
  ExecutionTime = "execution_time",
  /** column name */
  InstalledBy = "installed_by",
  /** column name */
  InstalledOn = "installed_on",
  /** column name */
  InstalledRank = "installed_rank",
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
export type Flyway_Schema_History_Set_Input = {
  checksum?: InputMaybe<Scalars["Int"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  execution_time?: InputMaybe<Scalars["Int"]["input"]>;
  installed_by?: InputMaybe<Scalars["String"]["input"]>;
  installed_on?: InputMaybe<Scalars["timestamp"]["input"]>;
  installed_rank?: InputMaybe<Scalars["Int"]["input"]>;
  script?: InputMaybe<Scalars["String"]["input"]>;
  success?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  version?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Flyway_Schema_History_Stddev_Fields = {
  __typename?: "flyway_schema_history_stddev_fields";
  checksum?: Maybe<Scalars["Float"]["output"]>;
  execution_time?: Maybe<Scalars["Float"]["output"]>;
  installed_rank?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Flyway_Schema_History_Stddev_Pop_Fields = {
  __typename?: "flyway_schema_history_stddev_pop_fields";
  checksum?: Maybe<Scalars["Float"]["output"]>;
  execution_time?: Maybe<Scalars["Float"]["output"]>;
  installed_rank?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Flyway_Schema_History_Stddev_Samp_Fields = {
  __typename?: "flyway_schema_history_stddev_samp_fields";
  checksum?: Maybe<Scalars["Float"]["output"]>;
  execution_time?: Maybe<Scalars["Float"]["output"]>;
  installed_rank?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "flyway_schema_history" */
export type Flyway_Schema_History_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Flyway_Schema_History_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Flyway_Schema_History_Stream_Cursor_Value_Input = {
  checksum?: InputMaybe<Scalars["Int"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  execution_time?: InputMaybe<Scalars["Int"]["input"]>;
  installed_by?: InputMaybe<Scalars["String"]["input"]>;
  installed_on?: InputMaybe<Scalars["timestamp"]["input"]>;
  installed_rank?: InputMaybe<Scalars["Int"]["input"]>;
  script?: InputMaybe<Scalars["String"]["input"]>;
  success?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  version?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Flyway_Schema_History_Sum_Fields = {
  __typename?: "flyway_schema_history_sum_fields";
  checksum?: Maybe<Scalars["Int"]["output"]>;
  execution_time?: Maybe<Scalars["Int"]["output"]>;
  installed_rank?: Maybe<Scalars["Int"]["output"]>;
};

/** update columns of table "flyway_schema_history" */
export enum Flyway_Schema_History_Update_Column {
  /** column name */
  Checksum = "checksum",
  /** column name */
  Description = "description",
  /** column name */
  ExecutionTime = "execution_time",
  /** column name */
  InstalledBy = "installed_by",
  /** column name */
  InstalledOn = "installed_on",
  /** column name */
  InstalledRank = "installed_rank",
  /** column name */
  Script = "script",
  /** column name */
  Success = "success",
  /** column name */
  Type = "type",
  /** column name */
  Version = "version",
}

export type Flyway_Schema_History_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Flyway_Schema_History_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Flyway_Schema_History_Set_Input>;
  /** filter the rows which have to be updated */
  where: Flyway_Schema_History_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Flyway_Schema_History_Var_Pop_Fields = {
  __typename?: "flyway_schema_history_var_pop_fields";
  checksum?: Maybe<Scalars["Float"]["output"]>;
  execution_time?: Maybe<Scalars["Float"]["output"]>;
  installed_rank?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Flyway_Schema_History_Var_Samp_Fields = {
  __typename?: "flyway_schema_history_var_samp_fields";
  checksum?: Maybe<Scalars["Float"]["output"]>;
  execution_time?: Maybe<Scalars["Float"]["output"]>;
  installed_rank?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Flyway_Schema_History_Variance_Fields = {
  __typename?: "flyway_schema_history_variance_fields";
  checksum?: Maybe<Scalars["Float"]["output"]>;
  execution_time?: Maybe<Scalars["Float"]["output"]>;
  installed_rank?: Maybe<Scalars["Float"]["output"]>;
};

/** columns and relationships of "groups" */
export type Groups = {
  __typename?: "groups";
  group_name: Scalars["String"]["output"];
  group_year: Scalars["Int"]["output"];
  groups_id: Scalars["bigint"]["output"];
  label?: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  user_groups: Array<User_Groups>;
  /** An aggregate relationship */
  user_groups_aggregate: User_Groups_Aggregate;
};

/** columns and relationships of "groups" */
export type GroupsUser_GroupsArgs = {
  distinct_on?: InputMaybe<Array<User_Groups_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Groups_Order_By>>;
  where?: InputMaybe<User_Groups_Bool_Exp>;
};

/** columns and relationships of "groups" */
export type GroupsUser_Groups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Groups_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Groups_Order_By>>;
  where?: InputMaybe<User_Groups_Bool_Exp>;
};

/** aggregated selection of "groups" */
export type Groups_Aggregate = {
  __typename?: "groups_aggregate";
  aggregate?: Maybe<Groups_Aggregate_Fields>;
  nodes: Array<Groups>;
};

/** aggregate fields of "groups" */
export type Groups_Aggregate_Fields = {
  __typename?: "groups_aggregate_fields";
  avg?: Maybe<Groups_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Groups_Max_Fields>;
  min?: Maybe<Groups_Min_Fields>;
  stddev?: Maybe<Groups_Stddev_Fields>;
  stddev_pop?: Maybe<Groups_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Groups_Stddev_Samp_Fields>;
  sum?: Maybe<Groups_Sum_Fields>;
  var_pop?: Maybe<Groups_Var_Pop_Fields>;
  var_samp?: Maybe<Groups_Var_Samp_Fields>;
  variance?: Maybe<Groups_Variance_Fields>;
};

/** aggregate fields of "groups" */
export type Groups_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Groups_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Groups_Avg_Fields = {
  __typename?: "groups_avg_fields";
  group_year?: Maybe<Scalars["Float"]["output"]>;
  groups_id?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "groups". All fields are combined with a logical 'AND'. */
export type Groups_Bool_Exp = {
  _and?: InputMaybe<Array<Groups_Bool_Exp>>;
  _not?: InputMaybe<Groups_Bool_Exp>;
  _or?: InputMaybe<Array<Groups_Bool_Exp>>;
  group_name?: InputMaybe<String_Comparison_Exp>;
  group_year?: InputMaybe<Int_Comparison_Exp>;
  groups_id?: InputMaybe<Bigint_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  user_groups?: InputMaybe<User_Groups_Bool_Exp>;
  user_groups_aggregate?: InputMaybe<User_Groups_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "groups" */
export enum Groups_Constraint {
  /** unique or primary key constraint on columns "groups_id" */
  GroupsPkey = "groups_pkey",
}

/** input type for incrementing numeric columns in table "groups" */
export type Groups_Inc_Input = {
  group_year?: InputMaybe<Scalars["Int"]["input"]>;
  groups_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "groups" */
export type Groups_Insert_Input = {
  group_name?: InputMaybe<Scalars["String"]["input"]>;
  group_year?: InputMaybe<Scalars["Int"]["input"]>;
  groups_id?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  user_groups?: InputMaybe<User_Groups_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Groups_Max_Fields = {
  __typename?: "groups_max_fields";
  group_name?: Maybe<Scalars["String"]["output"]>;
  group_year?: Maybe<Scalars["Int"]["output"]>;
  groups_id?: Maybe<Scalars["bigint"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Groups_Min_Fields = {
  __typename?: "groups_min_fields";
  group_name?: Maybe<Scalars["String"]["output"]>;
  group_year?: Maybe<Scalars["Int"]["output"]>;
  groups_id?: Maybe<Scalars["bigint"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "groups" */
export type Groups_Mutation_Response = {
  __typename?: "groups_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Groups>;
};

/** input type for inserting object relation for remote table "groups" */
export type Groups_Obj_Rel_Insert_Input = {
  data: Groups_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Groups_On_Conflict>;
};

/** on_conflict condition type for table "groups" */
export type Groups_On_Conflict = {
  constraint: Groups_Constraint;
  update_columns?: Array<Groups_Update_Column>;
  where?: InputMaybe<Groups_Bool_Exp>;
};

/** Ordering options when selecting data from "groups". */
export type Groups_Order_By = {
  group_name?: InputMaybe<Order_By>;
  group_year?: InputMaybe<Order_By>;
  groups_id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  user_groups_aggregate?: InputMaybe<User_Groups_Aggregate_Order_By>;
};

/** primary key columns input for table: groups */
export type Groups_Pk_Columns_Input = {
  groups_id: Scalars["bigint"]["input"];
};

/** select columns of table "groups" */
export enum Groups_Select_Column {
  /** column name */
  GroupName = "group_name",
  /** column name */
  GroupYear = "group_year",
  /** column name */
  GroupsId = "groups_id",
  /** column name */
  Label = "label",
}

/** input type for updating data in table "groups" */
export type Groups_Set_Input = {
  group_name?: InputMaybe<Scalars["String"]["input"]>;
  group_year?: InputMaybe<Scalars["Int"]["input"]>;
  groups_id?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Groups_Stddev_Fields = {
  __typename?: "groups_stddev_fields";
  group_year?: Maybe<Scalars["Float"]["output"]>;
  groups_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Groups_Stddev_Pop_Fields = {
  __typename?: "groups_stddev_pop_fields";
  group_year?: Maybe<Scalars["Float"]["output"]>;
  groups_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Groups_Stddev_Samp_Fields = {
  __typename?: "groups_stddev_samp_fields";
  group_year?: Maybe<Scalars["Float"]["output"]>;
  groups_id?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "groups" */
export type Groups_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Groups_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Groups_Stream_Cursor_Value_Input = {
  group_name?: InputMaybe<Scalars["String"]["input"]>;
  group_year?: InputMaybe<Scalars["Int"]["input"]>;
  groups_id?: InputMaybe<Scalars["bigint"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Groups_Sum_Fields = {
  __typename?: "groups_sum_fields";
  group_year?: Maybe<Scalars["Int"]["output"]>;
  groups_id?: Maybe<Scalars["bigint"]["output"]>;
};

/** update columns of table "groups" */
export enum Groups_Update_Column {
  /** column name */
  GroupName = "group_name",
  /** column name */
  GroupYear = "group_year",
  /** column name */
  GroupsId = "groups_id",
  /** column name */
  Label = "label",
}

export type Groups_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Groups_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Groups_Set_Input>;
  /** filter the rows which have to be updated */
  where: Groups_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Groups_Var_Pop_Fields = {
  __typename?: "groups_var_pop_fields";
  group_year?: Maybe<Scalars["Float"]["output"]>;
  groups_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Groups_Var_Samp_Fields = {
  __typename?: "groups_var_samp_fields";
  group_year?: Maybe<Scalars["Float"]["output"]>;
  groups_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Groups_Variance_Fields = {
  __typename?: "groups_variance_fields";
  group_year?: Maybe<Scalars["Float"]["output"]>;
  groups_id?: Maybe<Scalars["Float"]["output"]>;
};

/** columns and relationships of "levels" */
export type Levels = {
  __typename?: "levels";
  avatar?: Maybe<Scalars["String"]["output"]>;
  level_id: Scalars["bigint"]["output"];
  maximum_points: Scalars["float8"]["output"];
  minimum_points: Scalars["float8"]["output"];
  name: Scalars["String"]["output"];
};

/** aggregated selection of "levels" */
export type Levels_Aggregate = {
  __typename?: "levels_aggregate";
  aggregate?: Maybe<Levels_Aggregate_Fields>;
  nodes: Array<Levels>;
};

/** aggregate fields of "levels" */
export type Levels_Aggregate_Fields = {
  __typename?: "levels_aggregate_fields";
  avg?: Maybe<Levels_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Levels_Max_Fields>;
  min?: Maybe<Levels_Min_Fields>;
  stddev?: Maybe<Levels_Stddev_Fields>;
  stddev_pop?: Maybe<Levels_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Levels_Stddev_Samp_Fields>;
  sum?: Maybe<Levels_Sum_Fields>;
  var_pop?: Maybe<Levels_Var_Pop_Fields>;
  var_samp?: Maybe<Levels_Var_Samp_Fields>;
  variance?: Maybe<Levels_Variance_Fields>;
};

/** aggregate fields of "levels" */
export type Levels_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Levels_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Levels_Avg_Fields = {
  __typename?: "levels_avg_fields";
  level_id?: Maybe<Scalars["Float"]["output"]>;
  maximum_points?: Maybe<Scalars["Float"]["output"]>;
  minimum_points?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "levels". All fields are combined with a logical 'AND'. */
export type Levels_Bool_Exp = {
  _and?: InputMaybe<Array<Levels_Bool_Exp>>;
  _not?: InputMaybe<Levels_Bool_Exp>;
  _or?: InputMaybe<Array<Levels_Bool_Exp>>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  level_id?: InputMaybe<Bigint_Comparison_Exp>;
  maximum_points?: InputMaybe<Float8_Comparison_Exp>;
  minimum_points?: InputMaybe<Float8_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "levels" */
export enum Levels_Constraint {
  /** unique or primary key constraint on columns "level_id" */
  LevelsPkey = "levels_pkey",
}

/** input type for incrementing numeric columns in table "levels" */
export type Levels_Inc_Input = {
  level_id?: InputMaybe<Scalars["bigint"]["input"]>;
  maximum_points?: InputMaybe<Scalars["float8"]["input"]>;
  minimum_points?: InputMaybe<Scalars["float8"]["input"]>;
};

/** input type for inserting data into table "levels" */
export type Levels_Insert_Input = {
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  level_id?: InputMaybe<Scalars["bigint"]["input"]>;
  maximum_points?: InputMaybe<Scalars["float8"]["input"]>;
  minimum_points?: InputMaybe<Scalars["float8"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Levels_Max_Fields = {
  __typename?: "levels_max_fields";
  avatar?: Maybe<Scalars["String"]["output"]>;
  level_id?: Maybe<Scalars["bigint"]["output"]>;
  maximum_points?: Maybe<Scalars["float8"]["output"]>;
  minimum_points?: Maybe<Scalars["float8"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Levels_Min_Fields = {
  __typename?: "levels_min_fields";
  avatar?: Maybe<Scalars["String"]["output"]>;
  level_id?: Maybe<Scalars["bigint"]["output"]>;
  maximum_points?: Maybe<Scalars["float8"]["output"]>;
  minimum_points?: Maybe<Scalars["float8"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "levels" */
export type Levels_Mutation_Response = {
  __typename?: "levels_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Levels>;
};

/** on_conflict condition type for table "levels" */
export type Levels_On_Conflict = {
  constraint: Levels_Constraint;
  update_columns?: Array<Levels_Update_Column>;
  where?: InputMaybe<Levels_Bool_Exp>;
};

/** Ordering options when selecting data from "levels". */
export type Levels_Order_By = {
  avatar?: InputMaybe<Order_By>;
  level_id?: InputMaybe<Order_By>;
  maximum_points?: InputMaybe<Order_By>;
  minimum_points?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: levels */
export type Levels_Pk_Columns_Input = {
  level_id: Scalars["bigint"]["input"];
};

/** select columns of table "levels" */
export enum Levels_Select_Column {
  /** column name */
  Avatar = "avatar",
  /** column name */
  LevelId = "level_id",
  /** column name */
  MaximumPoints = "maximum_points",
  /** column name */
  MinimumPoints = "minimum_points",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "levels" */
export type Levels_Set_Input = {
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  level_id?: InputMaybe<Scalars["bigint"]["input"]>;
  maximum_points?: InputMaybe<Scalars["float8"]["input"]>;
  minimum_points?: InputMaybe<Scalars["float8"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Levels_Stddev_Fields = {
  __typename?: "levels_stddev_fields";
  level_id?: Maybe<Scalars["Float"]["output"]>;
  maximum_points?: Maybe<Scalars["Float"]["output"]>;
  minimum_points?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Levels_Stddev_Pop_Fields = {
  __typename?: "levels_stddev_pop_fields";
  level_id?: Maybe<Scalars["Float"]["output"]>;
  maximum_points?: Maybe<Scalars["Float"]["output"]>;
  minimum_points?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Levels_Stddev_Samp_Fields = {
  __typename?: "levels_stddev_samp_fields";
  level_id?: Maybe<Scalars["Float"]["output"]>;
  maximum_points?: Maybe<Scalars["Float"]["output"]>;
  minimum_points?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "levels" */
export type Levels_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Levels_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Levels_Stream_Cursor_Value_Input = {
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  level_id?: InputMaybe<Scalars["bigint"]["input"]>;
  maximum_points?: InputMaybe<Scalars["float8"]["input"]>;
  minimum_points?: InputMaybe<Scalars["float8"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Levels_Sum_Fields = {
  __typename?: "levels_sum_fields";
  level_id?: Maybe<Scalars["bigint"]["output"]>;
  maximum_points?: Maybe<Scalars["float8"]["output"]>;
  minimum_points?: Maybe<Scalars["float8"]["output"]>;
};

/** update columns of table "levels" */
export enum Levels_Update_Column {
  /** column name */
  Avatar = "avatar",
  /** column name */
  LevelId = "level_id",
  /** column name */
  MaximumPoints = "maximum_points",
  /** column name */
  MinimumPoints = "minimum_points",
  /** column name */
  Name = "name",
}

export type Levels_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Levels_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Levels_Set_Input>;
  /** filter the rows which have to be updated */
  where: Levels_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Levels_Var_Pop_Fields = {
  __typename?: "levels_var_pop_fields";
  level_id?: Maybe<Scalars["Float"]["output"]>;
  maximum_points?: Maybe<Scalars["Float"]["output"]>;
  minimum_points?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Levels_Var_Samp_Fields = {
  __typename?: "levels_var_samp_fields";
  level_id?: Maybe<Scalars["Float"]["output"]>;
  maximum_points?: Maybe<Scalars["Float"]["output"]>;
  minimum_points?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Levels_Variance_Fields = {
  __typename?: "levels_variance_fields";
  level_id?: Maybe<Scalars["Float"]["output"]>;
  maximum_points?: Maybe<Scalars["Float"]["output"]>;
  minimum_points?: Maybe<Scalars["Float"]["output"]>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  createBonus?: Maybe<CreateBonusOutput>;
  /** delete data from the table: "bonuses" */
  delete_bonuses?: Maybe<Bonuses_Mutation_Response>;
  /** delete single row from the table: "bonuses" */
  delete_bonuses_by_pk?: Maybe<Bonuses>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "chest_award" */
  delete_chest_award?: Maybe<Chest_Award_Mutation_Response>;
  /** delete single row from the table: "chest_award" */
  delete_chest_award_by_pk?: Maybe<Chest_Award>;
  /** delete data from the table: "chest_history" */
  delete_chest_history?: Maybe<Chest_History_Mutation_Response>;
  /** delete single row from the table: "chest_history" */
  delete_chest_history_by_pk?: Maybe<Chest_History>;
  /** delete data from the table: "chests" */
  delete_chests?: Maybe<Chests_Mutation_Response>;
  /** delete single row from the table: "chests" */
  delete_chests_by_pk?: Maybe<Chests>;
  /** delete data from the table: "flyway_schema_history" */
  delete_flyway_schema_history?: Maybe<Flyway_Schema_History_Mutation_Response>;
  /** delete single row from the table: "flyway_schema_history" */
  delete_flyway_schema_history_by_pk?: Maybe<Flyway_Schema_History>;
  /** delete data from the table: "groups" */
  delete_groups?: Maybe<Groups_Mutation_Response>;
  /** delete single row from the table: "groups" */
  delete_groups_by_pk?: Maybe<Groups>;
  /** delete data from the table: "levels" */
  delete_levels?: Maybe<Levels_Mutation_Response>;
  /** delete single row from the table: "levels" */
  delete_levels_by_pk?: Maybe<Levels>;
  /** delete data from the table: "points" */
  delete_points?: Maybe<Points_Mutation_Response>;
  /** delete single row from the table: "points" */
  delete_points_by_pk?: Maybe<Points>;
  /** delete data from the table: "subcategories" */
  delete_subcategories?: Maybe<Subcategories_Mutation_Response>;
  /** delete single row from the table: "subcategories" */
  delete_subcategories_by_pk?: Maybe<Subcategories>;
  /** delete data from the table: "user_groups" */
  delete_user_groups?: Maybe<User_Groups_Mutation_Response>;
  /** delete single row from the table: "user_groups" */
  delete_user_groups_by_pk?: Maybe<User_Groups>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "bonuses" */
  insert_bonuses?: Maybe<Bonuses_Mutation_Response>;
  /** insert a single row into the table: "bonuses" */
  insert_bonuses_one?: Maybe<Bonuses>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "chest_award" */
  insert_chest_award?: Maybe<Chest_Award_Mutation_Response>;
  /** insert a single row into the table: "chest_award" */
  insert_chest_award_one?: Maybe<Chest_Award>;
  /** insert data into the table: "chest_history" */
  insert_chest_history?: Maybe<Chest_History_Mutation_Response>;
  /** insert a single row into the table: "chest_history" */
  insert_chest_history_one?: Maybe<Chest_History>;
  /** insert data into the table: "chests" */
  insert_chests?: Maybe<Chests_Mutation_Response>;
  /** insert a single row into the table: "chests" */
  insert_chests_one?: Maybe<Chests>;
  /** insert data into the table: "flyway_schema_history" */
  insert_flyway_schema_history?: Maybe<Flyway_Schema_History_Mutation_Response>;
  /** insert a single row into the table: "flyway_schema_history" */
  insert_flyway_schema_history_one?: Maybe<Flyway_Schema_History>;
  /** insert data into the table: "groups" */
  insert_groups?: Maybe<Groups_Mutation_Response>;
  /** insert a single row into the table: "groups" */
  insert_groups_one?: Maybe<Groups>;
  /** insert data into the table: "levels" */
  insert_levels?: Maybe<Levels_Mutation_Response>;
  /** insert a single row into the table: "levels" */
  insert_levels_one?: Maybe<Levels>;
  /** insert data into the table: "points" */
  insert_points?: Maybe<Points_Mutation_Response>;
  /** insert a single row into the table: "points" */
  insert_points_one?: Maybe<Points>;
  /** insert data into the table: "subcategories" */
  insert_subcategories?: Maybe<Subcategories_Mutation_Response>;
  /** insert a single row into the table: "subcategories" */
  insert_subcategories_one?: Maybe<Subcategories>;
  /** insert data into the table: "user_groups" */
  insert_user_groups?: Maybe<User_Groups_Mutation_Response>;
  /** insert a single row into the table: "user_groups" */
  insert_user_groups_one?: Maybe<User_Groups>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "bonuses" */
  update_bonuses?: Maybe<Bonuses_Mutation_Response>;
  /** update single row of the table: "bonuses" */
  update_bonuses_by_pk?: Maybe<Bonuses>;
  /** update multiples rows of table: "bonuses" */
  update_bonuses_many?: Maybe<Array<Maybe<Bonuses_Mutation_Response>>>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update multiples rows of table: "categories" */
  update_categories_many?: Maybe<Array<Maybe<Categories_Mutation_Response>>>;
  /** update data of the table: "chest_award" */
  update_chest_award?: Maybe<Chest_Award_Mutation_Response>;
  /** update single row of the table: "chest_award" */
  update_chest_award_by_pk?: Maybe<Chest_Award>;
  /** update multiples rows of table: "chest_award" */
  update_chest_award_many?: Maybe<Array<Maybe<Chest_Award_Mutation_Response>>>;
  /** update data of the table: "chest_history" */
  update_chest_history?: Maybe<Chest_History_Mutation_Response>;
  /** update single row of the table: "chest_history" */
  update_chest_history_by_pk?: Maybe<Chest_History>;
  /** update multiples rows of table: "chest_history" */
  update_chest_history_many?: Maybe<
    Array<Maybe<Chest_History_Mutation_Response>>
  >;
  /** update data of the table: "chests" */
  update_chests?: Maybe<Chests_Mutation_Response>;
  /** update single row of the table: "chests" */
  update_chests_by_pk?: Maybe<Chests>;
  /** update multiples rows of table: "chests" */
  update_chests_many?: Maybe<Array<Maybe<Chests_Mutation_Response>>>;
  /** update data of the table: "flyway_schema_history" */
  update_flyway_schema_history?: Maybe<Flyway_Schema_History_Mutation_Response>;
  /** update single row of the table: "flyway_schema_history" */
  update_flyway_schema_history_by_pk?: Maybe<Flyway_Schema_History>;
  /** update multiples rows of table: "flyway_schema_history" */
  update_flyway_schema_history_many?: Maybe<
    Array<Maybe<Flyway_Schema_History_Mutation_Response>>
  >;
  /** update data of the table: "groups" */
  update_groups?: Maybe<Groups_Mutation_Response>;
  /** update single row of the table: "groups" */
  update_groups_by_pk?: Maybe<Groups>;
  /** update multiples rows of table: "groups" */
  update_groups_many?: Maybe<Array<Maybe<Groups_Mutation_Response>>>;
  /** update data of the table: "levels" */
  update_levels?: Maybe<Levels_Mutation_Response>;
  /** update single row of the table: "levels" */
  update_levels_by_pk?: Maybe<Levels>;
  /** update multiples rows of table: "levels" */
  update_levels_many?: Maybe<Array<Maybe<Levels_Mutation_Response>>>;
  /** update data of the table: "points" */
  update_points?: Maybe<Points_Mutation_Response>;
  /** update single row of the table: "points" */
  update_points_by_pk?: Maybe<Points>;
  /** update multiples rows of table: "points" */
  update_points_many?: Maybe<Array<Maybe<Points_Mutation_Response>>>;
  /** update data of the table: "subcategories" */
  update_subcategories?: Maybe<Subcategories_Mutation_Response>;
  /** update single row of the table: "subcategories" */
  update_subcategories_by_pk?: Maybe<Subcategories>;
  /** update multiples rows of table: "subcategories" */
  update_subcategories_many?: Maybe<
    Array<Maybe<Subcategories_Mutation_Response>>
  >;
  /** update data of the table: "user_groups" */
  update_user_groups?: Maybe<User_Groups_Mutation_Response>;
  /** update single row of the table: "user_groups" */
  update_user_groups_by_pk?: Maybe<User_Groups>;
  /** update multiples rows of table: "user_groups" */
  update_user_groups_many?: Maybe<Array<Maybe<User_Groups_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootCreateBonusArgs = {
  awardId: Scalars["Int"]["input"];
  howMany: Scalars["Int"]["input"];
  studentId: Scalars["Int"]["input"];
  subcategoryId: Scalars["Int"]["input"];
  teacherId: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_BonusesArgs = {
  where: Bonuses_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Bonuses_By_PkArgs = {
  bonus_id: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  category_id: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Chest_AwardArgs = {
  where: Chest_Award_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Chest_Award_By_PkArgs = {
  award_id: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Chest_HistoryArgs = {
  where: Chest_History_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Chest_History_By_PkArgs = {
  chest_history_id: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_ChestsArgs = {
  where: Chests_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Chests_By_PkArgs = {
  chest_id: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Flyway_Schema_HistoryArgs = {
  where: Flyway_Schema_History_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Flyway_Schema_History_By_PkArgs = {
  installed_rank: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_GroupsArgs = {
  where: Groups_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Groups_By_PkArgs = {
  groups_id: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_LevelsArgs = {
  where: Levels_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Levels_By_PkArgs = {
  level_id: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_PointsArgs = {
  where: Points_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Points_By_PkArgs = {
  points_id: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_SubcategoriesArgs = {
  where: Subcategories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Subcategories_By_PkArgs = {
  subcategory_id: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_User_GroupsArgs = {
  where: User_Groups_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Groups_By_PkArgs = {
  group_id: Scalars["bigint"]["input"];
  user_id: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  user_id: Scalars["bigint"]["input"];
};

/** mutation root */
export type Mutation_RootInsert_BonusesArgs = {
  objects: Array<Bonuses_Insert_Input>;
  on_conflict?: InputMaybe<Bonuses_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Bonuses_OneArgs = {
  object: Bonuses_Insert_Input;
  on_conflict?: InputMaybe<Bonuses_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Chest_AwardArgs = {
  objects: Array<Chest_Award_Insert_Input>;
  on_conflict?: InputMaybe<Chest_Award_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Chest_Award_OneArgs = {
  object: Chest_Award_Insert_Input;
  on_conflict?: InputMaybe<Chest_Award_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Chest_HistoryArgs = {
  objects: Array<Chest_History_Insert_Input>;
  on_conflict?: InputMaybe<Chest_History_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Chest_History_OneArgs = {
  object: Chest_History_Insert_Input;
  on_conflict?: InputMaybe<Chest_History_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ChestsArgs = {
  objects: Array<Chests_Insert_Input>;
  on_conflict?: InputMaybe<Chests_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Chests_OneArgs = {
  object: Chests_Insert_Input;
  on_conflict?: InputMaybe<Chests_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Flyway_Schema_HistoryArgs = {
  objects: Array<Flyway_Schema_History_Insert_Input>;
  on_conflict?: InputMaybe<Flyway_Schema_History_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Flyway_Schema_History_OneArgs = {
  object: Flyway_Schema_History_Insert_Input;
  on_conflict?: InputMaybe<Flyway_Schema_History_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_GroupsArgs = {
  objects: Array<Groups_Insert_Input>;
  on_conflict?: InputMaybe<Groups_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Groups_OneArgs = {
  object: Groups_Insert_Input;
  on_conflict?: InputMaybe<Groups_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LevelsArgs = {
  objects: Array<Levels_Insert_Input>;
  on_conflict?: InputMaybe<Levels_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Levels_OneArgs = {
  object: Levels_Insert_Input;
  on_conflict?: InputMaybe<Levels_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PointsArgs = {
  objects: Array<Points_Insert_Input>;
  on_conflict?: InputMaybe<Points_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Points_OneArgs = {
  object: Points_Insert_Input;
  on_conflict?: InputMaybe<Points_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_SubcategoriesArgs = {
  objects: Array<Subcategories_Insert_Input>;
  on_conflict?: InputMaybe<Subcategories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Subcategories_OneArgs = {
  object: Subcategories_Insert_Input;
  on_conflict?: InputMaybe<Subcategories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_GroupsArgs = {
  objects: Array<User_Groups_Insert_Input>;
  on_conflict?: InputMaybe<User_Groups_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Groups_OneArgs = {
  object: User_Groups_Insert_Input;
  on_conflict?: InputMaybe<User_Groups_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_BonusesArgs = {
  _inc?: InputMaybe<Bonuses_Inc_Input>;
  _set?: InputMaybe<Bonuses_Set_Input>;
  where: Bonuses_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Bonuses_By_PkArgs = {
  _inc?: InputMaybe<Bonuses_Inc_Input>;
  _set?: InputMaybe<Bonuses_Set_Input>;
  pk_columns: Bonuses_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Bonuses_ManyArgs = {
  updates: Array<Bonuses_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Categories_ManyArgs = {
  updates: Array<Categories_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Chest_AwardArgs = {
  _inc?: InputMaybe<Chest_Award_Inc_Input>;
  _set?: InputMaybe<Chest_Award_Set_Input>;
  where: Chest_Award_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Chest_Award_By_PkArgs = {
  _inc?: InputMaybe<Chest_Award_Inc_Input>;
  _set?: InputMaybe<Chest_Award_Set_Input>;
  pk_columns: Chest_Award_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Chest_Award_ManyArgs = {
  updates: Array<Chest_Award_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Chest_HistoryArgs = {
  _inc?: InputMaybe<Chest_History_Inc_Input>;
  _set?: InputMaybe<Chest_History_Set_Input>;
  where: Chest_History_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Chest_History_By_PkArgs = {
  _inc?: InputMaybe<Chest_History_Inc_Input>;
  _set?: InputMaybe<Chest_History_Set_Input>;
  pk_columns: Chest_History_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Chest_History_ManyArgs = {
  updates: Array<Chest_History_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ChestsArgs = {
  _inc?: InputMaybe<Chests_Inc_Input>;
  _set?: InputMaybe<Chests_Set_Input>;
  where: Chests_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Chests_By_PkArgs = {
  _inc?: InputMaybe<Chests_Inc_Input>;
  _set?: InputMaybe<Chests_Set_Input>;
  pk_columns: Chests_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Chests_ManyArgs = {
  updates: Array<Chests_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Flyway_Schema_HistoryArgs = {
  _inc?: InputMaybe<Flyway_Schema_History_Inc_Input>;
  _set?: InputMaybe<Flyway_Schema_History_Set_Input>;
  where: Flyway_Schema_History_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Flyway_Schema_History_By_PkArgs = {
  _inc?: InputMaybe<Flyway_Schema_History_Inc_Input>;
  _set?: InputMaybe<Flyway_Schema_History_Set_Input>;
  pk_columns: Flyway_Schema_History_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Flyway_Schema_History_ManyArgs = {
  updates: Array<Flyway_Schema_History_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_GroupsArgs = {
  _inc?: InputMaybe<Groups_Inc_Input>;
  _set?: InputMaybe<Groups_Set_Input>;
  where: Groups_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Groups_By_PkArgs = {
  _inc?: InputMaybe<Groups_Inc_Input>;
  _set?: InputMaybe<Groups_Set_Input>;
  pk_columns: Groups_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Groups_ManyArgs = {
  updates: Array<Groups_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_LevelsArgs = {
  _inc?: InputMaybe<Levels_Inc_Input>;
  _set?: InputMaybe<Levels_Set_Input>;
  where: Levels_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Levels_By_PkArgs = {
  _inc?: InputMaybe<Levels_Inc_Input>;
  _set?: InputMaybe<Levels_Set_Input>;
  pk_columns: Levels_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Levels_ManyArgs = {
  updates: Array<Levels_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_PointsArgs = {
  _inc?: InputMaybe<Points_Inc_Input>;
  _set?: InputMaybe<Points_Set_Input>;
  where: Points_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Points_By_PkArgs = {
  _inc?: InputMaybe<Points_Inc_Input>;
  _set?: InputMaybe<Points_Set_Input>;
  pk_columns: Points_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Points_ManyArgs = {
  updates: Array<Points_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_SubcategoriesArgs = {
  _inc?: InputMaybe<Subcategories_Inc_Input>;
  _set?: InputMaybe<Subcategories_Set_Input>;
  where: Subcategories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Subcategories_By_PkArgs = {
  _inc?: InputMaybe<Subcategories_Inc_Input>;
  _set?: InputMaybe<Subcategories_Set_Input>;
  pk_columns: Subcategories_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Subcategories_ManyArgs = {
  updates: Array<Subcategories_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_User_GroupsArgs = {
  _inc?: InputMaybe<User_Groups_Inc_Input>;
  _set?: InputMaybe<User_Groups_Set_Input>;
  where: User_Groups_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_Groups_By_PkArgs = {
  _inc?: InputMaybe<User_Groups_Inc_Input>;
  _set?: InputMaybe<User_Groups_Set_Input>;
  pk_columns: User_Groups_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_Groups_ManyArgs = {
  updates: Array<User_Groups_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** columns and relationships of "points" */
export type Points = {
  __typename?: "points";
  /** An array relationship */
  bonuses: Array<Bonuses>;
  /** An aggregate relationship */
  bonuses_aggregate: Bonuses_Aggregate;
  how_many: Scalars["bigint"]["output"];
  points_id: Scalars["bigint"]["output"];
  student_id: Scalars["bigint"]["output"];
  /** An object relationship */
  subcategory: Subcategories;
  subcategory_id: Scalars["bigint"]["output"];
  teacher_id: Scalars["bigint"]["output"];
  /** An object relationship */
  user: Users;
  /** An object relationship */
  userByTeacherId: Users;
};

/** columns and relationships of "points" */
export type PointsBonusesArgs = {
  distinct_on?: InputMaybe<Array<Bonuses_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Bonuses_Order_By>>;
  where?: InputMaybe<Bonuses_Bool_Exp>;
};

/** columns and relationships of "points" */
export type PointsBonuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bonuses_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Bonuses_Order_By>>;
  where?: InputMaybe<Bonuses_Bool_Exp>;
};

/** aggregated selection of "points" */
export type Points_Aggregate = {
  __typename?: "points_aggregate";
  aggregate?: Maybe<Points_Aggregate_Fields>;
  nodes: Array<Points>;
};

export type Points_Aggregate_Bool_Exp = {
  count?: InputMaybe<Points_Aggregate_Bool_Exp_Count>;
};

export type Points_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Points_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Points_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "points" */
export type Points_Aggregate_Fields = {
  __typename?: "points_aggregate_fields";
  avg?: Maybe<Points_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Points_Max_Fields>;
  min?: Maybe<Points_Min_Fields>;
  stddev?: Maybe<Points_Stddev_Fields>;
  stddev_pop?: Maybe<Points_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Points_Stddev_Samp_Fields>;
  sum?: Maybe<Points_Sum_Fields>;
  var_pop?: Maybe<Points_Var_Pop_Fields>;
  var_samp?: Maybe<Points_Var_Samp_Fields>;
  variance?: Maybe<Points_Variance_Fields>;
};

/** aggregate fields of "points" */
export type Points_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Points_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "points" */
export type Points_Aggregate_Order_By = {
  avg?: InputMaybe<Points_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Points_Max_Order_By>;
  min?: InputMaybe<Points_Min_Order_By>;
  stddev?: InputMaybe<Points_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Points_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Points_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Points_Sum_Order_By>;
  var_pop?: InputMaybe<Points_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Points_Var_Samp_Order_By>;
  variance?: InputMaybe<Points_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "points" */
export type Points_Arr_Rel_Insert_Input = {
  data: Array<Points_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Points_On_Conflict>;
};

/** aggregate avg on columns */
export type Points_Avg_Fields = {
  __typename?: "points_avg_fields";
  how_many?: Maybe<Scalars["Float"]["output"]>;
  points_id?: Maybe<Scalars["Float"]["output"]>;
  student_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
  teacher_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "points" */
export type Points_Avg_Order_By = {
  how_many?: InputMaybe<Order_By>;
  points_id?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  teacher_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "points". All fields are combined with a logical 'AND'. */
export type Points_Bool_Exp = {
  _and?: InputMaybe<Array<Points_Bool_Exp>>;
  _not?: InputMaybe<Points_Bool_Exp>;
  _or?: InputMaybe<Array<Points_Bool_Exp>>;
  bonuses?: InputMaybe<Bonuses_Bool_Exp>;
  bonuses_aggregate?: InputMaybe<Bonuses_Aggregate_Bool_Exp>;
  how_many?: InputMaybe<Bigint_Comparison_Exp>;
  points_id?: InputMaybe<Bigint_Comparison_Exp>;
  student_id?: InputMaybe<Bigint_Comparison_Exp>;
  subcategory?: InputMaybe<Subcategories_Bool_Exp>;
  subcategory_id?: InputMaybe<Bigint_Comparison_Exp>;
  teacher_id?: InputMaybe<Bigint_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userByTeacherId?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "points" */
export enum Points_Constraint {
  /** unique or primary key constraint on columns "points_id" */
  PointsPkey = "points_pkey",
}

/** input type for incrementing numeric columns in table "points" */
export type Points_Inc_Input = {
  how_many?: InputMaybe<Scalars["bigint"]["input"]>;
  points_id?: InputMaybe<Scalars["bigint"]["input"]>;
  student_id?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategory_id?: InputMaybe<Scalars["bigint"]["input"]>;
  teacher_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "points" */
export type Points_Insert_Input = {
  bonuses?: InputMaybe<Bonuses_Arr_Rel_Insert_Input>;
  how_many?: InputMaybe<Scalars["bigint"]["input"]>;
  points_id?: InputMaybe<Scalars["bigint"]["input"]>;
  student_id?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategory?: InputMaybe<Subcategories_Obj_Rel_Insert_Input>;
  subcategory_id?: InputMaybe<Scalars["bigint"]["input"]>;
  teacher_id?: InputMaybe<Scalars["bigint"]["input"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userByTeacherId?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Points_Max_Fields = {
  __typename?: "points_max_fields";
  how_many?: Maybe<Scalars["bigint"]["output"]>;
  points_id?: Maybe<Scalars["bigint"]["output"]>;
  student_id?: Maybe<Scalars["bigint"]["output"]>;
  subcategory_id?: Maybe<Scalars["bigint"]["output"]>;
  teacher_id?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by max() on columns of table "points" */
export type Points_Max_Order_By = {
  how_many?: InputMaybe<Order_By>;
  points_id?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  teacher_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Points_Min_Fields = {
  __typename?: "points_min_fields";
  how_many?: Maybe<Scalars["bigint"]["output"]>;
  points_id?: Maybe<Scalars["bigint"]["output"]>;
  student_id?: Maybe<Scalars["bigint"]["output"]>;
  subcategory_id?: Maybe<Scalars["bigint"]["output"]>;
  teacher_id?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by min() on columns of table "points" */
export type Points_Min_Order_By = {
  how_many?: InputMaybe<Order_By>;
  points_id?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  teacher_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "points" */
export type Points_Mutation_Response = {
  __typename?: "points_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Points>;
};

/** input type for inserting object relation for remote table "points" */
export type Points_Obj_Rel_Insert_Input = {
  data: Points_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Points_On_Conflict>;
};

/** on_conflict condition type for table "points" */
export type Points_On_Conflict = {
  constraint: Points_Constraint;
  update_columns?: Array<Points_Update_Column>;
  where?: InputMaybe<Points_Bool_Exp>;
};

/** Ordering options when selecting data from "points". */
export type Points_Order_By = {
  bonuses_aggregate?: InputMaybe<Bonuses_Aggregate_Order_By>;
  how_many?: InputMaybe<Order_By>;
  points_id?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
  subcategory?: InputMaybe<Subcategories_Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  teacher_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userByTeacherId?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: points */
export type Points_Pk_Columns_Input = {
  points_id: Scalars["bigint"]["input"];
};

/** select columns of table "points" */
export enum Points_Select_Column {
  /** column name */
  HowMany = "how_many",
  /** column name */
  PointsId = "points_id",
  /** column name */
  StudentId = "student_id",
  /** column name */
  SubcategoryId = "subcategory_id",
  /** column name */
  TeacherId = "teacher_id",
}

/** input type for updating data in table "points" */
export type Points_Set_Input = {
  how_many?: InputMaybe<Scalars["bigint"]["input"]>;
  points_id?: InputMaybe<Scalars["bigint"]["input"]>;
  student_id?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategory_id?: InputMaybe<Scalars["bigint"]["input"]>;
  teacher_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate stddev on columns */
export type Points_Stddev_Fields = {
  __typename?: "points_stddev_fields";
  how_many?: Maybe<Scalars["Float"]["output"]>;
  points_id?: Maybe<Scalars["Float"]["output"]>;
  student_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
  teacher_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "points" */
export type Points_Stddev_Order_By = {
  how_many?: InputMaybe<Order_By>;
  points_id?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  teacher_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Points_Stddev_Pop_Fields = {
  __typename?: "points_stddev_pop_fields";
  how_many?: Maybe<Scalars["Float"]["output"]>;
  points_id?: Maybe<Scalars["Float"]["output"]>;
  student_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
  teacher_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "points" */
export type Points_Stddev_Pop_Order_By = {
  how_many?: InputMaybe<Order_By>;
  points_id?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  teacher_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Points_Stddev_Samp_Fields = {
  __typename?: "points_stddev_samp_fields";
  how_many?: Maybe<Scalars["Float"]["output"]>;
  points_id?: Maybe<Scalars["Float"]["output"]>;
  student_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
  teacher_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "points" */
export type Points_Stddev_Samp_Order_By = {
  how_many?: InputMaybe<Order_By>;
  points_id?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  teacher_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "points" */
export type Points_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Points_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Points_Stream_Cursor_Value_Input = {
  how_many?: InputMaybe<Scalars["bigint"]["input"]>;
  points_id?: InputMaybe<Scalars["bigint"]["input"]>;
  student_id?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategory_id?: InputMaybe<Scalars["bigint"]["input"]>;
  teacher_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate sum on columns */
export type Points_Sum_Fields = {
  __typename?: "points_sum_fields";
  how_many?: Maybe<Scalars["bigint"]["output"]>;
  points_id?: Maybe<Scalars["bigint"]["output"]>;
  student_id?: Maybe<Scalars["bigint"]["output"]>;
  subcategory_id?: Maybe<Scalars["bigint"]["output"]>;
  teacher_id?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by sum() on columns of table "points" */
export type Points_Sum_Order_By = {
  how_many?: InputMaybe<Order_By>;
  points_id?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  teacher_id?: InputMaybe<Order_By>;
};

/** update columns of table "points" */
export enum Points_Update_Column {
  /** column name */
  HowMany = "how_many",
  /** column name */
  PointsId = "points_id",
  /** column name */
  StudentId = "student_id",
  /** column name */
  SubcategoryId = "subcategory_id",
  /** column name */
  TeacherId = "teacher_id",
}

export type Points_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Points_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Points_Set_Input>;
  /** filter the rows which have to be updated */
  where: Points_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Points_Var_Pop_Fields = {
  __typename?: "points_var_pop_fields";
  how_many?: Maybe<Scalars["Float"]["output"]>;
  points_id?: Maybe<Scalars["Float"]["output"]>;
  student_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
  teacher_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "points" */
export type Points_Var_Pop_Order_By = {
  how_many?: InputMaybe<Order_By>;
  points_id?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  teacher_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Points_Var_Samp_Fields = {
  __typename?: "points_var_samp_fields";
  how_many?: Maybe<Scalars["Float"]["output"]>;
  points_id?: Maybe<Scalars["Float"]["output"]>;
  student_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
  teacher_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "points" */
export type Points_Var_Samp_Order_By = {
  how_many?: InputMaybe<Order_By>;
  points_id?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  teacher_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Points_Variance_Fields = {
  __typename?: "points_variance_fields";
  how_many?: Maybe<Scalars["Float"]["output"]>;
  points_id?: Maybe<Scalars["Float"]["output"]>;
  student_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
  teacher_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "points" */
export type Points_Variance_Order_By = {
  how_many?: InputMaybe<Order_By>;
  points_id?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  teacher_id?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: "query_root";
  _service: _Service;
  /** An array relationship */
  bonuses: Array<Bonuses>;
  /** An aggregate relationship */
  bonuses_aggregate: Bonuses_Aggregate;
  /** fetch data from the table: "bonuses" using primary key columns */
  bonuses_by_pk?: Maybe<Bonuses>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "chest_award" */
  chest_award: Array<Chest_Award>;
  /** fetch aggregated fields from the table: "chest_award" */
  chest_award_aggregate: Chest_Award_Aggregate;
  /** fetch data from the table: "chest_award" using primary key columns */
  chest_award_by_pk?: Maybe<Chest_Award>;
  /** fetch data from the table: "chest_history" */
  chest_history: Array<Chest_History>;
  /** fetch aggregated fields from the table: "chest_history" */
  chest_history_aggregate: Chest_History_Aggregate;
  /** fetch data from the table: "chest_history" using primary key columns */
  chest_history_by_pk?: Maybe<Chest_History>;
  /** fetch data from the table: "chests" */
  chests: Array<Chests>;
  /** fetch aggregated fields from the table: "chests" */
  chests_aggregate: Chests_Aggregate;
  /** fetch data from the table: "chests" using primary key columns */
  chests_by_pk?: Maybe<Chests>;
  /** fetch data from the table: "flyway_schema_history" */
  flyway_schema_history: Array<Flyway_Schema_History>;
  /** fetch aggregated fields from the table: "flyway_schema_history" */
  flyway_schema_history_aggregate: Flyway_Schema_History_Aggregate;
  /** fetch data from the table: "flyway_schema_history" using primary key columns */
  flyway_schema_history_by_pk?: Maybe<Flyway_Schema_History>;
  /** fetch data from the table: "groups" */
  groups: Array<Groups>;
  /** fetch aggregated fields from the table: "groups" */
  groups_aggregate: Groups_Aggregate;
  /** fetch data from the table: "groups" using primary key columns */
  groups_by_pk?: Maybe<Groups>;
  /** fetch data from the table: "levels" */
  levels: Array<Levels>;
  /** fetch aggregated fields from the table: "levels" */
  levels_aggregate: Levels_Aggregate;
  /** fetch data from the table: "levels" using primary key columns */
  levels_by_pk?: Maybe<Levels>;
  /** An array relationship */
  points: Array<Points>;
  /** An aggregate relationship */
  points_aggregate: Points_Aggregate;
  /** fetch data from the table: "points" using primary key columns */
  points_by_pk?: Maybe<Points>;
  /** An array relationship */
  subcategories: Array<Subcategories>;
  /** An aggregate relationship */
  subcategories_aggregate: Subcategories_Aggregate;
  /** fetch data from the table: "subcategories" using primary key columns */
  subcategories_by_pk?: Maybe<Subcategories>;
  /** An array relationship */
  user_groups: Array<User_Groups>;
  /** An aggregate relationship */
  user_groups_aggregate: User_Groups_Aggregate;
  /** fetch data from the table: "user_groups" using primary key columns */
  user_groups_by_pk?: Maybe<User_Groups>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

export type Query_RootBonusesArgs = {
  distinct_on?: InputMaybe<Array<Bonuses_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Bonuses_Order_By>>;
  where?: InputMaybe<Bonuses_Bool_Exp>;
};

export type Query_RootBonuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bonuses_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Bonuses_Order_By>>;
  where?: InputMaybe<Bonuses_Bool_Exp>;
};

export type Query_RootBonuses_By_PkArgs = {
  bonus_id: Scalars["bigint"]["input"];
};

export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

export type Query_RootCategories_By_PkArgs = {
  category_id: Scalars["bigint"]["input"];
};

export type Query_RootChest_AwardArgs = {
  distinct_on?: InputMaybe<Array<Chest_Award_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chest_Award_Order_By>>;
  where?: InputMaybe<Chest_Award_Bool_Exp>;
};

export type Query_RootChest_Award_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chest_Award_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chest_Award_Order_By>>;
  where?: InputMaybe<Chest_Award_Bool_Exp>;
};

export type Query_RootChest_Award_By_PkArgs = {
  award_id: Scalars["bigint"]["input"];
};

export type Query_RootChest_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Chest_History_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chest_History_Order_By>>;
  where?: InputMaybe<Chest_History_Bool_Exp>;
};

export type Query_RootChest_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chest_History_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chest_History_Order_By>>;
  where?: InputMaybe<Chest_History_Bool_Exp>;
};

export type Query_RootChest_History_By_PkArgs = {
  chest_history_id: Scalars["bigint"]["input"];
};

export type Query_RootChestsArgs = {
  distinct_on?: InputMaybe<Array<Chests_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chests_Order_By>>;
  where?: InputMaybe<Chests_Bool_Exp>;
};

export type Query_RootChests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chests_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chests_Order_By>>;
  where?: InputMaybe<Chests_Bool_Exp>;
};

export type Query_RootChests_By_PkArgs = {
  chest_id: Scalars["bigint"]["input"];
};

export type Query_RootFlyway_Schema_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Flyway_Schema_History_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Flyway_Schema_History_Order_By>>;
  where?: InputMaybe<Flyway_Schema_History_Bool_Exp>;
};

export type Query_RootFlyway_Schema_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flyway_Schema_History_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Flyway_Schema_History_Order_By>>;
  where?: InputMaybe<Flyway_Schema_History_Bool_Exp>;
};

export type Query_RootFlyway_Schema_History_By_PkArgs = {
  installed_rank: Scalars["Int"]["input"];
};

export type Query_RootGroupsArgs = {
  distinct_on?: InputMaybe<Array<Groups_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Groups_Order_By>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};

export type Query_RootGroups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Groups_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Groups_Order_By>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};

export type Query_RootGroups_By_PkArgs = {
  groups_id: Scalars["bigint"]["input"];
};

export type Query_RootLevelsArgs = {
  distinct_on?: InputMaybe<Array<Levels_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Levels_Order_By>>;
  where?: InputMaybe<Levels_Bool_Exp>;
};

export type Query_RootLevels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Levels_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Levels_Order_By>>;
  where?: InputMaybe<Levels_Bool_Exp>;
};

export type Query_RootLevels_By_PkArgs = {
  level_id: Scalars["bigint"]["input"];
};

export type Query_RootPointsArgs = {
  distinct_on?: InputMaybe<Array<Points_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Points_Order_By>>;
  where?: InputMaybe<Points_Bool_Exp>;
};

export type Query_RootPoints_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Points_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Points_Order_By>>;
  where?: InputMaybe<Points_Bool_Exp>;
};

export type Query_RootPoints_By_PkArgs = {
  points_id: Scalars["bigint"]["input"];
};

export type Query_RootSubcategoriesArgs = {
  distinct_on?: InputMaybe<Array<Subcategories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Subcategories_Order_By>>;
  where?: InputMaybe<Subcategories_Bool_Exp>;
};

export type Query_RootSubcategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subcategories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Subcategories_Order_By>>;
  where?: InputMaybe<Subcategories_Bool_Exp>;
};

export type Query_RootSubcategories_By_PkArgs = {
  subcategory_id: Scalars["bigint"]["input"];
};

export type Query_RootUser_GroupsArgs = {
  distinct_on?: InputMaybe<Array<User_Groups_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Groups_Order_By>>;
  where?: InputMaybe<User_Groups_Bool_Exp>;
};

export type Query_RootUser_Groups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Groups_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Groups_Order_By>>;
  where?: InputMaybe<User_Groups_Bool_Exp>;
};

export type Query_RootUser_Groups_By_PkArgs = {
  group_id: Scalars["bigint"]["input"];
  user_id: Scalars["bigint"]["input"];
};

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  user_id: Scalars["bigint"]["input"];
};

/** columns and relationships of "subcategories" */
export type Subcategories = {
  __typename?: "subcategories";
  /** An array relationship */
  bonuses: Array<Bonuses>;
  /** An aggregate relationship */
  bonuses_aggregate: Bonuses_Aggregate;
  /** An object relationship */
  category: Categories;
  category_id: Scalars["bigint"]["output"];
  /** An array relationship */
  chest_histories: Array<Chest_History>;
  /** An aggregate relationship */
  chest_histories_aggregate: Chest_History_Aggregate;
  /** An array relationship */
  points: Array<Points>;
  /** An aggregate relationship */
  points_aggregate: Points_Aggregate;
  subcategory_id: Scalars["bigint"]["output"];
  subcategory_name: Scalars["String"]["output"];
};

/** columns and relationships of "subcategories" */
export type SubcategoriesBonusesArgs = {
  distinct_on?: InputMaybe<Array<Bonuses_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Bonuses_Order_By>>;
  where?: InputMaybe<Bonuses_Bool_Exp>;
};

/** columns and relationships of "subcategories" */
export type SubcategoriesBonuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bonuses_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Bonuses_Order_By>>;
  where?: InputMaybe<Bonuses_Bool_Exp>;
};

/** columns and relationships of "subcategories" */
export type SubcategoriesChest_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Chest_History_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chest_History_Order_By>>;
  where?: InputMaybe<Chest_History_Bool_Exp>;
};

/** columns and relationships of "subcategories" */
export type SubcategoriesChest_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chest_History_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chest_History_Order_By>>;
  where?: InputMaybe<Chest_History_Bool_Exp>;
};

/** columns and relationships of "subcategories" */
export type SubcategoriesPointsArgs = {
  distinct_on?: InputMaybe<Array<Points_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Points_Order_By>>;
  where?: InputMaybe<Points_Bool_Exp>;
};

/** columns and relationships of "subcategories" */
export type SubcategoriesPoints_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Points_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Points_Order_By>>;
  where?: InputMaybe<Points_Bool_Exp>;
};

/** aggregated selection of "subcategories" */
export type Subcategories_Aggregate = {
  __typename?: "subcategories_aggregate";
  aggregate?: Maybe<Subcategories_Aggregate_Fields>;
  nodes: Array<Subcategories>;
};

export type Subcategories_Aggregate_Bool_Exp = {
  count?: InputMaybe<Subcategories_Aggregate_Bool_Exp_Count>;
};

export type Subcategories_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Subcategories_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Subcategories_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "subcategories" */
export type Subcategories_Aggregate_Fields = {
  __typename?: "subcategories_aggregate_fields";
  avg?: Maybe<Subcategories_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Subcategories_Max_Fields>;
  min?: Maybe<Subcategories_Min_Fields>;
  stddev?: Maybe<Subcategories_Stddev_Fields>;
  stddev_pop?: Maybe<Subcategories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Subcategories_Stddev_Samp_Fields>;
  sum?: Maybe<Subcategories_Sum_Fields>;
  var_pop?: Maybe<Subcategories_Var_Pop_Fields>;
  var_samp?: Maybe<Subcategories_Var_Samp_Fields>;
  variance?: Maybe<Subcategories_Variance_Fields>;
};

/** aggregate fields of "subcategories" */
export type Subcategories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subcategories_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "subcategories" */
export type Subcategories_Aggregate_Order_By = {
  avg?: InputMaybe<Subcategories_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Subcategories_Max_Order_By>;
  min?: InputMaybe<Subcategories_Min_Order_By>;
  stddev?: InputMaybe<Subcategories_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Subcategories_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Subcategories_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Subcategories_Sum_Order_By>;
  var_pop?: InputMaybe<Subcategories_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Subcategories_Var_Samp_Order_By>;
  variance?: InputMaybe<Subcategories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "subcategories" */
export type Subcategories_Arr_Rel_Insert_Input = {
  data: Array<Subcategories_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Subcategories_On_Conflict>;
};

/** aggregate avg on columns */
export type Subcategories_Avg_Fields = {
  __typename?: "subcategories_avg_fields";
  category_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "subcategories" */
export type Subcategories_Avg_Order_By = {
  category_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "subcategories". All fields are combined with a logical 'AND'. */
export type Subcategories_Bool_Exp = {
  _and?: InputMaybe<Array<Subcategories_Bool_Exp>>;
  _not?: InputMaybe<Subcategories_Bool_Exp>;
  _or?: InputMaybe<Array<Subcategories_Bool_Exp>>;
  bonuses?: InputMaybe<Bonuses_Bool_Exp>;
  bonuses_aggregate?: InputMaybe<Bonuses_Aggregate_Bool_Exp>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Bigint_Comparison_Exp>;
  chest_histories?: InputMaybe<Chest_History_Bool_Exp>;
  chest_histories_aggregate?: InputMaybe<Chest_History_Aggregate_Bool_Exp>;
  points?: InputMaybe<Points_Bool_Exp>;
  points_aggregate?: InputMaybe<Points_Aggregate_Bool_Exp>;
  subcategory_id?: InputMaybe<Bigint_Comparison_Exp>;
  subcategory_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "subcategories" */
export enum Subcategories_Constraint {
  /** unique or primary key constraint on columns "subcategory_id" */
  SubcategoriesPkey = "subcategories_pkey",
}

/** input type for incrementing numeric columns in table "subcategories" */
export type Subcategories_Inc_Input = {
  category_id?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategory_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "subcategories" */
export type Subcategories_Insert_Input = {
  bonuses?: InputMaybe<Bonuses_Arr_Rel_Insert_Input>;
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars["bigint"]["input"]>;
  chest_histories?: InputMaybe<Chest_History_Arr_Rel_Insert_Input>;
  points?: InputMaybe<Points_Arr_Rel_Insert_Input>;
  subcategory_id?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategory_name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Subcategories_Max_Fields = {
  __typename?: "subcategories_max_fields";
  category_id?: Maybe<Scalars["bigint"]["output"]>;
  subcategory_id?: Maybe<Scalars["bigint"]["output"]>;
  subcategory_name?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "subcategories" */
export type Subcategories_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  subcategory_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Subcategories_Min_Fields = {
  __typename?: "subcategories_min_fields";
  category_id?: Maybe<Scalars["bigint"]["output"]>;
  subcategory_id?: Maybe<Scalars["bigint"]["output"]>;
  subcategory_name?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "subcategories" */
export type Subcategories_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  subcategory_name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "subcategories" */
export type Subcategories_Mutation_Response = {
  __typename?: "subcategories_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Subcategories>;
};

/** input type for inserting object relation for remote table "subcategories" */
export type Subcategories_Obj_Rel_Insert_Input = {
  data: Subcategories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Subcategories_On_Conflict>;
};

/** on_conflict condition type for table "subcategories" */
export type Subcategories_On_Conflict = {
  constraint: Subcategories_Constraint;
  update_columns?: Array<Subcategories_Update_Column>;
  where?: InputMaybe<Subcategories_Bool_Exp>;
};

/** Ordering options when selecting data from "subcategories". */
export type Subcategories_Order_By = {
  bonuses_aggregate?: InputMaybe<Bonuses_Aggregate_Order_By>;
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  chest_histories_aggregate?: InputMaybe<Chest_History_Aggregate_Order_By>;
  points_aggregate?: InputMaybe<Points_Aggregate_Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  subcategory_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: subcategories */
export type Subcategories_Pk_Columns_Input = {
  subcategory_id: Scalars["bigint"]["input"];
};

/** select columns of table "subcategories" */
export enum Subcategories_Select_Column {
  /** column name */
  CategoryId = "category_id",
  /** column name */
  SubcategoryId = "subcategory_id",
  /** column name */
  SubcategoryName = "subcategory_name",
}

/** input type for updating data in table "subcategories" */
export type Subcategories_Set_Input = {
  category_id?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategory_id?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategory_name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Subcategories_Stddev_Fields = {
  __typename?: "subcategories_stddev_fields";
  category_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "subcategories" */
export type Subcategories_Stddev_Order_By = {
  category_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Subcategories_Stddev_Pop_Fields = {
  __typename?: "subcategories_stddev_pop_fields";
  category_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "subcategories" */
export type Subcategories_Stddev_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Subcategories_Stddev_Samp_Fields = {
  __typename?: "subcategories_stddev_samp_fields";
  category_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "subcategories" */
export type Subcategories_Stddev_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "subcategories" */
export type Subcategories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Subcategories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Subcategories_Stream_Cursor_Value_Input = {
  category_id?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategory_id?: InputMaybe<Scalars["bigint"]["input"]>;
  subcategory_name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Subcategories_Sum_Fields = {
  __typename?: "subcategories_sum_fields";
  category_id?: Maybe<Scalars["bigint"]["output"]>;
  subcategory_id?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by sum() on columns of table "subcategories" */
export type Subcategories_Sum_Order_By = {
  category_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
};

/** update columns of table "subcategories" */
export enum Subcategories_Update_Column {
  /** column name */
  CategoryId = "category_id",
  /** column name */
  SubcategoryId = "subcategory_id",
  /** column name */
  SubcategoryName = "subcategory_name",
}

export type Subcategories_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Subcategories_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Subcategories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Subcategories_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Subcategories_Var_Pop_Fields = {
  __typename?: "subcategories_var_pop_fields";
  category_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "subcategories" */
export type Subcategories_Var_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Subcategories_Var_Samp_Fields = {
  __typename?: "subcategories_var_samp_fields";
  category_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "subcategories" */
export type Subcategories_Var_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Subcategories_Variance_Fields = {
  __typename?: "subcategories_variance_fields";
  category_id?: Maybe<Scalars["Float"]["output"]>;
  subcategory_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "subcategories" */
export type Subcategories_Variance_Order_By = {
  category_id?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** An array relationship */
  bonuses: Array<Bonuses>;
  /** An aggregate relationship */
  bonuses_aggregate: Bonuses_Aggregate;
  /** fetch data from the table: "bonuses" using primary key columns */
  bonuses_by_pk?: Maybe<Bonuses>;
  /** fetch data from the table in a streaming manner: "bonuses" */
  bonuses_stream: Array<Bonuses>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table in a streaming manner: "categories" */
  categories_stream: Array<Categories>;
  /** fetch data from the table: "chest_award" */
  chest_award: Array<Chest_Award>;
  /** fetch aggregated fields from the table: "chest_award" */
  chest_award_aggregate: Chest_Award_Aggregate;
  /** fetch data from the table: "chest_award" using primary key columns */
  chest_award_by_pk?: Maybe<Chest_Award>;
  /** fetch data from the table in a streaming manner: "chest_award" */
  chest_award_stream: Array<Chest_Award>;
  /** fetch data from the table: "chest_history" */
  chest_history: Array<Chest_History>;
  /** fetch aggregated fields from the table: "chest_history" */
  chest_history_aggregate: Chest_History_Aggregate;
  /** fetch data from the table: "chest_history" using primary key columns */
  chest_history_by_pk?: Maybe<Chest_History>;
  /** fetch data from the table in a streaming manner: "chest_history" */
  chest_history_stream: Array<Chest_History>;
  /** fetch data from the table: "chests" */
  chests: Array<Chests>;
  /** fetch aggregated fields from the table: "chests" */
  chests_aggregate: Chests_Aggregate;
  /** fetch data from the table: "chests" using primary key columns */
  chests_by_pk?: Maybe<Chests>;
  /** fetch data from the table in a streaming manner: "chests" */
  chests_stream: Array<Chests>;
  /** fetch data from the table: "flyway_schema_history" */
  flyway_schema_history: Array<Flyway_Schema_History>;
  /** fetch aggregated fields from the table: "flyway_schema_history" */
  flyway_schema_history_aggregate: Flyway_Schema_History_Aggregate;
  /** fetch data from the table: "flyway_schema_history" using primary key columns */
  flyway_schema_history_by_pk?: Maybe<Flyway_Schema_History>;
  /** fetch data from the table in a streaming manner: "flyway_schema_history" */
  flyway_schema_history_stream: Array<Flyway_Schema_History>;
  /** fetch data from the table: "groups" */
  groups: Array<Groups>;
  /** fetch aggregated fields from the table: "groups" */
  groups_aggregate: Groups_Aggregate;
  /** fetch data from the table: "groups" using primary key columns */
  groups_by_pk?: Maybe<Groups>;
  /** fetch data from the table in a streaming manner: "groups" */
  groups_stream: Array<Groups>;
  /** fetch data from the table: "levels" */
  levels: Array<Levels>;
  /** fetch aggregated fields from the table: "levels" */
  levels_aggregate: Levels_Aggregate;
  /** fetch data from the table: "levels" using primary key columns */
  levels_by_pk?: Maybe<Levels>;
  /** fetch data from the table in a streaming manner: "levels" */
  levels_stream: Array<Levels>;
  /** An array relationship */
  points: Array<Points>;
  /** An aggregate relationship */
  points_aggregate: Points_Aggregate;
  /** fetch data from the table: "points" using primary key columns */
  points_by_pk?: Maybe<Points>;
  /** fetch data from the table in a streaming manner: "points" */
  points_stream: Array<Points>;
  /** An array relationship */
  subcategories: Array<Subcategories>;
  /** An aggregate relationship */
  subcategories_aggregate: Subcategories_Aggregate;
  /** fetch data from the table: "subcategories" using primary key columns */
  subcategories_by_pk?: Maybe<Subcategories>;
  /** fetch data from the table in a streaming manner: "subcategories" */
  subcategories_stream: Array<Subcategories>;
  /** An array relationship */
  user_groups: Array<User_Groups>;
  /** An aggregate relationship */
  user_groups_aggregate: User_Groups_Aggregate;
  /** fetch data from the table: "user_groups" using primary key columns */
  user_groups_by_pk?: Maybe<User_Groups>;
  /** fetch data from the table in a streaming manner: "user_groups" */
  user_groups_stream: Array<User_Groups>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};

export type Subscription_RootBonusesArgs = {
  distinct_on?: InputMaybe<Array<Bonuses_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Bonuses_Order_By>>;
  where?: InputMaybe<Bonuses_Bool_Exp>;
};

export type Subscription_RootBonuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bonuses_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Bonuses_Order_By>>;
  where?: InputMaybe<Bonuses_Bool_Exp>;
};

export type Subscription_RootBonuses_By_PkArgs = {
  bonus_id: Scalars["bigint"]["input"];
};

export type Subscription_RootBonuses_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Bonuses_Stream_Cursor_Input>>;
  where?: InputMaybe<Bonuses_Bool_Exp>;
};

export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

export type Subscription_RootCategories_By_PkArgs = {
  category_id: Scalars["bigint"]["input"];
};

export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

export type Subscription_RootChest_AwardArgs = {
  distinct_on?: InputMaybe<Array<Chest_Award_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chest_Award_Order_By>>;
  where?: InputMaybe<Chest_Award_Bool_Exp>;
};

export type Subscription_RootChest_Award_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chest_Award_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chest_Award_Order_By>>;
  where?: InputMaybe<Chest_Award_Bool_Exp>;
};

export type Subscription_RootChest_Award_By_PkArgs = {
  award_id: Scalars["bigint"]["input"];
};

export type Subscription_RootChest_Award_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Chest_Award_Stream_Cursor_Input>>;
  where?: InputMaybe<Chest_Award_Bool_Exp>;
};

export type Subscription_RootChest_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Chest_History_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chest_History_Order_By>>;
  where?: InputMaybe<Chest_History_Bool_Exp>;
};

export type Subscription_RootChest_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chest_History_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chest_History_Order_By>>;
  where?: InputMaybe<Chest_History_Bool_Exp>;
};

export type Subscription_RootChest_History_By_PkArgs = {
  chest_history_id: Scalars["bigint"]["input"];
};

export type Subscription_RootChest_History_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Chest_History_Stream_Cursor_Input>>;
  where?: InputMaybe<Chest_History_Bool_Exp>;
};

export type Subscription_RootChestsArgs = {
  distinct_on?: InputMaybe<Array<Chests_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chests_Order_By>>;
  where?: InputMaybe<Chests_Bool_Exp>;
};

export type Subscription_RootChests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chests_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chests_Order_By>>;
  where?: InputMaybe<Chests_Bool_Exp>;
};

export type Subscription_RootChests_By_PkArgs = {
  chest_id: Scalars["bigint"]["input"];
};

export type Subscription_RootChests_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Chests_Stream_Cursor_Input>>;
  where?: InputMaybe<Chests_Bool_Exp>;
};

export type Subscription_RootFlyway_Schema_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Flyway_Schema_History_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Flyway_Schema_History_Order_By>>;
  where?: InputMaybe<Flyway_Schema_History_Bool_Exp>;
};

export type Subscription_RootFlyway_Schema_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flyway_Schema_History_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Flyway_Schema_History_Order_By>>;
  where?: InputMaybe<Flyway_Schema_History_Bool_Exp>;
};

export type Subscription_RootFlyway_Schema_History_By_PkArgs = {
  installed_rank: Scalars["Int"]["input"];
};

export type Subscription_RootFlyway_Schema_History_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Flyway_Schema_History_Stream_Cursor_Input>>;
  where?: InputMaybe<Flyway_Schema_History_Bool_Exp>;
};

export type Subscription_RootGroupsArgs = {
  distinct_on?: InputMaybe<Array<Groups_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Groups_Order_By>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};

export type Subscription_RootGroups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Groups_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Groups_Order_By>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};

export type Subscription_RootGroups_By_PkArgs = {
  groups_id: Scalars["bigint"]["input"];
};

export type Subscription_RootGroups_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Groups_Stream_Cursor_Input>>;
  where?: InputMaybe<Groups_Bool_Exp>;
};

export type Subscription_RootLevelsArgs = {
  distinct_on?: InputMaybe<Array<Levels_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Levels_Order_By>>;
  where?: InputMaybe<Levels_Bool_Exp>;
};

export type Subscription_RootLevels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Levels_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Levels_Order_By>>;
  where?: InputMaybe<Levels_Bool_Exp>;
};

export type Subscription_RootLevels_By_PkArgs = {
  level_id: Scalars["bigint"]["input"];
};

export type Subscription_RootLevels_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Levels_Stream_Cursor_Input>>;
  where?: InputMaybe<Levels_Bool_Exp>;
};

export type Subscription_RootPointsArgs = {
  distinct_on?: InputMaybe<Array<Points_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Points_Order_By>>;
  where?: InputMaybe<Points_Bool_Exp>;
};

export type Subscription_RootPoints_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Points_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Points_Order_By>>;
  where?: InputMaybe<Points_Bool_Exp>;
};

export type Subscription_RootPoints_By_PkArgs = {
  points_id: Scalars["bigint"]["input"];
};

export type Subscription_RootPoints_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Points_Stream_Cursor_Input>>;
  where?: InputMaybe<Points_Bool_Exp>;
};

export type Subscription_RootSubcategoriesArgs = {
  distinct_on?: InputMaybe<Array<Subcategories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Subcategories_Order_By>>;
  where?: InputMaybe<Subcategories_Bool_Exp>;
};

export type Subscription_RootSubcategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subcategories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Subcategories_Order_By>>;
  where?: InputMaybe<Subcategories_Bool_Exp>;
};

export type Subscription_RootSubcategories_By_PkArgs = {
  subcategory_id: Scalars["bigint"]["input"];
};

export type Subscription_RootSubcategories_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Subcategories_Stream_Cursor_Input>>;
  where?: InputMaybe<Subcategories_Bool_Exp>;
};

export type Subscription_RootUser_GroupsArgs = {
  distinct_on?: InputMaybe<Array<User_Groups_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Groups_Order_By>>;
  where?: InputMaybe<User_Groups_Bool_Exp>;
};

export type Subscription_RootUser_Groups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Groups_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Groups_Order_By>>;
  where?: InputMaybe<User_Groups_Bool_Exp>;
};

export type Subscription_RootUser_Groups_By_PkArgs = {
  group_id: Scalars["bigint"]["input"];
  user_id: Scalars["bigint"]["input"];
};

export type Subscription_RootUser_Groups_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<User_Groups_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Groups_Bool_Exp>;
};

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  user_id: Scalars["bigint"]["input"];
};

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["timestamp"]["input"]>;
  _gt?: InputMaybe<Scalars["timestamp"]["input"]>;
  _gte?: InputMaybe<Scalars["timestamp"]["input"]>;
  _in?: InputMaybe<Array<Scalars["timestamp"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["timestamp"]["input"]>;
  _lte?: InputMaybe<Scalars["timestamp"]["input"]>;
  _neq?: InputMaybe<Scalars["timestamp"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["timestamp"]["input"]>>;
};

/** columns and relationships of "user_groups" */
export type User_Groups = {
  __typename?: "user_groups";
  /** An object relationship */
  group: Groups;
  group_id: Scalars["bigint"]["output"];
  /** An object relationship */
  user: Users;
  user_id: Scalars["bigint"]["output"];
};

/** aggregated selection of "user_groups" */
export type User_Groups_Aggregate = {
  __typename?: "user_groups_aggregate";
  aggregate?: Maybe<User_Groups_Aggregate_Fields>;
  nodes: Array<User_Groups>;
};

export type User_Groups_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Groups_Aggregate_Bool_Exp_Count>;
};

export type User_Groups_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Groups_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<User_Groups_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_groups" */
export type User_Groups_Aggregate_Fields = {
  __typename?: "user_groups_aggregate_fields";
  avg?: Maybe<User_Groups_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<User_Groups_Max_Fields>;
  min?: Maybe<User_Groups_Min_Fields>;
  stddev?: Maybe<User_Groups_Stddev_Fields>;
  stddev_pop?: Maybe<User_Groups_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Groups_Stddev_Samp_Fields>;
  sum?: Maybe<User_Groups_Sum_Fields>;
  var_pop?: Maybe<User_Groups_Var_Pop_Fields>;
  var_samp?: Maybe<User_Groups_Var_Samp_Fields>;
  variance?: Maybe<User_Groups_Variance_Fields>;
};

/** aggregate fields of "user_groups" */
export type User_Groups_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Groups_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "user_groups" */
export type User_Groups_Aggregate_Order_By = {
  avg?: InputMaybe<User_Groups_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Groups_Max_Order_By>;
  min?: InputMaybe<User_Groups_Min_Order_By>;
  stddev?: InputMaybe<User_Groups_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Groups_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Groups_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Groups_Sum_Order_By>;
  var_pop?: InputMaybe<User_Groups_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Groups_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Groups_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_groups" */
export type User_Groups_Arr_Rel_Insert_Input = {
  data: Array<User_Groups_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Groups_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Groups_Avg_Fields = {
  __typename?: "user_groups_avg_fields";
  group_id?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "user_groups" */
export type User_Groups_Avg_Order_By = {
  group_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_groups". All fields are combined with a logical 'AND'. */
export type User_Groups_Bool_Exp = {
  _and?: InputMaybe<Array<User_Groups_Bool_Exp>>;
  _not?: InputMaybe<User_Groups_Bool_Exp>;
  _or?: InputMaybe<Array<User_Groups_Bool_Exp>>;
  group?: InputMaybe<Groups_Bool_Exp>;
  group_id?: InputMaybe<Bigint_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_groups" */
export enum User_Groups_Constraint {
  /** unique or primary key constraint on columns "user_id", "group_id" */
  UserGroupsPkey = "user_groups_pkey",
}

/** input type for incrementing numeric columns in table "user_groups" */
export type User_Groups_Inc_Input = {
  group_id?: InputMaybe<Scalars["bigint"]["input"]>;
  user_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "user_groups" */
export type User_Groups_Insert_Input = {
  group?: InputMaybe<Groups_Obj_Rel_Insert_Input>;
  group_id?: InputMaybe<Scalars["bigint"]["input"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate max on columns */
export type User_Groups_Max_Fields = {
  __typename?: "user_groups_max_fields";
  group_id?: Maybe<Scalars["bigint"]["output"]>;
  user_id?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by max() on columns of table "user_groups" */
export type User_Groups_Max_Order_By = {
  group_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Groups_Min_Fields = {
  __typename?: "user_groups_min_fields";
  group_id?: Maybe<Scalars["bigint"]["output"]>;
  user_id?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by min() on columns of table "user_groups" */
export type User_Groups_Min_Order_By = {
  group_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_groups" */
export type User_Groups_Mutation_Response = {
  __typename?: "user_groups_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<User_Groups>;
};

/** on_conflict condition type for table "user_groups" */
export type User_Groups_On_Conflict = {
  constraint: User_Groups_Constraint;
  update_columns?: Array<User_Groups_Update_Column>;
  where?: InputMaybe<User_Groups_Bool_Exp>;
};

/** Ordering options when selecting data from "user_groups". */
export type User_Groups_Order_By = {
  group?: InputMaybe<Groups_Order_By>;
  group_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_groups */
export type User_Groups_Pk_Columns_Input = {
  group_id: Scalars["bigint"]["input"];
  user_id: Scalars["bigint"]["input"];
};

/** select columns of table "user_groups" */
export enum User_Groups_Select_Column {
  /** column name */
  GroupId = "group_id",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "user_groups" */
export type User_Groups_Set_Input = {
  group_id?: InputMaybe<Scalars["bigint"]["input"]>;
  user_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate stddev on columns */
export type User_Groups_Stddev_Fields = {
  __typename?: "user_groups_stddev_fields";
  group_id?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "user_groups" */
export type User_Groups_Stddev_Order_By = {
  group_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Groups_Stddev_Pop_Fields = {
  __typename?: "user_groups_stddev_pop_fields";
  group_id?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "user_groups" */
export type User_Groups_Stddev_Pop_Order_By = {
  group_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Groups_Stddev_Samp_Fields = {
  __typename?: "user_groups_stddev_samp_fields";
  group_id?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "user_groups" */
export type User_Groups_Stddev_Samp_Order_By = {
  group_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_groups" */
export type User_Groups_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Groups_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Groups_Stream_Cursor_Value_Input = {
  group_id?: InputMaybe<Scalars["bigint"]["input"]>;
  user_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate sum on columns */
export type User_Groups_Sum_Fields = {
  __typename?: "user_groups_sum_fields";
  group_id?: Maybe<Scalars["bigint"]["output"]>;
  user_id?: Maybe<Scalars["bigint"]["output"]>;
};

/** order by sum() on columns of table "user_groups" */
export type User_Groups_Sum_Order_By = {
  group_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "user_groups" */
export enum User_Groups_Update_Column {
  /** column name */
  GroupId = "group_id",
  /** column name */
  UserId = "user_id",
}

export type User_Groups_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Groups_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Groups_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Groups_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Groups_Var_Pop_Fields = {
  __typename?: "user_groups_var_pop_fields";
  group_id?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "user_groups" */
export type User_Groups_Var_Pop_Order_By = {
  group_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Groups_Var_Samp_Fields = {
  __typename?: "user_groups_var_samp_fields";
  group_id?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "user_groups" */
export type User_Groups_Var_Samp_Order_By = {
  group_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Groups_Variance_Fields = {
  __typename?: "user_groups_variance_fields";
  group_id?: Maybe<Scalars["Float"]["output"]>;
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "user_groups" */
export type User_Groups_Variance_Order_By = {
  group_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: "users";
  /** An array relationship */
  chest_histories: Array<Chest_History>;
  /** An aggregate relationship */
  chest_histories_aggregate: Chest_History_Aggregate;
  nick: Scalars["String"]["output"];
  /** An array relationship */
  points: Array<Points>;
  /** An array relationship */
  pointsByTeacherId: Array<Points>;
  /** An aggregate relationship */
  pointsByTeacherId_aggregate: Points_Aggregate;
  /** An aggregate relationship */
  points_aggregate: Points_Aggregate;
  role: Scalars["String"]["output"];
  /** An array relationship */
  user_groups: Array<User_Groups>;
  /** An aggregate relationship */
  user_groups_aggregate: User_Groups_Aggregate;
  user_id: Scalars["bigint"]["output"];
};

/** columns and relationships of "users" */
export type UsersChest_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Chest_History_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chest_History_Order_By>>;
  where?: InputMaybe<Chest_History_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersChest_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chest_History_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Chest_History_Order_By>>;
  where?: InputMaybe<Chest_History_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPointsArgs = {
  distinct_on?: InputMaybe<Array<Points_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Points_Order_By>>;
  where?: InputMaybe<Points_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPointsByTeacherIdArgs = {
  distinct_on?: InputMaybe<Array<Points_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Points_Order_By>>;
  where?: InputMaybe<Points_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPointsByTeacherId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Points_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Points_Order_By>>;
  where?: InputMaybe<Points_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPoints_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Points_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Points_Order_By>>;
  where?: InputMaybe<Points_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersUser_GroupsArgs = {
  distinct_on?: InputMaybe<Array<User_Groups_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Groups_Order_By>>;
  where?: InputMaybe<User_Groups_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersUser_Groups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Groups_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Groups_Order_By>>;
  where?: InputMaybe<User_Groups_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: "users_aggregate";
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: "users_aggregate_fields";
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: "users_avg_fields";
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  chest_histories?: InputMaybe<Chest_History_Bool_Exp>;
  chest_histories_aggregate?: InputMaybe<Chest_History_Aggregate_Bool_Exp>;
  nick?: InputMaybe<String_Comparison_Exp>;
  points?: InputMaybe<Points_Bool_Exp>;
  pointsByTeacherId?: InputMaybe<Points_Bool_Exp>;
  pointsByTeacherId_aggregate?: InputMaybe<Points_Aggregate_Bool_Exp>;
  points_aggregate?: InputMaybe<Points_Aggregate_Bool_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  user_groups?: InputMaybe<User_Groups_Bool_Exp>;
  user_groups_aggregate?: InputMaybe<User_Groups_Aggregate_Bool_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "user_id" */
  UsersPkey = "users_pkey",
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  user_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  chest_histories?: InputMaybe<Chest_History_Arr_Rel_Insert_Input>;
  nick?: InputMaybe<Scalars["String"]["input"]>;
  points?: InputMaybe<Points_Arr_Rel_Insert_Input>;
  pointsByTeacherId?: InputMaybe<Points_Arr_Rel_Insert_Input>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  user_groups?: InputMaybe<User_Groups_Arr_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: "users_max_fields";
  nick?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  user_id?: Maybe<Scalars["bigint"]["output"]>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: "users_min_fields";
  nick?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  user_id?: Maybe<Scalars["bigint"]["output"]>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: "users_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  chest_histories_aggregate?: InputMaybe<Chest_History_Aggregate_Order_By>;
  nick?: InputMaybe<Order_By>;
  pointsByTeacherId_aggregate?: InputMaybe<Points_Aggregate_Order_By>;
  points_aggregate?: InputMaybe<Points_Aggregate_Order_By>;
  role?: InputMaybe<Order_By>;
  user_groups_aggregate?: InputMaybe<User_Groups_Aggregate_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  user_id: Scalars["bigint"]["input"];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Nick = "nick",
  /** column name */
  Role = "role",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  nick?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  user_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: "users_stddev_fields";
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: "users_stddev_pop_fields";
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: "users_stddev_samp_fields";
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  nick?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  user_id?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: "users_sum_fields";
  user_id?: Maybe<Scalars["bigint"]["output"]>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Nick = "nick",
  /** column name */
  Role = "role",
  /** column name */
  UserId = "user_id",
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: "users_var_pop_fields";
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: "users_var_samp_fields";
  user_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: "users_variance_fields";
  user_id?: Maybe<Scalars["Float"]["output"]>;
};
