export enum MutationTypes {
	SET_CONFIGURATION = 'setConfiguration',
	SET_MESSAGES = 'setMessages',
	SET_WORLDS = 'setWorlds',
	SET_COMPONENTS = 'setComponents',
	SET_MARKER_SETS = 'setMarkerSets',
	ADD_WORLD = 'addWorld',
	SET_WORLD_STATE = 'setWorldState',
	SET_UPDATE_TIMESTAMP = 'setUpdateTimestamp',
	ADD_MARKER_SET_UPDATES = 'addMarkerSetUpdates',
	ADD_TILE_UPDATES = 'addTileUpdates',
	POP_MARKER_UPDATES = 'popMarkerUpdates',
	POP_AREA_UPDATES = 'popAreaUpdates',
	POP_CIRCLE_UPDATES = 'popCircleUpdates',
	POP_LINE_UPDATES = 'popLineUpdates',
	POP_TILE_UPDATES = 'popTileUpdates',
	INCREMENT_REQUEST_ID = 'incrementRequestId',
	SET_PLAYERS = 'setPlayers',
	SET_PLAYERS_ASYNC = 'setPlayersAsync',
	SYNC_PLAYERS = 'syncPlayers',
	SET_CURRENT_MAP = 'setCurrentMap',
	SET_CURRENT_PROJECTION = 'setCurrentProjection',
	SET_CURRENT_LOCATION = 'setCurrentLocation',
	SET_CURRENT_ZOOM = 'setCurrentZoom',
	SET_PARSED_URL = 'setParsedUrl',
	FOLLOW_PLAYER = 'followPlayer',
	CLEAR_FOLLOW = 'clearFollow',
}