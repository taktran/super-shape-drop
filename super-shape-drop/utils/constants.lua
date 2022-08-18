local CONSTANTS = {}

CONSTANTS.BLOCK_TYPES = {
	hash("green_block"),
	hash("blue_block"),
	hash("cream_block"),
	hash("dirt_block"),
	hash("exclamation_block"),
	hash("grass_block"),
	hash("pink_block"),
	hash("power_block"),
	hash("snow_block"),
	hash("yellow_block")
}

CONSTANTS.SHAPE_TYPES = {
	"arrow",
	"circle",
	"cross",
	"diamond",
	"fork",
	"hexagon",
	"rightTriangle",
	"semiCircle",
	"spike",
	"square",
	"trapezoid",
	"triangle",
}

CONSTANTS.SHAPE_COLORS = {
	"darkblue",
	"lightblue",
	"orange",
	"red",
	"yellow",
}

CONSTANTS.SHAPES = {}

for _, type in pairs(CONSTANTS.SHAPE_TYPES) do
	for _, color in pairs(CONSTANTS.SHAPE_COLORS) do
		local key = type.."-"..color
		local hashKey = hash(key)
		table.insert(CONSTANTS.SHAPES, {
			type = type,
			color = color,
			key = key,
			hashKey = hashKey
		})
	end
end
	
return CONSTANTS