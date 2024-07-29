-- Function to set updated_at timestamp
CREATE FUNCTION trigger_set_timestamp()
    RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for bonuses table
CREATE TRIGGER set_timestamp_bonuses
    BEFORE UPDATE ON bonuses
    FOR EACH ROW
EXECUTE FUNCTION trigger_set_timestamp();

-- Trigger for points table
CREATE TRIGGER set_timestamp_points
    BEFORE UPDATE ON points
    FOR EACH ROW
EXECUTE FUNCTION trigger_set_timestamp();

-- Trigger for chest_history table
CREATE TRIGGER set_timestamp_chest_history
    BEFORE UPDATE ON chest_history
    FOR EACH ROW
EXECUTE FUNCTION trigger_set_timestamp();