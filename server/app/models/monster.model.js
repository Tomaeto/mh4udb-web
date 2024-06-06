
module.exports = mongoose => {
    const Monster = mongoose.model("Monster",
        mongoose.Schema(
            {
                monster: {
                    id: Number,
                    local_name: String
                }
            }
        )
    );
    return Monster;
}