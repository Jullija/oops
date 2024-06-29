CREATE FUNCTION users_fullName(users_row users)
    RETURNS TEXT AS $$
SELECT users_row.first_name || ' ' || users_row.second_name
$$ LANGUAGE sql STABLE;